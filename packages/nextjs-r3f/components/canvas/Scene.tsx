"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
import Lights from "./Light";
import Controls from "./Controls";
import {
  Environment,
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Car } from "../car";

export default function Scene({
  modelPath,
  background,
}: {
  modelPath: string;
  background: string;
}) {
  return (
    <div className="h-full w-full rounded ">
      {modelPath == "/models/car.glb" ? (
        <Canvas>
          <Environment
            files="old_depot_2k.hdr"
            ground={{ height: 35, radius: 100, scale: 200 }}
          />
          <Car position={[-8, 0, -2]} scale={20} rotation-y={-Math.PI / 4} />
          <ContactShadows
            renderOrder={2}
            frames={1}
            resolution={1024}
            scale={120}
            blur={2}
            opacity={0.6}
            far={100}
          />
          <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.25}
            makeDefault
          />
          <PerspectiveCamera makeDefault position={[45, 45, 10]} fov={100} />
        </Canvas>
      ) : (
        <Canvas className="rounded">
          <Suspense fallback={null}>
            <Model path={modelPath} />
            <Lights />
            <Environment files={background} background />
            <ContactShadows
              position={[0, -0.06, 0]}
              opacity={0.4}
              scale={10}
              blur={2}
              far={4}
              resolution={256}
              color="#000000"
            />

            <Controls />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
