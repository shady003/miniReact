import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";
import { Environment, OrbitControls } from '@react-three/drei';
import MacContainer from "./MacContainer";
const App = () => {
  return (
    <Canvas camera={{fov: 20 , position: [0,-10,220]}}>
      <OrbitControls />
     
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/cape_hill_4k.exr',]} />
      <MacContainer />
    </Canvas>
  )
}

export default App