"use client";

import { ContactShadows, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Component, type ReactNode, useMemo, useRef } from "react";
import * as THREE from "three";

const LOOP_DURATION = 5.5;

const TRAY_Z_INSIDE = -0.75;
const TRAY_Z_OUT = 0.55;
const PHONE_ON_BELT = { x: 0.35, y: 0.38, z: 1.15 };
const PHONE_BELT_END_Z = 3.05;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function segmentProgress(elapsed: number, start: number, duration: number) {
  if (duration <= 0) return 0;
  return easeInOutCubic(THREE.MathUtils.clamp((elapsed - start) / duration, 0, 1));
}

function getMotionState(elapsed: number) {
  const t = elapsed % LOOP_DURATION;

  const trayZ =
    t < 2.0
      ? TRAY_Z_INSIDE
      : t < 3.0
        ? THREE.MathUtils.lerp(
            TRAY_Z_INSIDE,
            TRAY_Z_OUT,
            segmentProgress(t, 2.0, 1.0),
          )
        : TRAY_Z_OUT;

  let phoneX = 0;
  let phoneY = 0.52;
  let phoneZ = trayZ;

  if (t < 3.0) {
    phoneZ = trayZ;
  } else if (t < 3.8) {
    const p = segmentProgress(t, 3.0, 0.8);
    phoneX = THREE.MathUtils.lerp(0, PHONE_ON_BELT.x, p);
    phoneY = THREE.MathUtils.lerp(0.52, PHONE_ON_BELT.y, p);
    phoneZ = THREE.MathUtils.lerp(TRAY_Z_OUT, PHONE_ON_BELT.z, p);
  } else {
    const p = segmentProgress(t, 3.8, 1.7);
    phoneX = PHONE_ON_BELT.x;
    phoneY = PHONE_ON_BELT.y;
    phoneZ = THREE.MathUtils.lerp(PHONE_ON_BELT.z, PHONE_BELT_END_Z, p);
  }

  const conveyorOffset = t >= 3.8 ? ((t - 3.8) / 1.7) * 2.4 : 0;
  const uiComplete = t >= 1.5;
  const checkPulse =
    t >= 1.5 && t < 2.0
      ? 0.65 + Math.sin((t - 1.5) * Math.PI * 8) * 0.35
      : uiComplete
        ? 1
        : 0.35;

  return { trayZ, phoneX, phoneY, phoneZ, conveyorOffset, uiComplete, checkPulse };
}

function createConveyorTexture() {
  if (typeof document === "undefined") return null;

  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = "#050607";
  ctx.fillRect(0, 0, 128, 128);

  ctx.fillStyle = "#141820";
  for (let y = 0; y < 128; y += 10) {
    ctx.fillRect(0, y, 128, 5);
  }

  ctx.fillStyle = "rgba(80, 150, 255, 0.16)";
  for (let y = 0; y < 128; y += 40) {
    ctx.fillRect(0, y, 128, 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 14);
  return texture;
}

function PhoneModel() {
  return (
    <group>
      <RoundedBox args={[0.86, 0.065, 1.52]} radius={0.105}>
        <meshStandardMaterial color="#222831" roughness={0.16} metalness={1} />
      </RoundedBox>

      <RoundedBox args={[0.78, 0.028, 1.38]} radius={0.08} position={[0, 0.052, 0]}>
        <meshStandardMaterial color="#030405" roughness={0.035} metalness={1} />
      </RoundedBox>

      <mesh position={[-0.16, 0.072, -0.12]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.035, 0.012, 0.82]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.8}
          transparent
          opacity={0.42}
        />
      </mesh>

      <RoundedBox args={[0.2, 0.035, 0.2]} radius={0.035} position={[0.22, 0.086, -0.48]}>
        <meshStandardMaterial color="#11151a" roughness={0.14} metalness={1} />
      </RoundedBox>

      <mesh position={[0.18, 0.11, -0.51]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.012, 24]} />
        <meshStandardMaterial color="#020304" roughness={0.05} metalness={1} />
      </mesh>
      <mesh position={[0.26, 0.11, -0.44]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.028, 0.028, 0.012, 24]} />
        <meshStandardMaterial color="#020304" roughness={0.05} metalness={1} />
      </mesh>

      <mesh position={[0.445, 0.03, 0.12]}>
        <boxGeometry args={[0.02, 0.018, 0.28]} />
        <meshStandardMaterial color="#b8c2cc" roughness={0.12} metalness={1} />
      </mesh>

      <mesh position={[-0.445, 0.03, -0.18]}>
        <boxGeometry args={[0.02, 0.018, 0.22]} />
        <meshStandardMaterial color="#b8c2cc" roughness={0.12} metalness={1} />
      </mesh>

      <mesh position={[0, 0.075, 0.765]}>
        <boxGeometry args={[0.16, 0.01, 0.018]} />
        <meshStandardMaterial color="#0a0c0f" roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  );
}

const SCREEN_PAD_X = 28;

function StatusScreen() {
  const texture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 288;
    canvas.height = 400;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return { canvas, tex };
  }, []);

  useFrame(({ clock }) => {
    if (!texture) return;
    const { uiComplete, checkPulse } = getMotionState(clock.getElapsedTime());
    const { canvas, tex } = texture;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#030508";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(60, 140, 255, 0.22)";
    ctx.lineWidth = 1;
    for (let y = 92; y < 360; y += 36) {
      ctx.beginPath();
      ctx.moveTo(SCREEN_PAD_X, y);
      ctx.lineTo(canvas.width - SCREEN_PAD_X, y);
      ctx.stroke();
    }

    const cx = canvas.width / 2;

    ctx.fillStyle = "#aeb8c4";
    ctx.font = "600 14px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SYSTEM STATUS", cx, 36);

    ctx.font = "700 26px system-ui, sans-serif";
    ctx.fillStyle = uiComplete ? "#3dff9a" : "#7eb8ff";
    const statusWord = uiComplete ? "COMPLETE" : "RUNNING";
    ctx.fillText(statusWord, cx, 76);

    if (uiComplete) {
      ctx.font = "500 13px system-ui, sans-serif";
      ctx.fillStyle = "#aeb8c4";
      ctx.textAlign = "left";
      ctx.fillText("Cycle Time", SCREEN_PAD_X, 108);
      ctx.textAlign = "right";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("2.48 sec", canvas.width - SCREEN_PAD_X, 108);

      ctx.beginPath();
      ctx.arc(SCREEN_PAD_X + 10, 140, 12, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(61, 255, 154, ${checkPulse})`;
      ctx.fill();

      ctx.strokeStyle = "#3dff9a";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(SCREEN_PAD_X + 4, 140);
      ctx.lineTo(SCREEN_PAD_X + 9, 146);
      ctx.lineTo(SCREEN_PAD_X + 19, 132);
      ctx.stroke();

      ctx.textAlign = "left";
      ctx.font = "700 14px system-ui, sans-serif";
      ctx.fillStyle = "#3dff9a";
      ctx.fillText("INSPECTION COMPLETE", SCREEN_PAD_X + 30, 146);

      const rows = ["Screen", "Camera", "Buttons", "Battery", "Sensors"];
      rows.forEach((label, i) => {
        const y = 178 + i * 24;
        ctx.fillStyle = "#f4f7fa";
        ctx.font = "500 13px system-ui, sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(label, SCREEN_PAD_X, y);
        ctx.fillStyle = "#3dff9a";
        ctx.textAlign = "right";
        ctx.fillText("OK", canvas.width - SCREEN_PAD_X, y);
      });

      ctx.fillStyle = "#aeb8c4";
      ctx.textAlign = "center";
      ctx.font = "500 13px system-ui, sans-serif";
      ctx.fillText("Throughput", cx, 305);

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 18px system-ui, sans-serif";
      ctx.fillText("1,245 units/hr", cx, 334);

      const bars = [0.35, 0.55, 0.45, 0.7, 0.5, 0.85];
      bars.forEach((h, i) => {
        ctx.fillStyle = "#2d8cff";
        ctx.fillRect(56 + i * 28, 370 - h * 42, 16, h * 42);
      });
    }

    tex.needsUpdate = true;
  });

  if (!texture) return null;

  return (
    <mesh position={[2.05, 1.13, 0.3]} renderOrder={12}>
      <planeGeometry args={[0.9, 1.38]} />
      <meshBasicMaterial map={texture.tex} toneMapped={false} depthTest={false} />
    </mesh>
  );
}

function createItsBrandTexture() {
  if (typeof document === "undefined") return null;

  const canvas = document.createElement("canvas");
  canvas.width = 320;
  canvas.height = 140;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 88px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("ITS", 8, canvas.height / 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** White "ITS" on upper-left front panel (no external logo/font). */
function MachineBrandMark() {
  const texture = useMemo(() => createItsBrandTexture(), []);

  if (!texture) return null;

  return (
    <mesh position={[-1.08, 1.9, 0.52]} renderOrder={9}>
      <planeGeometry args={[0.52, 0.2]} />
      <meshBasicMaterial
        map={texture}
        transparent
        toneMapped={false}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

function InspectionMachine() {
  const phone = useRef<THREE.Group>(null);
  const tray = useRef<THREE.Group>(null);
  const beltMat = useRef<THREE.MeshStandardMaterial>(null);

  const conveyorTexture = useMemo(() => createConveyorTexture(), []);

  useFrame(({ clock }) => {
    const state = getMotionState(clock.getElapsedTime());

    if (tray.current) tray.current.position.z = state.trayZ;
    if (phone.current) {
      phone.current.position.set(state.phoneX, state.phoneY, state.phoneZ);
    }
    if (beltMat.current && conveyorTexture) {
      beltMat.current.map = conveyorTexture;
      conveyorTexture.offset.y = state.conveyorOffset % 1;
    }
  });

  return (
    <group rotation={[0, -0.42, 0]}>
      <RoundedBox args={[3.7, 2.3, 2.2]} radius={0.08} position={[0, 1.15, -0.7]}>
        <meshStandardMaterial color="#3A4149" roughness={0.28} metalness={0.88} />
      </RoundedBox>

      <RoundedBox args={[0.82, 2.26, 2.16]} radius={0.06} position={[1.46, 1.15, -0.68]}>
        <meshStandardMaterial color="#11161d" roughness={0.34} metalness={0.9} />
      </RoundedBox>

      <RoundedBox args={[2.05, 1.05, 0.75]} radius={0.05} position={[0, 1.08, 0.18]}>
        <meshStandardMaterial color="#1d242b" roughness={0.28} metalness={0.75} />
      </RoundedBox>

      <RoundedBox args={[2.18, 1.18, 0.08]} radius={0.08} position={[0, 1.12, 0.43]}>
        <meshStandardMaterial color="#05070a" roughness={0.18} metalness={0.95} />
      </RoundedBox>

      <RoundedBox args={[1.78, 0.86, 0.09]} radius={0.06} position={[0, 1.1, 0.49]}>
        <meshStandardMaterial color="#000000" roughness={0.3} metalness={0.7} />
      </RoundedBox>

      <MachineBrandMark />

      <group ref={tray} position={[0, 0.58, TRAY_Z_INSIDE]}>
        <mesh>
          <boxGeometry args={[1.55, 0.08, 1.05]} />
          <meshStandardMaterial color="#5d6670" roughness={0.18} metalness={0.95} />
        </mesh>
        <mesh position={[0, 0.055, 0]}>
          <boxGeometry args={[1.42, 0.025, 0.92]} />
          <meshStandardMaterial color="#15191f" roughness={0.1} metalness={1} />
        </mesh>
        {[-0.55, 0.55].map((x) => (
          <mesh key={`tray-rail-${x}`} position={[x, 0.11, 0.37]}>
            <boxGeometry args={[0.045, 0.05, 1.2]} />
            <meshStandardMaterial color="#9fa9b4" roughness={0.18} metalness={1} />
          </mesh>
        ))}
      </group>

      <mesh position={[-0.95, 1.12, 0.52]}>
        <boxGeometry args={[0.075, 0.82, 0.035]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={8}
        />
      </mesh>

      <mesh position={[0, 2.31, 0.46]}>
        <boxGeometry args={[3.25, 0.035, 0.035]} />
        <meshStandardMaterial color="#4d7eff" emissive="#0b67ff" emissiveIntensity={3.2} />
      </mesh>

      <mesh position={[0.35, 0.38, 1.85]}>
        <boxGeometry args={[1.75, 0.09, 3.6]} />
        <meshStandardMaterial
          ref={beltMat}
          color="#07090c"
          map={conveyorTexture ?? undefined}
          roughness={0.56}
          metalness={0.45}
        />
      </mesh>

      {[-0.65, 1.35].map((x) => (
        <mesh key={`rail-${x}`} position={[x, 0.54, 1.85]}>
          <boxGeometry args={[0.08, 0.1, 3.7]} />
          <meshStandardMaterial color="#aab3bd" roughness={0.16} metalness={0.96} />
        </mesh>
      ))}

      {[-0.52, 1.22].map((x) => (
        <mesh key={`blue-rail-${x}`} position={[x, 0.615, 1.85]}>
          <boxGeometry args={[0.025, 0.025, 3.4]} />
          <meshStandardMaterial color="#2d8cff" emissive="#0b67ff" emissiveIntensity={1.8} />
        </mesh>
      ))}

      <group ref={phone}>
        <PhoneModel />
      </group>

      <RoundedBox args={[0.98, 1.43, 0.12]} radius={0.06} position={[2.05, 1.13, 0.15]}>
        <meshStandardMaterial color="#10151b" roughness={0.24} metalness={0.9} />
      </RoundedBox>

      <StatusScreen />

      {[
        [-0.95, 0.55, 0.95],
        [1.2, 0.55, 0.95],
        [-0.72, 0.55, 2.8],
        [1.05, 0.55, 2.8],
        [-0.95, 0.18, 0.2],
        [1.1, 0.18, 0.2],
      ].map((p, i) => (
        <mesh key={`leg-${i}`} position={p as [number, number, number]}>
          <boxGeometry args={[0.18, 0.18, 0.18]} />
          <meshStandardMaterial color="#222831" roughness={0.26} metalness={0.9} />
        </mesh>
      ))}

      {[
        [-1.55, 2.05, 0.52],
        [1.05, 2.05, 0.52],
        [-1.55, 0.25, 0.52],
        [1.05, 0.25, 0.52],
      ].map((p, i) => (
        <mesh
          key={`screw-${i}`}
          position={p as [number, number, number]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.035, 0.035, 0.012, 24]} />
          <meshStandardMaterial color="#0a0d10" roughness={0.12} metalness={1} />
        </mesh>
      ))}
    </group>
  );
}

function HeroSceneContent() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[-4, 7, 5]} intensity={4.2} color="#f5f8ff" />
      <directionalLight position={[5, 3, -3]} intensity={1.6} color="#8eb8ff" />
      <pointLight position={[0, 1.35, 0.65]} intensity={6} color="#ffffff" distance={5} />
      <pointLight position={[1.8, 2.1, 0.6]} intensity={2.8} color="#0b67ff" distance={6} />
      <pointLight position={[-1.4, 1.4, 1.4]} intensity={1.8} color="#ffffff" distance={7} />

      <group position={[0.15, -0.38, 0]}>
        <InspectionMachine />
      </group>

      <ContactShadows
        position={[0, -0.45, 0]}
        opacity={0.55}
        scale={10}
        blur={2.5}
        far={4}
      />
    </>
  );
}

class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("AutomationHeroScene failed:", error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export default function AutomationHeroScene() {
  return (
    <div
      className="relative z-10 h-[420px] w-full shrink-0 md:h-[540px] lg:h-[min(78vh,760px)]"
      aria-label="Automated smartphone inspection machine with conveyor"
      role="img"
    >
      <CanvasErrorBoundary
        fallback={
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-white/10 bg-[#0a0a0a] text-sm text-neutral-500">
            3D preview unavailable
          </div>
        }
      >
        <Canvas
          className="!block !h-full !w-full"
          camera={{ position: [3.1, 2.05, 8.4], fov: 36, near: 0.1, far: 100 }}
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
          frameloop="always"
          onCreated={({ gl, size }) => {
            gl.setClearColor("#000000");
            console.log("[AutomationHeroScene] canvas ready", size.width, size.height);
          }}
        >
          <HeroSceneContent />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
