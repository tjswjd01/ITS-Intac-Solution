"use client";

import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export type GlobeConnection = {
  from: [number, number, number];
  to: [number, number, number];
};

export type GlobeMarker = {
  unit: [number, number, number];
  label?: string;
};

const US_UNIT: [number, number, number] = [-0.855, 0.075, -0.513];
const KOREA_UNIT: [number, number, number] = [0.895, 0.075, -0.439];

export const KOREA_US_MARKERS: GlobeMarker[] = [
  { unit: US_UNIT, label: "US" },
  { unit: KOREA_UNIT, label: "KOREA" },
];

export const KOREA_US_CONNECTIONS: GlobeConnection[] = [
  { from: US_UNIT, to: KOREA_UNIT },
];

const ITS_NAVY = "rgba(10, 58, 134, 1)";
const ARC_LIGHT_BLUE = "rgba(125, 181, 255, 0.55)";
const INITIAL_ROT_X = -0.02;
const INITIAL_ROT_Y = -0.742;
const ROTATION_SWING = 0.065;
const ROTATION_SPEED = 0.35;

type ConnectionGlobeProps = {
  className?: string;
  dotColor?: string;
  arcColor?: string;
  markerColor?: string;
  autoRotateSpeed?: number;
  connections?: GlobeConnection[];
  markers?: GlobeMarker[];
};

function rotateY(
  x: number,
  y: number,
  z: number,
  angle: number,
): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return [x * cos + z * sin, y, -x * sin + z * cos];
}

function rotateX(
  x: number,
  y: number,
  z: number,
  angle: number,
): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return [x, y * cos - z * sin, y * sin + z * cos];
}

function rotatePoint(
  x: number,
  y: number,
  z: number,
  rx: number,
  ry: number,
): [number, number, number] {
  [x, y, z] = rotateY(x, y, z, ry);
  [x, y, z] = rotateX(x, y, z, rx);

  return [x, y, z];
}

function project(
  x: number,
  y: number,
  z: number,
  cx: number,
  cy: number,
  fov: number,
): [number, number, number] {
  const scale = fov / (fov + z);

  return [x * scale + cx, y * scale + cy, z];
}

function unitToXYZ(
  unit: [number, number, number],
  radius: number,
): [number, number, number] {
  return unit.map((value) => value * radius) as [number, number, number];
}

function drawEdgeLight(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
) {
  const glowX = cx + radius * 0.9;
  const glowY = cy;

  const bloom = ctx.createRadialGradient(
    glowX,
    glowY,
    radius * 0.02,
    glowX,
    glowY,
    radius * 0.62,
  );
  bloom.addColorStop(0, "rgba(125, 181, 255, 0.14)");
  bloom.addColorStop(0.45, "rgba(10, 58, 134, 0.05)");
  bloom.addColorStop(1, "rgba(10, 58, 134, 0)");

  ctx.save();
  ctx.fillStyle = bloom;
  ctx.beginPath();
  ctx.arc(glowX, glowY, radius * 0.62, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export default function ConnectionGlobe({
  className,
  dotColor = "rgba(10, 58, 134, ALPHA)",
  arcColor = ARC_LIGHT_BLUE,
  markerColor = ITS_NAVY,
  autoRotateSpeed = 1,
  connections = KOREA_US_CONNECTIONS,
  markers = KOREA_US_MARKERS,
}: ConnectionGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotYRef = useRef(INITIAL_ROT_Y);
  const rotXRef = useRef(INITIAL_ROT_X);
  const dragRef = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    startRotY: number;
    startRotX: number;
  }>({ active: false, startX: 0, startY: 0, startRotY: 0, startRotX: 0 });
  const animRef = useRef(0);
  const timeRef = useRef(0);
  const dotsRef = useRef<[number, number, number][]>([]);

  useEffect(() => {
    const dots: [number, number, number][] = [];
    const numDots = 1200;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numDots; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numDots);
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.cos(phi);
      const z = Math.sin(theta) * Math.sin(phi);
      dots.push([x, y, z]);
    }

    dotsRef.current = dots;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.38;
    const fov = 600;

    timeRef.current += 0.015;
    const time = timeRef.current;

    ctx.clearRect(0, 0, w, h);

    let rx = rotXRef.current;
    let ry = rotYRef.current;

    if (!dragRef.current.active && autoRotateSpeed > 0) {
      ry = INITIAL_ROT_Y + Math.sin(time * ROTATION_SPEED * autoRotateSpeed) * ROTATION_SWING;
      rx = INITIAL_ROT_X;
      rotYRef.current = ry;
      rotXRef.current = rx;
    }
    const dots = dotsRef.current;

    for (let i = 0; i < dots.length; i++) {
      let [x, y, z] = dots[i];
      x *= radius;
      y *= radius;
      z *= radius;

      [x, y, z] = rotatePoint(x, y, z, rx, ry);

      if (z > 0) continue;

      const [sx, sy] = project(x, y, z, cx, cy, fov);
      const depthAlpha = Math.max(0.12, 1 - (z + radius) / (2 * radius));
      const dotSize = 1 + depthAlpha * 0.8;

      ctx.beginPath();
      ctx.arc(sx, sy, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = dotColor.replace("ALPHA", depthAlpha.toFixed(2));
      ctx.fill();
    }

    drawEdgeLight(ctx, cx, cy, radius);

    for (const conn of connections) {
      let [x1, y1, z1] = unitToXYZ(conn.from, radius);
      let [x2, y2, z2] = unitToXYZ(conn.to, radius);

      [x1, y1, z1] = rotatePoint(x1, y1, z1, rx, ry);
      [x2, y2, z2] = rotatePoint(x2, y2, z2, rx, ry);

      if (z1 > radius * 0.35 || z2 > radius * 0.35) continue;

      const [sx1, sy1] = project(x1, y1, z1, cx, cy, fov);
      const [sx2, sy2] = project(x2, y2, z2, cx, cy, fov);

      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;
      const midZ = (z1 + z2) / 2;
      const midLen = Math.sqrt(midX * midX + midY * midY + midZ * midZ);
      const arcHeight = radius * 1.05;
      const elevX = (midX / midLen) * arcHeight;
      const elevY = (midY / midLen) * arcHeight;
      const elevZ = (midZ / midLen) * arcHeight;
      const [scx, scy] = project(elevX, elevY, elevZ, cx, cy, fov);

      ctx.beginPath();
      ctx.moveTo(sx1, sy1);
      ctx.quadraticCurveTo(scx, scy, sx2, sy2);
      ctx.strokeStyle = arcColor;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      const t = (Math.sin(time * 1.2) + 1) / 2;
      const tx = (1 - t) * (1 - t) * sx1 + 2 * (1 - t) * t * scx + t * t * sx2;
      const ty = (1 - t) * (1 - t) * sy1 + 2 * (1 - t) * t * scy + t * t * sy2;

      ctx.beginPath();
      ctx.arc(tx, ty, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(125, 181, 255, 0.9)";
      ctx.fill();
    }

    for (const marker of markers) {
      let [x, y, z] = unitToXYZ(marker.unit, radius);
      [x, y, z] = rotatePoint(x, y, z, rx, ry);

      if (z > radius * 0.35) continue;

      const [sx, sy] = project(x, y, z, cx, cy, fov);
      const pulse = Math.sin(time * 2 + marker.unit[0]) * 0.5 + 0.5;

      ctx.beginPath();
      ctx.arc(sx, sy, 4 + pulse * 4, 0, Math.PI * 2);
      ctx.strokeStyle = markerColor.replace("1)", `${0.16 + pulse * 0.14})`);
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(sx, sy, 3, 0, Math.PI * 2);
      ctx.fillStyle = markerColor;
      ctx.fill();

      if (marker.label) {
        ctx.font = "600 10px var(--font-inter), system-ui, sans-serif";
        ctx.fillStyle = markerColor.replace("1)", "0.82)");
        const labelWidth = ctx.measureText(marker.label).width;
        const labelOnLeft = sx > cx;
        const labelX = labelOnLeft ? sx - labelWidth - 10 : sx + 10;
        const labelY = sy - 6;

        ctx.fillText(marker.label, labelX, labelY);
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, [arcColor, autoRotateSpeed, connections, dotColor, markerColor, markers]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  const onPointerDown = useCallback((event: React.PointerEvent) => {
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      startRotY: rotYRef.current,
      startRotX: rotXRef.current,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const onPointerMove = useCallback((event: React.PointerEvent) => {
    if (!dragRef.current.active) return;

    const dx = event.clientX - dragRef.current.startX;
    const dy = event.clientY - dragRef.current.startY;

    rotYRef.current = dragRef.current.startRotY + dx * 0.005;
    rotXRef.current = Math.max(
      -1,
      Math.min(1, dragRef.current.startRotX + dy * 0.005),
    );
  }, []);

  const onPointerUp = useCallback(() => {
    dragRef.current.active = false;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "h-full w-full cursor-grab active:cursor-grabbing",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    />
  );
}
