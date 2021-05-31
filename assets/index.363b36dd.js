var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{q as n,r as l,R as c,G as s,C as i,E as m,O as p,_ as d,D as u,a as f,b,c as h}from"./vendor.a21cde90.js";const g={light:{id:"T_001",name:"Light",colors:{body:"#FFFFFF",text:"#000000",button:{text:"#FFFFFF",background:"#000000"},link:{text:"teal",opacity:1}},font:"Tinos"},seaWave:{id:"T_007",name:"Sea Wave",colors:{body:"#9be7ff",text:"#0d47a1",button:{text:"#ffffff",background:"#0d47a1"},link:{text:"#0d47a1",opacity:.8}},font:"Ubuntu"}};function E(e){l.exports.useState([0,0,0,0]);const[n,h]=l.exports.useState({isDev:!1,roughness:.1,metalness:.5,opacity:1,color:"#fff"});return c.createElement(s,{theme:g},c.createElement(i,{camera:{fov:75,position:[0,0,12]},gl:{antialias:!0}},c.createElement("color",{attach:"background",args:["#da6c19"]}),c.createElement("directionalLight",{position:[-40,20,20],color:"#ffffff"}),c.createElement("directionalLight",{position:[10.5,20,10],intensity:1.5,color:"#e78f48"}),c.createElement("mesh",null,c.createElement("boxBufferGeometry",null),c.createElement("meshStandardMaterial",{attach:"material",color:n.color,transparent:!0,opacity:n.opacity,roughness:n.roughness,metalness:n.metalness})),c.createElement("ambientLight",{color:"#8d69cb"}),c.createElement(l.exports.Suspense,{fallback:null},c.createElement(m,{preset:"night"})),n.isDev?c.createElement(p,((e,n)=>{for(var l in n||(n={}))a.call(n,l)&&o(e,l,n[l]);if(t)for(var l of t(n))r.call(n,l)&&o(e,l,n[l]);return e})({},e)):""),c.createElement(d,{data:n,onUpdate:h},c.createElement(u,{path:"isDev"}),c.createElement(f,{path:"roughness",min:0,max:1,step:.01}),c.createElement(f,{path:"metalness",min:0,max:1,step:.01}),c.createElement(b,{path:"color"})))}n.button`
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
`,h.render(c.createElement(c.StrictMode,null,c.createElement(E,null)),document.getElementById("root"));
