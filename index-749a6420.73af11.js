(()=>{"use strict";var e,t,r,n={10488:(e,t,r)=>{r.d(t,{X:()=>o,v:()=>l});const n=e=>(t,r,n,o,l=1,i=.5,s=.5)=>{const c=n/o,a=t/r;let u=t*l,d=r*l;return(e?c>a:c<a)?d=u/c:u=d*c,{width:u,height:d,offsetX:(t-u)*i,offsetY:(r-d)*s}},o=n(!0),l=n(!1)},17750:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(23644);const o=(e,t)=>{if(!n.n6)switch(t){case"error":console.log(`%c ${t.toUpperCase()} `,"background: darkred; color: white; font-weight: bold;",e);break;case"bug":console.log(`%c ${t.toUpperCase()} `,"background: red; color: white; font-weight: bold;",e);break;case"warning":console.log(`%c ${t.toUpperCase()} `,"background: orange; color: white; font-weight: bold;",e);break;case"info":console.log(`%c ${t.toUpperCase()} `,"background: lawngreen; color: black; font-weight: bold;",e);break;case"note":console.log(`%c ${t.toUpperCase()} `,"background: ivory; color: black; font-weight: bold; border: 1px solid black;",e);break;default:console.log(e)}}},44526:(e,t,r)=>{r.d(t,{_k:()=>a,rm:()=>u,m$:()=>d,ww:()=>f});const n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled"]],o=(()=>{const e=n[0];for(const t of n)if((null==t?void 0:t[1])in document)return e.reduce(((e,r,n)=>Object.assign(Object.assign({},e),{[r]:t[n]})),{});return null})(),l=null==o?void 0:o.requestFullscreen,i=null==o?void 0:o.exitFullscreen,s=null==o?void 0:o.fullscreenElement,c=null==o?void 0:o.fullscreenEnabled,a=!!c&&document[c],u=()=>!!s&&document[s],d=()=>{l&&document.documentElement[l]()},f=()=>{i&&document[i]()}},22502:(e,t,r)=>{r.d(t,{Z:()=>o});const n=/^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]).?$/,o=e=>n.test(e)},97257:(e,t,r)=>{r.d(t,{hG:()=>c,UY:()=>a,HG:()=>u});var n=r(18172),o=r(23644),l=r(21544),i=r.n(l);const s=null!=="1.2.1"?"1.2.1":"",c=()=>{const e=window.localStorage.getItem(o.Pb);(null===e||i()(s,o.vu))&&window.localStorage.removeItem(o.fV),e!==s&&window.localStorage.setItem(o.Pb,s)},a=e=>{const t=window.localStorage.getItem(o.fV);if(null===t)return null;const r=JSON.parse(t);return"string"==typeof e?r[e]:e.reduce(((e,t)=>{var r;return null!==(r=null==e?void 0:e[t])&&void 0!==r?r:null}),r)},u=e=>{const t=window.localStorage.getItem(o.fV),r=null===t?{}:JSON.parse(t),l=(0,n.ZP)(r,e);window.localStorage.setItem(o.fV,JSON.stringify(l))}},71159:(e,t,r)=>{r.d(t,{Z:()=>F});var n=r(96559),o=r(80952),l=r(42605),i=r(54704),s=r(59363),c=r(77750),a=r(84138),u=r(92216),d=r(10778),f=r(66374),p=r(69144),w=r(34029),b=r(70197);const v=new Audio(o),m=new Audio(l),g=new Audio(i),h=new Audio(s),y=new Audio(c),k=new Audio(a),E=new Audio(u),O=new Audio(d),P=new Audio(f),j=new Audio(p),S=new Audio(w),A=new Audio(b),x=(e,t)=>{const r=(0,n.sm)(e);return r.volume=t,r},_=e=>{const t=e.play();void 0!==t&&t.then((e=>{})).catch((e=>{console.log(e)}))},F=(e,t=10,r=null)=>{const n=t/10;if(null!==r)switch(e){case"tower":_(x(r?v:P,n));break;case"wall":_(x(r?m:P,n));break;case"bricks":case"brickProd":_(x(r?g:k,n));break;case"gems":case"gemProd":_(x(r?h:E,n));break;case"recruits":case"recruitProd":_(x(r?y:O,n))}else switch(e){case"deal":_(x(j,n));break;case"victory":_(x(S,n));break;case"defeat":_(x(A,n))}}},18374:()=>{Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw TypeError('"this" is null or not defined');const t=Object(this),r=t.length>>>0;if("function"!=typeof e)throw TypeError("predicate must be a function");const n=arguments[1];let o=0;for(;o<r;){const r=t[o];if(e.call(n,r,o,t))return r;o++}},configurable:!0,writable:!0}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');const t=Object(this),r=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");const n=arguments[1];let o=0;for(;o<r;){const r=t[o];if(e.call(n,r,o,t))return o;o++}return-1},configurable:!0,writable:!0}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),n=r.length>>>0;if(0===n)return!1;for(var o,l,i=0|t,s=Math.max(i>=0?i:n-Math.abs(i),0);s<n;){if((o=r[s])===(l=e)||"number"==typeof o&&"number"==typeof l&&isNaN(o)&&isNaN(l))return!0;s++}return!1}}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},16306:(e,t,r)=>{r.d(t,{gZ:()=>n,PB:()=>o,YB:()=>l});const n=new Map,o=new Map,l=new Map},39451:(e,t,r)=>{r.d(t,{bu:()=>n,UP:()=>o,v8:()=>l});const n=(e,t)=>{let r=0;for(let n=0;n<t;n++)r+=Math.random()*(e/t);return r},o=e=>e[Math.floor(Math.random()*e.length)],l=(e,t)=>Math.floor(Math.random()*(t-e+1)+e)},5078:(e,t,r)=>{r.d(t,{d:()=>o});const n=r(90583).Z.map((e=>e.prob)).reduce(((e,t,r)=>e.concat(Array(t).fill(r))),[]),o=()=>n[Math.floor(Math.random()*n.length)]},66324:(e,t,r)=>{r.d(t,{_w:()=>n,b1:()=>o});const n=e=>"player"===e?"opponent":"player",o=e=>e.map((e=>{return null!==e?Object.assign(Object.assign({},e),{owner:(t=e.owner,"player"===t||"opponent"===t?n(e.owner):e.owner)}):null;var t}))},82148:(e,t,r)=>{r.d(t,{q:()=>o,_:()=>l});var n=r(17750);const o=new class{constructor(){this._v=0,this._queue=[]}get v(){return this._v}reset(){this._v=0}add(e=1){this._v+=e}enqueue(e){this._queue.push(e)}getRemoveUsablesInQueue(e){const t=[];let r=e;if(0!==this._queue.length)for(;;){r++;const e=this._queue.findIndex((e=>null!==e&&e.seq===r));if(-1===e)break;const n=this._queue[e];if(null!==n&&t.push(n),this._queue[e]=null,this._queue.every((e=>null===e))){this._queue=[];break}}return t}getUsableConnDataList(e){const{seq:t}=e;if(t!==this._v+1)return this.enqueue(e),(0,n.Z)(`postponed: ${JSON.stringify(e)}`,"note"),null;this.add();const r=this.getRemoveUsablesInQueue(t);return this.add(r.length),(0,n.Z)(`pulled (executed): ${JSON.stringify([e].concat(r))}`,"note"),[e].concat(r)}},l=new class{constructor(){this._v=0}get v(){return this._v}add(e=1){this._v+=e}reset(){this._v=0}}},77456:(e,t,r)=>{r.d(t,{iT:()=>n,Ib:()=>o,Ug:()=>l,$:()=>i});const n=e=>{const{tower:t,wall:r,brickProd:n,gemProd:o,recruitProd:l,bricks:i,gems:s,recruits:c}=e;return{tower:t,wall:r,brickProd:n,gemProd:o,recruitProd:l,bricks:i,gems:s,recruits:c}},o=e=>{const{winTower:t,winResource:r}=e;return{winTower:t,winResource:r}},l=e=>[e.tower,e.wall,e.bricks,e.gems,e.recruits,e.brickProd,e.gemProd,e.recruitProd,e.winTower,e.winResource,e.cardsInHand],i=(e,t)=>e.tower===t.tower&&e.wall===t.wall&&e.brickProd===t.brickProd&&e.gemProd===t.gemProd&&e.recruitProd===t.recruitProd&&e.bricks===t.bricks&&e.gems===t.gems&&e.recruits===t.recruits&&e.winTower===t.winTower&&e.winResource===t.winResource&&e.cardsInHand===t.cardsInHand},67728:()=>{"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("./service-worker.js").then((e=>{console.log("Service worker (PWA) registered: ",e)})).catch((e=>{console.log("Service worker (PWA) registration failed: ",e)}))}))},96559:(e,t,r)=>{r.d(t,{qh:()=>n,sq:()=>o,XP:()=>l,sm:()=>i,nr:()=>s,dB:()=>c});const n=Object.entries,o=e=>e.reduce(((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r})),{}),l=Object.keys,i=e=>e.cloneNode(),s=(e,t)=>e.hasOwnProperty(t),c=(e,t)=>t.includes(e)},97463:(e,t,r)=>{r.d(t,{m:()=>n});const n=e=>e&&e.charAt(0).toUpperCase()+e.slice(1)},6360:(e,t,r)=>{r.d(t,{T:()=>o,C:()=>l});var n=r(76398);const o=()=>(0,n.I0)(),l=n.v9},94950:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(23644);const l=()=>{(0,n.useEffect)((()=>{if(o.KN){const e=e=>{e.preventDefault(),e.returnValue=""};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}}),[])}},99348:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const o=(e,t)=>{(0,n.useEffect)((()=>{const r=r=>{e.current&&!e.current.contains(r.target)&&t(r)};return window.addEventListener("click",r),window.addEventListener("auxclick",r),()=>{window.removeEventListener("click",r),window.removeEventListener("auxclick",r)}}),[])}},40242:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(23644);const l=()=>{(0,n.useEffect)((()=>{if(o.J4){const e=e=>{null!==e.target&&e.target instanceof Element&&null===e.target.closest('input[type="text"]')&&null===e.target.closest('input[type="number"]')&&null===e.target.closest("small.version")&&null===e.target.closest("p.description")&&null===e.target.closest(".help-text")&&e.preventDefault()};return window.addEventListener("contextmenu",e),()=>{window.removeEventListener("contextmenu",e)}}}),[])}},2947:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const o=(e,t,r=0)=>{(0,n.useEffect)((()=>{const n=r=>{null!=e&&r.key!==e||t(r)},o=setTimeout((()=>{window.addEventListener("keydown",n)}),r);return()=>{clearTimeout(o),window.removeEventListener("keydown",n)}}),[])}},37337:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const o=e=>{(0,n.useEffect)((()=>{const t=t=>{e(t)};return window.addEventListener("load",t),()=>{window.removeEventListener("load",t)}}),[])}},44933:(e,t,r)=>{r.d(t,{n:()=>n});const n=(e,t)=>{const r=[];let n=0;for(let o=0;o<t.length;o++){const l=n+t[o];r.push(e.slice(n,l)),n=l}return r}},37053:(e,t,r)=>{r.d(t,{kL:()=>c,zQ:()=>a,bb:()=>i});var n=r(55391),o=r.n(n);const l={secure:!0,port:443,iceServers:[{urls:["stun.l.google.com:19302","stun1.l.google.com:19302","stun2.l.google.com:19302","stun3.l.google.com:19302","stun4.l.google.com:19302","stun.ekiga.net","stun.ideasip.com","stun.schlund.de","stun.stunprotocol.org:3478","stun.voiparound.com","stun.voipbuster.com","stun.voipstunt.com"].map((e=>({url:`stun:${e}`})))}]},i={peer:null,conn:null},s=()=>{null===i.peer||i.peer.destroyed||i.peer.destroy()},c=()=>{i.peer=new(o())(l),window.addEventListener("beforeunload",s)},a=()=>{i.peer=null}}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,l),r.loaded=!0,r.exports}l.m=n,e=[],l.O=(t,r,n,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],o=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(l.O).every((e=>l.O[e](r[c])))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var a=n();void 0!==a&&(t=a)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},l.F={},l.E=e=>{Object.keys(l.F).map((t=>{l.F[t](e)}))},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>({250:"taverni18n16",1189:"i18n16",1687:"taverni18n10",1990:"i18n24",2295:"cardi18n6",2324:"cardi18n24",2434:"i18n14",2835:"taverni18n18",2920:"cardi18n2",3085:"cardi18n16",3243:"i18n0",3430:"cardi18n18",4025:"cardi18n12",4652:"cardi18n20",4747:"taverni18n0",4884:"taverni18n8",4989:"i18n8",5432:"cardi18n8",5665:"taverni18n20",6263:"taverni18n24",6567:"taverni18n2",6969:"i18n2",7085:"i18n20",7285:"cardi18n10",7335:"cardi18n0",7445:"i18n18",7685:"cardi18n14",8463:"taverni18n6",8728:"i18n6",8768:"i18n10",8783:"i18n22",9190:"taverni18n12",9243:"i18n12",9376:"cardi18n22",9462:"taverni18n14",9574:"taverni18n22"}[e]+"."+{250:"910e87",1189:"674cdf",1687:"9e3a89",1990:"c24e13",2295:"687e0d",2324:"8b56ae",2434:"2807cb",2835:"e0806d",2920:"bdf6ac",3085:"e44f12",3243:"c3897f",3430:"321042",4025:"4f777f",4652:"6736d4",4747:"631814",4884:"a0d1bf",4989:"bbbf4e",5432:"3dbd1b",5665:"bb92b2",6263:"243a52",6567:"4f1faa",6969:"eaee6c",7085:"ae2d73",7285:"27c931",7335:"f223c8",7445:"e7d331",7685:"d0c74f",8463:"21cb92",8728:"264dc6",8768:"708c4a",8783:"8811fa",9190:"68b05c",9243:"25413c",9376:"8d148d",9462:"dbbd1d",9574:"44ee75"}[e]+".js"),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="arcomage-hd:",l.l=(e,n,o,i)=>{if(t[e])t[e].push(n);else{var s,c;if(void 0!==o)for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var d=a[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",r+o),s.src=e),t[e]=[n];var f=(r,n)=>{s.onerror=s.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="https://arcomage.github.io/",(()=>{l.b=document.baseURI||self.location.href;var e={2447:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=l.p+l.u(t),s=new Error;l.l(i,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}}),"chunk-"+t,t)}},l.F.j=t=>{if(!l.o(e,t)||void 0===e[t]){e[t]=null;var r=document.createElement("link");l.nc&&r.setAttribute("nonce",l.nc),r.rel="prefetch",r.as="script",r.href=l.p+l.u(t),document.head.appendChild(r)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,i=r[0],s=r[1],c=r[2],a=0;if(i.some((t=>0!==e[t]))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(c)var u=c(l)}for(t&&t(r);a<i.length;a++)o=i[a],l.o(e,o)&&e[o]&&e[o][0](),e[i[a]]=0;return l.O(u)},r=self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),l.O(0,[2447],(()=>{[3243,6969,8728,4989,8768,9243,2434,1189,7445,7085,8783,1990,7335,2920,2295,5432,7285,4025,7685,3085,3430,4652,9376,2324,4747,6567,8463,4884,1687,9190,9462,250,2835,5665,9574,6263].map(l.E)}),5);var i=l.O(void 0,[1934,2056,2019,7906,1637,4013,5514,1023,2478,5458,2246,5391,8328,2137,9845,4448,1157,1085,6398,8141,7260,4890,8154,9302,7453,4939,3978,5269,5538,4096,8090,2349,4501,23,3189,8458,8761,7463,7381,7038],(()=>l(5150)));i=l.O(i)})();