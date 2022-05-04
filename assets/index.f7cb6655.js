var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;import{q as n,R as a,m as o,$ as l,G as i,a as c}from"./vendor.fb3c6ca3.js";const m={borderRadius:"7px",background:"url(https://unsplash.com/photos/hGV2TfOh0ns/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ5ODAyNjM4)",palette:{common:{black:"#222222",white:"#ffffff"},primary:{main:"#d4d4d4",contrastText:"#1f1f1f"},secondary:{main:"#cacaca",contrastText:"#363636"},surface:{main:"#1d1d1d",contrastText:"#d4d4d4"}}},d={borderRadius:"7px",background:"#2D2D2D",palette:{common:{black:"#181818",white:"#ffffff"},primary:{main:"#222222",contrastText:"#93C5FD"},secondary:{main:"#3C3C3C",contrastText:"#FFFFFF"},surface:{main:"#2D2D2D",contrastText:"#C1C1C1"}}};var s,u;(u=s||(s={}))[u.PRIMARY=0]="PRIMARY",u[u.SECONDARY=1]="SECONDARY";const h=n.div`
  margin: 8px;
  padding: 0.3rem;
  user-select: none;

  border-radius: ${e=>e.theme.borderRadius};
  ${e=>{switch(e.variant){case 1:return`\n            color: ${e.theme.palette.secondary.contrastText};\n            background-color: ${e.theme.palette.secondary.main};\n          `;case 0:default:return`\n            color: ${e.theme.palette.primary.contrastText};\n            background-color: ${e.theme.palette.primary.main};\n          `}}}
`,p=n=>{var l=n,{variant:i,children:c,onClick:m}=l;((n,a)=>{var o={};for(var l in n)t.call(n,l)&&a.indexOf(l)<0&&(o[l]=n[l]);if(null!=n&&e)for(var l of e(n))a.indexOf(l)<0&&r.call(n,l)&&(o[l]=n[l])})(l,["variant","children","onClick"]);return a.createElement(h,{variant:i,as:o.div,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:m},c)},f=()=>a.createElement(M,null,a.createElement(C,null,a.createElement(g,{src:"https://avatars.githubusercontent.com/u/32818066?v=4"}),a.createElement(x,null,a.createElement(T,null," Hello My name is Fionn aka Galileo"),a.createElement(b,null,"I'm 17 years old programmer who loves technology and programming, I started when I was 8 years old and haven't looked back since.",a.createElement("br",null)," the world fascinates me so I poke it."))));let g=n.img`
  border-radius: 1rem;
  height: auto;
  width: 15rem;
`,T=n.h2`
  margin: 0;
`;n.h3`
  margin: 0;
  margin-top: 1rem;
`;let b=n.p`
  padding: 0;
  margin: 0;
`,x=n.div`
  font-size: 1rem;
  margin: 0.5rem;
  margin-left: 2rem;
`;const v=`(max-width: ${"425px"})`,E=`(max-width: ${"768px"})`;let w=n.div`
  display: flex;
  align-items: center;
  // Switch to rows on large devices
  flex-direction: row;
`,y=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;var O,R;(R=O||(O={}))[R.TOPLEFT=0]="TOPLEFT",R[R.TOPRIGHT=1]="TOPRIGHT",R[R.BOTTOMLEFT=2]="BOTTOMLEFT",R[R.BOTTOMRIGHT=3]="BOTTOMRIGHT";let k=n.div`
  position: absolute;
  ${e=>{switch(e.position){case 3:return"\n          bottom:0;\n            right:0;\n        ";case 2:return"\n          bottom:0;\n          left:0;\n        ";case 0:return"\n          top:0;\n          left:0;\n        ";case 1:default:return"\n            top:0;\n          right:0;\n        "}}}
`;var $,I;(I=$||($={}))[I.LEFT=0]="LEFT",I[I.RIGHT=1]="RIGHT";let C=n.div`
  align-items: center;
  display: flex;
  // Switch to rows on large devices

  @media ${E} {
    flex-direction: column;

    & ${g} {
      width: 100%;
      max-width: 15rem;
    }
  }
`;var F;!function(e){e[e.PRIMARY=0]="PRIMARY",e[e.SECONDARY=1]="SECONDARY"}(F||(F={}));const M=n.section`
  margin: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border: solid 0.3rem ${e=>e.theme.palette.common.black};
  width: 75%;

  @media ${v} {
    width: 80%;
  }

  border-radius: ${e=>e.theme.borderRadius};
  ${e=>{switch(e.variant){case 1:return`\n            color: ${e.theme.palette.secondary.contrastText};\n            background-color: ${e.theme.palette.secondary.main};\n          `;case 0:default:return`\n            color: ${e.theme.palette.primary.contrastText};\n            background-color: ${e.theme.palette.primary.main};\n          `}}}
`;function D(e){const[t,r]=a.useState(m);return a.createElement(i,{theme:t},a.createElement(P,null),a.createElement(k,{position:O.TOPLEFT},a.createElement(p,{variant:s.PRIMARY,onClick:()=>{r(t==m?d:m)}},"Theme")),a.createElement(w,null,a.createElement(y,null,a.createElement(f,null),a.createElement(M,null),a.createElement(M,null))))}const P=l`
  body {
    background: ${e=>e.theme.background};
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
`;c.render(a.createElement(a.StrictMode,null,a.createElement(D,null)),document.getElementById("root"));
