"use client"
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Model({ path }: { path: string }) {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(path);
  const { camera } = useThree();

  
  const model = scene.clone();

  // Modeli zemine oturtmak için bir kere çalışacak useEffect
  useEffect(() => {
    if (modelRef.current) {
      // Modelin bounding box'ını hesapla
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      // Modelin alt kısmını zemine oturtmak için
      modelRef.current.position.y = -center.y + size.y / 2;

      // Kamerayı modele göre ayarla (opsiyonel)
      const distance = Math.max(size.x, size.y, size.z) * 2.5;
      camera.position.set(0, size.y / 2, distance);
      camera.lookAt(new THREE.Vector3(0, size.y / 3, 0));
    }
  }, [model, camera]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; // Otomatik döndürme
    }
  });

  return (
    <primitive
      ref={modelRef}
      scale={10}
      object={model}
      castShadow
      receiveShadow
      position={[0, 0, 0]} // Başlangıç pozisyonu, useEffect içinde ayarlanacak
    />
  );
}
