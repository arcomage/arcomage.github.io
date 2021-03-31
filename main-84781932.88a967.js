(()=>{"use strict";var e,t,n,r={7342:(e,t,n)=>{n(8374);var r=n(7294),o=n(3935),a=n(9523),s=n(4190),i=n(4890),c=n(8500),l=n(8172),d=n(3211),u=n(8093);const p={player:Object.assign({},u.he.start),opponent:Object.assign({},u.he.start)},w=(0,l.ZP)(((e,t)=>{switch(t.type){case d.F5:return{player:Object.assign({},t.payload),opponent:Object.assign({},t.payload)};case d.l7:for(const n of t.payload){const{isPlayer:t,statusProp:r}=n;"to"in n?e[t?"player":"opponent"][r]=n.to:e[t?"player":"opponent"][r]+=n.diff}}}),p),f={code:n(8199).defaultLang,erathian:!1},h=(0,l.ZP)(((e,t)=>{switch(t.type){case d.yv:e.code=t.lang;break;case d._g:e.erathian=t.erathian}}),f),m=(0,l.ZP)(((e,t)=>{switch(t.type){case d.zn:return t.payload;case d.$Z:e.list.push({n:t.n,position:-1,owner:"common",unusable:!1,discarded:!1,isflipped:!0});break;case d.B4:{const{position:n,owner:r}=t;e.total[r]+=1;const o=e.list;o.forEach((e=>{(null==e?void 0:e.owner)===r&&e.position>=n&&(e.position+=1)}));const a=o[o.length-1];null!==a&&(a.position=n,a.owner=r,a.isflipped=!1);break}case d.PX:{const n=e.list[t.index];null!==n&&(n.position=-5,n.unusable=!0,n.owner="common");break}case d._d:{const n=e.list[t.index];null!==n&&(n.position=t.toPosition,n.unusable=!0,n.owner="common");break}case d.EK:{const n=e.list[t.index];null!==n&&(n.position=-1,n.unusable=!0,n.isflipped=!0,n.owner="common");break}case d.fj:if(null!==e.list[t.index]){const n=t.owner;e.total[n]-=1,e.list.forEach((e=>{(null==e?void 0:e.owner)===n&&e.position>t.position&&(e.position-=1)})),e.nextPos[n]=t.position}break;case d.iE:{const n=e.list[t.index];null!==n&&(n.discarded=!0);break}case d.M2:null!==e.list[t.index]&&(e.list[t.index]=null);break;case d.R9:t.unusables.forEach((t=>{const n=e.list[t];null!==n&&(n.unusable=!0)})),t.usables.forEach((t=>{const n=e.list[t];null!==n&&(n.unusable=!1)}))}}),{total:{player:0,opponent:0},list:[],nextPos:{player:0,opponent:0}}),b={playersTurn:!0,locked:!1,discardMode:!1,isNewTurn:!0},v=(0,l.ZP)(((e,t)=>{switch(t.type){case d.s3:return Object.assign(Object.assign({},b),{playersTurn:t.playersTurn});case d.vd:e.discardMode=!e.discardMode;break;case d.K5:e.playersTurn=!e.playersTurn;break;case d.Ut:e.locked=!e.locked;break;case d.Z$:e.isNewTurn=!e.isNewTurn}}),b),y={playerName:u.vP,opponentName:u.Pe,start:Object.assign({},u.he.start),win:Object.assign({},u.he.win),cardsInHand:u.he.cardsInHand,aiType:u.he.aiType},g=(0,l.ZP)(((e,t)=>{switch(t.type){case d.MO:return t.payload}}),y),E=(0,l.ZP)(((e,t)=>{switch(t.type){case d.fy:e.pref=t.show;break;case d.e8:e.langPref=t.show;break;case d.je:e.volumePref=t.show;break;case d.Xc:e.help=t.show;break;case d.Wz:e.end=t.kind}}),{pref:!1,langPref:!1,volumePref:!1,help:!1,end:null}),k=(0,l.ZP)(((e,t)=>{switch(t.type){case d.j4:return t.volume}}),u.Yz),P=(0,i.UY)({status:w,lang:h,cards:m,game:v,settings:g,screen:E,volume:k}),O=(0,n(2196).k)(),j=(0,i.MT)(P,(0,c.Uo)((0,i.md)(O)));var Z=n(4998),x=n(4983),A=n(8255),T=n(405);O.run(Z.Z),o.render(r.createElement(r.StrictMode,null,r.createElement(s.zt,{store:j},r.createElement(x.I18nProvider,null,r.createElement(A.SG,null,r.createElement(T.B,null,r.createElement(a.Z,null)))))),document.getElementById("root"))},3543:(e,t,n)=>{n.d(t,{_:()=>u,f:()=>p});var r=n(7294);const o=188/252,a=(e,t,n)=>.8*e*o*n+(5*(n-1)+7.5)<=t,s=(e,t,n)=>a(e,t,n)?.8*e:i(e,t,n)/o,i=(e,t,n)=>a(e,t,n)?s(e,t,n)*o:(t-(5*(n-1)+7.5))/n,c=(e,t,n)=>a(n,e,t)?(e-i(n,e,t)*t)/(t-1+3):5,l=(e,t,n)=>r=>{const o=r-5;return o>=0?t/3*2+(t/3-s(t/3,n,e))/2:-5===o?t/3*2-s(t/3,n,e)-16:16},d=(e,t,n)=>r=>{const o=r-5;return o>=0?((e,t,n)=>1.5*c(e,t,n))(n,e,t/3)+(i(t/3,n,e)+c(n,e,t/3))*o:-5===o?n/2-i(t/3,n,e)/2:n/2-(i(t/3,n,e)*(o+3)-10*(-2.5-o))},u=(0,r.createContext)(null),p=({cardsInHand:e,winHeight:t,winWidth:n,children:o})=>{const[a,c]=(0,r.useState)(null);return(0,r.useLayoutEffect)((()=>{const r=e+1,o=[...Array(r+5).keys()],a=i(t/3,n,r),u=s(t/3,n,r),p=o.map(l(r,t,n)),w=o.map(l(r-1,t,n)),f=o.map(d(r,t,n)),h=o.map(d(r-1,t,n));c({width:a,height:u,total:r,top:p,left:f,topM1:w,leftM1:h})}),[e,t,n]),r.createElement(u.Provider,{value:a},o)}},8255:(e,t,n)=>{n.d(t,{ih:()=>o,jw:()=>a,$K:()=>i,SG:()=>c});var r=n(7294);const o=300,a=300,s={width:window.innerWidth,height:window.innerHeight},i=(0,r.createContext)(s),c=({children:e})=>{const[t,n]=(0,r.useState)(s);return(0,r.useLayoutEffect)((()=>{const e=()=>{n({width:window.innerWidth>o?window.innerWidth:o,height:window.innerHeight>a?window.innerHeight:a})};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),r.createElement(i.Provider,{value:t},e)}},3854:(e,t,n)=>{n.d(t,{q_:()=>r});const r=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}},1159:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(6559),o=n(9503),a=n(6374),s=n(1485),i=n(2313),c=n(6927),l=n(487),d=n(6446),u=n(4155),p=n(6760),w=n(9905),f=n(6849),h=n(7287),m=n(4566),b=n(8304);const v=new Audio(o.Z),y=new Audio(a.Z),g=new Audio(s.Z),E=new Audio(i.Z),k=new Audio(c.Z),P=new Audio(l.Z),O=new Audio(d.Z),j=new Audio(u.Z),Z=new Audio(p.Z),x=new Audio(w.Z),A=new Audio(f.Z),T=new Audio(h.Z),L=new Audio(m.Z),M=new Audio(b.Z),S=(e,t)=>{const n=(0,r.sm)(e);return n.volume=t,n},N=e=>{const t=e.play();void 0!==t&&t.then((e=>{})).catch((e=>{console.log(e)}))},_=(e,t=10,n=null)=>{const r=t/10;if(null!==n)switch(e){case"tower":N(S(n?v:Z,r));break;case"wall":N(S(n?y:Z,r));break;case"bricks":case"brickProd":N(S(n?g:P,r));break;case"gems":case"gemProd":N(S(n?E:O,r));break;case"recruits":case"recruitProd":N(S(n?k:j,r))}else switch(e){case"deal":N(S(x,r));break;case"start":N(S(A,r));break;case"victory":N(S(T,r));break;case"defeat":N(S(L,r));break;case"typing":N(S(M,r))}}},8374:()=>{Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');const t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");const r=arguments[1];let o=0;for(;o<n;){const n=t[o];if(e.call(r,n,o,t))return o;o++}return-1},configurable:!0,writable:!0})},5078:(e,t,n)=>{n.d(t,{d:()=>o});const r=n(583).Z.map((e=>e.prob)).reduce(((e,t,n)=>e.concat(Array(t).fill(n))),[]),o=()=>r[Math.floor(Math.random()*r.length)]},6559:(e,t,n)=>{n.d(t,{qh:()=>r,sq:()=>o,XP:()=>a,sm:()=>s,nr:()=>i});const r=Object.entries;function o(e){return e.reduce(((e,[t,n])=>Object.assign(Object.assign({},e),{[t]:n})),{})}const a=Object.keys,s=e=>e.cloneNode();function i(e,t){return e.hasOwnProperty(t)}},6360:(e,t,n)=>{n.d(t,{T:()=>o,C:()=>a});var r=n(4190);const o=()=>(0,r.I0)(),a=r.v9},4950:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=()=>{(0,r.useEffect)((()=>{const e=e=>{e.preventDefault(),e.returnValue=""};return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)}),[])}},9348:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=(e,t)=>{(0,r.useEffect)((()=>{const n=n=>{e.current&&!e.current.contains(n.target)&&t(n)};return window.addEventListener("mousedown",n),()=>{window.removeEventListener("mousedown",n)}}),[])}},242:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=()=>{(0,r.useEffect)((()=>{const e=e=>{e.preventDefault()};return window.addEventListener("contextmenu",e),()=>window.removeEventListener("contextmenu",e)}),[])}},2947:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=(e,t,n=0)=>{(0,r.useEffect)((()=>{const r=n=>{null!=e&&n.key!==e||t(n)};return setTimeout((()=>{window.addEventListener("keydown",r)}),n),()=>{window.removeEventListener("keydown",r)}}),[])}},7337:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=e=>{(0,r.useEffect)((()=>{const t=t=>{e(t)};return window.addEventListener("load",t),()=>window.removeEventListener("load",t)}),[])}}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=r,e=[],a.O=(t,n,r,o)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(i=!1,o<s&&(s=o));i&&(e.splice(l--,1),t=r())}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},a.F={},a.E=e=>{Object.keys(a.F).map((t=>{a.F[t](e)}))},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>({85:"i18n20",189:"i18n16",243:"i18n12",728:"i18n6",768:"i18n10",783:"i18n22",969:"i18n2",989:"i18n8",990:"i18n24"}[e]+"."+{85:"1380ab",189:"3e8388",243:"80415b",728:"901864",768:"90c34c",783:"b16594",969:"b75ef6",989:"5c9453",990:"1c546d"}[e]+".js"),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="arcomage-hd:",a.l=(e,r,o,s)=>{if(t[e])t[e].push(r);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var p=(n,r)=>{i.onerror=i.onload=null,clearTimeout(w);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),n)return n(r)},w=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={866:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var s=a.p+a.u(t),i=new Error;a.l(s,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,r[1](i)}}),"chunk-"+t,t)}},a.F.j=t=>{if(!a.o(e,t)||void 0===e[t]){e[t]=null;var n=document.createElement("link");a.nc&&n.setAttribute("nonce",a.nc),n.rel="prefetch",n.as="script",n.href=a.p+a.u(t),document.head.appendChild(n)}},a.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,s=n[0],i=n[1],c=n[2],l=0;for(r in i)a.o(i,r)&&(a.m[r]=i[r]);for(c&&c(a),t&&t(n);l<s.length;l++)o=s[l],a.o(e,o)&&e[o]&&e[o][0](),e[s[l]]=0;a.O()},n=self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.O(0,[866],(()=>[969,728,989,768,243,189,85,783,990].map(a.E)),5);var s=a.O(void 0,[692,733,130,694,709,484,659,850,248,282,49,90,288,188,328,791,100,511,376,0,605,978,793],(()=>a(7342)));s=a.O(s)})();