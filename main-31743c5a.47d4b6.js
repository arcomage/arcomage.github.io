(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[605],{9624:function(e,t,n){"use strict";var r=n(7294),a=n(4184),o=n.n(a),i=n(7889),c=n(8844),l=n(4638);const s=(0,i.QM)({"@keyframes explosion":{"100%":{"background-position":"-4032px"}},"@keyframes firework":{"100%":{"background-position":"-7936px"}},main:{"will-change":"background-position","background-repeat":"no-repeat","animation-duration":"1s","animation-iteration-count":1},explosion:{width:"192px",height:"192px",top:0,left:0,"background-image":`url(${c.Z})`,"animation-name":"$explosion","animation-timing-function":"steps(21)"},firework:{width:"256px",height:"256px",top:"-300%",left:"1rem","background-image":`url(${l.Z})`,"animation-name":"$firework","animation-timing-function":"steps(31)"}});t.Z=({n:e})=>{const t=s(),n=(0,r.useRef)(!1),a=(0,r.useRef)(0),i=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(n.current){const n=a.current,r=i.current;if(null!==r){const a=document.createElement("div");a.className=o()("transform -translate-x-1/2 -translate-y-1/2 absolute",t.main,e<n?t.explosion:t.firework),r.appendChild(a),a.onanimationend=()=>r.removeChild(a)}}n.current||(n.current=!0),a.current=e}),[e]),r.createElement("div",{ref:i,className:"z-40 pointer-events-none w-full h-full absolute top-0 left-1/2"})}},6399:function(e,t,n){"use strict";var r=n(7294),a=n(4184),o=n.n(a);const i=(0,n(7889).QM)({"@keyframes fadeOutUp":{from:{transform:"translateY(0)",opacity:1},to:{transform:"translateY(-2.5em)",opacity:0}},main:{top:"-0.5em",left:"0.4em",opacity:0,"will-change":"transform, opacity","animation-name":"$fadeOutUp","animation-duration":"1.2s","animation-timing-function":"ease-out"}});t.Z=({n:e})=>{const t=i(),n=(0,r.useRef)(!1),a=(0,r.useRef)(0),c=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(n.current){const n=a.current,r=c.current;if(null!==r){const a=e-n,i=document.createElement("div"),c=document.createTextNode(`${a>0?"+":""}${a.toString()}`);i.className=o()(t.main,`absolute font-mono text-2xl text-${a>=0?"green-500":"red-700"} text-shadow-md`),i.appendChild(c),r.appendChild(i),i.onanimationend=()=>r.removeChild(i)}}n.current||(n.current=!0),a.current=e}),[e]),r.createElement("div",{ref:c,className:"z-50 absolute w-full h-full"})}},6194:function(e,t,n){"use strict";var r=n(7294),a=n(4184),o=n.n(a),i=n(7889),c=n(8421),l=n(2546),s=n(4638),u=n(4983),m=n(6360),d=n(3211),p=n(2947),g=n(9129);const f=["You Lose!","Tie Game","You Win!"],w=(0,i.QM)({"@keyframes fadein":{"0%":{opacity:0},"100%":{opacity:1}},container:{padding:"15vh 10%",opacity:1,"animation-name":"$fadein","animation-iteration-count":1,"animation-timing-function":"ease-in","animation-duration":"0.4s"},main:{"background-image":e=>`url(${e>=0?c.Z:l.Z})`},"@keyframes firework":{"100%":{"background-position":"-7936px"}},firework:{width:"256px",height:"256px","background-image":`url(${s.Z})`,"background-repeat":"no-repeat","animation-name":"$firework","animation-timing-function":"steps(31)","animation-duration":"1s","animation-iteration-count":1,"animation-delay":"0.5s"},firework2:{"animation-delay":"1.6s"},"@keyframes redNeon":{from:{"text-shadow":"0 0 6px rgba(225,191,191,0.92), 0 0 30px rgba(225,191,191,0.54), 0 0 12px rgba(238,54,37,0.72), 0 0 21px rgba(238,54,37,0.92), 0 0 34px rgba(238,54,37,0.78), 0 0 54px rgba(238,54,37,0.92)"},to:{"text-shadow":"0 0 6px rgba(225,191,191,0.98), 0 0 30px rgba(225,191,191,0.62), 0 0 12px rgba(238,54,37,0.78), 0 0 22px rgba(238,54,37,0.84), 0 0 38px rgba(238,54,37,0.88), 0 0 60px rgba(238,54,37,1)"}},"@keyframes blackNeon":{from:{"text-shadow":"0 0 6px rgba(0,0,0,0.92), 0 0 30px rgba(0,0,0,0.54), 0 0 12px rgba(0,0,0,0.72), 0 0 21px rgba(0,0,0,0.92), 0 0 34px rgba(0,0,0,0.78), 0 0 54px rgba(0,0,0,0.92)"},to:{"text-shadow":"0 0 6px rgba(0,0,0,0.98), 0 0 30px rgba(0,0,0,0.62), 0 0 12px rgba(0,0,0,0.78), 0 0 22px rgba(0,0,0,0.84), 0 0 38px rgba(0,0,0,0.88), 0 0 60px rgba(0,0,0,1)"}},text:{"font-size":"15vh","line-height":"15vh",bottom:"53%",color:"#fff",animation:e=>(e>=0?"$redNeon":"$blackNeon")+" 0.08s ease-in-out infinite alternate"}});t.Z=(0,r.memo)((({kind:e})=>{const t=(0,m.T)(),n=(0,r.useContext)(u.I18nContext),a=w(e),i=n.i18n(f[e+1]),[c,l]=(0,r.useState)(!1);(0,r.useEffect)((()=>{setTimeout((()=>{l(!0)}),g.d)}),[]);const s=()=>{t({type:d.Wz,kind:null}),t({type:d.qg})};(0,p.Z)(null,s,g.d);const E=c?{onClick:s,onContextMenu:s,tabIndex:0}:{};return r.createElement("div",Object.assign({className:o()("absolute w-full h-full top-0 left-0 z-90 bg-black bg-opacity-50",a.container)},E),r.createElement("div",{className:o()("w-full h-full bg-center bg-no-repeat bg-contain relative",a.main)},r.createElement("div",{className:o()(a.text,"absolute w-full font-bold text-white text-center robotocondensed")},i),e>=0&&r.createElement(r.Fragment,null,r.createElement("div",{className:o()(a.firework,"absolute top-0 left-1/4")}),r.createElement("div",{className:o()(a.firework,a.firework2,"absolute bottom-0 right-1/4")}))))}))},5586:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(3484),o=(0,r.memo)((({children:e})=>r.createElement(r.Fragment,null,e.split("\n").map(((e,t)=>r.createElement("p",{key:t},e)))))),i=n(3211),c=n(4983),l=(0,r.memo)((()=>{const e=(0,r.useContext)(c.I18nContext),t=e.i18n("Please go to %s to view more information, star the repo and follow %s there."),n=e.i18n("the GitHub project page"),l=t.split("%s"),s=r.createElement("p",null,r.createElement("strong",null,l[0],r.createElement("a",{href:"https://github.com/arcomage/arcomage-hd",target:"_blank",rel:"noopener noreferrer"},n),l[1],r.createElement("a",{href:"https://github.com/tomchen",target:"_blank",rel:"noopener noreferrer"},"@tomchen"),l[2]));return r.createElement(a.Z,{ScreenActionType:i.Xc},r.createElement("p",null,r.createElement("strong",null,e.i18n("ArcoMage HD"))," - ",e.i18n("DESC")),s,r.createElement("p",null,e.i18n("Below is a brief presentation of the rules:")),r.createElement("div",null,r.createElement(o,null,e.i18n("GAMERULES"))))}))},6499:function(e,t,n){"use strict";var r=n(7294),a=n(4184),o=n.n(a),i=n(6360),c=n(3484),l=n(8199),s=n(6559),u=n(3211),m=n(4983);t.Z=(0,r.memo)((()=>{const e=(0,i.C)((e=>e.lang.code)),t=(0,i.C)((e=>e.lang.erathian)),n=(0,r.useContext)(m.I18nContext),a=(0,i.T)(),d=(()=>{const e=n.i18n("ERATHIAN");if(void 0!==e){const t=e.split("%s");return[r.createElement(r.Fragment,{key:0},t[0]),r.createElement("span",{key:1,className:"erathian text-2xl p-0"},"Erathian"),r.createElement(r.Fragment,{key:2},t[1])]}return null})();return r.createElement(c.Z,{ScreenActionType:u.e8},r.createElement("div",{className:"my-5 grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-4 justify-items-center no-erathian"},(0,s.qh)(l.langs).sort((([e],[t])=>e.localeCompare(t))).map((([t,n])=>r.createElement("button",{key:t,className:o()({active:t===e}),onClick:()=>{a({type:u.yv,lang:t})}},n)))),r.createElement("label",{className:"justify-center"},r.createElement("input",{type:"checkbox",checked:t,onChange:e=>{a({type:u._g,erathian:e.target.checked})}}),r.createElement("span",{className:"no-erathian"},d)))}))},6657:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(8172),o=n(6360),i=n(3484),c=n(3211),l=n(4983);const s=[{tavern:"On The House",location:"Harmondale",start:{tower:15,wall:5,brickProd:2,gemProd:2,recruitProd:2,bricks:10,gems:10,recruits:10},win:{tower:30,resource:100},cardsInHand:5},{tavern:"Griffin's Rest",location:"Erathia",start:{tower:20,wall:5,brickProd:2,gemProd:2,recruitProd:2,bricks:5,gems:5,recruits:5},win:{tower:50,resource:150},cardsInHand:5},{tavern:"Emerald Inn",location:"Tularean Forest",start:{tower:20,wall:5,brickProd:2,gemProd:2,recruitProd:2,bricks:5,gems:5,recruits:5},win:{tower:50,resource:150},cardsInHand:5},{tavern:"Snobbish Goblin",location:"Deyja",start:{tower:25,wall:10,brickProd:3,gemProd:3,recruitProd:3,bricks:5,gems:5,recruits:5},win:{tower:75,resource:200},cardsInHand:5},{tavern:"Familiar Place",location:"Bracada Desert",start:{tower:20,wall:10,brickProd:3,gemProd:3,recruitProd:3,bricks:5,gems:5,recruits:5},win:{tower:75,resource:200},cardsInHand:5},{tavern:"The Blessed Brew",location:"Celeste",start:{tower:30,wall:15,brickProd:4,gemProd:4,recruitProd:4,bricks:10,gems:10,recruits:10},win:{tower:100,resource:300},cardsInHand:5},{tavern:"The Vampyre Lounge",location:"The Pit",start:{tower:30,wall:15,brickProd:4,gemProd:4,recruitProd:4,bricks:10,gems:10,recruits:10},win:{tower:100,resource:300},cardsInHand:5},{tavern:"The Laughing Monk",location:"Evermorn Island",start:{tower:20,wall:10,brickProd:5,gemProd:5,recruitProd:5,bricks:25,gems:25,recruits:25},win:{tower:150,resource:400},cardsInHand:5},{tavern:"Fortune's Folly",location:"Nighon",start:{tower:20,wall:10,brickProd:1,gemProd:1,recruitProd:1,bricks:15,gems:15,recruits:15},win:{tower:200,resource:500},cardsInHand:5},{tavern:"Miner's Only",location:"Barrow Downs",start:{tower:20,wall:50,brickProd:1,gemProd:1,recruitProd:5,bricks:5,gems:5,recruits:25},win:{tower:100,resource:300},cardsInHand:5},{tavern:"The Loyal Mercenary",location:"Tidewater",start:{tower:10,wall:20,brickProd:3,gemProd:1,recruitProd:2,bricks:15,gems:5,recruits:10},win:{tower:125,resource:350},cardsInHand:5},{tavern:"The Potted Pixie",location:"Avlee",start:{tower:10,wall:20,brickProd:3,gemProd:1,recruitProd:2,bricks:15,gems:5,recruits:10},win:{tower:125,resource:350},cardsInHand:5},{tavern:"Grogg's Grog",location:"Stone City",start:{tower:50,wall:50,brickProd:5,gemProd:3,recruitProd:5,bricks:20,gems:10,recruits:20},win:{tower:100,resource:300},cardsInHand:5}];var u=n(8093),m=n(6559),d=(0,r.memo)((()=>{const e=(0,r.useContext)(l.I18nContext),t=(0,o.T)(),[n,d]=(0,r.useState)({playerName:(0,o.C)((e=>e.settings.playerName)),opponentName:(0,o.C)((e=>e.settings.opponentName)),tower:(0,o.C)((e=>e.settings.start.tower)),wall:(0,o.C)((e=>e.settings.start.wall)),bricks:(0,o.C)((e=>e.settings.start.bricks)),gems:(0,o.C)((e=>e.settings.start.gems)),recruits:(0,o.C)((e=>e.settings.start.recruits)),brickProd:(0,o.C)((e=>e.settings.start.brickProd)),gemProd:(0,o.C)((e=>e.settings.start.gemProd)),recruitProd:(0,o.C)((e=>e.settings.start.recruitProd)),winTower:(0,o.C)((e=>e.settings.win.tower)),winResource:(0,o.C)((e=>e.settings.win.resource)),cardsInHand:(0,o.C)((e=>e.settings.cardsInHand))}),[p,g]=(0,r.useState)(-10);(0,r.useEffect)((()=>{const e=n.tower+1,t=Math.max(n.bricks+n.brickProd,n.gems+n.gemProd,n.recruits+n.recruitProd)+1;n.winTower<e?d((t=>(0,a.ZP)(t,(t=>{t.winTower=e})))):n.winResource<t&&d((e=>(0,a.ZP)(e,(e=>{e.winResource=t})))),g((e=>{const t=s.concat(u.he).findIndex((({start:t,win:n,cardsInHand:r})=>e.tower===t.tower&&e.wall===t.wall&&e.brickProd===t.brickProd&&e.gemProd===t.gemProd&&e.recruitProd===t.recruitProd&&e.bricks===t.bricks&&e.gems===t.gems&&e.recruits===t.recruits&&e.winTower===n.tower&&e.winResource===n.resource&&e.cardsInHand===r));return t===s.length?-2:t})(n))}),[n]);const f=e=>{""===e.target.value&&"playerName"!==e.target.name&&"opponentName"!==e.target.name&&(e.target.value="0"),parseInt(e.target.value,10)<parseInt(e.target.min,10)&&(e.target.value=e.target.min),parseInt(e.target.value,10)>parseInt(e.target.max,10)&&(e.target.value=e.target.max);const{name:t,value:n}=e.target;d((e=>(0,a.ZP)(e,(e=>{(0,m.nr)(e,t)&&(e[t]="playerName"===t||"opponentName"===t?n:parseInt(n,10))}))))};return r.createElement(i.Z,{ScreenActionType:c.fy},r.createElement("h3",null,e.i18n("Preferences")),r.createElement("div",{className:"two-column half"},r.createElement("label",null,r.createElement("span",null,e.i18n("Your Name:")),r.createElement("input",{type:"text",name:"playerName",id:"playerName",value:n.playerName,onChange:f,onFocus:e=>{e.target.value===u.vP&&e.target.select()}})),r.createElement("label",null,r.createElement("span",null,e.i18n("Opponent's Name:")),r.createElement("input",{type:"text",name:"opponentName",id:"opponentName",value:n.opponentName,onChange:f,onFocus:e=>{e.target.value===u.Pe&&e.target.select()}}))),r.createElement("label",{className:"one-colume"},r.createElement("span",null,e.i18n("Choose a Tavern (Preset Preferences):")),r.createElement("select",{name:"tavern",id:"tavern",value:p,onChange:e=>{(e=>{const t=-2===e?s.length:e;if(t>=0){const{start:e,win:n,cardsInHand:r}=s.concat(u.he)[t];d((t=>(0,a.ZP)(t,(t=>{t.tower=e.tower,t.wall=e.wall,t.brickProd=e.brickProd,t.gemProd=e.gemProd,t.recruitProd=e.recruitProd,t.bricks=e.bricks,t.gems=e.gems,t.recruits=e.recruits,t.winTower=n.tower,t.winResource=n.resource,t.cardsInHand=r}))))}})(parseInt(e.target.value,10))}},r.createElement("option",{value:-2},e.i18n("Default")),s.map((({tavern:e,location:t},n)=>r.createElement("option",{value:n,key:n},e," - ",t))),-1===p&&r.createElement("option",{value:-1},e.i18n("Customized")))),r.createElement("h4",null,e.i18n("Starting Conditions")),r.createElement("div",{className:"two-column"},r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("tower"))),r.createElement("input",{type:"number",name:"tower",id:"tower",min:"1",value:n.tower,onChange:f})),r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("wall"))),r.createElement("input",{type:"number",name:"wall",id:"wall",min:"0",value:n.wall,onChange:f}))),r.createElement("div",{className:"two-column"},r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("bricks"))),r.createElement("input",{type:"number",name:"bricks",id:"bricks",min:"0",value:n.bricks,onChange:f})),r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("quarry"))),r.createElement("input",{type:"number",name:"brickProd",id:"brickProd",min:"0",value:n.brickProd,onChange:f}))),r.createElement("div",{className:"two-column"},r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("gems"))),r.createElement("input",{type:"number",name:"gems",id:"gems",min:"0",value:n.gems,onChange:f})),r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("magic"))),r.createElement("input",{type:"number",name:"gemProd",id:"gemProd",min:"0",value:n.gemProd,onChange:f}))),r.createElement("div",{className:"two-column"},r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("recruits"))),r.createElement("input",{type:"number",name:"recruits",id:"recruits",min:"0",value:n.recruits,onChange:f})),r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("dungeon"))),r.createElement("input",{type:"number",name:"recruitProd",id:"recruitProd",min:"0",value:n.recruitProd,onChange:f}))),r.createElement("h4",null,e.i18n("Victory Conditions")),r.createElement("div",{className:"two-column"},r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("tower"))),r.createElement("input",{type:"number",name:"winTower",id:"winTower",min:(n.tower+1).toString(10),value:n.winTower,onChange:f})),r.createElement("label",null,r.createElement("span",null,(0,l.upper1st)(e.i18n("resource"))),r.createElement("input",{type:"number",name:"winResource",id:"winResource",min:(Math.max(n.bricks+n.brickProd,n.gems+n.gemProd,n.recruits+n.recruitProd)+1).toString(10),value:n.winResource,onChange:f}))),r.createElement("h4",null,e.i18n("Other Preferences")),r.createElement("label",{className:"one-colume"},r.createElement("span",null,e.i18n("Cards in Hand")),r.createElement("input",{type:"number",name:"cardsInHand",id:"cardsInHand",min:"0",max:"15",value:n.cardsInHand,onChange:f})),r.createElement("div",{className:"button-wrapper"},r.createElement("button",{className:"warning",onClick:()=>{const{playerName:e,opponentName:r,tower:a,wall:o,brickProd:i,gemProd:l,recruitProd:s,bricks:u,gems:m,recruits:d,winTower:p,winResource:g,cardsInHand:f}=n,w={playerName:e,opponentName:r,start:{bricks:u,gems:m,recruits:d,brickProd:i,gemProd:l,recruitProd:s,tower:a,wall:o},win:{tower:p,resource:g},cardsInHand:f};t({type:c.fy,show:!1}),t({type:c.ah,payload:w})}},e.i18n("Apply & New Game"))))}))},1786:function(e,t,n){"use strict";var r=n(7294),a=n(6360),o=n(3484),i=n(3211),c=n(4983);t.Z=(0,r.memo)((()=>{const e=(0,a.C)((e=>e.volume)),t=(0,r.useContext)(c.I18nContext),n=(0,a.T)();return r.createElement(o.Z,{ScreenActionType:i.je},r.createElement("h3",{className:"text-center"},t.i18n("Volume")),r.createElement("input",{type:"range",min:"0",max:"10",value:e.toString(10),className:"volumemeter mt-3",onChange:e=>{n({type:i.j4,volume:parseInt(e.target.value,10)})}}),r.createElement("label",{className:"justify-center"},r.createElement("input",{type:"checkbox",checked:0===e,onChange:e=>{n({type:i.j4,volume:e.target.checked?0:10})}}),r.createElement("span",null,t.i18n("Mute"))))}))},3484:function(e,t,n){"use strict";var r=n(7294),a=n(4184),o=n.n(a),i=n(7889),c=n(6360),l=n(5033),s=n(9348),u=n(4983),m=n(2947);const d=(0,i.QM)({logo:{"background-image":`url(${l.Z})`,width:"134.5px",height:"46.5px"}});t.Z=(0,r.memo)((({ScreenActionType:e,children:t})=>{const n=(0,c.T)(),a=(0,r.useContext)(u.I18nContext),i=()=>{n({type:e,show:!1})},l=(0,r.useRef)(null);(0,s.Z)(l,i),(0,m.Z)("Escape",i);const p=d();return r.createElement("div",{className:o()("window-bg")},r.createElement("div",{className:o()("window-outerwrapper")},r.createElement("div",{ref:l,className:o()("window-wrapper")},r.createElement("div",{className:o()(p.logo,"m-auto bg-no-repeat bg-center bg-contain")}),t,r.createElement("button",{className:"cancel",title:a.i18n("Cancel"),onClick:i}))))}))},515:function(e,t,n){"use strict";var r=n(7294),a=n(4184),o=n.n(a),i=n(4983);t.Z=(0,r.memo)((({shown:e=!0})=>{const t=(0,r.useContext)(i.I18nContext);return e?r.createElement("div",{className:o()("robotocondensed","transform -translate-y-1/2 w-full text-center text-yellow-300 pointer-events-none text-4xl text-shadow-lg")},t.i18n("Discard a card")):null}))},3211:function(e,t,n){"use strict";n.d(t,{yv:function(){return r},_g:function(){return a},j4:function(){return o},g$:function(){return i},l7:function(){return c},Uk:function(){return l},u3:function(){return s},kH:function(){return u},EK:function(){return m},PX:function(){return d},Jn:function(){return p},_d:function(){return g},M2:function(){return f},fj:function(){return w},fL:function(){return E},iE:function(){return b},NX:function(){return k},$Z:function(){return P},B4:function(){return h},ah:function(){return C},MO:function(){return v},qg:function(){return N},zn:function(){return x},s3:function(){return y},F5:function(){return T},jV:function(){return I},k4:function(){return _},K5:function(){return R},Ut:function(){return A},vd:function(){return D},Qo:function(){return S},R9:function(){return H},Z$:function(){return O},Dt:function(){return Z},fy:function(){return M},e8:function(){return U},je:function(){return L},Wz:function(){return $},Xc:function(){return G},zL:function(){return F}});const r="UPDATE_LANG",a="UPDATE_ERATHIAN",o="UPDATE_VOLUME",i="UPDATE_STATUS",c="UPDATE_STATUS_MAIN",l="EXEC_CARD",s="USE_CARD",u="CLEAR_CARD",m="MOVE_CARD_TO_STACK",d="MOVE_CARD_TO_CENTER",p="MOVE_CARD_TO_TOP",g="MOVE_CARD_TO_TOP_MAIN",f="DELETE_CARD",w="REMOVE_CARD",E="DISCARD_CARD",b="ADD_DISCARDED_TAG",k="DRAW_CARD",P="DRAW_CARD_PRE",h="DRAW_CARD_MAIN",C="CHANGE_SETTINGS_AND_INIT",v="CHANGE_SETTINGS",N="INIT",x="INIT_CARD",y="INIT_GAME",T="INIT_STATUS",I="NEXT_ROUND",_="RESOURCE_PROD",R="SWITCH_TURN",A="SWITCH_LOCK",D="SWITCH_DISCARD_MODE",S="CHECK_UNUSABLE",H="SET_UNUSABLE",O="SWITCH_NEW_TURN",Z="CHECK_VICTORY",M="SCREEN_PREF",U="SCREEN_LANG_PREF",L="SCREEN_VOLUME_PREF",$="SCREEN_END",G="SCREEN_HELP",F="AI_USE_CARD"},8093:function(e,t,n){"use strict";n.d(t,{he:function(){return r},vP:function(){return a},Pe:function(){return o},Yz:function(){return i}});const r={start:{tower:20,wall:10,brickProd:2,gemProd:2,recruitProd:2,bricks:5,gems:5,recruits:5},win:{tower:50,resource:100},cardsInHand:5},a="🧝",o="👾",i=10},3644:function(e,t,n){"use strict";n.d(t,{J4:function(){return r},KN:function(){return a},E5:function(){return o},Hz:function(){return i},Xw:function(){return c},rd:function(){return l}});const r=!0,a=!0,o=!0,i=!0,c=!0,l=!1},1304:function(e,t,n){"use strict";n.d(t,{ag:function(){return r},cs:function(){return a},PO:function(){return o}});const r=["bricks","gems","recruits"],a={brickProd:"bricks",gemProd:"gems",recruitProd:"recruits"},o=["tower","wall","bricks","gems","recruits","brickProd","gemProd","recruitProd"]},9129:function(e,t,n){"use strict";n.d(t,{Lc:function(){return r},N6:function(){return a},fv:function(){return o},Fi:function(){return i},d:function(){return c}});const r=500,a=500,o=.45,i=100,c=1200},604:function(e,t,n){"use strict";n.d(t,{o:function(){return r}});const r=34}}]);