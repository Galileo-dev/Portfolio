import{q as e,R as t,$ as n,G as r,a}from"./vendor.77d22267.js";const o={borderRadius:"7px",background:"url(https://unsplash.com/photos/hGV2TfOh0ns/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ5ODAyNjM4)",palette:{common:{black:"#222222",white:"#ffffff"},primary:{main:"#d4d4d4",contrastText:"#1f1f1f"},secondary:{main:"#cacaca",contrastText:"#363636"},surface:{main:"#1d1d1d",contrastText:"#d4d4d4"}}},c={borderRadius:"7px",background:"#2D2D2D",palette:{common:{black:"#181818",white:"#ffffff"},primary:{main:"#222222",contrastText:"#93C5FD"},secondary:{main:"#3C3C3C",contrastText:"#FFFFFF"},surface:{main:"#2D2D2D",contrastText:"#C1C1C1"}}};var l,i;(i=l||(l={}))[i.PRIMARY=0]="PRIMARY",i[i.SECONDARY=1]="SECONDARY";const m=e.div`
  margin: 8px;
  padding: 0.3rem;
  user-select: none;
  transition: 10ms ease;
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  border-radius: ${e=>e.theme.borderRadius};
  ${e=>{switch(e.variant){case 1:return`\n            color: ${e.theme.palette.secondary.contrastText};\n            background-color: ${e.theme.palette.secondary.main};\n          `;case 0:default:return`\n            color: ${e.theme.palette.primary.contrastText};\n            background-color: ${e.theme.palette.primary.main};\n          `}}}
`;var s;!function(e){e[e.PRIMARY=0]="PRIMARY",e[e.SECONDARY=1]="SECONDARY"}(s||(s={}));const d=e.section`
  margin: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border: solid 0.3rem ${e=>e.theme.palette.common.black};

  border-radius: ${e=>e.theme.borderRadius};
  ${e=>{switch(e.variant){case 1:return`\n            color: ${e.theme.palette.secondary.contrastText};\n            background-color: ${e.theme.palette.secondary.main};\n          `;case 0:default:return`\n            color: ${e.theme.palette.primary.contrastText};\n            background-color: ${e.theme.palette.primary.main};\n          `}}}
`;let u=e.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0% 20% 0% 20%;
`,h=e.div`
  width: 100%;
`;var p,g;(g=p||(p={}))[g.TOPLEFT=0]="TOPLEFT",g[g.TOPRIGHT=1]="TOPRIGHT",g[g.BOTTOMLEFT=2]="BOTTOMLEFT",g[g.BOTTOMRIGHT=3]="BOTTOMRIGHT";let f=e.div`
  position: absolute;
  ${e=>{switch(e.position){case 3:return"\n          bottom:0;\n            right:0;\n        ";case 2:return"\n          bottom:0;\n          left:0;\n        ";case 0:return"\n          top:0;\n          left:0;\n        ";case 1:default:return"\n            top:0;\n          right:0;\n        "}}}
`;var T,b;(b=T||(T={}))[b.LEFT=0]="LEFT",b[b.RIGHT=1]="RIGHT";let E=e.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;const R=()=>t.createElement(d,null,t.createElement(E,null,t.createElement(x,{src:"https://avatars.githubusercontent.com/u/32818066?v=4"}),t.createElement(k,null,t.createElement(v,null," Hello My name is Fionn aka Galileo"),t.createElement(y,null,"I'm 17 years old programmer which loves technology and programming, I started when I was 8 years old and haven't looked back since.",t.createElement("br",null)," the world fascinates me so I poke it."))));let x=e.img`
  border-radius: 1rem;
  height: 10rem;
  width: auto;
`,v=e.h2`
  margin: 0;
`;e.h3`
  margin: 0;
  margin-top: 1rem;
`;let y=e.p`
  padding: 0;
  margin: 0;
`,k=e.div`
  font-size: 1rem;
  margin: 0.5rem;
  margin-left: 2rem;
`;function O(e){const[n,a]=t.useState(o);return t.createElement(r,{theme:n},t.createElement(I,null),t.createElement(f,{position:p.TOPLEFT},t.createElement(m,{variant:l.PRIMARY,onClick:()=>{a(n==o?c:o)}},"Theme")),t.createElement(u,null,t.createElement(h,null,t.createElement(R,null),t.createElement(d,null),t.createElement(d,null))))}const I=n`
  body {
    background: ${e=>e.theme.background};
    background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  }
`;a.render(t.createElement(t.StrictMode,null,t.createElement(O,null)),document.getElementById("root"));
