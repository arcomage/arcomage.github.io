"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[7463],{78410:(e,t,p)=>{p.d(t,{Z:()=>z});var n=p(63211),o=p(94975),i=p(43994),s=p(79878),a=p(83505),r=p(1545),l=p(23071),c=p(32817),y=p(40052),d=p(42034),f=p(91757),u=p(15069),v=p(37053),g=p(81317),O=p(82148),b=p(17750);const z=(e,t)=>e.pipe((0,o.h)((0,f.isOfType)(n.$u)),(0,i.z)((t=>{const{peer:p}=v.bb;if(null===p)return r.E;const o=new Promise(((e,n)=>{if(null!==p){let o=null,i=null,s=0;const a=()=>{s>g.ZL&&(null!==o&&o.close(),n(!1)),s+=1,(null===o||null!==o&&!o.open)&&(null!==o&&o.close(),o=p.connect(t.id),v.bb.conn=o),i=setTimeout(a,g.iu*s),o.on("open",(()=>{null!==i&&clearTimeout(i),e(null)}))};a(),p.on("error",(e=>{null!==o&&o.close(),n(e)}))}}));return(0,l.T)((0,c.of)({type:n.ns,status:"connecting_to_id"}),(0,y.D)(o).pipe((0,i.z)((e=>(O._.reset(),O.q.reset(),(0,b.Z)("host connected to guest; sendSeq & receiveSeq reset","note"),(0,d.z)((0,c.of)({type:n.ns,status:"connected_to_id"}),(0,c.of)({type:n.Mv,id:t.id}),(0,c.of)({type:n.Fk,host:!0}))))),(0,s.K)((e=>((0,b.Z)(`${e}`,"error"),(0,c.of)({type:n.ns,status:"failed"})))))).pipe((0,a.R)(e.pipe((0,u.l)(n.Cv))))})))},7668:(e,t,p)=>{p.d(t,{Z:()=>g});var n=p(63211),o=p(94975),i=p(43994),s=p(79878),a=p(83505),r=p(23071),l=p(32817),c=p(40052),y=p(42034),d=p(91757),f=p(15069),u=p(37053),v=p(17750);const g=(e,t)=>e.pipe((0,o.h)((0,d.isOfType)(n.co)),(0,i.z)((t=>{const p=new Promise(((e,t)=>{(0,u.kL)();const{peer:p}=u.bb;null!==p&&(p.on("open",(t=>{e(t)})),p.on("error",(e=>{t(e)})))}));return(0,r.T)((0,l.of)({type:n.ns,status:"connecting_net"}),(0,c.D)(p).pipe((0,i.z)((e=>(0,y.z)((0,l.of)({type:n.ns,status:"connected_net"}),(0,l.of)({type:n.QU,id:e}),(0,l.of)({type:n.MR})))),(0,s.K)((e=>((0,v.Z)(`${e}`,"error"),(0,l.of)({type:n.ns,status:"failed"})))))).pipe((0,a.R)(e.pipe((0,f.l)(n.Cv))))})))},27360:(e,t,p)=>{p.d(t,{Z:()=>z});var n=p(63211),o=p(94975),i=p(43994),s=p(63428),a=p(83505),r=p(1545),l=p(23071),c=p(22401),y=p(32817),d=p(42034),f=p(91757),u=p(15069),v=p(37053),g=p(82148),O=p(17750),b=p(23644);const z=(e,t)=>e.pipe((0,o.h)((0,f.isOfType)(n.Fk)),(0,i.z)((p=>{const{conn:o}=v.bb,f=p.host?"host":"guest";return null===o?r.E:(0,l.T)((0,c.R)(o,"data").pipe((0,i.z)((e=>((0,O.Z)(`${f}. received: ${e}`,"note"),(0,y.of)({type:b.S1?n.It:n.Vt,data:e}))))),(0,c.R)(o,"open").pipe((0,i.z)((()=>p.host?r.E:(g._.reset(),g.q.reset(),(0,O.Z)("guest connected by host; sendSeq & receiveSeq reset","note"),(0,d.z)((0,y.of)({type:n.Mv,id:o.peer}),(0,y.of)({type:n.ns,status:"connected_by_id"})))))),(0,c.R)(o,"close").pipe((0,s.M)(t),(0,i.z)((([e,t])=>{const p=t.multiplayer.gameNumber;return(0,d.z)((0,y.of)({type:n.ns,status:"connected_net"}),p>0?(0,d.z)((0,y.of)({type:n.MZ,show:!0})):r.E,(0,y.of)({type:n.xD,n:-1}))}))),(0,c.R)(o,"error").pipe((0,i.z)((()=>((0,O.Z)("error emitted by conn","error"),r.E))))).pipe((0,a.R)(e.pipe((0,u.l)(n.Cv))))})))},37365:(e,t,p)=>{p.d(t,{Z:()=>c});var n=p(63211),o=p(94975),i=p(43994),s=p(42034),a=p(32817),r=p(91757),l=p(37053);const c=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.PY)),(0,i.z)((e=>{const{peer:t}=l.bb;return null!==t&&(t.disconnect(),t.destroy(),(0,l.zQ)()),(0,s.z)((0,a.of)({type:n.Cv}),(0,a.of)({type:n.QU,id:""}),(0,a.of)({type:n.xD,n:-1}))})))},10228:(e,t,p)=>{p.d(t,{Z:()=>g});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(1545),r=p(23071),l=p(22401),c=p(42034),y=p(32817),d=p(91757),f=p(15069),u=p(37053),v=p(17750);const g=(e,t)=>e.pipe((0,o.h)((0,d.isOfType)(n.MR)),(0,i.z)((t=>{const{peer:p}=u.bb;return null===p?a.E:(0,r.T)((0,l.R)(p,"connection").pipe((0,i.z)((e=>(u.bb.conn=e,(0,c.z)((0,y.of)({type:n.Fk,host:!1})))))),(0,l.R)(p,"disconnected").pipe((0,i.z)((()=>(0,c.z)((0,y.of)({type:n.ns,status:"disconnected"}),(0,y.of)({type:n.xD,n:-1}))))),(0,l.R)(p,"close").pipe((0,i.z)((()=>(0,c.z)((0,y.of)({type:n.ns,status:"disconnected"}),(0,y.of)({type:n.xD,n:-1}))))),(0,l.R)(p,"error").pipe((0,i.z)((()=>((0,v.Z)("error emitted by peer","error"),a.E))))).pipe((0,s.R)(e.pipe((0,f.l)(n.Cv))))})))},29970:(e,t,p)=>{p.d(t,{Z:()=>v});var n=p(63211),o=p(94975),i=p(43994),s=p(45626),a=p(1545),r=p(32817),l=p(42034),c=p(91757),y=p(70377),d=p(13875),f=p(17750),u=p(82148);const v=(e,t)=>e.pipe((0,o.h)((0,c.isOfType)(n.It)),(0,i.z)((e=>{const{data:t}=e;(0,f.Z)(`received: ${t}`,"note");try{const e=JSON.parse(t),p=u.q.getUsableConnDataList(e);if(null===p)return a.E;const o=p.map((e=>{const{kind:t,data:p,gameNumber:o}=e;if(t===d.d){if(y.sh.includes(p.type))return(0,y.GY)(p)?p.type===n.S9?(0,r.of)(Object.assign(Object.assign({},p),{prevGameNumber:o})).pipe((0,s.g)(0)):(0,r.of)(Object.assign(Object.assign({},p),{gameNumber:o})).pipe((0,s.g)(0)):(0,r.of)(p).pipe((0,s.g)(0));(0,f.Z)(`received non-instruction action: ${JSON.stringify(e)}`,"error")}return a.E}));return(0,l.z)(...o)}catch(e){}return a.E})))},60751:(e,t,p)=>{p.d(t,{Z:()=>d});var n=p(63211),o=p(94975),i=p(43994),s=p(45626),a=p(32817),r=p(91757),l=p(23644),c=p(39451),y=p(17750);const d=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.Vt)),(0,i.z)((e=>{const t=l.S1?0:(0,c.v8)(l.WM[0],l.WM[1]);(0,y.Z)(`received before latency: ${e.data}`,"note"),(0,y.Z)(`latency simulated: ${t}`,"note");const{type:p}=e,o=function(e,t){var p={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(p[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(p[n[o]]=e[n[o]])}return p}(e,["type"]);return(0,a.of)(Object.assign({type:n.It},o)).pipe((0,s.g)(t))})))},10441:(e,t,p)=>{p.d(t,{Z:()=>d});var n=p(63211),o=p(94975),i=p(63428),s=p(43994),a=p(1545),r=p(91757),l=p(37053),c=p(17750),y=p(82148);const d=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.H8)),(0,i.M)(t),(0,s.z)((([e,t])=>{const{gameNumber:p}=t.multiplayer,{kind:n,data:o}=e,{conn:i}=l.bb;if(null!==i){y._.add();const e={kind:n,data:o,seq:y._.v,gameNumber:p},t=JSON.stringify(e).replace(/[\u007F-\uFFFF]/g,(e=>"\\u"+("0000"+e.charCodeAt(0).toString(16)).substr(-4)));i.send(t),(0,c.Z)(`sent: ${t}`,"note")}return a.E})))},74555:(e,t,p)=>{p.d(t,{Z:()=>y});var n=p(63211),o=p(94975),i=p(42965),s=p(43994),a=p(32817),r=p(91757),l=p(13875),c=p(81317);const y=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.SA)),(0,i.b)(c.de),(0,s.z)((e=>{const{name:t}=e;return(0,a.of)({type:n.H8,kind:l.d,data:{type:n.w4,name:t}})})))},92087:(e,t,p)=>{p.d(t,{Z:()=>f});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(91757),r=p(15069),l=p(13875),c=p(42034),y=p(32817),d=p(1545);const f=(e,t)=>e.pipe((0,o.h)((0,a.isOfType)(n.yJ)),(0,i.z)((t=>{const{payload:p}=t,o=p;return o?(0,c.z)((0,y.of)({type:n.c8}),(0,y.of)({type:n.H8,kind:l.d,data:{type:n.oG,payload:o}}),(0,y.of)({type:n.H8,kind:l.d,data:{type:n.I4,payload:o}})).pipe((0,s.R)(e.pipe((0,r.l)(n.Cv)))):d.E})))},62884:(e,t,p)=>{p.d(t,{Z:()=>u});var n=p(63211),o=p(94975),i=p(42965),s=p(43994),a=p(83505),r=p(91757),l=p(15069),c=p(13875),y=p(32817),d=p(23071),f=p(81317);const u=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.Ey)),(0,i.b)(f.de),(0,s.z)((t=>{const{payload:p}=t;return(0,y.of)({type:n.H8,kind:c.d,data:{type:n.oG,payload:p}}).pipe((0,a.R)((0,d.T)(e.pipe((0,l.l)(n.c8)),e.pipe((0,l.l)(n.Cv)))))})))},84694:(e,t,p)=>{p.d(t,{Z:()=>y});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(42034),r=p(32817),l=p(91757),c=p(15069);const y=(e,t)=>e.pipe((0,o.h)((0,l.isOfType)(n.LM)),(0,i.z)((t=>{const{on:p}=t;return(0,a.z)(p?(0,r.of)({type:n.co}):(0,r.of)({type:n.PY}),(0,r.of)({type:n.Ig,on:p})).pipe((0,s.R)(e.pipe((0,c.l)(n.Cv))))})))},74206:(e,t,p)=>{p.d(t,{Z:()=>c});var n=p(63211),o=p(94975),i=p(63428),s=p(43994),a=p(91757),r=p(42034),l=p(32817);const c=(e,t)=>e.pipe((0,o.h)((0,a.isOfType)(n.gC)),(0,i.M)(t),(0,s.z)((([e,t])=>{const p=t.multiplayer.gameNumber>0&&"connected_by_id"===t.multiplayer.status;return(0,r.z)((0,l.of)({type:n.Wz,payload:{type:null}}),p?(0,l.of)({type:n.mv}):(0,l.of)({type:n.qg,fromScreenEnd:!0}))})))},78373:(e,t,p)=>{p.d(t,{Z:()=>f});var n=p(63211),o=p(94975),i=p(63428),s=p(43994),a=p(91757),r=p(56187),l=p(42034),c=p(32817),y=p(20401);const d={lose:"defeat",tie:"victory",win:"victory"},f=(e,t)=>e.pipe((0,o.h)((0,a.isOfType)(n.Wz)),(0,i.M)(t),(0,s.z)((([e,t])=>{const{payload:p}=e;return(0,r.U)(p)&&(0,y.h)(d[p.type]),(0,l.z)((0,c.of)({type:n.OU}),(0,c.of)({type:n.SO,payload:p}))})))},67032:(e,t,p)=>{p.d(t,{Z:()=>v});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(42034),r=p(32817),l=p(1545),c=p(91757),y=p(15069),d=p(97257),f=p(39451),u=p(48093);const v=(e,t)=>e.pipe((0,o.h)((0,c.isOfType)(n.Qb)),(0,i.z)((t=>{(0,d.hG)();const p=(0,d.UY)(["lang","code"]),o=(0,d.UY)(["lang","erathian"]),i=(0,d.UY)(["settings"]),c=(0,d.UY)(["volume"]),v=(0,d.UY)(["visual","pixelation"]),g=(0,d.UY)(["ai","aiLevel"]);return(0,a.z)(null!==i?(0,r.of)({type:n.Nc,payload:i}):(0,r.of)({type:n.Nc,payload:{playerName:(0,f.UP)(u.yk),opponentName:(0,f.UP)(u.eA)}}),null!==p?(0,r.of)({type:n.bd,lang:p}):l.E,null!==o?(0,r.of)({type:n._G,erathian:o}):l.E,null!==c?(0,r.of)({type:n.cJ,volume:c}):l.E,null!==v?(0,r.of)({type:n.rW,pixelation:v}):l.E,null!==g?(0,r.of)({type:n.pv,aiLevel:g}):l.E,(0,r.of)({type:n.qg})).pipe((0,s.R)(e.pipe((0,y.l)(n.OU))))})))},99592:(e,t,p)=>{p.d(t,{Z:()=>y});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(32817),r=p(91757),l=p(15069),c=p(97257);const y=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.Cm)),(0,i.z)((t=>{const{aiLevel:p}=t;return(0,c.HG)((e=>{void 0===e.ai?e.ai={aiLevel:p}:e.ai.aiLevel=p})),(0,a.of)({type:n.pv,aiLevel:p}).pipe((0,s.R)(e.pipe((0,l.l)(n.OU))))})))},77102:(e,t,p)=>{p.d(t,{Z:()=>d});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(32817),r=p(91757),l=p(15069),c=p(97257),y=p(68199);const d=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n._g)),(0,i.z)((t=>{const{erathian:p}=t;return(0,c.HG)((e=>{void 0===e.lang?e.lang={code:y.Fp,erathian:p}:e.lang.erathian=p})),(0,a.of)({type:n._G,erathian:p}).pipe((0,s.R)(e.pipe((0,l.l)(n.OU))))})))},47515:(e,t,p)=>{p.d(t,{Z:()=>d});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(32817),r=p(91757),l=p(15069),c=p(97257),y=p(48093);const d=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.yv)),(0,i.z)((t=>{const{lang:p}=t;return(0,c.HG)((e=>{void 0===e.lang?e.lang={code:p,erathian:y.QZ}:e.lang.code=p})),(0,a.of)({type:n.bd,lang:p}).pipe((0,s.R)(e.pipe((0,l.l)(n.OU))))})))},23201:(e,t,p)=>{p.d(t,{Z:()=>f});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(32817),r=p(91757),l=p(15069),c=p(97257),y=p(48093),d=p(39451);const f=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.I4)),(0,i.z)((t=>{const{payload:p}=t;return(0,c.HG)((e=>{void 0===e.settings?e.settings=Object.assign(Object.assign(Object.assign({},y.pt),{playerName:(0,d.UP)(y.yk),opponentName:(0,d.UP)(y.eA)}),p):e.settings=Object.assign(Object.assign({},e.settings),p)})),(0,a.of)({type:n.Nc,payload:p}).pipe((0,s.R)(e.pipe((0,l.l)(n.OU))))})))},76320:(e,t,p)=>{p.d(t,{Z:()=>d});var n=p(63211),o=p(94975),i=p(63428),s=p(43994),a=p(45626),r=p(42034),l=p(32817),c=p(1545),y=p(91757);const d=(e,t)=>e.pipe((0,o.h)((0,y.isOfType)(n.cQ)),(0,i.M)(t),(0,s.z)((([e,t])=>{const{payload:p}=e,o=t.multiplayer.on&&"connected_to_id"===t.multiplayer.status;return(0,r.z)((0,l.of)({type:n.I4,payload:p}),o?(0,l.of)({type:n.yJ,payload:p}):c.E,(0,l.of)({type:n.qg}).pipe((0,a.g)(0)))})))},93187:(e,t,p)=>{p.d(t,{Z:()=>y});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(32817),r=p(91757),l=p(15069),c=p(97257);const y=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.z1)),(0,i.z)((t=>{const{pixelation:p}=t;return(0,c.HG)((e=>{void 0===e.visual?e.visual={pixelation:p}:e.visual.pixelation=p})),(0,a.of)({type:n.rW,pixelation:p}).pipe((0,s.R)(e.pipe((0,l.l)(n.OU))))})))},40706:(e,t,p)=>{p.d(t,{Z:()=>y});var n=p(63211),o=p(94975),i=p(43994),s=p(83505),a=p(32817),r=p(91757),l=p(15069),c=p(97257);const y=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.j4)),(0,i.z)((t=>{const{volume:p}=t;return(0,c.HG)((e=>{e.volume=p})),(0,a.of)({type:n.cJ,volume:p}).pipe((0,s.R)(e.pipe((0,l.l)(n.OU))))})))},6709:(e,t,p)=>{p.d(t,{Z:()=>f});var n=p(63211),o=p(94975),i=p(63428),s=p(43994),a=p(83505),r=p(91757),l=p(15069),c=p(96559),y=p(91304),d=p(32817);const f=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.k4)),(0,i.M)(t),(0,s.z)((([t,p])=>{const o=p.status[t.owner],i=(0,c.qh)(y.cs).map((([e,p])=>({isPlayer:"player"===t.owner,statusProp:p,diff:o[e],noSound:!0})));return(0,d.of)({type:n.g$,payload:i}).pipe((0,a.R)(e.pipe((0,l.l)(n.OU))))})))},94132:(e,t,p)=>{p.d(t,{Z:()=>f});var n=p(63211),o=p(94975),i=p(63428),s=p(43994),a=p(83505),r=p(91757),l=p(15069),c=p(20401),y=p(42034),d=p(32817);const f=(e,t)=>e.pipe((0,o.h)((0,r.isOfType)(n.g$)),(0,i.M)(t),(0,s.z)((([t,p])=>{const o=t.payload.map((e=>{const{isPlayer:t,statusProp:n,noSound:o}=e;let i=null;if("to"in e){const o=p.status[t?"player":"opponent"][n];e.to!==o&&(i=e.to>o)}else 0!==e.diff&&(i=e.diff>0);return o||(0,c.h)(n,i,t),Object.assign({isPlayer:t,statusProp:n},"to"in e?{to:e.to}:{diff:e.diff})}));return(0,y.z)((0,d.of)({type:n.l7,payload:o}),(0,d.of)({type:n.Qo}),(0,d.of)({type:n.Dt})).pipe((0,a.R)(e.pipe((0,l.l)(n.OU))))})))}}]);