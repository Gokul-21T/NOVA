"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";

function SceneModel({ variant }: { variant: string }) {
  const form = useRef<Group>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useFrame(({ clock }, delta) => {
    if (!form.current || reducedMotion) return;
    form.current.rotation.y += delta * 0.18;
    form.current.rotation.x = Math.sin(clock.elapsedTime * 0.32) * 0.08;
    form.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.08;
  });

  if (variant === "interface") {
    return (
      <group ref={form} rotation={[0.08, -0.22, -0.08]}>
        <mesh><boxGeometry args={[1.8, 2.35, 0.12]} /><meshStandardMaterial color="#22231f" roughness={0.38} metalness={0.24} /></mesh>
        <mesh position={[0, 0.58, 0.08]}><boxGeometry args={[1.42, 0.68, 0.025]} /><meshStandardMaterial color="#c5f467" roughness={0.55} /></mesh>
        <mesh position={[-0.34, -0.12, 0.09]}><boxGeometry args={[0.68, 0.12, 0.03]} /><meshStandardMaterial color="#f5f3ee" /></mesh>
        <mesh position={[0.13, -0.48, 0.09]}><boxGeometry args={[1.08, 0.1, 0.03]} /><meshStandardMaterial color="#8f9188" /></mesh>
        <mesh position={[0, -0.85, 0.1]}><boxGeometry args={[1.14, 0.28, 0.035]} /><meshStandardMaterial color="#c5f467" /></mesh>
      </group>
    );
  }

  if (variant === "development") {
    return (
      <group ref={form}>
        <mesh position={[0, 0, 0]}><icosahedronGeometry args={[0.82, 1]} /><meshStandardMaterial color="#c5f467" roughness={0.3} metalness={0.3} wireframe /></mesh>
        <mesh position={[0, 0, 0]}><boxGeometry args={[0.86, 0.86, 0.86]} /><meshStandardMaterial color="#deddd5" roughness={0.24} metalness={0.66} /></mesh>
        <mesh position={[0.86, 0.42, 0.05]}><sphereGeometry args={[0.15, 24, 24]} /><meshStandardMaterial color="#c5f467" emissive="#698533" emissiveIntensity={0.8} /></mesh>
        <mesh position={[-0.86, -0.4, -0.1]}><sphereGeometry args={[0.13, 24, 24]} /><meshStandardMaterial color="#f5f3ee" /></mesh>
      </group>
    );
  }

  if (variant === "branding" || variant === "mono") {
    return (
      <group ref={form}>
        <mesh rotation={[0.72, 0, 0.35]}><torusGeometry args={[1.06, 0.025, 12, 96]} /><meshStandardMaterial color="#c5f467" metalness={0.3} roughness={0.3} /></mesh>
        <mesh rotation={[0.72, 0, -0.35]}><torusGeometry args={[0.74, 0.02, 12, 96]} /><meshStandardMaterial color="#f5f3ee" metalness={0.28} roughness={0.34} /></mesh>
        <mesh><octahedronGeometry args={[0.64, 0]} /><meshStandardMaterial color={variant === "mono" ? "#f5f3ee" : "#c5f467"} roughness={0.26} metalness={0.34} /></mesh>
      </group>
    );
  }

  if (variant === "strategy") {
    return (
      <group ref={form}>
        <mesh><icosahedronGeometry args={[0.44, 1]} /><meshStandardMaterial color="#c5f467" emissive="#688a35" emissiveIntensity={0.38} roughness={0.28} /></mesh>
        <mesh position={[0, 0.98, 0]}><sphereGeometry args={[0.16, 24, 24]} /><meshStandardMaterial color="#f5f3ee" /></mesh>
        <mesh position={[0.92, 0.25, 0]}><sphereGeometry args={[0.13, 24, 24]} /><meshStandardMaterial color="#c5f467" /></mesh>
        <mesh position={[0.58, -0.8, 0]}><sphereGeometry args={[0.18, 24, 24]} /><meshStandardMaterial color="#deddd5" /></mesh>
        <mesh position={[-0.58, -0.8, 0]}><sphereGeometry args={[0.13, 24, 24]} /><meshStandardMaterial color="#c5f467" /></mesh>
        <mesh position={[-0.92, 0.25, 0]}><sphereGeometry args={[0.16, 24, 24]} /><meshStandardMaterial color="#f5f3ee" /></mesh>
        <mesh rotation={[1.3, 0.2, 0]}><torusGeometry args={[1.05, 0.015, 8, 96]} /><meshStandardMaterial color="#74756d" /></mesh>
      </group>
    );
  }

  if (variant === "velocity") {
    return (
      <group ref={form} rotation={[0.1, 0, -0.28]}>
        <mesh rotation={[0, 0, -0.25]}><coneGeometry args={[0.72, 1.85, 4]} /><meshStandardMaterial color="#c5f467" roughness={0.32} metalness={0.22} flatShading /></mesh>
        <mesh rotation={[1.32, 0.2, 0]}><torusGeometry args={[1.12, 0.016, 8, 96]} /><meshStandardMaterial color="#f5f3ee" /></mesh>
        <mesh rotation={[1.15, -0.3, 0.42]}><torusGeometry args={[0.88, 0.012, 8, 96]} /><meshStandardMaterial color="#8fa959" /></mesh>
      </group>
    );
  }

  return (
    <group ref={form}>
      <mesh><sphereGeometry args={[0.66, 48, 48]} /><meshStandardMaterial color={variant === "aura" ? "#d8bb8e" : "#a9bdc6"} roughness={0.22} metalness={0.52} /></mesh>
      <mesh rotation={[1.08, 0.25, -0.16]}><torusGeometry args={[1.07, 0.055, 16, 112]} /><meshStandardMaterial color={variant === "aura" ? "#c5f467" : "#f5f3ee"} roughness={0.24} metalness={0.62} /></mesh>
      <mesh rotation={[1.34, -0.28, 0.24]}><torusGeometry args={[1.28, 0.014, 8, 112]} /><meshStandardMaterial color="#8a8c80" /></mesh>
    </group>
  );
}

export default function SceneCanvas({ variant }: { variant: string }) {
  return (
    <div className="scene-canvas" aria-hidden="true">
      <Canvas dpr={[1, 1.4]} camera={{ position: [0, 0, 4.3], fov: 38 }} fallback={<div className="scene-poster"><span>NOVA®</span><i /><b /></div>}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={3.2} />
        <pointLight position={[-3, -2, 2]} color="#c5f467" intensity={2.5} />
        <SceneModel variant={variant} />
      </Canvas>
    </div>
  );
}
