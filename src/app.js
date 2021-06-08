"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
require("./App.css");
var Theme_1 = require("./Theme");
var fiber_1 = require("@react-three/fiber");
var drei_1 = require("@react-three/drei");
var react_dat_gui_1 = require("react-dat-gui");
require("../node_modules/react-dat-gui/dist/index.css");
function App(props) {
  // State:
  var _a = react_1.useState([0, 0, 0, 0]),
    rotation = _a[0],
    setRotation = _a[1];
  var _b = react_1.useState({
      isDev: false,
      roughness: 0.1,
      metalness: 0.5,
      opacity: 1,
      color: "#fff",
    }),
    parms = _b[0],
    setParms = _b[1];
  return react_1["default"].createElement(
    styled_components_1.ThemeProvider,
    { theme: Theme_1.LightTheme },
    react_1["default"].createElement(
      fiber_1.Canvas,
      { camera: { fov: 75, position: [0, 0, 12] }, gl: { antialias: true } },
      react_1["default"].createElement("color", {
        attach: "background",
        args: ["#da6c19"],
      }),
      react_1["default"].createElement("directionalLight", {
        position: [-40, 20, 20],
        color: "#ffffff",
      }),
      react_1["default"].createElement("directionalLight", {
        position: [10.5, 20, 10],
        intensity: 1.5,
        color: "#e78f48",
      }),
      react_1["default"].createElement(
        "mesh",
        null,
        react_1["default"].createElement("boxBufferGeometry", null),
        react_1["default"].createElement("meshStandardMaterial", {
          attach: "material",
          color: parms.color,
          transparent: true,
          opacity: parms.opacity,
          roughness: parms.roughness,
          metalness: parms.metalness,
        })
      ),
      react_1["default"].createElement("ambientLight", { color: "#8d69cb" }),
      react_1["default"].createElement(
        react_1.Suspense,
        { fallback: null },
        react_1["default"].createElement(drei_1.Environment, {
          preset: "night",
        })
      ),
      parms.isDev
        ? react_1["default"].createElement(
            drei_1.OrbitControls,
            __assign({}, props)
          )
        : ""
    ),
    react_1["default"].createElement(
      react_dat_gui_1["default"],
      { data: parms, onUpdate: setParms },
      react_1["default"].createElement(react_dat_gui_1.DatBoolean, {
        path: "isDev",
      }),
      react_1["default"].createElement(react_dat_gui_1.DatNumber, {
        path: "roughness",
        min: 0,
        max: 1,
        step: 0.01,
      }),
      react_1["default"].createElement(react_dat_gui_1.DatNumber, {
        path: "metalness",
        min: 0,
        max: 1,
        step: 0.01,
      }),
      react_1["default"].createElement(react_dat_gui_1.DatColor, {
        path: "color",
      })
    )
  );
}
var StyledButton = styled_components_1["default"].button(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  font-size: calc(10px + 2vmin);\n  background: red;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  border-style: none;\n  padding: 10px 20px;\n  transition: 0.1s;\n  &:hover {\n    background: ",
        ";\n  }\n  &:active {\n    transform: scale(0.97);\n    background-color: ",
        ";\n  }\n",
      ],
      [
        "\n  font-size: calc(10px + 2vmin);\n  background: red;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  border-style: none;\n  padding: 10px 20px;\n  transition: 0.1s;\n  &:hover {\n    background: ",
        ";\n  }\n  &:active {\n    transform: scale(0.97);\n    background-color: ",
        ";\n  }\n",
      ]
    )),
  function (_a) {
    var theme = _a.theme;
    return theme.ButtonNormalHover;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.ButtonNormalActive;
  }
);
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
exports["default"] = App;
var templateObject_1;
