"use strict";(self.webpackChunktest_netlify_deployment=self.webpackChunktest_netlify_deployment||[]).push([[988],{4988:(e,i,t)=>{t.r(i),t.d(i,{default:()=>E});var n=t(4647),s=t(827),r=t(3614),d=t(9281),l=t(5639),a=t(2646),o=t(5043),c=t(9);const x=(0,c.Ay)("section")`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 1024px) {
    
  }
`,h=(0,c.Ay)("div")`
  width: 140px;
  height: 150px;
  margin: 10px;
  border: 1px solid white;
  text-align: center;
  padding: 13px;
`;var p=t(5766),m=t.n(p),g=t(579);const u=Math.max(0,Math.round((new Date("03/20/2025").getTime()-(new Date).getTime())/864e5));function f(e){if(0===e)return"#ffffff"}function y(e){return 1===e?"9 giugno\n13 giugno":2===e?"16 giugno\n20 giugno":3===e?"23 giugno\n27 giugno":4===e?"30 giugno\n4 luglio":5===e?"7 luglio\n11 luglio":6===e?"14 luglio\n18 luglio":7===e?"21 luglio\n25 luglio":""}const j=(0,d.C)()((e=>{let{t:i}=e;const[t,n]=(0,o.useState)([]);return(0,o.useEffect)((()=>{(async()=>{var e=await(await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vR8lYl1nsSky2wAyXJPdIzWyxrLqKYX8GAAPNdavVFDv-VHhzi9hQcgp8n85aUp5UCak91xEnh_NGGL/pub?gid=574938590&single=true&output=csv")).blob().then((e=>e.text()));const i=m().parse(e,{dynamicTyping:!0,header:!0,skipEmptyLines:!0});if(null!==i&&void 0!==i&&i.data[0]){n([0,0,0,0,0,0,0])}})()}),[]),(0,g.jsx)(x,{children:t.map(((e,i)=>{return(0,g.jsxs)(h,{style:{backgroundColor:(t=53-e-u,0===t?"#282c34":t<10?"#eb9694":t<20?"#fef3bd":"#c1e1c5"),color:f(53-e-u)},children:[(0,g.jsxs)("h6",{style:{fontSize:"15px"},children:["Settimana ",i+1]}),(0,g.jsx)("div",{style:{whiteSpace:"pre-line",color:f(53-e-u)},children:y(i+1)}),(0,g.jsxs)("div",{children:["Posti rimanenti ",(0,g.jsx)("br",{})," ",(0,g.jsx)("span",{style:{fontWeight:"bold"},children:53-e-u})," / ",53]})]});var t}))})})),w=(0,c.Ay)("section")`
  position: relative;
  padding: 4rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 0;
  }
`,A=(0,c.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,b=(0,c.Ay)(s.A)`
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,v=(0,c.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 2rem;
  }
`,C=(0,c.Ay)("div")`
  max-width: 100%;
`,k=(0,c.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,z=(0,c.Ay)("p")`
  font-size: 13px;
`,S=(0,c.Ay)("p")`
  font-size: 11px;
  margin-bottom: 0.5em;
`,_=(0,c.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 1.5rem 0 2rem 0;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;var D=t(8492);(0,c.Ay)("section")`
  position: relative;
  padding: 4rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;const L=(0,c.Ay)("div")`
  min-height: 170px;

  @media screen and (max-width: 1024px) {
   min-height: 100px;
  }
`,P=e=>`${e} ${1===e?"settimana":"settimane"}`,$=(0,d.C)()((()=>{const[e,i]=(0,o.useState)(1);return(0,g.jsxs)(n.A,{style:{alignItems:"center"},children:[(0,g.jsx)(D.A,{min:1,max:7,onChange:e=>{i(e)},value:"number"===typeof e?e:0,tooltip:{formatter:P}}),(0,g.jsxs)(L,{children:[(0,g.jsx)("h6",{style:{textDecoration:e>3?"line-through":"none",textAlign:"center"},children:130*e+" \u20ac"}),e>3&&(0,g.jsxs)("h6",{style:{textAlign:"center"},children:[e>6?110*e:120*e," \u20ac"]})]})]})})),E=(0,d.C)()((e=>{let{icon:i,title:t,content:d,section:o,button:c,t:x,id:h,direction:p,cards:m,priceCalculator:u,notes:f}=e;return(0,g.jsx)(w,{children:(0,g.jsx)(r.zW,{direction:p,triggerOnce:!0,children:(0,g.jsxs)(b,{justify:"space-between",align:"middle",id:h,direction:p,children:[!m&&!u&&(0,g.jsx)(n.A,{lg:11,md:11,sm:12,xs:24,children:(0,g.jsx)(a.A,{src:i,width:"100%",height:"100%"})}),(0,g.jsx)(n.A,{lg:11,md:11,sm:11,xs:24,children:(0,g.jsxs)(v,{children:[(0,g.jsx)("h6",{children:t}),(0,g.jsx)(A,{children:d}),c&&(0,g.jsx)(_,{children:"object"===typeof c&&c.map(((e,i)=>(0,g.jsx)(l.$,{color:e.color,disabled:e.disabled,onClick:()=>e.href?window.open(e.href,"_blank"):{},children:x(e.title)},i)))}),o&&(0,g.jsxs)(C,{children:[(0,g.jsx)(s.A,{justify:"space-between",children:"object"===typeof o&&o.map(((e,i)=>(0,g.jsxs)(n.A,{span:7,children:[(0,g.jsx)(a.A,{src:e.icon,width:"60px",height:"60px"}),(0,g.jsx)(k,{children:x(e.title)}),(0,g.jsx)(z,{children:x(e.content)})]},i)))}),(0,g.jsx)(n.A,{children:"object"===typeof f&&f.map(((e,i)=>(0,g.jsx)(S,{children:e})))})]})]})}),(m||u)&&(0,g.jsxs)(n.A,{lg:11,md:11,sm:12,xs:24,children:[m&&(0,g.jsx)(j,{}),u&&(0,g.jsx)($,{})]})]})})})}))}}]);
//# sourceMappingURL=988.0c9b4986.chunk.js.map