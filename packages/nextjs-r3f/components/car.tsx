import { useGLTF } from "@react-three/drei";



   
    
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Car(props: any) {
    const { scene } = useGLTF("/models/car.glb");
  
    return <primitive object={scene} {...props} />;
  }