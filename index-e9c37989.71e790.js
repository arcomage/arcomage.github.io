"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[8090],{24410:(e,t,n)=>{n.d(t,{Z:()=>x});var l=n(67294),i=n(94184),a=n.n(i),r=n(94989),o=n(18255),c=n(58537),s=n(57662),m=n(22657),d=n(94231),h=n(74983),p=n(6360),u=n(87346),g=n(48391),v=n(81317);const w=e=>`(${e}px - (1.75rem + 0.25rem * 2)) / (282 + 600)`,b=e=>`${w(e)} * 204`,f=e=>`${w(e)} * ((204 - 135) / 2)`,E=(e,t)=>`calc((${b(e)} - ${f(e)} * 2) / 135 * 600 * ${t})`,y=(0,r.QM)({main:{width:({height:e})=>`calc(${b(e)})`},towerwrapper:{height:({height:e})=>E(e,"1"),bottom:"calc(1.75rem + 0.25rem * 2)","padding-left":({height:e})=>`calc(${f(e)})`,"padding-right":({height:e})=>`calc(${f(e)})`},towerbody:{background:{image:`url(${s})`,repeat:"repeat-y",size:"100%",position:"center 0"},width:({height:e})=>`calc(100% - ${f(e)} * 2)`,height:({height:e,goal:t})=>E(e,`(var(--n) / ${t})`),"max-height":({height:e})=>E(e,"1"),"will-change":"height","transition-property":"height","transition-timing-function":"linear","transition-duration":"0.4s"},towerbodytop:{position:"absolute",top:({height:e})=>`calc(0px - ${b(e)} / 204 * 282 + 1px)`,left:({height:e})=>`calc(0px - ${f(e)})`,right:({height:e})=>`calc(0px - ${f(e)})`,width:({height:e})=>`calc(${b(e)})`,height:({height:e})=>`calc(${b(e)} / 204 * 282)`,display:"block",background:{repeat:"no-repeat",size:"100%",position:"center 0"}},towerbodytopred:{background:{image:`url(${m})`}},towerbodytopblue:{background:{image:`url(${d})`}}}),x=(0,l.memo)((({isOpponent:e=!1,goal:t})=>{const n=(0,l.useContext)(h.O),i=(0,l.useContext)(o.$),r=i.height*(i.narrowMobile?.5:2/3),w=y({height:r,goal:t}),b=(0,p.C)((e=>e.settings.winTower));let f=n.i18n(e?"Opponent's %s":"Your %s").replace("%s",n.i18n("tower"));f=n.i18n("%s1. Reach %s2 to win").replace("%s1",f).replace("%s2",b.toString(10));const E=(0,p.C)((e=>e.visual.pixelation)),x=(0,l.useRef)(null),[$,k]=(0,l.useState)(v.jf);return(0,l.useEffect)((()=>{const e=()=>{setTimeout((()=>{0!==E&&x.current&&k(window.getComputedStyle(x.current).getPropertyValue("max-height"))}),v.Jj)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),e(),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[]),l.createElement("div",{className:a()("h-full mx-1 relative","float-"+(e?"right":"left"),w.main)},l.createElement(u.Z,{title:f,placement:"bottom"},l.createElement("div",{className:"w-full h-full"},l.createElement("div",{className:a()("z-20 w-full absolute",w.towerwrapper)},l.createElement("div",{ref:x,className:a()("absolute bottom-0",w.towerbody)},l.createElement("div",{className:a()(w.towerbodytop,w[e?"towerbodytopblue":"towerbodytopred"])},0!==E&&l.createElement(g.Z,{src:e?d:m,level:E,cleanup:!0})),0!==E&&l.createElement("div",{className:"w-full h-full overflow-hidden"},l.createElement(g.Z,{src:s,level:E,height:$})))),l.createElement("div",{className:"bg-black bg-opacity-50 p-1 shadow-lg w-full absolute bottom-0"},l.createElement("div",{className:a()("border border-yellow-400 border-opacity-25 text-yellow-400 text-center h-7 leading-7 font-mono","el-number")},l.createElement(c.Z,{isOpponent:e,isWall:!1,target:x}))))))}))},58537:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(67294),i=n(6360),a=n(48023),r=n(89842),o=n(6399);const c=(0,l.memo)((({isOpponent:e,isWall:t,target:n})=>{const c=(0,i.C)((n=>n.status[e?"opponent":"player"][t?"wall":"tower"]));return(0,l.useEffect)((()=>{null!==n.current&&n.current.style.setProperty("--n",c.toString(10))}),[c]),l.createElement(l.Fragment,null,l.createElement(o.Z,{n:c}),l.createElement(a.Z,{n:c}),l.createElement(r.Z,{n:c}))}))},50970:(e,t,n)=>{n.d(t,{Z:()=>b});var l=n(67294),i=n(94184),a=n.n(i),r=n(94989),o=n(18255),c=n(58537),s=n(81317),m=n(17879),d=n(74983),h=n(87346),p=n(48391),u=n(6360);const g=e=>`(${e}px - (1.75rem + 0.25rem * 2)) / (282 + 600)`,v=(e,t)=>`calc(${g(e)} * 597 * ${t})`,w=(0,r.QM)({main:{width:e=>`calc(${g(e)} * 72 + 1rem * 2)`},wallwrapper:{height:e=>v(e,"1"),bottom:"calc(1.75rem + 0.25rem * 2)"},wallbody:{height:e=>v(e,`(var(--n) / ${s.dY})`),background:{image:`url(${m})`,repeat:"repeat-y",size:"100%",position:"center 0"},width:e=>`calc(${g(e)} * 72)`,"max-height":e=>`calc(${g(e)} * 597)`,"will-change":"height","transition-property":"height","transition-timing-function":"linear","transition-duration":"0.4s"}}),b=(0,l.memo)((({isOpponent:e=!1})=>{const t=(0,l.useContext)(d.O),n=(0,l.useContext)(o.$),i=n.height*(n.narrowMobile?.5:2/3),r=w(i),g=t.i18n(e?"Opponent's %s":"Your %s").replace("%s",t.i18n("wall")),v=(0,u.C)((e=>e.visual.pixelation)),b=(0,l.useRef)(null),[f,E]=(0,l.useState)(s.Es);return(0,l.useEffect)((()=>{const e=()=>{setTimeout((()=>{0!==v&&b.current&&E(window.getComputedStyle(b.current).getPropertyValue("max-height"))}),s.Jj)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),e(),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[]),l.createElement("div",{className:a()("h-full mx-2 relative","float-"+(e?"right":"left"),r.main)},l.createElement(h.Z,{title:g,placement:"bottom"},l.createElement("div",{className:"w-full h-full"},l.createElement("div",{className:a()("z-20 w-full absolute px-4",r.wallwrapper)},l.createElement("div",{ref:b,className:a()("absolute bottom-0 overflow-hidden",r.wallbody)},0!==v&&l.createElement(p.Z,{src:m,level:v,height:f}))),l.createElement("div",{className:"bg-black bg-opacity-50 p-1 shadow-lg w-full absolute bottom-0"},l.createElement("div",{className:a()("border border-yellow-400 border-opacity-25 text-yellow-400 text-center h-7 leading-7 font-mono","el-number")},l.createElement(c.Z,{isOpponent:e,isWall:!0,target:b}))))))}))},77170:(e,t,n)=>{n.d(t,{Z:()=>x});var l=n(67294),i=n(34820),a=n(78922),r=n(23761),o=n(94184),c=n.n(o),s=n(94989),m=n(6360),d=n(63211),h=n(74983),p=n(87346);const u=(0,s.QM)({"@keyframes rotate2":{"0%, 100%":{transform:"rotate(0deg)"},"25%":{transform:"rotate(30deg)"},"75%":{transform:"rotate(-30deg)"}},helpButton:{left:"calc(60% + 12rem)","@media screen and (prefers-reduced-motion: no-preference)":{"&:hover, &.windowactive":{"& svg":{animation:"$rotate2 2s linear infinite"}}}}}),g=(0,l.memo)((()=>{const e=(0,l.useContext)(h.O),t=(0,m.C)((e=>e.screen.help)),n=(0,m.T)(),i=u(),a=()=>{n({type:d.Xc,show:!0})};return l.createElement(p.Z,{title:e.i18n("Help")},l.createElement("button",{accessKey:"h",className:c()("topbutton",i.helpButton,{windowactive:t}),onClick:a,onAuxClick:a},l.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M12,2.1c-5.5,0-9.9,4.4-9.9,9.9c0,5.5,4.4,9.9,9.9,9.9c5.5,0,9.9-4.4,9.9-9.9C21.9,6.5,17.5,2.1,12,2.1z M12,20.1c-4.5,0-8.1-3.6-8.1-8.1c0-4.5,3.6-8.1,8.1-8.1c4.5,0,8.1,3.6,8.1,8.1C20.1,16.5,16.5,20.1,12,20.1z"}),l.createElement("path",{d:"M11.8,6.7c-2.5,0-3.2,2.2-3.2,2.2L10,9.7c0,0,0.3-0.8,0.9-1.2c0.5-0.4,1.6-0.6,2.2,0.1c0.7,0.9-0.2,1.6-1.1,2.7 c-1,1.2-1,3.7-1,3.7h2c0,0,0.1-2.3,1-3.4c0.6-0.7,1.4-1.3,1.4-2.5S14.3,6.7,11.8,6.7z"}),l.createElement("rect",{x:"11",y:"16",width:"2",height:"2"}))))}));var v=n(23644);const w=(0,s.QM)({"@keyframes visible1by1-1-3":{"0%, 100%, 33.32%":{visibility:"visible"},"33.33%, 99.99%":{visibility:"hidden"}},"@keyframes visible1by1-2-3":{"0%, 100%, 33.32%":{visibility:"hidden"},"33.33%, 66.65%":{visibility:"visible"},"66.66%, 99.99%":{visibility:"hidden"}},"@keyframes visible1by1-3-3":{"0%, 100%, 66.65%":{visibility:"hidden"},"66.66%, 99.99%":{visibility:"visible"}},githubButton:{left:"calc(60% + 15rem)","& svg":{"& .el-0":{visibility:"visible"},"& .el-1":{visibility:"hidden"},"& .el-2":{visibility:"hidden"}},"@media screen and (prefers-reduced-motion: no-preference)":{"&:hover":{"& svg":{"& .el-0":{visibility:"hidden",animation:"$visible1by1-2-3 0.4s linear infinite"},"& .el-1":{visibility:"visible",animation:"$visible1by1-1-3 0.4s linear infinite"},"& .el-2":{visibility:"hidden",animation:"$visible1by1-3-3 0.4s linear infinite"}}}}}}),b=(0,l.memo)((()=>{const e=w();return l.createElement(p.Z,{title:"GitHub"},l.createElement("a",{accessKey:"g",className:c()("topbutton",e.githubButton),href:v.Dj,target:"_blank",rel:"noopener noreferrer",onContextMenu:()=>{window.open(v.Dj)}},l.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{className:"el-0",d:"M11.968 1.714c-5.82 0-10.541 4.72-10.541 10.54 0 4.657 3.04 8.601 7.178 10.025.518.064.712-.26.712-.518v-1.81c-2.91.646-3.557-1.423-3.557-1.423-.453-1.229-1.164-1.552-1.164-1.552-.97-.647.064-.647.064-.647 1.035.065 1.617 1.1 1.617 1.1.97 1.616 2.458 1.164 3.04.905a2.252 2.252 0 01.646-1.423c-2.328-.258-4.785-1.164-4.785-5.238 0-1.164.388-2.07 1.1-2.845-.066-.194-.454-1.294.128-2.716 0 0 .906-.259 2.91 1.099.841-.259 1.747-.323 2.652-.323s1.81.129 2.651.323c2.005-1.358 2.91-1.1 2.91-1.1.582 1.423.194 2.523.13 2.781a4.183 4.183 0 011.1 2.846c0 4.074-2.458 4.915-4.786 5.173.388.324.711.97.711 1.94v2.91c0 .259.194.582.711.518a10.553 10.553 0 007.179-10.024c-.065-5.82-4.786-10.541-10.606-10.541z"}),l.createElement("path",{className:"el-1",d:"M11.968 1.714c-5.82 0-10.541 4.72-10.541 10.54 0 4.657 3.04 8.601 7.178 10.025.518.064.712-.26.712-.518v-1.81c-2.91.646-4.396-1.307-4.396-1.307-.453-1.23-1.164-1.552-1.164-1.552-.97-.647.065-.647.065-.647 1.035.065 1.617 1.1 1.617 1.1.97 1.616 3.296 1.048 3.878.789a2.252 2.252 0 01.646-1.423c-2.328-.258-4.785-1.164-4.785-5.238 0-1.164.388-2.07 1.1-2.845-.066-.194-.483-.253.1-1.675 0 0 .934-1.3 2.938.059.841-.26 1.747-.324 2.652-.324s1.81.13 2.651.323c2.005-1.358 2.881-.059 2.881-.059.582 1.423.223 1.482.159 1.74a4.183 4.183 0 011.1 2.846c0 4.074-2.458 4.915-4.786 5.173.388.324.711.97.711 1.94v2.91c0 .259.194.582.711.518 4.3-1.45 7.19-5.487 7.179-10.024-.065-5.82-4.786-10.541-10.606-10.541z"}),l.createElement("path",{className:"el-2",d:"M11.968 1.714c-5.82 0-10.541 4.72-10.541 10.54 0 4.657 3.04 8.601 7.178 10.025.518.064.712-.26.712-.518v-1.81c-2.91.646-2.66-1.597-2.66-1.597-.454-1.228-1.165-1.552-1.165-1.552-.97-.646.065-.646.065-.646 1.035.064 1.617 1.1 1.617 1.1.97 1.616 1.56 1.337 2.143 1.078a2.252 2.252 0 01.646-1.423c-2.328-.258-4.785-1.164-4.785-5.238 0-1.164.388-2.07 1.1-2.845-.066-.194-.396-2.017.186-3.439 0 0 .848.464 2.852 1.822.841-.259 1.747-.323 2.652-.323s1.81.129 2.651.323c2.005-1.358 2.968-1.823 2.968-1.823.582 1.423.136 3.246.072 3.504a4.183 4.183 0 011.1 2.846c0 4.074-2.458 4.915-4.786 5.173.388.324.711.97.711 1.94v2.91c0 .259.194.582.711.518 4.3-1.45 7.19-5.487 7.179-10.024-.065-5.82-4.786-10.541-10.606-10.541z"}))))}));var f=n(44526);const E=(0,s.QM)({"@keyframes moveto-tl":{to:{transform:"translate(-1.4px, -1.4px)"}},"@keyframes moveto-tr":{to:{transform:"translate(1.4px, -1.4px)"}},"@keyframes moveto-bl":{to:{transform:"translate(-1.4px, 1.4px)"}},"@keyframes moveto-br":{to:{transform:"translate(1.4px, 1.4px)"}},fullscreenButton:{left:"calc(60% + 9rem)","@media screen and (prefers-reduced-motion: no-preference)":{"&:hover":{"& svg":{"& .el-0":{animation:"$moveto-tl 0.6s linear infinite"},"& .el-1":{animation:"$moveto-tr 0.6s linear infinite"},"& .el-2":{animation:"$moveto-bl 0.6s linear infinite"},"& .el-3":{animation:"$moveto-br 0.6s linear infinite"}}}}}}),y=(0,l.memo)((()=>{const e=(0,l.useContext)(h.O),t=E(),n=()=>{f._k&&((0,f.rm)()?(0,f.ww)():(0,f.m$)())};return l.createElement(p.Z,{title:e.i18n("Toggle Full Screen")},l.createElement("button",{accessKey:"t",className:c()("topbutton",t.fullscreenButton),onClick:n,onAuxClick:n},l.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{className:"el-0",d:"m2.09 8.877-0.086-6.187c-0.0033931-0.31548 0.25352-0.57195 0.569-0.568l6.188 0.09c0.49627 0.00613 0.73988 0.60701 0.388 0.957l-1.722 1.721 2.863 2.863-2.658 2.658-2.863-2.863-1.722 1.722c-0.348 0.348-0.949 0.102-0.957-0.393z"}),l.createElement("path",{className:"el-1",d:"m19.231 7.585 1.722 1.722c0.35033 0.3522 0.95174 0.10774 0.957-0.389l0.09-6.188c0.0034-0.31509-0.25291-0.57138-0.568-0.568l-6.189 0.09c-0.49626 0.00613-0.73988 0.60701-0.388 0.957l1.718 1.713-2.863 2.863 2.658 2.659z"}),l.createElement("path",{className:"el-2",d:"m2.573 21.839 6.188-0.09c0.49627-0.0061 0.73988-0.607 0.388-0.957l-1.722-1.718 2.863-2.863-2.658-2.659-2.863 2.863-1.722-1.722c-0.35033-0.3522-0.95174-0.10774-0.957 0.389l-0.09 6.188c0 0.315 0.258 0.573 0.573 0.569z"}),l.createElement("path",{className:"el-3",d:"m14.85 20.832c-0.35253 0.35067-0.10722 0.95262 0.39 0.957l6.187 0.09c0.31548 0.0039 0.57239-0.25252 0.569-0.568l-0.09-6.188c-0.0053-0.49674-0.60667-0.7412-0.957-0.389l-1.722 1.722-2.863-2.863-2.658 2.659 2.863 2.863z"}))))})),x=(0,l.memo)((()=>l.createElement("div",null,l.createElement(i.Z,null),l.createElement(a.Z,null),l.createElement(r.Z,null),l.createElement(y,null),l.createElement(g,null),l.createElement(b,null))))}}]);