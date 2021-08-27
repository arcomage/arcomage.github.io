"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[3065],{83065:function(e,t,o){var r=o(6509),n=o(81225),i=o(67294),a=(o(45697),o(86010)),p=o(77828),s=o(82730),l=o(8396),c=o(4662),u=o(25448),m=o(13353),d=o(57205),h=o(24693),g=o(67977),f=o(67531),b=o(59713),T=o(83460),Z=o(97774),w=o(69592),y=o(85893);const v=["arrow","children","classes","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"],x=(0,l.ZP)(h.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((({theme:e,ownerState:t,open:o})=>(0,n.Z)({zIndex:e.zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${w.Z.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${w.Z.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${w.Z.arrow}`]:(0,n.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${w.Z.arrow}`]:(0,n.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})}))),R=(0,l.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,m.Z)(o.placement.split("-")[0])}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({backgroundColor:(0,s.Fq)(e.palette.grey[700],.92),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:(16/14,Math.round(114285.71428571428)/1e5+"em"),fontWeight:e.typography.fontWeightRegular},{[`.${w.Z.popper}[data-popper-placement*="left"] &`]:(0,n.Z)({transformOrigin:"right center"},t.isRtl?(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${w.Z.popper}[data-popper-placement*="right"] &`]:(0,n.Z)({transformOrigin:"left center"},t.isRtl?(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${w.Z.popper}[data-popper-placement*="top"] &`]:(0,n.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${w.Z.popper}[data-popper-placement*="bottom"] &`]:(0,n.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})}))),S=(0,l.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,s.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let C=!1,M=null;function k(e,t){return o=>{t&&t(o),e(o)}}const L=i.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiTooltip"}),{arrow:s=!1,children:l,describeChild:L=!1,disableFocusListener:O=!1,disableHoverListener:P=!1,disableInteractive:E=!1,disableTouchListener:F=!1,enterDelay:D=100,enterNextDelay:I=0,enterTouchDelay:W=700,followCursor:$=!1,id:B,leaveDelay:N=0,leaveTouchDelay:A=1500,onClose:j,onOpen:z,open:U,placement:H="bottom",PopperComponent:q=h.Z,PopperProps:_={},title:Q,TransitionComponent:V=d.Z,TransitionProps:X}=o,Y=(0,r.Z)(o,v),G=(0,c.Z)(),J="rtl"===G.direction,[K,ee]=i.useState(),[te,oe]=i.useState(null),re=i.useRef(!1),ne=E||$,ie=i.useRef(),ae=i.useRef(),pe=i.useRef(),se=i.useRef(),[le,ce]=(0,Z.Z)({controlled:U,default:!1,name:"Tooltip",state:"open"});let ue=le;const me=(0,b.Z)(B),de=i.useRef(),he=i.useCallback((()=>{void 0!==de.current&&(document.body.style.WebkitUserSelect=de.current,de.current=void 0),clearTimeout(se.current)}),[]);i.useEffect((()=>()=>{clearTimeout(ie.current),clearTimeout(ae.current),clearTimeout(pe.current),he()}),[he]);const ge=e=>{clearTimeout(M),C=!0,ce(!0),z&&!ue&&z(e)},fe=(0,g.Z)((e=>{clearTimeout(M),M=setTimeout((()=>{C=!1}),800+N),ce(!1),j&&ue&&j(e),clearTimeout(ie.current),ie.current=setTimeout((()=>{re.current=!1}),G.transitions.duration.shortest)})),be=e=>{re.current&&"touchstart"!==e.type||(K&&K.removeAttribute("title"),clearTimeout(ae.current),clearTimeout(pe.current),D||C&&I?ae.current=setTimeout((()=>{ge(e)}),C?I:D):ge(e))},Te=e=>{clearTimeout(ae.current),clearTimeout(pe.current),pe.current=setTimeout((()=>{fe(e)}),N)},{isFocusVisibleRef:Ze,onBlur:we,onFocus:ye,ref:ve}=(0,T.Z)(),[,xe]=i.useState(!1),Re=e=>{we(e),!1===Ze.current&&(xe(!1),Te(e))},Se=e=>{K||ee(e.currentTarget),ye(e),!0===Ze.current&&(xe(!0),be(e))},Ce=e=>{re.current=!0;const t=l.props;t.onTouchStart&&t.onTouchStart(e)},Me=be,ke=Te;i.useEffect((()=>{if(ue)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||fe(e)}}),[fe,ue]);const Le=(0,f.Z)(ee,t),Oe=(0,f.Z)(ve,Le),Pe=(0,f.Z)(l.ref,Oe);""===Q&&(ue=!1);const Ee=i.useRef({x:0,y:0}),Fe=i.useRef(),De={},Ie="string"==typeof Q;L?(De.title=ue||!Ie||P?null:Q,De["aria-describedby"]=ue?me:null):(De["aria-label"]=Ie?Q:null,De["aria-labelledby"]=ue&&!Ie?me:null);const We=(0,n.Z)({},De,Y,l.props,{className:(0,a.Z)(Y.className,l.props.className),onTouchStart:Ce,ref:Pe},$?{onMouseMove:e=>{const t=l.props;t.onMouseMove&&t.onMouseMove(e),Ee.current={x:e.clientX,y:e.clientY},Fe.current&&Fe.current.update()}}:{}),$e={};F||(We.onTouchStart=e=>{Ce(e),clearTimeout(pe.current),clearTimeout(ie.current),he(),de.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",se.current=setTimeout((()=>{document.body.style.WebkitUserSelect=de.current,be(e)}),W)},We.onTouchEnd=e=>{l.props.onTouchEnd&&l.props.onTouchEnd(e),clearTimeout(se.current),clearTimeout(pe.current),pe.current=setTimeout((()=>{fe(e)}),A)}),P||(We.onMouseOver=k(Me,We.onMouseOver),We.onMouseLeave=k(ke,We.onMouseLeave),ne||($e.onMouseOver=Me,$e.onMouseLeave=ke)),O||(We.onFocus=k(Se,We.onFocus),We.onBlur=k(Re,We.onBlur),ne||($e.onFocus=Se,$e.onBlur=Re));const Be=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(te),options:{element:te,padding:4}}];return null!=(e=_.popperOptions)&&e.modifiers&&(t=t.concat(_.popperOptions.modifiers)),(0,n.Z)({},_.popperOptions,{modifiers:t})}),[te,_]),Ne=(0,n.Z)({},o,{isRtl:J,arrow:s,disableInteractive:ne,placement:H,PopperComponent:q,touch:re.current}),Ae=(e=>{const{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,m.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,p.Z)(a,w.Q,t)})(Ne);return(0,y.jsxs)(i.Fragment,{children:[i.cloneElement(l,We),(0,y.jsx)(x,(0,n.Z)({as:q,className:Ae.popper,placement:H,anchorEl:$?{getBoundingClientRect:()=>({top:Ee.current.y,left:Ee.current.x,right:Ee.current.x,bottom:Ee.current.y,width:0,height:0})}:K,popperRef:Fe,open:!!K&&ue,id:me,transition:!0},$e,_,{popperOptions:Be,ownerState:Ne,children:({TransitionProps:e})=>(0,y.jsx)(V,(0,n.Z)({timeout:G.transitions.duration.shorter},e,X,{children:(0,y.jsxs)(R,{className:Ae.tooltip,ownerState:Ne,children:[Q,s?(0,y.jsx)(S,{className:Ae.arrow,ref:oe,ownerState:Ne}):null]})}))}))]})}));t.Z=L}}]);