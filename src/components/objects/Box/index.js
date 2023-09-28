import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Box = () => {
  const mesh = useRef()

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta;
  })
  
  return (
    <mesh ref={mesh} rotation={new THREE.Euler(Math.PI / 9, 0, 0)} scale={1}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box