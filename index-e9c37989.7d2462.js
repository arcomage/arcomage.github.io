(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[8090],{24410:function(e,t,a){"use strict";var s=a(67294),r=a(94184),l=a.n(r),n=a(27889),o=a(18255),i=a(58537),c=a(7535),m=a(37221),h=a(6589),d=a(74983),f=a(6360),p=a(87346);const k=e=>`(${e}px - (1.75rem + 0.25rem * 2)) / (282 + 600)`,v=e=>`${k(e)} * 204`,w=e=>`${k(e)} * ((204 - 135) / 2)`,g=(e,t)=>`calc((${v(e)} - ${w(e)} * 2) / 135 * 600 * ${t})`,u=(0,n.QM)({main:{width:({height:e})=>`calc(${v(e)})`},towerwrapper:{height:({height:e})=>g(e,"1"),bottom:"calc(1.75rem + 0.25rem * 2)","padding-left":({height:e})=>`calc(${w(e)})`,"padding-right":({height:e})=>`calc(${w(e)})`},towerbody:{background:{image:`url(${c.Z})`,repeat:"repeat-y",size:"100%",position:"center 0"},width:({height:e})=>`calc(100% - ${w(e)} * 2)`,height:({height:e,goal:t})=>g(e,`(var(--n) / ${t})`),"max-height":({height:e})=>g(e,"1"),"will-change":"height","transition-property":"height","transition-timing-function":"linear","transition-duration":"0.4s","&:before":{content:'""',position:"absolute",top:({height:e})=>`calc(0px - ${v(e)} / 204 * 282 + 1px)`,left:({height:e})=>`calc(0px - ${w(e)})`,right:({height:e})=>`calc(0px - ${w(e)})`,width:({height:e})=>`calc(${v(e)})`,height:({height:e})=>`calc(${v(e)} / 204 * 282)`,display:"block",background:{repeat:"no-repeat",size:"100%",position:"center 0"}}},towerbodyred:{"&:before":{background:{image:`url(${m.Z})`}}},towerbodyblue:{"&:before":{background:{image:`url(${h.Z})`}}}});t.Z=(0,s.memo)((({isOpponent:e=!1,goal:t})=>{const a=(0,s.useContext)(d.OO),r=(0,s.useContext)(o.$),n=r.height*(r.narrowMobile?.5:2/3),c=(0,s.useRef)(null),m=u({height:n,goal:t}),h=(0,f.C)((e=>e.settings.winTower));let k=a.i18n(e?"Opponent's %s":"Your %s").replace("%s",a.i18n("tower"));return k=a.i18n("%s1. Reach %s2 to win").replace("%s1",k).replace("%s2",h.toString(10)),s.createElement("div",{className:l()("h-full mx-1 relative","float-"+(e?"right":"left"),m.main)},s.createElement(p.Z,{title:k,placement:"bottom"},s.createElement("div",{className:"w-full h-full"},s.createElement("div",{className:l()("z-20 w-full absolute",m.towerwrapper)},s.createElement("div",{ref:c,className:l()("absolute bottom-0",m.towerbody,m[e?"towerbodyblue":"towerbodyred"])})),s.createElement("div",{className:"bg-black bg-opacity-50 p-1 shadow-lg w-full absolute bottom-0"},s.createElement("div",{className:"border border-yellow-400 border-opacity-25 text-yellow-400 text-center h-7 leading-7 font-mono"},s.createElement(i.Z,{isOpponent:e,isWall:!1,target:c}))))))}))},58537:function(e,t,a){"use strict";var s=a(67294),r=a(6360),l=a(48023),n=a(89842),o=a(6399);t.Z=(0,s.memo)((({isOpponent:e,isWall:t,target:a})=>{const i=(0,r.C)((a=>a.status[e?"opponent":"player"][t?"wall":"tower"]));return(0,s.useEffect)((()=>{null!==a.current&&a.current.style.setProperty("--n",i.toString(10))}),[i]),s.createElement(s.Fragment,null,s.createElement(o.Z,{n:i}),s.createElement(l.Z,{n:i}),s.createElement(n.Z,{n:i}))}))},50970:function(e,t,a){"use strict";var s=a(67294),r=a(94184),l=a.n(r),n=a(27889),o=a(18255),i=a(58537),c=a(81317),m=a(64399),h=a(74983),d=a(87346);const f=e=>`(${e}px - (1.75rem + 0.25rem * 2)) / (282 + 600)`,p=(e,t)=>`calc(${f(e)} * 597 * ${t})`,k=(0,n.QM)({main:{width:e=>`calc(${f(e)} * 72 + 1rem * 2)`},wallwrapper:{height:e=>p(e,"1"),bottom:"calc(1.75rem + 0.25rem * 2)"},wallbody:{height:e=>p(e,`(var(--n) / ${c.dY})`),background:{image:`url(${m.Z})`,repeat:"repeat-y",size:"100%",position:"center 0"},width:e=>`calc(${f(e)} * 72)`,"max-height":e=>`calc(${f(e)} * 597)`,"will-change":"height","transition-property":"height","transition-timing-function":"linear","transition-duration":"0.4s"}});t.Z=(0,s.memo)((({isOpponent:e=!1})=>{const t=(0,s.useContext)(h.OO),a=(0,s.useContext)(o.$),r=a.height*(a.narrowMobile?.5:2/3),n=(0,s.useRef)(null),c=k(r),m=t.i18n(e?"Opponent's %s":"Your %s").replace("%s",t.i18n("wall"));return s.createElement("div",{className:l()("h-full mx-2 relative","float-"+(e?"right":"left"),c.main)},s.createElement(d.Z,{title:m,placement:"bottom"},s.createElement("div",{className:"w-full h-full"},s.createElement("div",{className:l()("z-20 w-full absolute px-4",c.wallwrapper)},s.createElement("div",{ref:n,className:l()("absolute bottom-0",c.wallbody)})),s.createElement("div",{className:"bg-black bg-opacity-50 p-1 shadow-lg w-full absolute bottom-0"},s.createElement("div",{className:"border border-yellow-400 border-opacity-25 text-yellow-400 text-center h-7 leading-7 font-mono"},s.createElement(i.Z,{isOpponent:e,isWall:!0,target:n}))))))}))},20198:function(e,t,a){"use strict";a.d(t,{Z:function(){return N}});var s=a(67294),r=a(94184),l=a.n(r),n=a(27889),o=a(6360),i=a(63211),c=a(74983),m=a(87346);const h=(0,n.QM)({"@keyframes rotate":{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},prefButton:{left:"60%","&:hover, &.windowactive":{"& svg":{animation:"$rotate 2s linear infinite"}}}});var d=(0,s.memo)((()=>{const e=(0,s.useContext)(c.OO),t=(0,o.C)((e=>e.screen.pref)),a=(0,o.T)(),r=h();return s.createElement(m.Z,{title:e.i18n("Preferences")},s.createElement("button",{accessKey:"p",className:l()("topbutton",r.prefButton,{windowactive:t}),onClick:()=>{a({type:i.fy,show:!0})}},s.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{d:"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"}))))}));const f=(0,n.QM)({"@keyframes draw-1-8":{"0%":{"stroke-dashoffset":10.843},"9.375%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-2-8":{"9.375%":{"stroke-dashoffset":9.055},"18.75%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-3-8":{"18.75%":{"stroke-dashoffset":9.165},"28.125%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-4-8":{"28.125%":{"stroke-dashoffset":2.936},"37.5%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-5-8":{"37.5%":{"stroke-dashoffset":7.892},"46.875%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-6-8":{"46.875%":{"stroke-dashoffset":8.372},"56.250%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-7-8":{"56.250%":{"stroke-dashoffset":7.861},"65.625%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-8-8":{"65.625%":{"stroke-dashoffset":18.073},"75%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-1-14":{"0%":{"stroke-dashoffset":2.411},"5.357%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-2-14":{"5.357%":{"stroke-dashoffset":5.672},"10.714%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-3-14":{"10.714%":{"stroke-dashoffset":4.485},"16.071%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-4-14":{"16.071%":{"stroke-dashoffset":4.501},"21.429%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-5-14":{"21.429%":{"stroke-dashoffset":5.141},"26.786%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-6-14":{"26.786%":{"stroke-dashoffset":7.75},"32.143%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-7-14":{"32.143%":{"stroke-dashoffset":3.298},"37.5%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-8-14":{"37.5%":{"stroke-dashoffset":7.782},"42.857%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-9-14":{"42.857%":{"stroke-dashoffset":4.915},"48.214%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-10-14":{"48.214%":{"stroke-dashoffset":8.359},"53.571%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-11-14":{"53.571%":{"stroke-dashoffset":8.391},"58.929%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-12-14":{"58.929%":{"stroke-dashoffset":5.531},"64.286%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-13-14":{"64.286%":{"stroke-dashoffset":10.172},"69.649%, 100%":{"stroke-dashoffset":0}},"@keyframes draw-14-14":{"69.649%":{"stroke-dashoffset":5.36},"75%, 100%":{"stroke-dashoffset":0}},langPrefButton:{left:"calc(60% + 3rem)","&:hover, &.windowactive":{"& svg":{"& .el-1":{"stroke-dasharray":10.843,"stroke-dashoffset":10.843,animation:"$draw-1-8 2s linear infinite"},"& .el-2":{"stroke-dasharray":9.055,"stroke-dashoffset":9.055,animation:"$draw-2-8 2s linear infinite"},"& .el-3":{"stroke-dasharray":9.165,"stroke-dashoffset":9.165,animation:"$draw-3-8 2s linear infinite"},"& .el-4":{"stroke-dasharray":2.936,"stroke-dashoffset":2.936,animation:"$draw-4-8 2s linear infinite"},"& .el-5":{"stroke-dasharray":7.892,"stroke-dashoffset":7.892,animation:"$draw-5-8 2s linear infinite"},"& .el-6":{"stroke-dasharray":8.372,"stroke-dashoffset":8.372,animation:"$draw-6-8 2s linear infinite"},"& .el-7":{"stroke-dasharray":7.861,"stroke-dashoffset":7.861,animation:"$draw-7-8 2s linear infinite"},"& .el-8":{"stroke-dasharray":18.073,"stroke-dashoffset":18.073,animation:"$draw-8-8 2s linear infinite"},"& .el-9":{"stroke-dasharray":2.411,"stroke-dashoffset":2.411,animation:"$draw-1-14 2s linear infinite"},"& .el-10":{"stroke-dasharray":5.672,"stroke-dashoffset":5.672,animation:"$draw-2-14 2s linear infinite"},"& .el-11":{"stroke-dasharray":4.485,"stroke-dashoffset":4.485,animation:"$draw-3-14 2s linear infinite"},"& .el-12":{"stroke-dasharray":4.501,"stroke-dashoffset":4.501,animation:"$draw-4-14 2s linear infinite"},"& .el-13":{"stroke-dasharray":5.141,"stroke-dashoffset":5.141,animation:"$draw-5-14 2s linear infinite"},"& .el-14":{"stroke-dasharray":7.75,"stroke-dashoffset":7.75,animation:"$draw-6-14 2s linear infinite"},"& .el-15":{"stroke-dasharray":3.298,"stroke-dashoffset":3.298,animation:"$draw-7-14 2s linear infinite"},"& .el-16":{"stroke-dasharray":7.782,"stroke-dashoffset":7.782,animation:"$draw-8-14 2s linear infinite"},"& .el-17":{"stroke-dasharray":4.915,"stroke-dashoffset":4.915,animation:"$draw-9-14 2s linear infinite"},"& .el-18":{"stroke-dasharray":8.359,"stroke-dashoffset":8.359,animation:"$draw-10-14 2s linear infinite"},"& .el-19":{"stroke-dasharray":8.391,"stroke-dashoffset":8.391,animation:"$draw-11-14 2s linear infinite"},"& .el-20":{"stroke-dasharray":5.531,"stroke-dashoffset":5.531,animation:"$draw-12-14 2s linear infinite"},"& .el-21":{"stroke-dasharray":10.172,"stroke-dashoffset":10.172,animation:"$draw-13-14 2s linear infinite"},"& .el-22":{"stroke-dasharray":5.36,"stroke-dashoffset":5.36,animation:"$draw-14-14 2s linear infinite"}}}}});var p=(0,s.memo)((()=>{const e=(0,s.useContext)(c.OO),t=(0,o.C)((e=>e.screen.langPref)),a=(0,o.T)(),r=f();return s.createElement(m.Z,{title:e.i18n("Language")},s.createElement("button",{accessKey:"l",className:l()("topbutton",r.langPrefButton,{windowactive:t}),onClick:()=>{a({type:i.e8,show:!0})}},s.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s.createElement("clipPath",{id:"cp"},s.createElement("path",{d:"m0.35579 8.7757v-7.824h1.764v6.336h3.096v1.488z"}),s.createElement("path",{d:"m7.3323 4.8159-0.192 0.72h1.668l-0.18-0.72q-0.168-0.58802-0.324-1.248t-0.312-1.272h-0.048q-0.144 0.624-0.3 1.284-0.144 0.648-0.312 1.236zm-2.832 3.9602 2.448-7.824h2.124l2.448 7.824h-1.872l-0.48-1.86h-2.388l-0.48 1.86z"}),s.createElement("path",{d:"m11.364 8.7757v-7.824h1.812l2.04 3.888 0.768 1.728h0.048q-0.06-0.624-0.144-1.392-0.072-0.768-0.072-1.464v-2.76h1.68v7.824h-1.812l-2.04-3.9001-0.768-1.704h-0.048q0.06 0.648 0.132 1.392 0.084 0.744 0.084 1.44v2.772z"}),s.createElement("path",{d:"m21.228 8.9197q-0.80398 0-1.512-0.252-0.696-0.264-1.212-0.768t-0.816-1.248q-0.288-0.75598-0.288-1.74 0-0.97202 0.3-1.728 0.3-0.768 0.816-1.296 0.528-0.528 1.224-0.80398t1.476-0.276q0.85198 0 1.464 0.312t0.99598 0.70798l-0.92402 1.128q-0.3-0.264-0.63602-0.44402t-0.84-0.18q-0.456 0-0.84 0.18-0.372 0.168-0.648 0.49202t-0.432 0.792q-0.144 0.46798-0.144 1.056 0 1.212 0.54002 1.884 0.552 0.65998 1.656 0.65998 0.24 0 0.46798-0.06t0.372-0.18v-1.344h-1.296v-1.44h2.856v3.6q-0.408 0.39602-1.08 0.672t-1.5 0.276z"}),s.createElement("path",{d:"m10.71 12.09h-2.82l1.095-0.615c-0.24-0.54002-0.705-1.335-1.11-1.95l-1.095 0.54002c0.40501 0.615 0.855 1.47 1.08 2.025h-2.715v1.11h5.565zm-0.52502 1.995h-4.4251v1.095h4.4251zm-4.4251 3.06h4.4251v-1.065h-4.4251z"}),s.createElement("path",{d:"m9.0749 19.215v2.145h-2.13v-2.145zm1.215-1.125h-4.5449v5.0699h1.2v-0.67498h3.345z"}),s.createElement("path",{d:"m16.23 13.83v1.995h-2.46c0.12-0.585 0.255-1.275 0.39001-1.995zm1.29 1.995v-3.135h-3.135c0.06-0.44999 0.15-0.91499 0.225-1.335h3.9148v-1.17h-7.6199v1.17h2.325c-0.06 0.41998-0.135 0.88502-0.225 1.335h-1.74v1.14h1.545c-0.135 0.72-0.27 1.41-0.40501 1.995h-1.89v1.155h8.3399v-1.155z"}),s.createElement("path",{d:"m16.65 19.11v2.43h-4.035v-2.43zm-5.325 4.2452h1.29v-0.6h4.035v0.54002h1.35v-5.4002h-6.675z"})),s.createElement("g",{className:"all",fill:"none",clipPath:"url(#cp)"},s.createElement("g",{strokeWidth:"1.8"},s.createElement("path",{className:"el-1",d:"m1.2434 0.86587v7.0859h3.7569"}),s.createElement("path",{className:"el-2",d:"m7.8843 0.55085-2.5518 8.6879"}),s.createElement("path",{className:"el-3",d:"m8.1109 0.42864 2.6089 8.7857"}),s.createElement("path",{className:"el-4",d:"m6.5286 6.256h2.9355"}),s.createElement("path",{className:"el-5",d:"m12.224 0.92869v7.8919"}),s.createElement("path",{className:"el-7",d:"m16.598 0.92753v7.8606"}),s.createElement("path",{className:"el-6",d:"m12.59 1.1549 3.8596 7.4297"})),s.createElement("path",{className:"el-8",d:"m20.865 5.0947h2.0403v2.455c-0.47429 0.27351-1.1606 0.36295-1.6744 0.40493s-0.79875-0.061202-1.1568-0.19281-0.66411-0.33053-0.92731-0.5876-0.47436-0.57229-0.62433-0.95486-0.22035-0.83243-0.22035-1.3313c0-0.49886 0.0765-0.93344 0.22953-1.3221 0.15303-0.38867 0.35807-0.72226 0.62433-0.99158s0.58148-0.47436 0.93649-0.61513 0.71308-0.21116 1.1293-0.21117c0.41622-5.2e-6 0.80794 0.079571 1.1201 0.23871 0.31217 0.15914 0.67667 0.41704 0.87252 0.61902",strokeWidth:"2"}),s.createElement("g",{strokeWidth:"1.5"},s.createElement("path",{className:"el-9",d:"m7.3906 9.7344 1.0781 2.1562"}),s.createElement("path",{className:"el-10",d:"m5.812 12.672h4.5169"}),s.createElement("path",{className:"el-11",d:"m5.7185 14.688h4.4849"}),s.createElement("path",{className:"el-12",d:"m5.7341 16.578h4.5005"}),s.createElement("path",{className:"el-14",d:"m5.7341 18.688h3.9069v3.8432"}),s.createElement("path",{className:"el-15",d:"m6.3982 21.828h3.2974"}),s.createElement("path",{className:"el-13",d:"m6.375 18.141v5.1406"}),s.createElement("path",{className:"el-16",d:"m10.812 10.75h7.7818"}),s.createElement("path",{className:"el-19",d:"m11.265 16.359h7.204"}),s.createElement("path",{className:"el-18",d:"m11.23 13.211h5.7506v2.6089"}),s.createElement("path",{className:"el-22",d:"m11.988 22.055h5.3599"}),s.createElement("path",{className:"el-20",d:"m11.936 18.031v4.7391"}),s.createElement("path",{className:"el-17",d:"m13.953 10.984-0.92138 4.8281"}),s.createElement("path",{className:"el-21",d:"m11.965 18.586h5.3288v4.8432"}))))))})),k=a(23761);const v=(0,n.QM)({"@keyframes rotate2":{"0%, 100%":{transform:"rotate(0deg)"},"25%":{transform:"rotate(30deg)"},"75%":{transform:"rotate(-30deg)"}},helpButton:{left:"calc(60% + 12rem)","&:hover, &.windowactive":{"& svg":{animation:"$rotate2 2s linear infinite"}}}});var w=(0,s.memo)((()=>{const e=(0,s.useContext)(c.OO),t=(0,o.C)((e=>e.screen.help)),a=(0,o.T)(),r=v();return s.createElement(m.Z,{title:e.i18n("Help")},s.createElement("button",{accessKey:"h",className:l()("topbutton",r.helpButton,{windowactive:t}),onClick:()=>{a({type:i.Xc,show:!0})}},s.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{d:"M12,2.1c-5.5,0-9.9,4.4-9.9,9.9c0,5.5,4.4,9.9,9.9,9.9c5.5,0,9.9-4.4,9.9-9.9C21.9,6.5,17.5,2.1,12,2.1z M12,20.1c-4.5,0-8.1-3.6-8.1-8.1c0-4.5,3.6-8.1,8.1-8.1c4.5,0,8.1,3.6,8.1,8.1C20.1,16.5,16.5,20.1,12,20.1z"}),s.createElement("path",{d:"M11.8,6.7c-2.5,0-3.2,2.2-3.2,2.2L10,9.7c0,0,0.3-0.8,0.9-1.2c0.5-0.4,1.6-0.6,2.2,0.1c0.7,0.9-0.2,1.6-1.1,2.7 c-1,1.2-1,3.7-1,3.7h2c0,0,0.1-2.3,1-3.4c0.6-0.7,1.4-1.3,1.4-2.5S14.3,6.7,11.8,6.7z"}),s.createElement("rect",{x:"11",y:"16",width:"2",height:"2"}))))}));const g=(0,n.QM)({"@keyframes visible1by1-1-3":{"0%, 100%, 33.32%":{visibility:"visible"},"33.33%, 99.99%":{visibility:"hidden"}},"@keyframes visible1by1-2-3":{"0%, 100%, 33.32%":{visibility:"hidden"},"33.33%, 66.65%":{visibility:"visible"},"66.66%, 99.99%":{visibility:"hidden"}},"@keyframes visible1by1-3-3":{"0%, 100%, 66.65%":{visibility:"hidden"},"66.66%, 99.99%":{visibility:"visible"}},githubButton:{left:"calc(60% + 15rem)","& svg":{"& .el-0":{visibility:"visible"},"& .el-1":{visibility:"hidden"},"& .el-2":{visibility:"hidden"}},"&:hover":{"& svg":{"& .el-0":{visibility:"hidden",animation:"$visible1by1-2-3 0.4s linear infinite"},"& .el-1":{visibility:"visible",animation:"$visible1by1-1-3 0.4s linear infinite"},"& .el-2":{visibility:"hidden",animation:"$visible1by1-3-3 0.4s linear infinite"}}}}});var u=(0,s.memo)((()=>{const e=g();return s.createElement(m.Z,{title:"GitHub"},s.createElement("a",{accessKey:"g",className:l()("topbutton",e.githubButton),href:"https://github.com/arcomage/arcomage-hd",target:"_blank",rel:"noopener noreferrer"},s.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{className:"el-0",d:"M11.968 1.714c-5.82 0-10.541 4.72-10.541 10.54 0 4.657 3.04 8.601 7.178 10.025.518.064.712-.26.712-.518v-1.81c-2.91.646-3.557-1.423-3.557-1.423-.453-1.229-1.164-1.552-1.164-1.552-.97-.647.064-.647.064-.647 1.035.065 1.617 1.1 1.617 1.1.97 1.616 2.458 1.164 3.04.905a2.252 2.252 0 01.646-1.423c-2.328-.258-4.785-1.164-4.785-5.238 0-1.164.388-2.07 1.1-2.845-.066-.194-.454-1.294.128-2.716 0 0 .906-.259 2.91 1.099.841-.259 1.747-.323 2.652-.323s1.81.129 2.651.323c2.005-1.358 2.91-1.1 2.91-1.1.582 1.423.194 2.523.13 2.781a4.183 4.183 0 011.1 2.846c0 4.074-2.458 4.915-4.786 5.173.388.324.711.97.711 1.94v2.91c0 .259.194.582.711.518a10.553 10.553 0 007.179-10.024c-.065-5.82-4.786-10.541-10.606-10.541z"}),s.createElement("path",{className:"el-1",d:"M11.968 1.714c-5.82 0-10.541 4.72-10.541 10.54 0 4.657 3.04 8.601 7.178 10.025.518.064.712-.26.712-.518v-1.81c-2.91.646-4.396-1.307-4.396-1.307-.453-1.23-1.164-1.552-1.164-1.552-.97-.647.065-.647.065-.647 1.035.065 1.617 1.1 1.617 1.1.97 1.616 3.296 1.048 3.878.789a2.252 2.252 0 01.646-1.423c-2.328-.258-4.785-1.164-4.785-5.238 0-1.164.388-2.07 1.1-2.845-.066-.194-.483-.253.1-1.675 0 0 .934-1.3 2.938.059.841-.26 1.747-.324 2.652-.324s1.81.13 2.651.323c2.005-1.358 2.881-.059 2.881-.059.582 1.423.223 1.482.159 1.74a4.183 4.183 0 011.1 2.846c0 4.074-2.458 4.915-4.786 5.173.388.324.711.97.711 1.94v2.91c0 .259.194.582.711.518 4.3-1.45 7.19-5.487 7.179-10.024-.065-5.82-4.786-10.541-10.606-10.541z"}),s.createElement("path",{className:"el-2",d:"M11.968 1.714c-5.82 0-10.541 4.72-10.541 10.54 0 4.657 3.04 8.601 7.178 10.025.518.064.712-.26.712-.518v-1.81c-2.91.646-2.66-1.597-2.66-1.597-.454-1.228-1.165-1.552-1.165-1.552-.97-.646.065-.646.065-.646 1.035.064 1.617 1.1 1.617 1.1.97 1.616 1.56 1.337 2.143 1.078a2.252 2.252 0 01.646-1.423c-2.328-.258-4.785-1.164-4.785-5.238 0-1.164.388-2.07 1.1-2.845-.066-.194-.396-2.017.186-3.439 0 0 .848.464 2.852 1.822.841-.259 1.747-.323 2.652-.323s1.81.129 2.651.323c2.005-1.358 2.968-1.823 2.968-1.823.582 1.423.136 3.246.072 3.504a4.183 4.183 0 011.1 2.846c0 4.074-2.458 4.915-4.786 5.173.388.324.711.97.711 1.94v2.91c0 .259.194.582.711.518 4.3-1.45 7.19-5.487 7.179-10.024-.065-5.82-4.786-10.541-10.606-10.541z"}))))})),y=a(10577),b=a.n(y);const E=(0,n.QM)({"@keyframes moveto-tl":{to:{transform:"translate(-1.4px, -1.4px)"}},"@keyframes moveto-tr":{to:{transform:"translate(1.4px, -1.4px)"}},"@keyframes moveto-bl":{to:{transform:"translate(-1.4px, 1.4px)"}},"@keyframes moveto-br":{to:{transform:"translate(1.4px, 1.4px)"}},fullscreenButton:{left:"calc(60% + 9rem)","&:hover":{"& svg":{"& .el-0":{animation:"$moveto-tl 0.6s linear infinite"},"& .el-1":{animation:"$moveto-tr 0.6s linear infinite"},"& .el-2":{animation:"$moveto-bl 0.6s linear infinite"},"& .el-3":{animation:"$moveto-br 0.6s linear infinite"}}}}});var $=(0,s.memo)((()=>{const e=(0,s.useContext)(c.OO),t=E();return s.createElement(m.Z,{title:e.i18n("Toggle Full Screen")},s.createElement("button",{accessKey:"t",className:l()("topbutton",t.fullscreenButton),onClick:()=>{b().isEnabled&&b().toggle()}},s.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{className:"el-0",d:"m2.09 8.877-0.086-6.187c-0.0033931-0.31548 0.25352-0.57195 0.569-0.568l6.188 0.09c0.49627 0.00613 0.73988 0.60701 0.388 0.957l-1.722 1.721 2.863 2.863-2.658 2.658-2.863-2.863-1.722 1.722c-0.348 0.348-0.949 0.102-0.957-0.393z"}),s.createElement("path",{className:"el-1",d:"m19.231 7.585 1.722 1.722c0.35033 0.3522 0.95174 0.10774 0.957-0.389l0.09-6.188c0.0034-0.31509-0.25291-0.57138-0.568-0.568l-6.189 0.09c-0.49626 0.00613-0.73988 0.60701-0.388 0.957l1.718 1.713-2.863 2.863 2.658 2.659z"}),s.createElement("path",{className:"el-2",d:"m2.573 21.839 6.188-0.09c0.49627-0.0061 0.73988-0.607 0.388-0.957l-1.722-1.718 2.863-2.863-2.658-2.659-2.863 2.863-1.722-1.722c-0.35033-0.3522-0.95174-0.10774-0.957 0.389l-0.09 6.188c0 0.315 0.258 0.573 0.573 0.569z"}),s.createElement("path",{className:"el-3",d:"m14.85 20.832c-0.35253 0.35067-0.10722 0.95262 0.39 0.957l6.187 0.09c0.31548 0.0039 0.57239-0.25252 0.569-0.568l-0.09-6.188c-0.0053-0.49674-0.60667-0.7412-0.957-0.389l-1.722 1.722-2.863-2.863-2.658 2.659 2.863 2.863z"}))))})),N=(0,s.memo)((()=>s.createElement("div",null,s.createElement(d,null),s.createElement(p,null),s.createElement(k.Z,null),s.createElement($,null),s.createElement(w,null),s.createElement(u,null))))}}]);