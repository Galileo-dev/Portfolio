import{q as e,r as t,R as o,G as a,a as n}from"./vendor.3fe77e25.js";const r={light:{id:"T_001",name:"Light",colors:{body:"#FFFFFF",text:"#000000",button:{text:"#FFFFFF",background:"#000000"},link:{text:"teal",opacity:1}},font:"Tinos"},seaWave:{id:"T_007",name:"Sea Wave",colors:{body:"#9be7ff",text:"#0d47a1",button:{text:"#ffffff",background:"#0d47a1"},link:{text:"#0d47a1",opacity:.8}},font:"Ubuntu"}};function c(){const[e,n]=t.exports.useState(0);return o.createElement(a,{theme:r},o.createElement("div",{className:"App"},o.createElement("header",{className:"App-header"},o.createElement("p",null,o.createElement(l,{onClick:()=>n((e=>e+1))},"count is: ",e)))))}const l=e.button`
  font-size: calc(10px + 2vmin);
  background: red;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border-style: none;
  padding: 10px 20px;
  transition: 0.1s;
  &:hover {
    background: ${({theme:e})=>e.ButtonNormalHover};
  }
  &:active {
    transform: scale(0.97);
    background-color: ${({theme:e})=>e.ButtonNormalActive};
  }
`;n.render(o.createElement(o.StrictMode,null,o.createElement(c,null)),document.getElementById("root"));
