"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";

// Slightly spread DFW markers so labels stay readable on the globe surface.
const GLOBE_LOCATIONS = [
  {
    id: "hq",
    location: [33.05, -96.72] as [number, number],
    size: 0.055,
    label: "HQ",
    isHq: true,
  },
  {
    id: "plano",
    location: [33.14, -96.56] as [number, number],
    size: 0.032,
    label: "Plano",
  },
  {
    id: "coppell",
    location: [32.98, -97.12] as [number, number],
    size: 0.034,
    label: "Coppell",
  },
  {
    id: "irving",
    location: [32.72, -96.86] as [number, number],
    size: 0.032,
    label: "Irving",
  },
  {
    id: "bellevue",
    location: [47.6101, -122.2015] as [number, number],
    size: 0.034,
    label: "Bellevue",
  },
];

// Face the continental U.S. toward the camera (Texas + Washington visible).
const US_BASE_PHI = -1.38;
const US_BASE_THETA = 0.28;
const ROTATION_SPEED = 0.003;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: US_BASE_PHI,
  theta: US_BASE_THETA,
  dark: 0,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [1, 1, 1],
  markerColor: [10 / 255, 58 / 255, 134 / 255],
  glowColor: [1, 1, 1],
  markerElevation: 0,
  scale: 0.82,
  markers: GLOBE_LOCATIONS.map(({ id, location, size }) => ({
    id,
    location,
    size,
  })),
};

type GlobeProps = {
  className?: string;
};

export default function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    pointerInteracting.current = { x: event.clientX, y: event.clientY };
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grabbing";
    }
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current = Math.max(
        -0.28,
        Math.min(0.28, phiOffsetRef.current + dragOffset.current.phi),
      );
      thetaOffsetRef.current = Math.max(
        -0.1,
        Math.min(0.1, thetaOffsetRef.current + dragOffset.current.theta),
      );
      dragOffset.current = { phi: 0, theta: 0 };
    }

    pointerInteracting.current = null;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (event.clientX - pointerInteracting.current.x) / 300,
          theta: (event.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId = 0;
    let retryTimer = 0;
    let phi = US_BASE_PHI;

    const animate = () => {
      if (!globe) {
        return;
      }

      if (!isPausedRef.current) {
        phi += ROTATION_SPEED;
      }

      globe.update({
        phi: phi + phiOffsetRef.current + dragOffset.current.phi,
        theta: Math.max(
          0.18,
          Math.min(
            0.34,
            US_BASE_THETA + thetaOffsetRef.current + dragOffset.current.theta,
          ),
        ),
      });

      animationId = requestAnimationFrame(animate);
    };

    const init = () => {
      const size = canvas.offsetWidth;
      if (size === 0) {
        retryTimer = window.setTimeout(init, 50);
        return;
      }

      if (globe) {
        return;
      }

      globe = createGlobe(canvas, {
        ...GLOBE_CONFIG,
        width: size * 2,
        height: size * 2,
      });

      animate();
    };

    init();

    return () => {
      window.clearTimeout(retryTimer);
      cancelAnimationFrame(animationId);
      globe?.destroy();
    };
  }, []);

  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{ minHeight: 320, minWidth: 280 }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        className="size-full cursor-grab"
        style={{ width: "100%", height: "100%", contain: "layout paint size" }}
      />

      {GLOBE_LOCATIONS.map((location) => (
        <div
          key={location.id}
          className={`globe-marker-label globe-marker-label--${location.id}`}
        >
          <span
            className={`inline-flex items-center rounded-lg bg-[#0B0F14] px-2.5 py-1 text-[11px] font-semibold leading-none text-white shadow-[0_8px_20px_rgba(15,23,42,0.18)] ${
              location.isHq
                ? "px-3 py-1.5 text-[12px] font-bold tracking-[0.08em]"
                : ""
            }`}
          >
            {location.label}
          </span>
        </div>
      ))}
    </div>
  );
}
