import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from '../objects/Box'
import Luck from '../luck'
import './index.scss';

const NiceBcg = function () {
  return <>
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.2} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Box />
        <Luck />
      </Canvas>
    </div>
  </>
}

export default NiceBcg