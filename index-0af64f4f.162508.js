(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[8761],{8300:function(e,p,o){"use strict";o.d(p,{Z:function(){return pe}});var t=o(4454),n=o(7515),i=o(7102),y=o(706),s=o(3201),r=o(4132),a=o(3211),f=o(6008),l=o(3825),d=o(3251),u=o(1558),c=o(1757),T=o(6559),g=o(583),O=o(1304),h=o(8170),m=o(6353),w=o(5631),x=o(3875),Z=o(6324),b=o(6306),R=o(5359),U=o(5760),E=o(1015),k=o(7750),z=o(5022),M=o(1159),v=o(1317);const _=[-2,-3,-4];var H=o(6320),S=o(7032),q=o(5078),N=o(7456),P=o(3644),$=o(6709),j=o(7746),C=o(4370);const I=[-2,-3,-4];var J=o(8373),X=o(5863),L=o(898),W=o(4694),D=o(7878),F=o(7365),K=o(8410),Q=o(7360),V=o(228),A=o(441),B=o(2087),G=o(7936),Y=o(751),ee=o(9970),pe=(0,t.l)(n.Z,i.Z,y.Z,s.Z,r.Z,((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.Uk)),(0,l.M)(p),(0,d.b)((([p,o])=>{const t=o.status.player,n=o.status.opponent,i=Object.assign({},t),y=Object.assign({},n),s=g.Z[p.n],r="player"===p.owner?i:y,f=O.ag[s.type];r[f]-=s.cost;const l=r[f],d=s.effect;"player"===p.owner?d(i,y):d(y,i);const c=(0,T.qh)(i).filter((([e,p])=>p!==t[e])).map((([e,o])=>({isPlayer:!0,statusProp:e,to:o,noSound:"player"===p.owner&&e===f&&o===l}))).concat((0,T.qh)(y).filter((([e,p])=>p!==n[e])).map((([e,o])=>({isPlayer:!1,statusProp:e,to:o,noSound:"opponent"===p.owner&&e===f&&o===l}))));return(0,h.of)({type:a.g$,payload:c}).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.qr)),(0,l.M)(p),(0,d.b)((([p,o])=>{const{n:t,index:n,position:i,owner:y}=p,s=o.multiplayer.gameStarted;return(0,m.z)((0,h.of)({type:a.xZ,payload:{type:a.ao,n:t,index:n,position:i,owner:y}}),s?(0,h.of)({type:a.H8,kind:x.d,data:{type:a.u3,payload:{type:a.ao,n:t,index:n,position:i,owner:(0,Z._w)(y)}}}):w.E).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.u3)),(0,d.b)((e=>{const{payload:p}=e;return b.f.enqueue(p),w.E})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.tI)),(0,d.b)((p=>{const o=b.f.dequeueAsync();return(0,U.D)(o).pipe((0,R.U)((e=>({type:a.xZ,payload:e}))),(0,u.R)(e.ofType(a.Cv)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.xZ)),(0,l.M)(p),(0,d.b)((([o,t])=>{const{payload:n}=o;return t.game.locked.some((e=>!0===e))?((0,k.Z)(`${JSON.stringify(n)} executed during the lock ${JSON.stringify(t.game.locked)}. the game will try to fix that`,"warning"),p.pipe((0,R.U)((e=>e.game.locked)),(0,f.h)((e=>!e.some((e=>!0===e)))),(0,E.q)(1),(0,R.U)((()=>n)),(0,u.R)(e.ofType(a.Cv)))):(0,h.of)(n)})),(0,u.R)(e.ofType(a.Cv)))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.ao)),(0,l.M)(p),(0,d.b)((([p,o])=>{const{n:t,index:n,position:i,owner:y}=p,s=g.Z[t].special;return(0,M.Z)("deal",o.volume),(0,m.z)(o.game.isNewTurn?(0,h.of)({type:a.kH}):w.E,(0,h.of)({type:a.Uk,n:t,owner:y}),(0,h.of)({type:a.PX,index:n}),(0,h.of)({type:a.fj,index:n,position:i,owner:y}),(0,h.of)({type:a.Ut,on:!0}),(null==s?void 0:s.drawDiscardPlayagain)?(0,m.z)((0,h.of)({type:a.vd,on:!0}),(0,h.of)({type:a.NX}).pipe((0,z.g)(0)),(0,h.of)({type:a.Jn,index:n}).pipe((0,z.g)(v.RE+v.Oz)),(0,h.of)({type:a.Ut,on:!1})):(0,m.z)((0,h.of)({type:a.Jn,index:n}).pipe((0,z.g)(v.RE+v.Oz)),(null==s?void 0:s.playagain)?(0,m.z)((0,h.of)({type:a.NX}).pipe((0,z.g)(0)),(0,h.of)({type:a.Ut,on:!1})):(0,h.of)({type:a.jV}).pipe((0,z.g)(v.RE)))).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.fL)),(0,l.M)(p),(0,d.b)((([p,o])=>{const{index:t,position:n,owner:i}=p,y=o.multiplayer.gameStarted;return(0,m.z)((0,h.of)({type:a.xZ,payload:{type:a.xr,index:t,position:n,owner:i}}),y?(0,h.of)({type:a.H8,kind:x.d,data:{type:a.u3,payload:{type:a.xr,index:t,position:n,owner:(0,Z._w)(i)}}}):w.E).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.xr)),(0,l.M)(p),(0,d.b)((([p,o])=>{const{index:t,position:n,owner:i}=p;return(0,M.Z)("deal",o.volume),(0,m.z)(o.game.isNewTurn?(0,h.of)({type:a.kH}):w.E,(0,h.of)({type:a.iE,index:t}),(0,h.of)({type:a.Jn,index:t}).pipe((0,z.g)(0)),(0,h.of)({type:a.fj,index:t,position:n,owner:i}),o.game.discardMode?(0,m.z)((0,h.of)({type:a.vd,on:!1}),(0,h.of)({type:a.NX})):(0,m.z)((0,h.of)({type:a.Ut,on:!0}),(0,h.of)({type:a.jV}).pipe((0,z.g)(v.RE)))).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.Jn)),(0,l.M)(p),(0,d.b)((([p,o])=>{const t=o.cards.list,n=t[p.index];if(null!==n&&!1===_.includes(n.position)){const o=_.find((e=>t.every((p=>(null==p?void 0:p.position)!==e))));return void 0===o?(0,m.z)((0,h.of)({type:a.kH}),(0,h.of)({type:a.Jn,index:p.index})).pipe((0,u.R)(e.ofType(a.OU))):(0,h.of)({type:a._d,index:p.index,toPosition:o}).pipe((0,u.R)(e.ofType(a.OU)))}return w.E})))),H.Z,S.Z,((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.qg)),(0,l.M)(p),(0,d.b)((([p,o])=>{const t=o.multiplayer.on&&"connected_to_id"===o.multiplayer.status,n=Math.random()<.5,i=[],y=o.settings.cardsInHand;for(let e=0,p=2*y;e<p;e++){const p={position:e%y,n:(0,q.d)(),unusable:!1,discarded:!1,isFlipped:!1,zeroOpacity:!1,owner:e<y?"player":"opponent"};i.push(p)}return(0,m.z)((0,h.of)({type:a.pS,playersTurn:n,cardList:i}),t?(0,h.of)({type:a.H8,kind:x.d,data:{type:a.pS,playersTurn:!n,cardList:(0,Z.b1)(i)}}):w.E).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.pS)),(0,l.M)(p),(0,d.b)((([p,o])=>{const t=o.multiplayer.on&&"connected_to_id"===o.multiplayer.status,n=o.multiplayer.on&&"connected_by_id"===o.multiplayer.status,{playersTurn:i,cardList:y}=p,s=o.settings.cardsInHand,r={total:{player:s,opponent:s},list:y,nextPos:{player:s,opponent:s}};return(0,m.z)((0,h.of)({type:a.zn,payload:r}),(0,h.of)({type:a.s3,playersTurn:i}),(0,h.of)({type:a.F5,payload:(0,N.iT)(o.settings)}),t||n?(0,h.of)({type:a.KP,on:!0}):w.E,(0,h.of)({type:a.k4,owner:i?"player":"opponent"}),(0,h.of)({type:a.NX}).pipe((0,z.g)(0))).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.NX)),(0,l.M)(p),(0,d.b)((([p,o])=>{const t="connected_to_id"===o.multiplayer.status;let n;if(o.multiplayer.gameStarted)if(t){const e=(0,q.d)();n=(0,m.z)((0,h.of)({type:a.kp,n:e}),(0,h.of)({type:a.H8,kind:x.d,data:{type:a.M0,n:e}}))}else n=(0,h.of)({type:a.tM});else n=(0,h.of)({type:a.kp,n:(0,q.d)()});return(0,m.z)((0,h.of)({type:a.Ut,on:!0,locknumber:1}),n).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.M0)),(0,d.b)((e=>{const{n:p}=e;return b.I.enqueue(p),w.E})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.tM)),(0,d.b)((p=>{const o=b.I.dequeueAsync();return(0,U.D)(o).pipe((0,d.b)((e=>(0,h.of)({type:a.kp,n:e}))),(0,u.R)(e.ofType(a.Cv)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.kp)),(0,l.M)(p),(0,d.b)((([p,o])=>{const{n:t}=p,n=o.game.playersTurn?"player":"opponent",i=o.multiplayer.gameStarted;return(0,M.Z)("deal",o.volume),(0,k.Z)(`${n} draws card ${t}`,"info"),(0,m.z)((0,h.of)({type:a.$Z,n:t}),(0,h.of)({type:a.Qo,lastOnly:!0}),(0,h.of)({type:a.B4,owner:n}).pipe((0,z.g)(v.Fi)),(0,h.of)({type:a.Ut,on:!1,locknumber:1}).pipe((0,z.g)(0)),"opponent"===n&&P.Hz&&!i?(0,h.of)({type:a.cx}).pipe((0,z.g)(v.RE+v.CF+(P.G1?0:P.kQ))):w.E,"opponent"===n&&i?(0,h.of)({type:a.tI}).pipe((0,z.g)(v.RE+v.t7)):w.E,"player"===n?(0,h.of)({type:a.yh}).pipe((0,z.g)(0)):w.E).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.jV)),(0,l.M)(p),(0,d.b)((([p,o])=>(0,m.z)((0,h.of)({type:a.K5}),(0,h.of)({type:a.k4,owner:o.game.playersTurn?"opponent":"player"}),(0,h.of)({type:a.Ut,on:!1}),(0,h.of)({type:a.NX}).pipe((0,z.g)(0)),(0,h.of)({type:a.Z$,on:!0})).pipe((0,u.R)(e.ofType(a.OU))))))),$.Z,((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.kH)),(0,l.M)(p),(0,j.zg)((([p,o])=>{const t=[],n=[],i=[];return I.forEach((e=>{o.cards.list.forEach(((p,o)=>{null!==p&&p.position===e&&(t.push((0,h.of)({type:a.EK,index:o})),n.push((0,h.of)({type:a.OK,index:o}).pipe((0,z.g)(v.RE))),i.push((0,h.of)({type:a.M2,index:o}).pipe((0,z.g)(2*v.RE))))}))})),(0,C.T)((0,h.of)({type:a.Z$,on:!1}),(0,C.T)(...t,...n,...i)).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.Qo)),(0,l.M)(p),(0,d.b)((([p,o])=>{const t=[],n=[],i=(e,i)=>{if(null!==e){const y=p.lastOnly?o.game.playersTurn?"player":"opponent":e.owner;if("common"!==y){const{type:p,cost:s}=g.Z[e.n];o.status[y][O.ag[p]]<s?e.unusable||t.push(i):e.unusable&&n.push(i)}}};if(p.lastOnly){const e=o.cards.list,p=e.length-1;i(e[p],p)}else o.cards.list.forEach(i);return(0,h.of)({type:a.R9,unusables:t,usables:n}).pipe((0,u.R)(e.ofType(a.OU)))})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.Dt)),(0,l.M)(p),(0,d.b)((([p,o])=>{const{winTower:t,winResource:n}=(0,N.Ib)(o.settings),{player:i,opponent:y}=o.status,s=i.tower>=t||y.tower<=0||O.ag.some((e=>i[e]>=n)),r=y.tower>=t||i.tower<=0||O.ag.some((e=>y[e]>=n));return s&&!r?(0,h.of)({type:a.Wz,payload:{type:"win"}}).pipe((0,u.R)(e.ofType(a.OU))):!s&&r?(0,h.of)({type:a.Wz,payload:{type:"lose"}}).pipe((0,u.R)(e.ofType(a.OU))):s&&r?(0,h.of)({type:a.Wz,payload:{type:"tie"}}).pipe((0,u.R)(e.ofType(a.OU))):w.E})))),J.Z,((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.cx)),(0,l.M)(p),(0,d.b)((([p,o])=>{const t=(0,X.ai)(o);if(null===t)return(0,h.of)({type:a.Wz,payload:{type:"win",surrender:!0}}).pipe((0,u.R)(e.ofType(a.OU)));const{index:n,use:i}=t,y=o.cards.list[n];if(null!==y&&"common"!==y.owner){const{n:p,position:o,owner:t}=y;return i?(0,h.of)({type:a.qr,index:n,n:p,position:o,owner:t}).pipe((0,u.R)(e.ofType(a.OU))):(0,h.of)({type:a.fL,index:n,position:o,owner:t}).pipe((0,u.R)(e.ofType(a.OU)))}return w.E})))),((e,p)=>e.pipe((0,f.h)((0,c.isOfType)(a.yh)),(0,l.M)(p),(0,d.b)((([p,o])=>0===(0,L.Z)(o,"player").filter((e=>e.canuse||e.candiscard)).length?(0,h.of)({type:a.Wz,payload:{type:"lose",surrender:!0}}).pipe((0,u.R)(e.ofType(a.OU))):w.E)))),W.Z,D.Z,F.Z,K.Z,Q.Z,V.Z,A.Z,B.Z,G.Z,Y.Z,ee.Z)}}]);