// components/canvas/CustomizableModel.jsx
import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CustomizableModel({ 
  path, 
  color = '#ffffff',
  metalness = 0.2,
  roughness = 0.5,
  scale = 1,
  autoRotate = false
}) {
  const modelRef = useRef(null)
  const { scene } = useGLTF(path)
  
  // Kopyalama ve materyal uygulama
  useEffect(() => {
    if (!scene) return
    
    // Tüm mesh'leri bul ve materyal uygula
    scene.traverse((child) => {
      if (child.isMesh) {
        // Orijinal texture'ları sakla
        const originalMap = child.material.map
        
        // Yeni materyal oluştur
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          map: originalMap,
          metalness: metalness,
          roughness: roughness
        })
      }
    })
  }, [scene, color, metalness, roughness])
  
  // Otomatik döndürme
  useFrame((state, delta) => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5
    }
  })
  
  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={scale}
      castShadow
      receiveShadow
    />
  )
}

// Kullanım örneği:
// <CustomizableModel 
//   path="/models/product.glb" 
//   color="#ff0000"
//   metalness={0.8}
//   roughness={0.2}
//   scale={1.5}
//   autoRotate={true}
// />