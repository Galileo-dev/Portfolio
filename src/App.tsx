import React, { Suspense, useEffect, useRef, useState } from "react";
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
import DatGui, {
  DatBoolean,
  DatButton,
  DatColor,
  DatFolder,
  DatNumber,
  DatPresets,
  DatSelect,
  DatString,
} from "react-dat-gui";
import "../node_modules/react-dat-gui/dist/index.css";

function App(props: any) {
  // State:
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [parms, setParms] = useState({
    isDev: false,
    roughness: 0.1,
    metalness: 0.5,
    opacity: 1,
    color: "#fff",
  });

  return (
    <ThemeProvider theme={LightTheme}>
      <Canvas
        camera={{ fov: 75, position: [0, 0, 12] }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#da6c19"]} />
        <directionalLight position={[-40, 20, 20]} color="#ffffff" />
        <directionalLight
          position={[10.5, 20, 10]}
          intensity={1.5}
          color="#e78f48"
        />
        <mesh>
          <boxBufferGeometry />
          <meshStandardMaterial
            attach="material"
            color={parms.color}
            transparent
            opacity={parms.opacity}
            roughness={parms.roughness}
            metalness={parms.metalness}
          />
        </mesh>
        <ambientLight color="#8d69cb" />
        <Suspense fallback={null}>
          <Environment preset="night" />
        </Suspense>
        {parms.isDev ? <OrbitControls {...props} /> : ""}
      </Canvas>
      <DatGui data={parms} onUpdate={setParms}>
        <DatBoolean path="isDev" />
        <DatNumber path="roughness" min={0} max={1} step={0.01} />
        <DatNumber path="metalness" min={0} max={1} step={0.01} />
        <DatColor path="color" />
      </DatGui>
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

// const GUI = (props: any) => {
//   const { opts, setOpts } = props;
//   return (
//     <DatGui data={opts} onUpdate={setOpts}>
//       <DatNumber path="fontSize" min={1} max={50} step={1} />
//       <DatNumber path="maxWidth" min={50} max={500} step={1} />
//       <DatNumber path="lineHeight" min={0.5} max={2} step={0.1} />
//       <DatNumber path="letterSpacing" min={-0.1} max={0.5} step={0.01} />
//       <DatSelect
//         path="textAlign"
//         options={["left", "center", "right", "justify"]}
//       />
//       <DatSelect
//         path="materialType"
//         label="material"
//         options={["MeshBasicMaterial", "MeshPhongMaterial"]}
//       />
//       <DatColor path="color" />
//     </DatGui>
//   );
// };

export default App;
