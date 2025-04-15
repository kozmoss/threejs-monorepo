import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export function Background({ url }: { url: string }) {
  const texture = useLoader(THREE.TextureLoader, url);

  return (
    <mesh position={[0, 0, -10]}>
      <planeGeometry args={[50, 30]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}
