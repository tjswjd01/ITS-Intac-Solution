"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const entranceEase = [0.22, 1, 0.36, 1] as const;

function HeroWireGlobe({ paused }: { paused: boolean }) {
  const globeRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (!paused && globeRef.current) {
      globeRef.current.rotation.y += 0.0025;
      globeRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1.6, 96, 96]} />
      <meshBasicMaterial
        color="#111111"
        transparent
        opacity={0.025}
        wireframe
      />
    </mesh>
  );
}

export default function GlobalBusinessSupportHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-black/[0.06] bg-white pt-24 pb-12 lg:pt-28 lg:pb-14"
    >
      {/* Background Globe */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[360px] w-[360px] translate-y-[4%] sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[540px]">
          <Canvas
            gl={{ alpha: true, antialias: true }}
            frameloop={prefersReducedMotion ? "never" : "always"}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
            <ambientLight intensity={1} />
            <HeroWireGlobe paused={prefersReducedMotion ?? false} />
          </Canvas>
        </div>
      </div>

      {/* Soft Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_55%,rgba(0,0,0,0.018)_0%,transparent_58%)]"
        aria-hidden
      />

      <div className="layout-container relative z-10 w-full min-w-0">
        <div
          className="
            mx-auto flex w-full min-w-0 max-w-4xl
            flex-col items-center justify-center
            px-4 text-center
            min-h-[360px]
            md:min-h-[420px]
            lg:min-h-[470px]
          "
        >
          {/* Eyebrow */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: entranceEase }}
            className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4B5563]"
          >
            <span className="h-2 w-2 rounded-full bg-[#4B5563]" />
            Global Business Support
          </motion.p>

          {/* Headline */}
          <h1 className="mt-5 w-full sm:mt-6">
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: entranceEase,
              }}
              className="
                block
                font-light
                leading-[0.98]
                tracking-[-0.06em]
                text-[#4A4A4A]
                text-[clamp(1.8rem,8vw,2.7rem)]
                lg:text-[clamp(2.4rem,4vw,4rem)]
              "
            >
              Global Expansion
            </motion.span>

            <motion.span
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 14, scale: 0.99 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.18,
                ease: entranceEase,
              }}
              className="
                mt-1 block
                font-bold
                leading-[0.94]
                tracking-[-0.055em]
                text-[#111111]
                text-[clamp(2rem,10vw,3rem)]
                lg:text-[clamp(2.8rem,4.4vw,4.65rem)]
              "
            >
              U.S. Workforce Setup
            </motion.span>
          </h1>

          {/* Line */}
          <motion.div
            className="
              mx-auto mt-4
              h-1
              w-[82%]
              max-w-[720px]
              origin-center
              rounded-full
              shadow-[0_7px_18px_rgba(17,17,17,0.12)]
              lg:mt-5
              lg:w-[76%]
            "
            style={{
              background:
                "linear-gradient(90deg, rgba(17,17,17,0.58) 0%, rgba(17,17,17,0.42) 48%, rgba(100,116,139,0.15) 78%, transparent 100%)",
            }}
            initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: entranceEase,
            }}
          />

          {/* Description */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.46,
              ease: entranceEase,
            }}
            className="
              mt-5
              max-w-[680px]
              text-[14px]
              font-normal
              leading-[1.8]
              text-[#5B5B5B]
              md:mt-6
              md:text-[15px]
            "
          >
            ITS supports Korean and global companies expanding operations in the
            United States through{" "}
            <span className="rounded-sm bg-[#E5E5E5] px-2 py-0.5 font-semibold text-[#111111]">
              workforce setup
            </span>
            , administrative support, operational coordination, and local
            management assistance.
          </motion.p>
        </div>
      </div>
    </section>
  );
}