"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Component, type ReactNode, useRef } from "react";
import * as THREE from "three";

const ROTATION_SPEED = 0.0025;
const GLOBE_RADIUS = 1.55;

function WireframeGlobe({
  paused = false,
}: {
  paused?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (paused || !groupRef.current) return;

    groupRef.current.rotation.y += ROTATION_SPEED;
    groupRef.current.rotation.x += ROTATION_SPEED * 0.2;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshBasicMaterial
          color="#111111"
          transparent
          opacity={0.025}
          wireframe
        />
      </mesh>
    </group>
  );
}

class WireframeGlobeErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function CssGlobeFallback() {
  return (
    <div
      className="relative h-[360px] w-[360px] translate-y-[4%] rounded-full border border-[#111111]/[0.04] sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[540px]"
      aria-hidden
    >
      <div className="absolute inset-[14%] rounded-full border border-[#111111]/[0.03]" />
      <div className="absolute inset-[28%] rounded-full border border-[#111111]/[0.025]" />
    </div>
  );
}

type WireframeGlobeBackgroundProps = {
  className?: string;
  paused?: boolean;
};

export default function WireframeGlobeBackground({
  className = "",
  paused = false,
}: WireframeGlobeBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden
    >
      <WireframeGlobeErrorBoundary fallback={<CssGlobeFallback />}>
        <div className="h-[360px] w-[360px] translate-y-[4%] sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[540px]">
          <Canvas
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            frameloop={paused ? "never" : "always"}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
            <ambientLight intensity={0.45} />
            <WireframeGlobe paused={paused} />
          </Canvas>
        </div>
      </WireframeGlobeErrorBoundary>
    </div>
  );
}
