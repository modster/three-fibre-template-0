import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import './styles.css'

function Thing() {
  const ref = useRef()

  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshNormalMaterial wireframe />
    </mesh>
  )
}

function Scene() {
  return (
    <Canvas>
      <Thing />
      <color args={['#080406']} attach="background" />
    </Canvas>
  )
}

export default Scene
