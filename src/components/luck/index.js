import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import DocusaurusImageUrl from '@site/static/models/dolphins.ply';
import * as THREE from 'three';

const Luck  = function() {
  const mesh = useRef()
  // const gltf = useLoader(PLYLoader, './dolphins.ply')
  console.log(PLYLoader)
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta;
  })

  return (
    <mesh ref={mesh}>
      {/* <primitive object={gltf.scene} /> */}
    </mesh>
  )
}

export default Luck;