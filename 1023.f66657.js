"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[1023],{21023:(e,t,o)=>{o.d(t,{Z:()=>L});var r=o(63366),n=o(87462),i=o(67294),a=(o(45697),o(86010)),p=o(27192),l=o(23474),s=o(41796),c=o(90948),u=o(2734),m=o(71657),d=o(98216),h=o(43028),g=o(38584),f=o(2068),Z=o(51705),b=o(27909),T=o(79674),v=o(49299),w=o(48999),y=o(85893);const x=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"],R=(0,c.ZP)(g.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((({theme:e,ownerState:t,open:o})=>(0,n.Z)({zIndex:e.zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${w.Z.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${w.Z.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${w.Z.arrow}`]:(0,n.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${w.Z.arrow}`]:(0,n.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})}))),P=(0,c.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,d.Z)(o.placement.split("-")[0])}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({backgroundColor:(0,s.Fq)(e.palette.grey[700],.92),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:(16/14,Math.round(114285.71428571428)/1e5+"em"),fontWeight:e.typography.fontWeightRegular},{[`.${w.Z.popper}[data-popper-placement*="left"] &`]:(0,n.Z)({transformOrigin:"right center"},t.isRtl?(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${w.Z.popper}[data-popper-placement*="right"] &`]:(0,n.Z)({transformOrigin:"left center"},t.isRtl?(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${w.Z.popper}[data-popper-placement*="top"] &`]:(0,n.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${w.Z.popper}[data-popper-placement*="bottom"] &`]:(0,n.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})}))),C=(0,c.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,s.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let M=!1,S=null;function k(e,t){return o=>{t&&t(o),e(o)}}const L=i.forwardRef((function(e,t){var o,s,c,L,O,E;const F=(0,m.Z)({props:e,name:"MuiTooltip"}),{arrow:N=!1,children:D,components:I={},componentsProps:W={},describeChild:$=!1,disableFocusListener:B=!1,disableHoverListener:A=!1,disableInteractive:j=!1,disableTouchListener:z=!1,enterDelay:U=100,enterNextDelay:H=0,enterTouchDelay:q=700,followCursor:_=!1,id:Q,leaveDelay:V=0,leaveTouchDelay:X=1500,onClose:Y,onOpen:G,open:J,placement:K="bottom",PopperComponent:ee,PopperProps:te={},title:oe,TransitionComponent:re=h.Z,TransitionProps:ne}=F,ie=(0,r.Z)(F,x),ae=(0,u.Z)(),pe="rtl"===ae.direction,[le,se]=i.useState(),[ce,ue]=i.useState(null),me=i.useRef(!1),de=j||_,he=i.useRef(),ge=i.useRef(),fe=i.useRef(),Ze=i.useRef(),[be,Te]=(0,v.Z)({controlled:J,default:!1,name:"Tooltip",state:"open"});let ve=be;const we=(0,b.Z)(Q),ye=i.useRef(),xe=i.useCallback((()=>{void 0!==ye.current&&(document.body.style.WebkitUserSelect=ye.current,ye.current=void 0),clearTimeout(Ze.current)}),[]);i.useEffect((()=>()=>{clearTimeout(he.current),clearTimeout(ge.current),clearTimeout(fe.current),xe()}),[xe]);const Re=e=>{clearTimeout(S),M=!0,Te(!0),G&&!ve&&G(e)},Pe=(0,f.Z)((e=>{clearTimeout(S),S=setTimeout((()=>{M=!1}),800+V),Te(!1),Y&&ve&&Y(e),clearTimeout(he.current),he.current=setTimeout((()=>{me.current=!1}),ae.transitions.duration.shortest)})),Ce=e=>{me.current&&"touchstart"!==e.type||(le&&le.removeAttribute("title"),clearTimeout(ge.current),clearTimeout(fe.current),U||M&&H?ge.current=setTimeout((()=>{Re(e)}),M?H:U):Re(e))},Me=e=>{clearTimeout(ge.current),clearTimeout(fe.current),fe.current=setTimeout((()=>{Pe(e)}),V)},{isFocusVisibleRef:Se,onBlur:ke,onFocus:Le,ref:Oe}=(0,T.Z)(),[,Ee]=i.useState(!1),Fe=e=>{ke(e),!1===Se.current&&(Ee(!1),Me(e))},Ne=e=>{le||se(e.currentTarget),Le(e),!0===Se.current&&(Ee(!0),Ce(e))},De=e=>{me.current=!0;const t=D.props;t.onTouchStart&&t.onTouchStart(e)},Ie=Ce,We=Me;i.useEffect((()=>{if(ve)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Pe(e)}}),[Pe,ve]);const $e=(0,Z.Z)(se,t),Be=(0,Z.Z)(Oe,$e),Ae=(0,Z.Z)(D.ref,Be);""===oe&&(ve=!1);const je=i.useRef({x:0,y:0}),ze=i.useRef(),Ue={},He="string"==typeof oe;$?(Ue.title=ve||!He||A?null:oe,Ue["aria-describedby"]=ve?we:null):(Ue["aria-label"]=He?oe:null,Ue["aria-labelledby"]=ve&&!He?we:null);const qe=(0,n.Z)({},Ue,ie,D.props,{className:(0,a.Z)(ie.className,D.props.className),onTouchStart:De,ref:Ae},_?{onMouseMove:e=>{const t=D.props;t.onMouseMove&&t.onMouseMove(e),je.current={x:e.clientX,y:e.clientY},ze.current&&ze.current.update()}}:{}),_e={};z||(qe.onTouchStart=e=>{De(e),clearTimeout(fe.current),clearTimeout(he.current),xe(),ye.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ze.current=setTimeout((()=>{document.body.style.WebkitUserSelect=ye.current,Ce(e)}),q)},qe.onTouchEnd=e=>{D.props.onTouchEnd&&D.props.onTouchEnd(e),xe(),clearTimeout(fe.current),fe.current=setTimeout((()=>{Pe(e)}),X)}),A||(qe.onMouseOver=k(Ie,qe.onMouseOver),qe.onMouseLeave=k(We,qe.onMouseLeave),de||(_e.onMouseOver=Ie,_e.onMouseLeave=We)),B||(qe.onFocus=k(Ne,qe.onFocus),qe.onBlur=k(Fe,qe.onBlur),de||(_e.onFocus=Ne,_e.onBlur=Fe));const Qe=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(ce),options:{element:ce,padding:4}}];return null!=(e=te.popperOptions)&&e.modifiers&&(t=t.concat(te.popperOptions.modifiers)),(0,n.Z)({},te.popperOptions,{modifiers:t})}),[ce,te]),Ve=(0,n.Z)({},F,{isRtl:pe,arrow:N,disableInteractive:de,placement:K,PopperComponentProp:ee,touch:me.current}),Xe=(e=>{const{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,d.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,p.Z)(a,w.Q,t)})(Ve),Ye=null!=(o=I.Popper)?o:R,Ge=null!=(s=null!=(c=I.Transition)?c:re)?s:h.Z,Je=null!=(L=I.Tooltip)?L:P,Ke=null!=(O=I.Arrow)?O:C,et=(0,l.Z)(Ye,(0,n.Z)({},te,W.popper),Ve),tt=(0,l.Z)(Ge,(0,n.Z)({},ne,W.transition),Ve),ot=(0,l.Z)(Je,(0,n.Z)({},W.tooltip),Ve),rt=(0,l.Z)(Ke,(0,n.Z)({},W.arrow),Ve);return(0,y.jsxs)(i.Fragment,{children:[i.cloneElement(D,qe),(0,y.jsx)(Ye,(0,n.Z)({as:null!=ee?ee:g.Z,placement:K,anchorEl:_?{getBoundingClientRect:()=>({top:je.current.y,left:je.current.x,right:je.current.x,bottom:je.current.y,width:0,height:0})}:le,popperRef:ze,open:!!le&&ve,id:we,transition:!0},_e,et,{className:(0,a.Z)(Xe.popper,null==te?void 0:te.className,null==(E=W.popper)?void 0:E.className),popperOptions:Qe,children:({TransitionProps:e})=>{var t,o;return(0,y.jsx)(Ge,(0,n.Z)({timeout:ae.transitions.duration.shorter},e,tt,{children:(0,y.jsxs)(Je,(0,n.Z)({},ot,{className:(0,a.Z)(Xe.tooltip,null==(t=W.tooltip)?void 0:t.className),children:[oe,N?(0,y.jsx)(Ke,(0,n.Z)({},rt,{className:(0,a.Z)(Xe.arrow,null==(o=W.arrow)?void 0:o.className),ref:ue})):null]}))}))}}))]})}))}}]);