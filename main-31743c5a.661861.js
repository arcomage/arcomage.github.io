(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[605],{9624:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(7294),a=r(4184),o=r.n(a),i=r(7889),c=r(8844),s=r(4638);const l=(0,i.QM)({"@keyframes explosion":{"100%":{"background-position":"-4032px"}},"@keyframes firework":{"100%":{"background-position":"-7936px"}},main:{"background-repeat":"no-repeat","animation-duration":"1s","animation-iteration-count":1},explosion:{width:"192px",height:"192px",top:0,left:0,"background-image":`url(${c.Z})`,"animation-name":"$explosion","animation-timing-function":"steps(21)"},firework:{width:"256px",height:"256px",top:"-300%",left:"1rem","background-image":`url(${s.Z})`,"animation-name":"$firework","animation-timing-function":"steps(31)"}}),m=({n:e})=>{const t=l(),r=(0,n.useRef)(!1),a=(0,n.useRef)(0),i=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(r.current){const r=a.current,n=i.current;if(null!==n){const a=document.createElement("div");a.className=o()("transform -translate-x-1/2 -translate-y-1/2 absolute",t.main,e<r?t.explosion:t.firework),n.appendChild(a),a.onanimationend=()=>n.removeChild(a)}}r.current||(r.current=!0),a.current=e}),[e]),n.createElement("div",{ref:i,className:"z-40 pointer-events-none w-full h-full absolute top-0 left-1/2"})}},6399:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(7294),a=r(4184),o=r.n(a);const i=(0,r(7889).QM)({"@keyframes fadeOutUp":{from:{transform:"translate3d(0, 0, 0)",opacity:1},to:{transform:"translate3d(0, -2.5em, 0)",opacity:0}},main:{top:"-0.5em",left:"0.4em",opacity:0,"animation-name":"$fadeOutUp","animation-duration":"1.2s","animation-timing-function":"ease-out"}}),c=({n:e})=>{const t=i(),r=(0,n.useRef)(!1),a=(0,n.useRef)(0),c=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(r.current){const r=a.current,n=c.current;if(null!==n){const a=e-r,i=document.createElement("div"),c=document.createTextNode(`${a>0?"+":""}${a.toString()}`);i.className=o()(t.main,`absolute font-mono text-2xl text-${a>=0?"green-500":"red-700"} text-shadow-md`),i.appendChild(c),n.appendChild(i),i.onanimationend=()=>n.removeChild(i)}}r.current||(r.current=!0),a.current=e}),[e]),n.createElement("div",{ref:c,className:"z-50 absolute w-full h-full"})}},6194:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(7294),a=r(4184),o=r.n(a),i=r(7889),c=r(8421),s=r(2546),l=r(4638),m=r(4983),u=r(6360),d=r(3211),p=r(2947),g=r(9129);const w=["You Lose!","Tie Game","You Win!"],E=(0,i.QM)({"@keyframes fadein":{"0%":{opacity:0},"100%":{opacity:1}},container:{padding:"15vh 10%",opacity:1,"animation-name":"$fadein","animation-iteration-count":1,"animation-timing-function":"ease-in","animation-duration":"0.4s"},main:{"background-image":e=>`url(${e>=0?c.Z:s.Z})`},"@keyframes firework":{"100%":{"background-position":"-7936px"}},firework:{width:"256px",height:"256px","background-image":`url(${l.Z})`,"background-repeat":"no-repeat","animation-name":"$firework","animation-timing-function":"steps(31)","animation-duration":"1s","animation-iteration-count":1,"animation-delay":"0.5s"},firework2:{"animation-delay":"1.6s"},"@keyframes redNeon":{from:{"text-shadow":"0 0 6px rgba(225,191,191,0.92), 0 0 30px rgba(225,191,191,0.54), 0 0 12px rgba(238,54,37,0.72), 0 0 21px rgba(238,54,37,0.92), 0 0 34px rgba(238,54,37,0.78), 0 0 54px rgba(238,54,37,0.92)"},to:{"text-shadow":"0 0 6px rgba(225,191,191,0.98), 0 0 30px rgba(225,191,191,0.62), 0 0 12px rgba(238,54,37,0.78), 0 0 22px rgba(238,54,37,0.84), 0 0 38px rgba(238,54,37,0.88), 0 0 60px rgba(238,54,37,1)"}},"@keyframes blackNeon":{from:{"text-shadow":"0 0 6px rgba(0,0,0,0.92), 0 0 30px rgba(0,0,0,0.54), 0 0 12px rgba(0,0,0,0.72), 0 0 21px rgba(0,0,0,0.92), 0 0 34px rgba(0,0,0,0.78), 0 0 54px rgba(0,0,0,0.92)"},to:{"text-shadow":"0 0 6px rgba(0,0,0,0.98), 0 0 30px rgba(0,0,0,0.62), 0 0 12px rgba(0,0,0,0.78), 0 0 22px rgba(0,0,0,0.84), 0 0 38px rgba(0,0,0,0.88), 0 0 60px rgba(0,0,0,1)"}},text:{"font-size":"15vh","line-height":"15vh",bottom:"53%",color:"#fff",animation:e=>(e>=0?"$redNeon":"$blackNeon")+" 0.08s ease-in-out infinite alternate"}}),b=(0,n.memo)((({kind:e})=>{const t=(0,u.T)(),r=(0,n.useContext)(m.I18nContext),a=E(e),i=r.i18n(w[e+1]),[c,s]=(0,n.useState)(!1);(0,n.useEffect)((()=>{setTimeout((()=>{s(!0)}),g.d)}),[]);const l=()=>{t({type:d.Wz,kind:null}),t({type:d.qg})};(0,p.Z)(null,l,g.d);const b=c?{onClick:l,onContextMenu:l,tabIndex:0}:{};return n.createElement("div",Object.assign({className:o()("absolute w-full h-full top-0 left-0 z-90 bg-black bg-opacity-50",a.container)},b),n.createElement("div",{className:o()("w-full h-full bg-center bg-no-repeat bg-contain relative",a.main)},n.createElement("div",{className:o()(a.text,"absolute w-full font-bold text-white text-center robotocondensed")},i),e>=0&&n.createElement(n.Fragment,null,n.createElement("div",{className:o()(a.firework,"absolute top-0 left-1/4")}),n.createElement("div",{className:o()(a.firework,a.firework2,"absolute bottom-0 right-1/4")}))))}))},5586:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(7294),a=r(3484);const o=(0,n.memo)((({children:e})=>n.createElement(n.Fragment,null,e.split("\n").map(((e,t)=>n.createElement("p",{key:t},e))))));var i=r(3211),c=r(4983);const s=(0,n.memo)((()=>{const e=(0,n.useContext)(c.I18nContext),t=e.i18n("Please go to %s to view more information, star the repo and follow %s there."),r=e.i18n("the GitHub project page"),s=t.split("%s"),l=n.createElement("p",null,n.createElement("strong",null,s[0],n.createElement("a",{href:"https://github.com/arcomage/arcomage-hd",target:"_blank",rel:"noopener noreferrer"},r),s[1],n.createElement("a",{href:"https://github.com/tomchen",target:"_blank",rel:"noopener noreferrer"},"@tomchen"),s[2]));return n.createElement(a.Z,{ScreenActionType:i.Xc},n.createElement("p",null,n.createElement("strong",null,e.i18n("ArcoMage HD"))," - ",e.i18n("DESC")),l,n.createElement("p",null,e.i18n("Below is a brief presentation of the rules:")),n.createElement("div",null,n.createElement(o,null,e.i18n("GAMERULES"))))}))},6499:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(7294),a=r(4184),o=r.n(a),i=r(6360),c=r(3484),s=r(8199),l=r(6559),m=r(3211),u=r(4983);const d=(0,n.memo)((()=>{const e=(0,i.C)((e=>e.lang.code)),t=(0,i.C)((e=>e.lang.erathian)),r=(0,n.useContext)(u.I18nContext),a=(0,i.T)(),d=(()=>{const e=r.i18n("ERATHIAN");if(void 0!==e){const t=e.split("%s");return[n.createElement(n.Fragment,{key:0},t[0]),n.createElement("span",{key:1,className:"erathian text-2xl p-0"},"Erathian"),n.createElement(n.Fragment,{key:2},t[1])]}return null})();return n.createElement(c.Z,{ScreenActionType:m.e8},n.createElement("div",{className:"my-5 grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-4 justify-items-center no-erathian"},(0,l.qh)(s.langs).sort((([e],[t])=>e.localeCompare(t))).map((([t,r])=>n.createElement("button",{key:t,className:o()({active:t===e}),onClick:()=>{a({type:m.yv,lang:t})}},r)))),n.createElement("label",{className:"justify-center"},n.createElement("input",{type:"checkbox",checked:t,onChange:e=>{a({type:m._g,erathian:e.target.checked})}}),n.createElement("span",{className:"no-erathian"},d)))}))},6657:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(7294),a=r(8172),o=r(6360),i=r(3484),c=r(3211),s=r(4983);const l=[{tavern:"On The House",location:"Harmondale",start:{tower:15,wall:5,brickProd:2,gemProd:2,recruitProd:2,bricks:10,gems:10,recruits:10},win:{tower:30,resource:100},cardsInHand:5},{tavern:"Griffin's Rest",location:"Erathia",start:{tower:20,wall:5,brickProd:2,gemProd:2,recruitProd:2,bricks:5,gems:5,recruits:5},win:{tower:50,resource:150},cardsInHand:5},{tavern:"Emerald Inn",location:"Tularean Forest",start:{tower:20,wall:5,brickProd:2,gemProd:2,recruitProd:2,bricks:5,gems:5,recruits:5},win:{tower:50,resource:150},cardsInHand:5},{tavern:"Snobbish Goblin",location:"Deyja",start:{tower:25,wall:10,brickProd:3,gemProd:3,recruitProd:3,bricks:5,gems:5,recruits:5},win:{tower:75,resource:200},cardsInHand:5},{tavern:"Familiar Place",location:"Bracada Desert",start:{tower:20,wall:10,brickProd:3,gemProd:3,recruitProd:3,bricks:5,gems:5,recruits:5},win:{tower:75,resource:200},cardsInHand:5},{tavern:"The Blessed Brew",location:"Celeste",start:{tower:30,wall:15,brickProd:4,gemProd:4,recruitProd:4,bricks:10,gems:10,recruits:10},win:{tower:100,resource:300},cardsInHand:5},{tavern:"The Vampyre Lounge",location:"The Pit",start:{tower:30,wall:15,brickProd:4,gemProd:4,recruitProd:4,bricks:10,gems:10,recruits:10},win:{tower:100,resource:300},cardsInHand:5},{tavern:"The Laughing Monk",location:"Evermorn Island",start:{tower:20,wall:10,brickProd:5,gemProd:5,recruitProd:5,bricks:25,gems:25,recruits:25},win:{tower:150,resource:400},cardsInHand:5},{tavern:"Fortune's Folly",location:"Nighon",start:{tower:20,wall:10,brickProd:1,gemProd:1,recruitProd:1,bricks:15,gems:15,recruits:15},win:{tower:200,resource:500},cardsInHand:5},{tavern:"Miner's Only",location:"Barrow Downs",start:{tower:20,wall:50,brickProd:1,gemProd:1,recruitProd:5,bricks:5,gems:5,recruits:25},win:{tower:100,resource:300},cardsInHand:5},{tavern:"The Loyal Mercenary",location:"Tidewater",start:{tower:10,wall:20,brickProd:3,gemProd:1,recruitProd:2,bricks:15,gems:5,recruits:10},win:{tower:125,resource:350},cardsInHand:5},{tavern:"The Potted Pixie",location:"Avlee",start:{tower:10,wall:20,brickProd:3,gemProd:1,recruitProd:2,bricks:15,gems:5,recruits:10},win:{tower:125,resource:350},cardsInHand:5},{tavern:"Grogg's Grog",location:"Stone City",start:{tower:50,wall:50,brickProd:5,gemProd:3,recruitProd:5,bricks:20,gems:10,recruits:20},win:{tower:100,resource:300},cardsInHand:5}];var m=r(8093),u=r(6559);const d=(0,n.memo)((()=>{const e=(0,n.useContext)(s.I18nContext),t=(0,o.T)(),[r,d]=(0,n.useState)({playerName:(0,o.C)((e=>e.settings.playerName)),opponentName:(0,o.C)((e=>e.settings.opponentName)),tower:(0,o.C)((e=>e.settings.start.tower)),wall:(0,o.C)((e=>e.settings.start.wall)),bricks:(0,o.C)((e=>e.settings.start.bricks)),gems:(0,o.C)((e=>e.settings.start.gems)),recruits:(0,o.C)((e=>e.settings.start.recruits)),brickProd:(0,o.C)((e=>e.settings.start.brickProd)),gemProd:(0,o.C)((e=>e.settings.start.gemProd)),recruitProd:(0,o.C)((e=>e.settings.start.recruitProd)),winTower:(0,o.C)((e=>e.settings.win.tower)),winResource:(0,o.C)((e=>e.settings.win.resource)),cardsInHand:(0,o.C)((e=>e.settings.cardsInHand))}),[p,g]=(0,n.useState)(-10);(0,n.useEffect)((()=>{const e=r.tower+1,t=Math.max(r.bricks+r.brickProd,r.gems+r.gemProd,r.recruits+r.recruitProd)+1;r.winTower<e?d((t=>(0,a.ZP)(t,(t=>{t.winTower=e})))):r.winResource<t&&d((e=>(0,a.ZP)(e,(e=>{e.winResource=t})))),g((e=>{const t=l.concat(m.he).findIndex((({start:t,win:r,cardsInHand:n})=>e.tower===t.tower&&e.wall===t.wall&&e.brickProd===t.brickProd&&e.gemProd===t.gemProd&&e.recruitProd===t.recruitProd&&e.bricks===t.bricks&&e.gems===t.gems&&e.recruits===t.recruits&&e.winTower===r.tower&&e.winResource===r.resource&&e.cardsInHand===n));return t===l.length?-2:t})(r))}),[r]);const w=e=>{""===e.target.value&&"playerName"!==e.target.name&&"opponentName"!==e.target.name&&(e.target.value="0"),parseInt(e.target.value,10)<parseInt(e.target.min,10)&&(e.target.value=e.target.min),parseInt(e.target.value,10)>parseInt(e.target.max,10)&&(e.target.value=e.target.max);const{name:t,value:r}=e.target;d((e=>(0,a.ZP)(e,(e=>{(0,u.nr)(e,t)&&(e[t]="playerName"===t||"opponentName"===t?r:parseInt(r,10))}))))};return n.createElement(i.Z,{ScreenActionType:c.fy},n.createElement("h3",null,e.i18n("Preferences")),n.createElement("div",{className:"two-column half"},n.createElement("label",null,n.createElement("span",null,e.i18n("Your Name:")),n.createElement("input",{type:"text",name:"playerName",id:"playerName",value:r.playerName,onChange:w,onFocus:e=>{e.target.value===m.vP&&e.target.select()}})),n.createElement("label",null,n.createElement("span",null,e.i18n("Opponent's Name:")),n.createElement("input",{type:"text",name:"opponentName",id:"opponentName",value:r.opponentName,onChange:w,onFocus:e=>{e.target.value===m.Pe&&e.target.select()}}))),n.createElement("label",{className:"one-colume"},n.createElement("span",null,e.i18n("Choose a Tavern (Preset Preferences):")),n.createElement("select",{name:"tavern",id:"tavern",value:p,onChange:e=>{(e=>{const t=-2===e?l.length:e;if(t>=0){const{start:e,win:r,cardsInHand:n}=l.concat(m.he)[t];d((t=>(0,a.ZP)(t,(t=>{t.tower=e.tower,t.wall=e.wall,t.brickProd=e.brickProd,t.gemProd=e.gemProd,t.recruitProd=e.recruitProd,t.bricks=e.bricks,t.gems=e.gems,t.recruits=e.recruits,t.winTower=r.tower,t.winResource=r.resource,t.cardsInHand=n}))))}})(parseInt(e.target.value,10))}},n.createElement("option",{value:-2},e.i18n("Default")),l.map((({tavern:e,location:t},r)=>n.createElement("option",{value:r,key:r},e," - ",t))),-1===p&&n.createElement("option",{value:-1},e.i18n("Customized")))),n.createElement("h4",null,e.i18n("Starting Conditions")),n.createElement("div",{className:"two-column"},n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("tower"))),n.createElement("input",{type:"number",name:"tower",id:"tower",min:"1",value:r.tower,onChange:w})),n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("wall"))),n.createElement("input",{type:"number",name:"wall",id:"wall",min:"0",value:r.wall,onChange:w}))),n.createElement("div",{className:"two-column"},n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("bricks"))),n.createElement("input",{type:"number",name:"bricks",id:"bricks",min:"0",value:r.bricks,onChange:w})),n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("quarry"))),n.createElement("input",{type:"number",name:"brickProd",id:"brickProd",min:"0",value:r.brickProd,onChange:w}))),n.createElement("div",{className:"two-column"},n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("gems"))),n.createElement("input",{type:"number",name:"gems",id:"gems",min:"0",value:r.gems,onChange:w})),n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("magic"))),n.createElement("input",{type:"number",name:"gemProd",id:"gemProd",min:"0",value:r.gemProd,onChange:w}))),n.createElement("div",{className:"two-column"},n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("recruits"))),n.createElement("input",{type:"number",name:"recruits",id:"recruits",min:"0",value:r.recruits,onChange:w})),n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("dungeon"))),n.createElement("input",{type:"number",name:"recruitProd",id:"recruitProd",min:"0",value:r.recruitProd,onChange:w}))),n.createElement("h4",null,e.i18n("Victory Conditions")),n.createElement("div",{className:"two-column"},n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("tower"))),n.createElement("input",{type:"number",name:"winTower",id:"winTower",min:(r.tower+1).toString(10),value:r.winTower,onChange:w})),n.createElement("label",null,n.createElement("span",null,(0,s.upper1st)(e.i18n("resource"))),n.createElement("input",{type:"number",name:"winResource",id:"winResource",min:(Math.max(r.bricks+r.brickProd,r.gems+r.gemProd,r.recruits+r.recruitProd)+1).toString(10),value:r.winResource,onChange:w}))),n.createElement("h4",null,e.i18n("Other Preferences")),n.createElement("label",{className:"one-colume"},n.createElement("span",null,e.i18n("Cards in Hand")),n.createElement("input",{type:"number",name:"cardsInHand",id:"cardsInHand",min:"0",max:"15",value:r.cardsInHand,onChange:w})),n.createElement("div",{className:"button-wrapper"},n.createElement("button",{className:"warning",onClick:()=>{const{playerName:e,opponentName:n,tower:a,wall:o,brickProd:i,gemProd:s,recruitProd:l,bricks:m,gems:u,recruits:d,winTower:p,winResource:g,cardsInHand:w}=r,E={playerName:e,opponentName:n,start:{bricks:m,gems:u,recruits:d,brickProd:i,gemProd:s,recruitProd:l,tower:a,wall:o},win:{tower:p,resource:g},cardsInHand:w};t({type:c.fy,show:!1}),t({type:c.ah,payload:E})}},e.i18n("Apply & New Game"))))}))},1786:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(7294),a=r(6360),o=r(3484),i=r(3211),c=r(4983);const s=(0,n.memo)((()=>{const e=(0,a.C)((e=>e.volume)),t=(0,n.useContext)(c.I18nContext),r=(0,a.T)();return n.createElement(o.Z,{ScreenActionType:i.je},n.createElement("h3",{className:"text-center"},t.i18n("Volume")),n.createElement("input",{type:"range",min:"0",max:"10",value:e.toString(10),className:"volumemeter mt-3",onChange:e=>{r({type:i.j4,volume:parseInt(e.target.value,10)})}}),n.createElement("label",{className:"justify-center"},n.createElement("input",{type:"checkbox",checked:0===e,onChange:e=>{r({type:i.j4,volume:e.target.checked?0:10})}}),n.createElement("span",null,t.i18n("Mute"))))}))},3484:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(7294),a=r(4184),o=r.n(a),i=r(7889),c=r(6360),s=r(5033),l=r(9348),m=r(4983),u=r(2947);const d=(0,i.QM)({logo:{"background-image":`url(${s.Z})`,width:"134.5px",height:"46.5px"}}),p=(0,n.memo)((({ScreenActionType:e,children:t})=>{const r=(0,c.T)(),a=(0,n.useContext)(m.I18nContext),i=()=>{r({type:e,show:!1})},s=(0,n.useRef)(null);(0,l.Z)(s,i),(0,u.Z)("Escape",i);const p=d();return n.createElement("div",{className:o()("window-bg")},n.createElement("div",{className:o()("window-outerwrapper")},n.createElement("div",{ref:s,className:o()("window-wrapper")},n.createElement("div",{className:o()(p.logo,"m-auto bg-no-repeat bg-center bg-contain")}),t,n.createElement("button",{className:"cancel",title:a.i18n("Cancel"),onClick:i}))))}))},515:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(7294),a=r(4184),o=r.n(a),i=r(4983);const c=(0,n.memo)((({shown:e=!0})=>{const t=(0,n.useContext)(i.I18nContext);return e?n.createElement("div",{className:o()("robotocondensed","transform -translate-y-1/2 w-full text-center text-yellow-300 pointer-events-none text-4xl text-shadow-lg")},t.i18n("Discard a card")):null}))},3211:(e,t,r)=>{"use strict";r.d(t,{yv:()=>n,_g:()=>a,j4:()=>o,g$:()=>i,l7:()=>c,Uk:()=>s,u3:()=>l,kH:()=>m,EK:()=>u,PX:()=>d,Jn:()=>p,_d:()=>g,M2:()=>w,fj:()=>E,fL:()=>b,iE:()=>k,NX:()=>P,$Z:()=>h,B4:()=>C,ah:()=>f,MO:()=>v,qg:()=>N,zn:()=>x,s3:()=>y,F5:()=>T,jV:()=>I,k4:()=>_,K5:()=>R,Ut:()=>A,vd:()=>D,Qo:()=>S,R9:()=>H,Z$:()=>O,Dt:()=>Z,fy:()=>M,e8:()=>U,je:()=>L,Wz:()=>$,Xc:()=>G,zL:()=>F});const n="UPDATE_LANG",a="UPDATE_ERATHIAN",o="UPDATE_VOLUME",i="UPDATE_STATUS",c="UPDATE_STATUS_MAIN",s="EXEC_CARD",l="USE_CARD",m="CLEAR_CARD",u="MOVE_CARD_TO_STACK",d="MOVE_CARD_TO_CENTER",p="MOVE_CARD_TO_TOP",g="MOVE_CARD_TO_TOP_MAIN",w="DELETE_CARD",E="REMOVE_CARD",b="DISCARD_CARD",k="ADD_DISCARDED_TAG",P="DRAW_CARD",h="DRAW_CARD_PRE",C="DRAW_CARD_MAIN",f="CHANGE_SETTINGS_AND_INIT",v="CHANGE_SETTINGS",N="INIT",x="INIT_CARD",y="INIT_GAME",T="INIT_STATUS",I="NEXT_ROUND",_="RESOURCE_PROD",R="SWITCH_TURN",A="SWITCH_LOCK",D="SWITCH_DISCARD_MODE",S="CHECK_UNUSABLE",H="SET_UNUSABLE",O="SWITCH_NEW_TURN",Z="CHECK_VICTORY",M="SCREEN_PREF",U="SCREEN_LANG_PREF",L="SCREEN_VOLUME_PREF",$="SCREEN_END",G="SCREEN_HELP",F="AI_USE_CARD"},8093:(e,t,r)=>{"use strict";r.d(t,{he:()=>n,vP:()=>a,Pe:()=>o,Yz:()=>i});const n={start:{tower:20,wall:10,brickProd:2,gemProd:2,recruitProd:2,bricks:5,gems:5,recruits:5},win:{tower:50,resource:100},cardsInHand:5},a="🧝",o="👾",i=10},3644:(e,t,r)=>{"use strict";r.d(t,{J4:()=>n,KN:()=>a,E5:()=>o,Hz:()=>i,Xw:()=>c,rd:()=>s});const n=!1,a=!1,o=!1,i=!0,c=!0,s=!1},1304:(e,t,r)=>{"use strict";r.d(t,{ag:()=>n,cs:()=>a,PO:()=>o});const n=["bricks","gems","recruits"],a={brickProd:"bricks",gemProd:"gems",recruitProd:"recruits"},o=["tower","wall","bricks","gems","recruits","brickProd","gemProd","recruitProd"]},9129:(e,t,r)=>{"use strict";r.d(t,{Lc:()=>n,N6:()=>a,fv:()=>o,Fi:()=>i,d:()=>c});const n=500,a=500,o=.45,i=100,c=1200},604:(e,t,r)=>{"use strict";r.d(t,{o:()=>n});const n=34}}]);