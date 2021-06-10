import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three/src/Three";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { LightTheme } from "./Theme";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Plane,
  Reflector,
} from "@react-three/drei";
import HomeGUI from "./Components/Home/GUI";
import { Stars } from "./Components/Stars/Stars";

function App(props: any) {
  // State:
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [parms, setParms] = useState({
    isDev: false,
    roughness: 0.1,
    metalness: 0.5,
    opacity: 1,
    color: "#fff",
    stars_depth: 50,
  });

  const handleParams = (newValue: any) => {
    setParms(newValue);
  };

  return (
    <ThemeProvider theme={LightTheme}>
      <Canvas
        camera={{ fov: 75, position: [0, 0, 12] }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#756b63"]} />
        <directionalLight position={[-40, 20, 20]} color="#ffffff" />
        <Stars
          radius={100}
          depth={parms.stars_depth}
          count={5000}
          factor={4}
          saturation={0}
          speed={10}
          fade
        />
        {/* <mesh>
          <boxBufferGeometry />
          <meshStandardMaterial
            attach="material"
            color={parms.color}
            transparent
            opacity={parms.opacity}
            roughness={parms.roughness}
            metalness={parms.metalness}
          />
        </mesh> */}

        <ambientLight color="#8d69cb" />
        <Suspense fallback={null}>
          <Environment preset="night" />
        </Suspense>
        {parms.isDev ? <OrbitControls {...props} /> : ""}
      </Canvas>
      <HomeGUI params={parms} onUpdate={handleParams}></HomeGUI>
    </ThemeProvider>
  );
}

const StyledButton = styled.button`
  font-size: calc(10px + 2vmin);
  background: red;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border-style: none;
  padding: 10px 20px;
  transition: 0.1s;
  &:hover {
    background: ${({ theme }) => theme.ButtonNormalHover};
  }
  &:active {
    transform: scale(0.97);
    background-color: ${({ theme }) => theme.ButtonNormalActive};
  }
`;

export default App;
