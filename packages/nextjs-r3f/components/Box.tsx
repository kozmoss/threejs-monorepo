import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Box(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meshRef = useRef<any>(null);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}
