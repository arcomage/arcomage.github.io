(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[7463],{8410:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(486),r=n(1558),a=n(5631),c=n(4370),y=n(8170),f=n(5760),u=n(6353),l=n(1757),d=n(7053),b=n(1317),v=n(2148),g=n(7750);t.Z=(e,t)=>e.pipe((0,p.h)((0,l.isOfType)(o.$u)),(0,s.b)((t=>{const{peer:n}=d.bb;if(null===n)return a.E;const p=new Promise(((e,o)=>{if(null!==n){let p=null,s=null,i=0;const r=()=>{i>b.ZL&&(null!==p&&p.close(),o(!1)),i+=1,(null===p||null!==p&&!p.open)&&(null!==p&&p.close(),p=n.connect(t.id),d.bb.conn=p),s=setTimeout(r,b.iu*i),p.on("open",(()=>{null!==s&&clearTimeout(s),e(null)}))};r(),n.on("error",(e=>{null!==p&&p.close(),o(e)}))}}));return(0,c.T)((0,y.of)({type:o.ns,status:"connecting_to_id"}),(0,f.D)(p).pipe((0,s.b)((e=>(v._.reset(),v.q.reset(),(0,g.Z)("host connected to guest; sendSeq & receiveSeq reset","note"),(0,u.z)((0,y.of)({type:o.ns,status:"connected_to_id"}),(0,y.of)({type:o.Mv,id:t.id}),(0,y.of)({type:o.Fk,host:!0}))))),(0,i.K)((e=>(0,y.of)({type:o.ns,status:"failed"}))))).pipe((0,r.R)(e.ofType(o.Cv)))})))},7878:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(486),r=n(1558),a=n(4370),c=n(8170),y=n(5760),f=n(6353),u=n(1757),l=n(7053);t.Z=(e,t)=>e.pipe((0,p.h)((0,u.isOfType)(o.co)),(0,s.b)((t=>{const n=new Promise(((e,t)=>{(0,l.kL)();const{peer:n}=l.bb;null!==n&&(n.on("open",(t=>{e(t)})),n.on("error",(e=>{t(e)})))}));return(0,a.T)((0,c.of)({type:o.ns,status:"connecting_net"}),(0,y.D)(n).pipe((0,s.b)((e=>(0,f.z)((0,c.of)({type:o.ns,status:"connected_net"}),(0,c.of)({type:o.QU,id:e}),(0,c.of)({type:o.MR})))),(0,i.K)((e=>(0,c.of)({type:o.ns,status:"failed"}))))).pipe((0,r.R)(e.ofType(o.Cv)))})))},7360:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(7746),i=n(3251),r=n(1558),a=n(5631),c=n(4370),y=n(7027),f=n(8170),u=n(6353),l=n(1757),d=n(7053),b=n(2148),v=n(7750),g=n(3644);t.Z=(e,t)=>e.pipe((0,p.h)((0,l.isOfType)(o.Fk)),(0,s.zg)((t=>{const{conn:n}=d.bb,p=t.host?"host":"guest";return null===n?a.E:(0,c.T)((0,y.R)(n,"data").pipe((0,i.b)((e=>((0,v.Z)(`${p}. received: ${e}`,"note"),(0,f.of)({type:g.S1?o.It:o.Vt,data:e}))))),(0,y.R)(n,"open").pipe((0,i.b)((()=>t.host?a.E:(b._.reset(),b.q.reset(),(0,v.Z)("guest connected by host; sendSeq & receiveSeq reset","note"),(0,u.z)((0,f.of)({type:o.Mv,id:n.peer}),(0,f.of)({type:o.ns,status:"connected_by_id"})))))),(0,y.R)(n,"close").pipe((0,i.b)((()=>(0,u.z)((0,f.of)({type:o.ns,status:"connected_net"}),(0,f.of)({type:o.KP,on:!1}))))),(0,y.R)(n,"error").pipe((0,i.b)((()=>((0,v.Z)("error emitted by conn","error"),a.E))))).pipe((0,r.R)(e.ofType(o.Cv)))})))},7365:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(6353),r=n(8170),a=n(1757),c=n(7053);t.Z=(e,t)=>e.pipe((0,p.h)((0,a.isOfType)(o.PY)),(0,s.b)((e=>{const{peer:t}=c.bb;return null!==t&&(t.disconnect(),t.destroy(),(0,c.zQ)()),(0,i.z)((0,r.of)({type:o.Cv}),(0,r.of)({type:o.QU,id:""}),(0,r.of)({type:o.KP,on:!1}))})))},228:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(7746),i=n(3251),r=n(1558),a=n(5631),c=n(4370),y=n(7027),f=n(6353),u=n(8170),l=n(1757),d=n(7053),b=n(7750);t.Z=(e,t)=>e.pipe((0,p.h)((0,l.isOfType)(o.MR)),(0,s.zg)((t=>{const{peer:n}=d.bb;return null===n?a.E:(0,c.T)((0,y.R)(n,"connection").pipe((0,i.b)((e=>(d.bb.conn=e,(0,f.z)((0,u.of)({type:o.Fk,host:!1})))))),(0,y.R)(n,"disconnected").pipe((0,i.b)((()=>(0,f.z)((0,u.of)({type:o.ns,status:"disconnected"}),(0,u.of)({type:o.KP,on:!1}))))),(0,y.R)(n,"close").pipe((0,i.b)((()=>(0,f.z)((0,u.of)({type:o.ns,status:"disconnected"}),(0,u.of)({type:o.KP,on:!1}))))),(0,y.R)(n,"error").pipe((0,i.b)((()=>((0,b.Z)("error emitted by peer","error"),a.E))))).pipe((0,r.R)(e.ofType(o.Cv)))})))},9970:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(5022),r=n(5631),a=n(8170),c=n(6353),y=n(1757),f=n(377),u=n(3875),l=n(7750),d=n(2148);t.Z=(e,t)=>e.pipe((0,p.h)((0,y.isOfType)(o.It)),(0,s.b)((e=>{const{data:t}=e;(0,l.Z)(`received: ${t}`,"note");try{const e=JSON.parse(t),n=d.q.getUsableConnDataList(e);if(null===n)return r.E;const o=n.map((e=>{const{kind:t,data:n}=e;switch(t){case u.d:if(f.s.includes(n.type))return(0,a.of)(n).pipe((0,i.g)(0))}return r.E}));return(0,c.z)(...o)}catch(e){}return r.E})))},751:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(7746),i=n(5022),r=n(8170),a=n(1757),c=n(3644),y=n(9451),f=n(7750);t.Z=(e,t)=>e.pipe((0,p.h)((0,a.isOfType)(o.Vt)),(0,s.zg)((e=>{const t=c.S1?0:(0,y.v8)(c.WM[0],c.WM[1]);(0,f.Z)(`received before latency: ${e.data}`,"note"),(0,f.Z)(`latency: ${t}`,"note");const{type:n}=e,p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var p=0;for(o=Object.getOwnPropertySymbols(e);p<o.length;p++)t.indexOf(o[p])<0&&Object.prototype.propertyIsEnumerable.call(e,o[p])&&(n[o[p]]=e[o[p]])}return n}(e,["type"]);return(0,r.of)(Object.assign({type:o.It},p)).pipe((0,i.g)(t))})))},441:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(7746),i=n(5631),r=n(1757),a=n(7053),c=n(7750),y=n(2148);t.Z=(e,t)=>e.pipe((0,p.h)((0,r.isOfType)(o.H8)),(0,s.zg)((e=>{const{kind:t,data:n}=e,{conn:o}=a.bb;if(null!==o){y._.add();const e={kind:t,data:n,seq:y._.v},p=JSON.stringify(e).replace(/[\u007F-\uFFFF]/g,(e=>"\\u"+("0000"+e.charCodeAt(0).toString(16)).substr(-4)));o.send(p),(0,c.Z)(`sent: ${p}`,"note")}return i.E})))},7936:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3283),i=n(3251),r=n(1558),a=n(1757),c=n(6324),y=n(3875),f=n(8170),u=n(4370),l=n(5631),d=n(1317);t.Z=(e,t)=>e.pipe((0,p.h)((0,a.isOfType)(o.n9)),(0,s.b)(d.de),(0,i.b)((t=>{const{payload:n}=t,p=null!==n?(0,c.q3)(n):null;return p?(0,f.of)({type:o.H8,kind:y.d,data:{type:o.WY,payload:p}}).pipe((0,r.R)((0,u.T)(e.ofType(o.yD),e.ofType(o.Cv)))):l.E})))},2087:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(1558),r=n(1757),a=n(6324),c=n(3875),y=n(6353),f=n(8170),u=n(5631);t.Z=(e,t)=>e.pipe((0,p.h)((0,r.isOfType)(o.yJ)),(0,s.b)((t=>{const{payload:n}=t,p=(0,a.Zy)(n);return p?(0,y.z)((0,f.of)({type:o.yD}),(0,f.of)({type:o.H8,kind:c.d,data:{type:o.WY,payload:p}}),(0,f.of)({type:o.H8,kind:c.d,data:{type:o.I4,payload:p}}).pipe((0,i.R)(e.ofType(o.Cv)))):u.E})))},4694:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(1558),r=n(6353),a=n(8170),c=n(1757);t.Z=(e,t)=>e.pipe((0,p.h)((0,c.isOfType)(o.LM)),(0,s.b)((t=>{const{on:n}=t;return(0,r.z)(n?(0,a.of)({type:o.co}):(0,a.of)({type:o.PY}),(0,a.of)({type:o.Ig,on:n})).pipe((0,i.R)(e.ofType(o.Cv)))})))},8373:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3825),i=n(3251),r=n(1757),a=n(6187),c=n(6353),y=n(8170),f=n(1159);const u={lose:"defeat",tie:"victory",win:"victory"};t.Z=(e,t)=>e.pipe((0,p.h)((0,r.isOfType)(o.Wz)),(0,s.M)(t),(0,i.b)((([e,t])=>{const{payload:n}=e;return(0,a.U)(n)&&(0,f.Z)(u[n.type],t.volume),(0,c.z)((0,y.of)({type:o.OU}),(0,y.of)({type:o.SO,payload:n}))})))},7032:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(1558),r=n(6353),a=n(8170),c=n(5631),y=n(1757),f=n(7257),u=n(9451),l=n(8093);t.Z=(e,t)=>e.pipe((0,p.h)((0,y.isOfType)(o.Qb)),(0,s.b)((t=>{(0,f.hG)();const n=(0,f.UY)(["lang","code"]),p=(0,f.UY)(["lang","erathian"]),s=(0,f.UY)(["settings"]),y=(0,f.UY)(["volume"]);return(0,r.z)(null!==s?(0,a.of)({type:o.Nc,payload:s}):(0,a.of)({type:o.Nc,payload:{playerName:(0,u.UP)(l.yk),opponentName:(0,u.UP)(l.eA)}}),null!==n?(0,a.of)({type:o.bd,lang:n}):c.E,null!==p?(0,a.of)({type:o._G,erathian:p}):c.E,null!==y?(0,a.of)({type:o.cJ,volume:y}):c.E,(0,a.of)({type:o.qg})).pipe((0,i.R)(e.ofType(o.OU)))})))},7102:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(1558),r=n(8170),a=n(1757),c=n(7257),y=n(8199);t.Z=(e,t)=>e.pipe((0,p.h)((0,a.isOfType)(o._g)),(0,s.b)((t=>{const{erathian:n}=t;return(0,c.HG)((e=>{void 0===e.lang?e.lang={code:y.F,erathian:n}:e.lang.erathian=n})),(0,r.of)({type:o._G,erathian:n}).pipe((0,i.R)(e.ofType(o.OU)))})))},7515:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(1558),r=n(8170),a=n(1757),c=n(7257),y=n(8093);t.Z=(e,t)=>e.pipe((0,p.h)((0,a.isOfType)(o.yv)),(0,s.b)((t=>{const{lang:n}=t;return(0,c.HG)((e=>{void 0===e.lang?e.lang={code:n,erathian:y.QZ}:e.lang.code=n})),(0,r.of)({type:o.bd,lang:n}).pipe((0,i.R)(e.ofType(o.OU)))})))},3201:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(6353),r=n(8170),a=n(1757),c=n(7257),y=n(8093),f=n(9451);t.Z=(e,t)=>e.pipe((0,p.h)((0,a.isOfType)(o.I4)),(0,s.b)((e=>{const{payload:t}=e;return(0,c.HG)((e=>{void 0===e.settings?e.settings=Object.assign(Object.assign(Object.assign({},y.pt),{playerName:(0,f.UP)(y.yk),opponentName:(0,f.UP)(y.eA)}),t):e.settings=Object.assign(Object.assign({},e.settings),t)})),(0,i.z)((0,r.of)({type:o.OU}),(0,r.of)({type:o.Nc,payload:t}))})))},6320:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3825),i=n(3251),r=n(5022),a=n(6353),c=n(8170),y=n(5631),f=n(1757);t.Z=(e,t)=>e.pipe((0,p.h)((0,f.isOfType)(o.cQ)),(0,s.M)(t),(0,i.b)((([e,t])=>{const{payload:n}=e,p=t.multiplayer.on&&"connected_to_id"===t.multiplayer.status;return(0,a.z)((0,c.of)({type:o.I4,payload:n}),p?(0,c.of)({type:o.yJ,payload:n}):y.E,(0,c.of)({type:o.qg}).pipe((0,r.g)(0)))})))},706:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3251),i=n(1558),r=n(8170),a=n(1757),c=n(7257);t.Z=(e,t)=>e.pipe((0,p.h)((0,a.isOfType)(o.j4)),(0,s.b)((t=>{const{volume:n}=t;return(0,c.HG)((e=>{e.volume=n})),(0,r.of)({type:o.cJ,volume:n}).pipe((0,i.R)(e.ofType(o.OU)))})))},6709:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3825),i=n(3251),r=n(1558),a=n(1757),c=n(6559),y=n(1304),f=n(8170);t.Z=(e,t)=>e.pipe((0,p.h)((0,a.isOfType)(o.k4)),(0,s.M)(t),(0,i.b)((([t,n])=>{const p=n.status[t.owner],s=(0,c.qh)(y.cs).map((([e,n])=>({isPlayer:"player"===t.owner,statusProp:n,diff:p[e],noSound:!0})));return(0,f.of)({type:o.g$,payload:s}).pipe((0,r.R)(e.ofType(o.OU)))})))},4132:function(e,t,n){"use strict";var o=n(3211),p=n(6008),s=n(3825),i=n(3251),r=n(1558),a=n(1757),c=n(1159),y=n(6353),f=n(8170);t.Z=(e,t)=>e.pipe((0,p.h)((0,a.isOfType)(o.g$)),(0,s.M)(t),(0,i.b)((([t,n])=>{const p=t.payload.map((e=>{const{isPlayer:t,statusProp:o,noSound:p}=e;let s=null;if("to"in e){const p=n.status[t?"player":"opponent"][o];e.to!==p&&(s=e.to>p)}else 0!==e.diff&&(s=e.diff>0);return p||(0,c.Z)(o,n.volume,s),Object.assign({isPlayer:t,statusProp:o},"to"in e?{to:e.to}:{diff:e.diff})}));return(0,y.z)((0,f.of)({type:o.l7,payload:p}),(0,f.of)({type:o.Qo}),(0,f.of)({type:o.Dt})).pipe((0,r.R)(e.ofType(o.OU)))})))}}]);