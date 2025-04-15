// components/ClientSceneWrapper.jsx
"use client";
import Scene from "@/components/canvas/Scene";

export function ClientSceneWrapper({ modelPath, background }: {modelPath:string, background:string}) {
  return <Scene modelPath={modelPath} background={background} />;
}