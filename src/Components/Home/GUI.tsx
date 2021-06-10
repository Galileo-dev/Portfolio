import React from "react";

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
import "../../../node_modules/react-dat-gui/dist/index.css";

function HomeGUI(props: any) {
  const handleParams = (event: any) => {
    console.log(event);
    props.onUpdate(event);
  };

  return (
    <DatGui data={props.params} onUpdate={handleParams}>
      <DatBoolean path="isDev" />
      <DatNumber path="roughness" min={0} max={1} step={0.01} />
      <DatNumber path="metalness" min={0} max={1} step={0.01} />
      <DatColor path="color" />
      <DatNumber path="stars_depth" min={0} max={1000} step={0.01} />
    </DatGui>
  );
}

export default HomeGUI;
