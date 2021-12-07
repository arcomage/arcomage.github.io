"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[4501],{89842:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),r=a(94184),l=a.n(r),o=a(94989),c=a(96597),i=a(87337),s=a(18255),m=a(81317);const p=(0,o.QM)({"@keyframes explosion":{"100%":{"background-position":"-4032px"}},"@keyframes firework":{"100%":{"background-position":"-7936px"}},main:{"background-repeat":"no-repeat","@media screen and (prefers-reduced-motion: no-preference)":{"will-change":"background-position","animation-duration":`${m.k7}ms`,"animation-iteration-count":1}},explosion:{width:"192px",height:"192px",top:0,left:0,"background-image":`url(${c})`,"@media screen and (prefers-reduced-motion: no-preference)":{"animation-name":"$explosion","animation-timing-function":"steps(21)"}},firework:{width:"256px",height:"256px",top:"-300%",left:"1rem","background-image":`url(${i})`,"@media screen and (prefers-reduced-motion: no-preference)":{"animation-name":"$firework","animation-timing-function":"steps(31)"}}}),u=({n:e})=>{const t=p(),a=(0,n.useRef)(!1),r=(0,n.useRef)(0),o=(0,n.useRef)(null),c=(0,n.useContext)(s.$);return(0,n.useEffect)((()=>{if(a.current){const a=r.current,n=o.current;if(null!==n){const r=document.createElement("div");r.className=l()("transform -translate-x-1/2 -translate-y-1/2 absolute",c.narrowMobile?"scale-50":"scale-75",t.main,e<a?t.explosion:t.firework),n.appendChild(r),r.onanimationend=()=>n.removeChild(r)}}a.current||(a.current=!0),r.current=e}),[e]),n.createElement("div",{ref:o,className:"z-40 pointer-events-none w-full h-full absolute top-0 left-1/2"})}},6399:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(94184),l=a.n(r),o=a(94989),c=a(81317);const i=(0,o.QM)({"@keyframes fadeOutUp":{from:{transform:"translateY(0)",opacity:1},to:{transform:"translateY(-2.5em)",opacity:0}},main:{top:"-0.5em",left:"0.4em",opacity:0,"@media screen and (prefers-reduced-motion: no-preference)":{"will-change":"transform, opacity","animation-name":"$fadeOutUp","animation-duration":`${c.hh}ms`,"animation-timing-function":"ease-out"}}}),s=({n:e})=>{const t=i(),a=(0,n.useRef)(!1),r=(0,n.useRef)(0),o=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(a.current){const a=r.current,n=o.current;if(null!==n){const r=e-a,o=document.createElement("div"),c=document.createTextNode(`${r>0?"+":""}${r.toString()}`);o.className=l()(t.main,"absolute font-mono text-2xl text-shadow-md",`text-${r>=0?"green":"red"}-500`,"el-number"),o.appendChild(c),n.appendChild(o),o.onanimationend=()=>n.removeChild(o)}}a.current||(a.current=!0),r.current=e}),[e]),n.createElement("div",{ref:o,className:"z-50 absolute w-full h-full"})}},19372:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(70405),l=a(6360);const o=(0,n.memo)((()=>{const e=(0,l.C)((e=>e.visual.pixelation));return n.createElement(n.Fragment,null,n.createElement(r.ql,null,n.createElement("style",{type:"text/css"},`.pixelated { filter: ${e>0?"url(#pixelation)":"none"}; }`)),n.createElement("svg",{className:"absolute w-0 h-0 overflow-hidden","aria-hidden":"true"},n.createElement("filter",{id:"pixelation",x:"0",y:"0"},n.createElement("feFlood",{x:"1",y:"1",height:"1",width:"1"}),n.createElement("feComposite",{width:e,height:e}),n.createElement("feTile",null),n.createElement("feComposite",{in:"SourceGraphic",operator:"in"}),n.createElement("feMorphology",{operator:"dilate",radius:e/2})),n.createElement("filter",{id:"twist"},n.createElement("feTurbulence",{id:"turbulence4",baseFrequency:"0.02",numOctaves:"3",result:"noise",seed:"3"}),n.createElement("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"8"})),n.createElement("filter",{id:"grain"},n.createElement("feTurbulence",{baseFrequency:"0.60,0.90",result:"colorNoise"}),n.createElement("feColorMatrix",{in:"colorNoise",type:"matrix",values:".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"}),n.createElement("feComposite",{operator:"in",in2:"SourceGraphic",result:"monoNoise"}),n.createElement("feBlend",{in:"SourceGraphic",in2:"monoNoise",mode:"multiply"}))))}))},23636:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(3484),l=a(63211),o=a(74983),c=a(81317);const i=(0,n.memo)((()=>{const e=(0,n.useContext)(o.O);return n.createElement(r.Z,{screenActionType:l.MZ,exitableDelay:c.e4},e.i18n('You and your opponent are disconnected. Please go to "Preferences" and start a new game.'))}))},36194:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(67294),r=a(94184),l=a.n(r),o=a(94989),c=a(40496),i=a(7398),s=a(16205),m=a(74983),p=a(6360),u=a(63211),d=a(2947),f=a(81317);const h={lose:"You Lose!",tie:"Tie Game",win:"You Win!"},g={lose:"you lose",tie:"tie game",win:"you win"},E={lose:i,tie:s,win:c},x="0 0 6px rgba(225,191,191,0.98), 0 0 30px rgba(225,191,191,0.62), 0 0 12px rgba(238,54,37,0.78), 0 0 22px rgba(238,54,37,0.84), 0 0 38px rgba(238,54,37,0.88), 0 0 60px rgba(238,54,37,1)",y={lose:"0 0 6px rgba(0,0,0,0.98), 0 0 30px rgba(0,0,0,0.62), 0 0 12px rgba(0,0,0,0.78), 0 0 22px rgba(0,0,0,0.84), 0 0 38px rgba(0,0,0,0.88), 0 0 60px rgba(0,0,0,1)",tie:x,win:x},b=(0,o.QM)({"@keyframes fadein":{"0%":{opacity:0},"100%":{opacity:1}},container:{padding:"15vh 10%",opacity:1,"animation-name":"$fadein","animation-iteration-count":1,"animation-timing-function":"ease-in","animation-duration":"0.4s"},main:{"background-image":({type:e})=>`url(${E[e]})`},notetext:{top:"62%",height:"5em","font-size":"5vh","line-height":"5vh"},text:{"font-size":"15vh","line-height":"15vh",bottom:"53%","text-shadow":({type:e})=>y[e]},erathiantext:{"font-size":"6.8vh","line-height":"6.8vh",bottom:"42%","text-shadow":"0 0 10px rgba(125,203,255,0.98), 0 0 30px rgba(125,203,255,0.82), 0 0 12px rgba(0,129,255,0.88), 0 0 22px rgba(0,129,255,0.84), 0 0 38px rgba(0,129,255,0.88), 0 0 60px rgba(0,129,255,1)"},erathiantextspace:{display:"inline-block",width:"4em"}}),v=(0,n.memo)((e=>{const t=(0,p.T)(),a=(0,n.useContext)(m.O),r=b(e),{type:o,surrender:c}=e,i=a.i18n(h[o]),s=g[o].split(" "),E=n.createElement(n.Fragment,null,s[0],n.createElement("span",{className:r.erathiantextspace}),s[1]);let x=null;if(c)switch(o){case"win":x=a.i18n("With no usable or discardable card, your opponent has surrendered");break;case"lose":x=a.i18n("With no usable or discardable card, you have surrendered")}const[y,v]=(0,n.useState)(!1);(0,n.useEffect)((()=>{v(!1);const e=setTimeout((()=>{v(!0)}),f.d);return()=>{clearTimeout(e)}}),[e]);const w=()=>{t({type:u.gC})};(0,d.Z)(null,w,f.d);const k=y?{onClick:w,onContextMenu:w,tabIndex:0}:{};return n.createElement("div",Object.assign({className:l()("absolute w-full h-full top-0 left-0 z-90 bg-black bg-opacity-50",r.container)},k),n.createElement("div",{className:l()("w-full h-full bg-center bg-no-repeat bg-contain relative",r.main)},null!==x&&n.createElement("div",{className:l()(r.notetext,"absolute w-full font-bold text-white text-center text-shadow-stroke","robotocondensed","el-text")},x),n.createElement("div",{className:l()(r.text,"absolute w-full font-bold text-white text-center","robotocondensed","el-text")},i),n.createElement("div",{className:l()(r.erathiantext,"absolute w-full tracking-tighter text-white text-center","erathian-normal")},E)))}))},15586:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(3484);const l=(0,n.memo)((({children:e})=>n.createElement(n.Fragment,null,e.split("\n").map(((e,t)=>n.createElement("p",{key:t},e))))));var o=a(63211),c=a(74983),i=a(23644);const s=(0,n.memo)((()=>{const e=(0,n.useContext)(c.O),t=e.i18n("Please go to %s to view more information (including %s1), star the repo and follow %s2 there.").split(/(%s\d?)/g);return t.forEach(((a,r)=>{if("string"==typeof a&&a.match(/^%s\d?$/))switch(a){case"%s":t[r]=n.createElement("a",{key:a,href:i.Dj,target:"_blank",rel:"noopener noreferrer"},e.i18n("the GitHub project page"));break;case"%s1":t[r]=n.createElement("a",{key:a,href:i.Tr,target:"_blank",rel:"noopener noreferrer"},e.i18n("an informative tutorial image in English"));break;case"%s2":t[r]=n.createElement("a",{key:a,href:i.Vr,target:"_blank",rel:"noopener noreferrer"},"@tomchen")}})),n.createElement(r.Z,{screenActionType:o.Xc},n.createElement("small",{className:"version select-all"},"v","1.3.1"),n.createElement("p",{className:"description select-text"},"ArcoMage HD"!==e.i18n("ArcoMage HD")&&n.createElement(n.Fragment,null,n.createElement("strong",null,e.i18n("ArcoMage HD")),n.createElement(n.Fragment,null," - ")),e.i18n("DESC")),n.createElement("p",{className:"help-text select-text"},n.createElement("strong",null,t)),n.createElement("p",{className:"help-text select-text"},n.createElement("strong",null,e.i18n("Game rules"),e.i18n(": "))),n.createElement("div",{className:"help-text select-text"},n.createElement(l,null,e.i18n("GAMERULES"))))}))},76777:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(94184),l=a.n(r),o=a(94989),c=a(3484),i=a(63211),s=a(74983),m=a(87346),p=a(81317);const u=(0,o.QM)({"@keyframes all":{"0%, 32%":{transform:"none"},"68%, 100%":{transform:"rotate(90deg) translateX(-100%)"}},"@keyframes mouth":{"0%, 55.9999%":{transform:"none"},"56%, 100%":{transform:"scaleY(-1) translateY(-35%)"}},"@keyframes smiley":{"0%, 32%":{transform:"none"},"68%, 100%":{transform:"rotate(-90deg)"}},wrapper:{"padding-right":"52%",width:"10rem","margin-left":"1rem","margin-bottom":"1rem"},all:{"will-change":"transform","transform-origin":"bottom left",animation:"$all 2.3s linear infinite"},arrow:{top:"8%",right:"8%",width:"30%"},mouth:{"will-change":"transform","transform-origin":"center",animation:"$mouth 2.3s linear infinite"},smiley:{top:"50%",left:0,"margin-top":"-50%","will-change":"transform",animation:"$smiley 2.3s linear infinite"}}),d=(0,n.memo)((()=>{const e=(0,n.useContext)(s.O),t=u();return n.createElement(c.Z,{screenActionType:i.Ij,darkerBg:!0,exitableDelay:p.Wk},n.createElement(m.Z,{title:e.i18n("Please rotate your device to landscape mode")},n.createElement("div",{className:l()(t.wrapper,"relative")},n.createElement("svg",{className:l()(t.arrow,"absolute"),viewBox:"0 0 13.16 10.677",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{stroke:"#fff",strokeLinecap:"round",strokeWidth:"1.323"},n.createElement("path",{d:"M.662.66c5.926.163 9.178 3.464 9.354 9.354M12.499 6.02l-2.483 3.991M6.513 6.93l3.503 3.08"}))),n.createElement("div",{className:l()(t.all,"relative")},n.createElement("svg",{viewBox:"0 0 261.17 544.12",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fill:"#fff",d:"M15.826 544.12h229.52c8.74 0 15.826-7.086 15.826-15.826V15.834c0-8.75-7.086-15.826-15.826-15.826H15.826C7.086.008 0 7.093 0 15.834v512.45c0 8.749 7.086 15.835 15.826 15.835zm37.59-11.877h-8.587a1.037 1.037 0 01-1.033-1.041c0-.564.459-1.043 1.033-1.043h8.587c.574 0 1.042.479 1.042 1.043a1.037 1.037 0 01-1.042 1.041zm0-4.187h-8.587a1.029 1.029 0 01-1.033-1.033c0-.564.459-1.041 1.033-1.041h8.587c.574 0 1.042.467 1.042 1.041a1.023 1.023 0 01-1.042 1.033zm7.239 2.734c0 1.234-.995 2.238-2.228 2.238s-2.238-1.004-2.238-2.238v-7.373H42.065v7.373a2.233 2.233 0 01-2.228 2.238 2.24 2.24 0 01-2.238-2.238v-9.6a2.24 2.24 0 012.238-2.238h18.589a2.233 2.233 0 012.228 2.238v9.6zm91.035-2.496a3.952 3.952 0 01-3.949 3.959h-34.3a3.954 3.954 0 01-3.959-3.959v-5.938a3.955 3.955 0 013.959-3.959h34.3c2.19 0 3.949 1.77 3.949 3.959zm64.69 5.145h-7.009a2.233 2.233 0 010-4.465h7.009c1.511 0 2.735-1.176 2.735-2.611 0-1.443-1.225-2.609-2.735-2.609h-5.909c-.22.305-.459.506-1.004.496a1.23 1.23 0 01-.488-.096l-3.644-1.539c-.439-.191-.736-.621-.736-1.1s.287-.918.728-1.1l3.643-1.539c.44-.182.957-.096 1.311.258.048.047.096.096.134.152h5.967c3.969 0 7.191 3.176 7.191 7.086.008 3.893-3.224 7.067-7.193 7.067zm13.178-522.94a5.958 5.958 0 015.957 5.958 5.959 5.959 0 11-5.957-5.958zm-61.296 3.605a2.35 2.35 0 012.353 2.352c0 1.301-1.052 2.353-2.353 2.353s-2.353-1.052-2.353-2.353 1.062-2.352 2.353-2.352zm-7.172 0a2.342 2.342 0 012.343 2.352c0 1.301-1.042 2.353-2.343 2.353s-2.353-1.052-2.353-2.353 1.062-2.352 2.353-2.352zm-70.523-3.289h58.694a4.782 4.782 0 010 9.562H90.567a4.783 4.783 0 01-4.781-4.781 4.775 4.775 0 014.781-4.781zM11.58 31.67H249.6v471.89H11.58z"})),n.createElement("svg",{className:l()(t.smiley,"absolute"),viewBox:"0 0 79.375 79.375",xmlns:"http://www.w3.org/2000/svg"},n.createElement("circle",{cx:"21.828",cy:"28.297",r:"6.804",fill:"#fff"}),n.createElement("circle",{cx:"57.544",cy:"28.297",r:"6.804",fill:"#fff"}),n.createElement("path",{className:l()(t.mouth,""),d:"M15.119 56.88c13.919-9.022 29.213-12.999 49.137 0",stroke:"#fff",strokeLinecap:"round",strokeWidth:"2"}))))))}))},96499:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),r=a(94184),l=a.n(r),o=a(6360),c=a(3484),i=a(68199),s=a(63211),m=a(74983),p=a(87346);const u=(0,n.memo)((()=>{const e=(0,o.C)((e=>e.lang.code)),t=(0,o.C)((e=>e.lang.erathian)),a=(0,n.useContext)(m.O),r=(0,o.T)(),u=(()=>{const e=a.i18n("ERATHIAN");if(void 0!==e){const t=e.split("%s");return[n.createElement(n.Fragment,{key:0},t[0]),n.createElement("span",{key:1,className:l()("text-2xl p-0","erathian")},"Erathian"),n.createElement(n.Fragment,{key:2},t[1])]}return null})();return n.createElement(c.Z,{screenActionType:s.e8},n.createElement("div",{className:"my-5 flex flex-wrap justify-center"},[...i.RI].sort(((e,t)=>e.localeCompare(t))).map((t=>n.createElement(p.Z,{key:t,title:i.Vx[t].en},n.createElement("button",{key:t,lang:t,className:l()("m-2",{active:t===e}),onClick:()=>{r({type:s.yv,lang:t})}},i.Vx[t].local))))),n.createElement("label",{className:"flex w-full justify-center"},n.createElement("input",{type:"checkbox",checked:t,disabled:!1===i.Vx[e].isLatinScript,onChange:e=>{r({type:s._g,erathian:e.target.checked})}}),n.createElement("span",null,u)))}))},73845:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(6360),l=a(3484),o=a(63211),c=a(74983),i=a(48093),s=a(30273),m=a(99871),p=a(53775),u=a(87346);const d=(0,n.memo)((()=>{const e=(0,r.C)((e=>e.sound.volume)),t=(0,r.C)((e=>e.sound.stereo)),a=(0,r.C)((e=>e.visual.pixelation)),d=(0,r.C)((e=>e.visual.visualvalues)),f=(0,n.useContext)(c.O),h=(0,r.T)(),[g,E]=(0,n.useState)(0);return(0,n.useEffect)((()=>{E(m.Q.findIndex((e=>(0,p.V)(d,Object.assign(Object.assign({},i.yf),e.values)))))}),[d]),n.createElement(l.Z,{screenActionType:o.je},n.createElement("h3",null,f.i18n("Sound"),f.i18n(": ")),n.createElement("label",null,n.createElement("div",{className:"flex justify-between"},n.createElement("span",null,f.i18n("Volume")),n.createElement("span",null,e)),n.createElement("input",{type:"range",min:s.Z_,max:s.Qm,step:s.AI,value:e,onChange:e=>{h({type:o.j4,volume:parseFloat(e.target.value)})}})),n.createElement("div",{className:"flex justify-evenly"},n.createElement("label",{className:"flex"},n.createElement("input",{type:"checkbox",checked:0===e,onChange:e=>{h({type:o.j4,volume:e.target.checked?0:i.Yz})}}),n.createElement("span",null,f.i18n("Mute"))),n.createElement("label",{className:"flex"},n.createElement("input",{type:"checkbox",checked:t,onChange:e=>{h({type:o.qR,stereo:e.target.checked})}}),n.createElement("span",null,f.i18n("Stereo Sound")))),n.createElement("h3",null,f.i18n("Graphics"),f.i18n(": ")),n.createElement("label",null,n.createElement("div",{className:"flex justify-between"},n.createElement("span",{className:"!p-0"},n.createElement("span",null,f.i18n("Pixelation"))),n.createElement("span",null,a)),n.createElement("input",{type:"range",min:s.EP,max:s.eV,step:s.wg,value:a,onChange:e=>{h({type:o.z1,pixelation:parseInt(e.target.value,10)})}})),n.createElement("label",{className:"flex"},n.createElement("span",null,f.i18n("Visual Preset")," ",n.createElement(u.Z,{title:`${f.i18n("Reset")}${f.i18n(": ")}Alt + R`,placement:"top"},n.createElement("span",{className:"emoji !p-0"},"💡"))),n.createElement("select",{className:"flex-grow",value:g,onChange:e=>{"-1"!==e.target.value&&h({type:o.TH,payload:Object.assign(Object.assign({},i.yf),m.Q[parseInt(e.target.value,10)].values)})}},m.Q.map(((e,t)=>n.createElement("option",{key:t,value:t},f.i18n(e.en)))),-1===g&&n.createElement("option",{key:-1,value:-1},f.i18n("Customized")))),n.createElement("div",{className:"text-sm"},n.createElement("div",{className:"flex flex-wrap"},m.p.filter((e=>"main"===e.type)).map((e=>n.createElement("label",{key:e.term,className:"w-1/4 px-1"},n.createElement("div",{className:"flex justify-between"},n.createElement("span",{className:"!pr-0"},f.i18n(e.en)),n.createElement("span",{className:"!pl-0"},d[e.term])),n.createElement("input",{type:"range",min:s.wU[e.term].min,max:s.wU[e.term].max,step:s.wU[e.term].step,value:d[e.term],onChange:t=>{h({type:o.TH,payload:{[e.term]:parseFloat(t.target.value)}})}}))))),n.createElement("div",{className:"flex flex-wrap justify-center"},n.createElement("span",{className:"px-3 py-0.5"},f.i18n("Filters"),f.i18n(": "),n.createElement(u.Z,{title:f.i18n("Filter may slow down the game"),placement:"top"},n.createElement("span",{className:"emoji !p-0"},"🧪"))),m.p.filter((e=>"filter"===e.type)).map((e=>n.createElement("label",{key:e.term},n.createElement("input",{type:"checkbox",checked:d[e.term],onChange:t=>{h({type:o.TH,payload:{[e.term]:t.target.checked}})}}),n.createElement("span",{className:"!pl-1"},f.i18n(e.en))))))),n.createElement("div",{className:"button-wrapper"},n.createElement("button",{onClick:e=>{h({type:o.j4,volume:i.Yz}),h({type:o.qR,stereo:i.j0}),h({type:o.z1,pixelation:i.p8}),h({type:o.TH,payload:i.yf})}},f.i18n("Reset"))))}))},3484:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),r=a(94184),l=a.n(r),o=a(94989),c=a(6360),i=a(64294),s=a(99348),m=a(74983),p=a(2947),u=a(18255),d=a(63211),f=a(87346);const h=(0,o.QM)({logo:{"background-image":`url(${i})`,width:"134.5px",height:"46.5px"}}),g=(0,n.memo)((({screenActionType:e,children:t,onCancel:a,darkerBg:r=!1,exitableDelay:o=0})=>{const i=(0,c.T)(),g=(0,n.useContext)(m.O),[E,x]=(0,n.useState)(!1);(0,n.useEffect)((()=>{x(!1);const e=setTimeout((()=>{x(!0)}),o);return()=>{clearTimeout(e)}}),[]);const y=(0,n.useRef)();y.current=E;const b=()=>{y.current&&(void 0!==a&&a(),i({type:e,show:!1}))},v=(0,n.useRef)(null);(0,s.Z)(v,b),(0,p.Z)("Escape",b),(0,p.Z)("Home",b);const w=(0,n.useContext)(u.$),k=h();return n.createElement("div",{className:l()("window-bg",{darkerbg:r})},n.createElement("div",{className:"window-outerwrapper"},n.createElement("div",{ref:v,className:l()("window-wrapper",e.toLowerCase().replace(/_/g,"-"))},n.createElement(f.Z,{title:g.i18n("ArcoMage HD")},n.createElement("div",{className:l()(k.logo,{hidden:w.narrowMobile&&(e===d.fy||e===d.je)},"m-auto bg-no-repeat bg-center bg-contain")})),t,n.createElement(f.Z,{title:g.i18n("Cancel")},n.createElement("button",{accessKey:"c",className:"cancel",onClick:b})))))}))},30515:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(94184),l=a.n(r),o=a(74983);const c=(0,n.memo)((({shown:e=!0})=>{const t=(0,n.useContext)(o.O);return e?n.createElement("div",{className:l()("transform -translate-y-1/2 w-full text-center text-yellow-300 pointer-events-none text-4xl text-shadow-lg","robotocondensed","el-text")},t.i18n("Discard a card")):null}))},87346:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(21023),r=a(67294),l=a(81317);const o=(0,r.memo)((({title:e,children:t,placement:a})=>r.createElement(n.Z,{title:r.createElement("span",{style:{fontSize:"120%"}},e),"aria-label":e,arrow:!0,enterDelay:l.Kw,leaveDelay:l.WB,placement:a,disableInteractive:!0},t)))}}]);