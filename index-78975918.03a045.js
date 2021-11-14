"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[4501],{89842:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(94184),l=n.n(r),o=n(27889),i=n(96597),c=n(87337),s=n(18255),m=n(81317);const d=(0,o.QM)({"@keyframes explosion":{"100%":{"background-position":"-4032px"}},"@keyframes firework":{"100%":{"background-position":"-7936px"}},main:{"background-repeat":"no-repeat","@media screen and (prefers-reduced-motion: no-preference)":{"will-change":"background-position","animation-duration":`${m.k7}ms`,"animation-iteration-count":1}},explosion:{width:"192px",height:"192px",top:0,left:0,"background-image":`url(${i})`,"@media screen and (prefers-reduced-motion: no-preference)":{"animation-name":"$explosion","animation-timing-function":"steps(21)"}},firework:{width:"256px",height:"256px",top:"-300%",left:"1rem","background-image":`url(${c})`,"@media screen and (prefers-reduced-motion: no-preference)":{"animation-name":"$firework","animation-timing-function":"steps(31)"}}}),u=({n:e})=>{const t=d(),n=(0,a.useRef)(!1),r=(0,a.useRef)(0),o=(0,a.useRef)(null),i=(0,a.useContext)(s.$);return(0,a.useEffect)((()=>{if(n.current){const n=r.current,a=o.current;if(null!==a){const r=document.createElement("div");r.className=l()("transform -translate-x-1/2 -translate-y-1/2 absolute",i.narrowMobile?"scale-50":"scale-75",t.main,e<n?t.explosion:t.firework),a.appendChild(r),r.onanimationend=()=>a.removeChild(r)}}n.current||(n.current=!0),r.current=e}),[e]),a.createElement("div",{ref:o,className:"z-40 pointer-events-none w-full h-full absolute top-0 left-1/2"})}},6399:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(94184),l=n.n(r),o=n(27889),i=n(81317);const c=(0,o.QM)({"@keyframes fadeOutUp":{from:{transform:"translateY(0)",opacity:1},to:{transform:"translateY(-2.5em)",opacity:0}},main:{top:"-0.5em",left:"0.4em",opacity:0,"@media screen and (prefers-reduced-motion: no-preference)":{"will-change":"transform, opacity","animation-name":"$fadeOutUp","animation-duration":`${i.hh}ms`,"animation-timing-function":"ease-out"}}}),s=({n:e})=>{const t=c(),n=(0,a.useRef)(!1),r=(0,a.useRef)(0),o=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(n.current){const n=r.current,a=o.current;if(null!==a){const r=e-n,o=document.createElement("div"),i=document.createTextNode(`${r>0?"+":""}${r.toString()}`);o.className=l()(t.main,"absolute font-mono text-2xl text-shadow-md",`text-${r>=0?"green":"red"}-500`,"el-number"),o.appendChild(i),a.appendChild(o),o.onanimationend=()=>a.removeChild(o)}}n.current||(n.current=!0),r.current=e}),[e]),a.createElement("div",{ref:o,className:"z-50 absolute w-full h-full"})}},48391:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(10488);const l=(0,a.memo)((({src:e,level:t,fit:n,offsetX:l=.5,offsetY:o=.5,width:i,height:c,cleanup:s=!1})=>{const m=(0,a.useRef)(null),d=()=>{setTimeout((()=>{const a=m.current;if(null!==a){a.style.width=null!=i?i:"100%",a.style.height=null!=c?c:"100%",a.width=a.offsetWidth,a.height=a.offsetHeight,a.style.cssText="image-rendering: optimizeSpeed;image-rendering: -moz-crisp-edges;image-rendering: -o-crisp-edges;image-rendering: -webkit-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;image-rendering: pixelated; ";const m=a.getContext("2d");if(null!==m){m.webkitImageSmoothingEnabled=!1,m.mozImageSmoothingEnabled=!1,m.imageSmoothingEnabled=!1;const i=1/t,c=a.width*i,d=a.height*i,u=new Image;u.src=e,u.addEventListener("load",(()=>{if(n){const{offsetX:e,offsetY:t,width:a,height:i}={contain:r.X,cover:r.v}[n](c,d,u.width,u.height,1,l,o);m.drawImage(u,e,t,a,i)}else m.drawImage(u,0,0,c,d);m.drawImage(a,0,0,c,d,0,0,a.width,a.height),s&&m.clearRect(0,0,c,d)}))}}}),0)};return(0,a.useEffect)((()=>(window.addEventListener("resize",d),window.addEventListener("orientationchange",d),d(),()=>{window.removeEventListener("resize",d),window.removeEventListener("orientationchange",d)})),[]),(0,a.useEffect)((()=>{d()})),a.createElement("canvas",{ref:m})}))},23636:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(3484),l=n(63211),o=n(74983),i=n(81317);const c=(0,a.memo)((()=>{const e=(0,a.useContext)(o.O);return a.createElement(r.Z,{screenActionType:l.MZ,exitableDelay:i.e4},e.i18n('You and your opponent are disconnected. Please go to "Preferences" and start a new game.'))}))},36194:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),r=n(94184),l=n.n(r),o=n(27889),i=n(40496),c=n(7398),s=n(16205),m=n(74983),d=n(6360),u=n(63211),p=n(2947),g=n(81317);const f={lose:"You Lose!",tie:"Tie Game",win:"You Win!"},h={lose:"you lose",tie:"tie game",win:"you win"},x={lose:c,tie:s,win:i},w="0 0 6px rgba(225,191,191,0.98), 0 0 30px rgba(225,191,191,0.62), 0 0 12px rgba(238,54,37,0.78), 0 0 22px rgba(238,54,37,0.84), 0 0 38px rgba(238,54,37,0.88), 0 0 60px rgba(238,54,37,1)",E={lose:"0 0 6px rgba(0,0,0,0.98), 0 0 30px rgba(0,0,0,0.62), 0 0 12px rgba(0,0,0,0.78), 0 0 22px rgba(0,0,0,0.84), 0 0 38px rgba(0,0,0,0.88), 0 0 60px rgba(0,0,0,1)",tie:w,win:w},b=(0,o.QM)({"@keyframes fadein":{"0%":{opacity:0},"100%":{opacity:1}},container:{padding:"15vh 10%",opacity:1,"animation-name":"$fadein","animation-iteration-count":1,"animation-timing-function":"ease-in","animation-duration":"0.4s"},main:{"background-image":({type:e})=>`url(${x[e]})`},notetext:{top:"62%",height:"5em","font-size":"5vh","line-height":"5vh"},text:{"font-size":"15vh","line-height":"15vh",bottom:"53%","text-shadow":({type:e})=>E[e]},erathiantext:{"font-size":"6.8vh","line-height":"6.8vh",bottom:"42%","text-shadow":"0 0 10px rgba(125,203,255,0.98), 0 0 30px rgba(125,203,255,0.82), 0 0 12px rgba(0,129,255,0.88), 0 0 22px rgba(0,129,255,0.84), 0 0 38px rgba(0,129,255,0.88), 0 0 60px rgba(0,129,255,1)"},erathiantextspace:{display:"inline-block",width:"4em"}}),v=(0,a.memo)((e=>{const t=(0,d.T)(),n=(0,a.useContext)(m.O),r=b(e),{type:o,surrender:i}=e,c=n.i18n(f[o]),s=h[o].split(" "),x=a.createElement(a.Fragment,null,s[0],a.createElement("span",{className:r.erathiantextspace}),s[1]);let w=null;if(i)switch(o){case"win":w=n.i18n("With no usable or discardable card, your opponent has surrendered");break;case"lose":w=n.i18n("With no usable or discardable card, you have surrendered")}const[E,v]=(0,a.useState)(!1);(0,a.useEffect)((()=>{v(!1);const e=setTimeout((()=>{v(!0)}),g.d);return()=>{clearTimeout(e)}}),[e]);const y=()=>{t({type:u.gC})};(0,p.Z)(null,y,g.d);const k=E?{onClick:y,onContextMenu:y,tabIndex:0}:{};return a.createElement("div",Object.assign({className:l()("absolute w-full h-full top-0 left-0 z-90 bg-black bg-opacity-50",r.container)},k),a.createElement("div",{className:l()("w-full h-full bg-center bg-no-repeat bg-contain relative",r.main)},null!==w&&a.createElement("div",{className:l()(r.notetext,"absolute w-full font-bold text-white text-center text-shadow-stroke","robotocondensed","el-text")},w),a.createElement("div",{className:l()(r.text,"absolute w-full font-bold text-white text-center","robotocondensed","el-text")},c),a.createElement("div",{className:l()(r.erathiantext,"absolute w-full tracking-tighter text-white text-center","erathian-normal")},x)))}))},15586:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(3484);const l=(0,a.memo)((({children:e})=>a.createElement(a.Fragment,null,e.split("\n").map(((e,t)=>a.createElement("p",{key:t},e))))));var o=n(63211),i=n(74983),c=n(23644);const s=(0,a.memo)((()=>{const e=(0,a.useContext)(i.O),t=e.i18n("Please go to %s to view more information (including %s1), star the repo and follow %s2 there.").split(/(%s\d?)/g);return t.forEach(((n,r)=>{if("string"==typeof n&&n.match(/^%s\d?$/))switch(n){case"%s":t[r]=a.createElement("a",{key:n,href:c.Dj,target:"_blank",rel:"noopener noreferrer"},e.i18n("the GitHub project page"));break;case"%s1":t[r]=a.createElement("a",{key:n,href:c.Tr,target:"_blank",rel:"noopener noreferrer"},e.i18n("an informative tutorial image in English"));break;case"%s2":t[r]=a.createElement("a",{key:n,href:c.Vr,target:"_blank",rel:"noopener noreferrer"},"@tomchen")}})),a.createElement(r.Z,{screenActionType:o.Xc},a.createElement("small",{className:"version select-all"},"v","1.2.0"),a.createElement("p",{className:"description select-text"},"ArcoMage HD"!==e.i18n("ArcoMage HD")&&a.createElement(a.Fragment,null,a.createElement("strong",null,e.i18n("ArcoMage HD")),a.createElement(a.Fragment,null," - ")),e.i18n("DESC")),a.createElement("p",{className:"help-text select-text"},a.createElement("strong",null,t)),a.createElement("p",{className:"help-text select-text"},a.createElement("strong",null,e.i18n("Game rules"),e.i18n(": "))),a.createElement("div",{className:"help-text select-text"},a.createElement(l,null,e.i18n("GAMERULES"))))}))},76777:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(94184),l=n.n(r),o=n(27889),i=n(3484),c=n(63211),s=n(74983),m=n(87346),d=n(81317);const u=(0,o.QM)({"@keyframes all":{"0%, 32%":{transform:"none"},"68%, 100%":{transform:"rotate(90deg) translateX(-100%)"}},"@keyframes mouth":{"0%, 55.9999%":{transform:"none"},"56%, 100%":{transform:"scaleY(-1) translateY(-35%)"}},"@keyframes smiley":{"0%, 32%":{transform:"none"},"68%, 100%":{transform:"rotate(-90deg)"}},wrapper:{"padding-right":"52%",width:"10rem","margin-left":"1rem","margin-bottom":"1rem"},all:{"will-change":"transform","transform-origin":"bottom left",animation:"$all 2.3s linear infinite"},arrow:{top:"8%",right:"8%",width:"30%"},mouth:{"will-change":"transform","transform-origin":"center",animation:"$mouth 2.3s linear infinite"},smiley:{top:"50%",left:0,"margin-top":"-50%","will-change":"transform",animation:"$smiley 2.3s linear infinite"}}),p=(0,a.memo)((()=>{const e=(0,a.useContext)(s.O),t=u();return a.createElement(i.Z,{screenActionType:c.Ij,darkerBg:!0,exitableDelay:d.Wk},a.createElement(m.Z,{title:e.i18n("Please rotate your device to landscape mode")},a.createElement("div",{className:l()(t.wrapper,"relative")},a.createElement("svg",{className:l()(t.arrow,"absolute"),viewBox:"0 0 13.16 10.677",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{stroke:"#fff",strokeLinecap:"round",strokeWidth:"1.323"},a.createElement("path",{d:"M.662.66c5.926.163 9.178 3.464 9.354 9.354M12.499 6.02l-2.483 3.991M6.513 6.93l3.503 3.08"}))),a.createElement("div",{className:l()(t.all,"relative")},a.createElement("svg",{viewBox:"0 0 261.17 544.12",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fill:"#fff",d:"M15.826 544.12h229.52c8.74 0 15.826-7.086 15.826-15.826V15.834c0-8.75-7.086-15.826-15.826-15.826H15.826C7.086.008 0 7.093 0 15.834v512.45c0 8.749 7.086 15.835 15.826 15.835zm37.59-11.877h-8.587a1.037 1.037 0 01-1.033-1.041c0-.564.459-1.043 1.033-1.043h8.587c.574 0 1.042.479 1.042 1.043a1.037 1.037 0 01-1.042 1.041zm0-4.187h-8.587a1.029 1.029 0 01-1.033-1.033c0-.564.459-1.041 1.033-1.041h8.587c.574 0 1.042.467 1.042 1.041a1.023 1.023 0 01-1.042 1.033zm7.239 2.734c0 1.234-.995 2.238-2.228 2.238s-2.238-1.004-2.238-2.238v-7.373H42.065v7.373a2.233 2.233 0 01-2.228 2.238 2.24 2.24 0 01-2.238-2.238v-9.6a2.24 2.24 0 012.238-2.238h18.589a2.233 2.233 0 012.228 2.238v9.6zm91.035-2.496a3.952 3.952 0 01-3.949 3.959h-34.3a3.954 3.954 0 01-3.959-3.959v-5.938a3.955 3.955 0 013.959-3.959h34.3c2.19 0 3.949 1.77 3.949 3.959zm64.69 5.145h-7.009a2.233 2.233 0 010-4.465h7.009c1.511 0 2.735-1.176 2.735-2.611 0-1.443-1.225-2.609-2.735-2.609h-5.909c-.22.305-.459.506-1.004.496a1.23 1.23 0 01-.488-.096l-3.644-1.539c-.439-.191-.736-.621-.736-1.1s.287-.918.728-1.1l3.643-1.539c.44-.182.957-.096 1.311.258.048.047.096.096.134.152h5.967c3.969 0 7.191 3.176 7.191 7.086.008 3.893-3.224 7.067-7.193 7.067zm13.178-522.94a5.958 5.958 0 015.957 5.958 5.959 5.959 0 11-5.957-5.958zm-61.296 3.605a2.35 2.35 0 012.353 2.352c0 1.301-1.052 2.353-2.353 2.353s-2.353-1.052-2.353-2.353 1.062-2.352 2.353-2.352zm-7.172 0a2.342 2.342 0 012.343 2.352c0 1.301-1.042 2.353-2.343 2.353s-2.353-1.052-2.353-2.353 1.062-2.352 2.353-2.352zm-70.523-3.289h58.694a4.782 4.782 0 010 9.562H90.567a4.783 4.783 0 01-4.781-4.781 4.775 4.775 0 014.781-4.781zM11.58 31.67H249.6v471.89H11.58z"})),a.createElement("svg",{className:l()(t.smiley,"absolute"),viewBox:"0 0 79.375 79.375",xmlns:"http://www.w3.org/2000/svg"},a.createElement("circle",{cx:"21.828",cy:"28.297",r:"6.804",fill:"#fff"}),a.createElement("circle",{cx:"57.544",cy:"28.297",r:"6.804",fill:"#fff"}),a.createElement("path",{className:l()(t.mouth,""),d:"M15.119 56.88c13.919-9.022 29.213-12.999 49.137 0",stroke:"#fff",strokeLinecap:"round",strokeWidth:"2"}))))))}))},96499:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(94184),l=n.n(r),o=n(6360),i=n(3484),c=n(68199),s=n(63211),m=n(74983),d=n(87346);const u=(0,a.memo)((()=>{const e=(0,o.C)((e=>e.lang.code)),t=(0,o.C)((e=>e.lang.erathian)),n=(0,a.useContext)(m.O),r=(0,o.T)(),u=(()=>{const e=n.i18n("ERATHIAN");if(void 0!==e){const t=e.split("%s");return[a.createElement(a.Fragment,{key:0},t[0]),a.createElement("span",{key:1,className:l()("text-2xl p-0","erathian")},"Erathian"),a.createElement(a.Fragment,{key:2},t[1])]}return null})();return a.createElement(i.Z,{screenActionType:s.e8},a.createElement("div",{className:"my-5 flex flex-wrap justify-center"},[...c.RI].sort(((e,t)=>e.localeCompare(t))).map((t=>a.createElement(d.Z,{key:t,title:c.Vx[t].en},a.createElement("button",{key:t,lang:t,className:l()("m-2",{active:t===e}),onClick:()=>{r({type:s.yv,lang:t})}},c.Vx[t].local))))),a.createElement("label",{className:"justify-center"},a.createElement("input",{type:"checkbox",checked:t,disabled:!1===c.Vx[e].isLatinScript,onChange:e=>{r({type:s._g,erathian:e.target.checked})}}),a.createElement("span",null,u)))}))},91786:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(6360),l=n(3484),o=n(63211),i=n(74983),c=n(48093),s=n(30273);const m=(0,a.memo)((()=>{const e=(0,r.C)((e=>e.volume)),t=(0,r.C)((e=>e.visual.pixelation)),n=(0,a.useContext)(i.O),m=(0,r.T)();return a.createElement(l.Z,{screenActionType:o.je},a.createElement("div",{className:"flex"},a.createElement("div",null,a.createElement("h3",{className:"text-center"},n.i18n("Volume")),a.createElement("input",{type:"range",min:s.Z_,max:s.Qm,step:s.AI,value:e,onChange:e=>{m({type:o.j4,volume:parseInt(e.target.value,10)})}}),a.createElement("label",{className:"justify-center"},a.createElement("input",{type:"checkbox",checked:0===e,onChange:e=>{m({type:o.j4,volume:e.target.checked?0:c.Yz})}}),a.createElement("span",null,n.i18n("Mute")))),a.createElement("div",null,a.createElement("h3",{className:"text-center"},n.i18n("Pixelation")),a.createElement("input",{type:"range",min:s.EP,max:s.eV,step:s.wg,value:t,onChange:e=>{m({type:o.z1,pixelation:parseInt(e.target.value,10)})}}),a.createElement("label",{className:"justify-center"},a.createElement("input",{type:"checkbox",checked:0===t,onChange:e=>{m({type:o.z1,pixelation:e.target.checked?0:c.T})}}),a.createElement("span",null,n.i18n("Disable"))))),a.createElement("div",{className:"button-wrapper"},a.createElement("button",{onClick:e=>{m({type:o.j4,volume:c.Yz}),m({type:o.z1,pixelation:c.p8})}},n.i18n("Reset"))))}))},3484:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),r=n(94184),l=n.n(r),o=n(27889),i=n(6360),c=n(64294),s=n(99348),m=n(74983),d=n(2947),u=n(18255),p=n(63211),g=n(87346);const f=(0,o.QM)({logo:{"background-image":`url(${c})`,width:"134.5px",height:"46.5px"}}),h=(0,a.memo)((({screenActionType:e,children:t,onCancel:n,darkerBg:r=!1,exitableDelay:o=0})=>{const c=(0,i.T)(),h=(0,a.useContext)(m.O),[x,w]=(0,a.useState)(!1);(0,a.useEffect)((()=>{w(!1);const e=setTimeout((()=>{w(!0)}),o);return()=>{clearTimeout(e)}}),[]);const E=(0,a.useRef)();E.current=x;const b=()=>{E.current&&(void 0!==n&&n(),c({type:e,show:!1}))},v=(0,a.useRef)(null);(0,s.Z)(v,b),(0,d.Z)("Escape",b),(0,d.Z)("Home",b);const y=(0,a.useContext)(u.$),k=f();return a.createElement("div",{className:l()("window-bg",{darkerbg:r})},a.createElement("div",{className:"window-outerwrapper"},a.createElement("div",{ref:v,className:l()("window-wrapper",e.toLowerCase().replace(/_/g,"-"))},a.createElement(g.Z,{title:h.i18n("ArcoMage HD")},a.createElement("div",{className:l()(k.logo,{hidden:y.narrowMobile&&e===p.fy},"m-auto bg-no-repeat bg-center bg-contain")})),t,a.createElement(g.Z,{title:h.i18n("Cancel")},a.createElement("button",{accessKey:"c",className:"cancel",onClick:b})))))}))},30515:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(94184),l=n.n(r),o=n(74983);const i=(0,a.memo)((({shown:e=!0})=>{const t=(0,a.useContext)(o.O);return e?a.createElement("div",{className:l()("transform -translate-y-1/2 w-full text-center text-yellow-300 pointer-events-none text-4xl text-shadow-lg","robotocondensed","el-text")},t.i18n("Discard a card")):null}))},87346:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(21023),r=n(67294),l=n(81317);const o=(0,r.memo)((({title:e,children:t,placement:n})=>r.createElement(a.Z,{title:r.createElement("span",{style:{fontSize:"120%"}},e),"aria-label":e,arrow:!0,enterDelay:l.Kw,leaveDelay:l.WB,placement:n,disableInteractive:!0},t)))}}]);