var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{q as o,R as i,m as l,r as c,u as s,$ as d,G as m,a as p}from"./vendor.1bdb8f82.js";const u={borderRadius:"7px",background:"url(https://unsplash.com/photos/hGV2TfOh0ns/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ5ODAyNjM4)",palette:{common:{black:"#222222",white:"#ffffff"},primary:{main:"#d4d4d4",contrastText:"#1f1f1f"},secondary:{main:"#cacaca",contrastText:"#363636"},surface:{main:"#1d1d1d",contrastText:"#d4d4d4"},card:{main:"#1d1d1d",contrastText:"#d4d4d4"},card_surface:{main:"#636363",contrastText:"#C1C1C1"}}},h={borderRadius:"7px",background:"#2C2F33",palette:{common:{black:"#181818",white:"#ffffff"},primary:{main:"#2C2F33",contrastText:"#7896b9"},secondary:{main:"#2C2F33",contrastText:"#FFFFFF"},surface:{main:"#2C2F33",contrastText:"#C1C1C1"},card:{main:"#2C2F33",contrastText:"#EEEEEE"},card_surface:{main:"#25CEDE",contrastText:"#EEEEEE"}}};var x,f;(f=x||(x={}))[f.PRIMARY=0]="PRIMARY",f[f.SECONDARY=1]="SECONDARY";const g=o.div`
  margin: 8px;
  padding: 0.3rem;
  user-select: none;

  border-radius: ${e=>e.theme.borderRadius};
  ${e=>{switch(e.variant){case 1:return`\n            color: ${e.theme.palette.secondary.contrastText};\n            background-color: ${e.theme.palette.secondary.main};\n          `;case 0:default:return`\n            color: ${e.theme.palette.primary.contrastText};\n            background-color: ${e.theme.palette.primary.main};\n          `}}}
`,b=e=>{var a=e,{variant:o,children:c,onClick:s}=a;((e,a)=>{var o={};for(var i in e)r.call(e,i)&&a.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&t)for(var i of t(e))a.indexOf(i)<0&&n.call(e,i)&&(o[i]=e[i])})(a,["variant","children","onClick"]);return i.createElement(g,{variant:o,as:l.div,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:s},c)},E=()=>i.createElement(S,null,i.createElement(T,{src:"https://avatars.githubusercontent.com/u/32818066?v=4"}),i.createElement(w,null,i.createElement(v,null," Hello My name is Fionn aka Galileo"),i.createElement(y,null,"I'm 17 years old programmer who loves technology and programming, I started when I was 8 years old and haven't looked back since.",i.createElement("br",null)," the world fascinates me so I poke it.")));let T=o.img`
  border-radius: 1rem;
  height: auto;
  width: 15rem;
`,v=o.h2`
  margin: 0;
`;o.h3`
  margin: 0;
  margin-top: 1rem;
`;let y=o.p`
  padding: 0;
  margin: 0;
`,w=o.div`
  font-size: 1rem;
  margin: 0.5rem;
  margin-left: 2rem;
`;const k=`(max-width: ${"425px"})`,R=`(max-width: ${"768px"})`;let $=o.div`
  display: flex;
  align-items: center;
  // Switch to rows on large devices
  flex-direction: row;
`,O=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;var C,F;(F=C||(C={}))[F.TOPLEFT=0]="TOPLEFT",F[F.TOPRIGHT=1]="TOPRIGHT",F[F.BOTTOMLEFT=2]="BOTTOMLEFT",F[F.BOTTOMRIGHT=3]="BOTTOMRIGHT";let I=o.div`
  position: absolute;
  ${e=>{switch(e.position){case 3:return"\n          bottom:0;\n            right:0;\n        ";case 2:return"\n          bottom:0;\n          left:0;\n        ";case 0:return"\n          top:0;\n          left:0;\n        ";case 1:default:return"\n            top:0;\n          right:0;\n        "}}}
`;var M,P;(P=M||(M={}))[P.LEFT=0]="LEFT",P[P.RIGHT=1]="RIGHT";let S=o.div`
  align-items: center;
  display: flex;
  // Switch to rows on large devices

  @media ${R} {
    flex-direction: column;

    & ${T} {
      width: 100%;
      max-width: 15rem;
    }
  }
`;var G;!function(e){e[e.PRIMARY=0]="PRIMARY",e[e.SECONDARY=1]="SECONDARY"}(G||(G={}));const j=o.section`
  margin: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border: solid 0.3rem ${e=>e.theme.palette.common.black};
  width: 75%;

  @media ${k} {
    width: 80%;
  }

  border-radius: ${e=>e.theme.borderRadius};
  ${e=>{switch(e.variant){case 1:return`\n            color: ${e.theme.palette.secondary.contrastText};\n            background-color: ${e.theme.palette.secondary.main};\n          `;case 0:default:return`\n            color: ${e.theme.palette.primary.contrastText};\n            background-color: ${e.theme.palette.primary.main};\n          `}}}
`;const A=e=>i.createElement(L,null,i.createElement(D,null," ",e.mainText," "),i.createElement(B,null," ",i.createElement("p",{style:{marginBottom:"0"}},e.descriptionText),i.createElement(Y,null,i.createElement(H,{src:"./assets/Github_Squid.81eaa863.svg"})))),H=o.img`
  margin-bottom: 5px;
  margin-right: 4px;
`,Y=o.div`
  /* position: fixed;

  bottom: 0;
  right: 0; */
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  z-index: -1;
`,D=o.div`
  display: flex;
  justify-content: center;
  margin-left: 1rem;
  font-weight: 500;
  letter-spacing: 0.105em;
  height: 20rem;
  flex-direction: column;
`,B=o.div`
  align-content: flex-end;

  background-color: ${e=>e.theme.palette.card_surface.main};
  color: ${e=>e.theme.palette.card_surface.contrastText};
  border-radius: ${e=>e.theme.borderRadius};
  width: 100%;
  max-height: 100%;
  /* overflow-y: scroll; */
`,L=o.div`
  display: flex;
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  margin: 10px;
  flex-direction: column;
  border-radius: ${e=>e.theme.borderRadius};

  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #262b33,
    6.22302px 6.22302px 18.6691px #000000;
`;let N=o(o.div`
  border-radius: ${e=>e.theme.borderRadius};
  background: #2c2f33;
  box-shadow: inset -6.22302px -6.22302px 18.6691px #3b4451,
    inset 6.22302px 6.22302px 18.6691px #000000;
`)`
  display: flex;
  height: 15rem;
  overflow-x: scroll;
  width: 100%;
  padding: 20px 0;

  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background: gray;
  }
  &::-webkit-scrollbar-thumb:horizontal {
    background: ${e=>e.theme.palette.primary.contrastText};
    border-radius: 10px;
  }
`;const z=e=>i.createElement(N,((e,o)=>{for(var i in o||(o={}))r.call(o,i)&&a(e,i,o[i]);if(t)for(var i of t(o))n.call(o,i)&&a(e,i,o[i]);return e})({},e.bind()),e.children),_=e=>{const t={from:{rotateY:0,transformPerspective:"500px"},to:{rotateY:e.style,transformPerspective:"500px"}};return i.createElement(l.div,{variants:t,initial:"from",animate:"to",transition:{type:"spring",damping:10,stiffness:100}},i.createElement(A,{mainText:e.repo.name,descriptionText:e.repo.description}))},q=()=>{const[e,t]=c.exports.useState([]),[r,n]=c.exports.useState("Galileo-dev");c.exports.useEffect((()=>{fetch(`https://api.github.com/users/${r}/repos`).then((e=>e.json())).then((e=>t(e)))}),[]);const[a,o]=c.exports.useState(0),l=s((e=>{o(e.scrolling?((e,t=10)=>e>0?e>t?t:e:e<-t?-t:e)(e.delta[0]):0)})),d=e.map((e=>i.createElement(_,{repo:e,key:e.id,style:a})));return console.log(e),i.createElement(i.Fragment,null,i.createElement(z,{bind:l},d))};function Q(e){const[t,r]=i.useState(h);return i.createElement(m,{theme:t},i.createElement(V,null),i.createElement(I,{position:C.TOPLEFT},i.createElement(b,{variant:x.PRIMARY,onClick:()=>{r(t==h?u:h)}},"Theme")),i.createElement($,null,i.createElement(O,null,i.createElement(j,null,i.createElement(E,null)),i.createElement(j,null,i.createElement(q,null)),i.createElement(j,null))))}const V=d`
  body {
    background: ${e=>e.theme.background};
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
`;p.render(i.createElement(i.StrictMode,null,i.createElement(Q,null)),document.getElementById("root"));
