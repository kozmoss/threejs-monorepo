import React from 'react'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.3}/>
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight 
        position={[-10, -10, -5]} 
        intensity={0.5} 
      />
      
    </>
  )
}
