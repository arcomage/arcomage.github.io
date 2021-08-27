/*! For license information please see 451.534ccc.js.LICENSE.txt */
"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[451],{65530:function(r,n,e){e.d(n,{zt:function(){return t.Z},I0:function(){return f},v9:function(){return p}});var t=e(60682),u=(e(26685),e(6526));e(87462);var o=e(67294);function c(){return(0,o.useContext)(u.E)}function i(r){void 0===r&&(r=u.E);var n=r===u.E?c:function(){return(0,o.useContext)(r)};return function(){return n().store}}var s=i();function a(r){void 0===r&&(r=u.E);var n=r===u.E?s:i(r);return function(){return n().dispatch}}var f=a(),b=e(86496),l=e(1881),h=function(r,n){return r===n};function d(r){void 0===r&&(r=u.E);var n=r===u.E?c:function(){return(0,o.useContext)(r)};return function(r,e){void 0===e&&(e=h);var t=n(),u=function(r,n,e,t){var u,c=(0,o.useReducer)((function(r){return r+1}),0)[1],i=(0,o.useMemo)((function(){return new b.Z(e,t)}),[e,t]),s=(0,o.useRef)(),a=(0,o.useRef)(),f=(0,o.useRef)(),h=(0,o.useRef)(),d=e.getState();try{if(r!==a.current||d!==f.current||s.current){var p=r(d);u=void 0!==h.current&&n(p,h.current)?h.current:p}else u=h.current}catch(r){throw s.current&&(r.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),r}return(0,l.L)((function(){a.current=r,f.current=d,h.current=u,s.current=void 0})),(0,l.L)((function(){function r(){try{var r=e.getState(),t=a.current(r);if(n(t,h.current))return;h.current=t,f.current=r}catch(r){s.current=r}c()}return i.onStateChange=r,i.trySubscribe(),r(),function(){return i.tryUnsubscribe()}}),[e,i]),u}(r,e,t.store,t.subscription);return(0,o.useDebugValue)(u),u}}var p=d(),v=e(9256),y=e(73935);(0,v.F)(y.unstable_batchedUpdates)},86496:function(r,n,e){e.d(n,{Z:function(){return o}});var t=e(9256),u={notify:function(){}},o=function(){function r(r,n){this.store=r,this.parentSub=n,this.unsubscribe=null,this.listeners=u,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=r.prototype;return n.addNestedSub=function(r){return this.trySubscribe(),this.listeners.subscribe(r)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){var r,n,e;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=(r=(0,t.k)(),n=null,e=null,{clear:function(){n=null,e=null},notify:function(){r((function(){for(var r=n;r;)r.callback(),r=r.next}))},get:function(){for(var r=[],e=n;e;)r.push(e),e=e.next;return r},subscribe:function(r){var t=!0,u=e={callback:r,next:null,prev:e};return u.prev?u.prev.next=u:n=u,function(){t&&null!==n&&(t=!1,u.next?u.next.prev=u.prev:e=u.prev,u.prev?u.prev.next=u.next:n=u.next)}}}))},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=u)},r}()},9256:function(r,n,e){e.d(n,{F:function(){return u},k:function(){return o}});var t=function(r){r()},u=function(r){return t=r},o=function(){return t}},1881:function(r,n,e){e.d(n,{L:function(){return u}});var t=e(67294),u="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect},88359:function(r,n){var e="function"==typeof Symbol&&Symbol.for;e&&Symbol.for("react.element"),e&&Symbol.for("react.portal"),e&&Symbol.for("react.fragment"),e&&Symbol.for("react.strict_mode"),e&&Symbol.for("react.profiler"),e&&Symbol.for("react.provider"),e&&Symbol.for("react.context"),e&&Symbol.for("react.async_mode"),e&&Symbol.for("react.concurrent_mode"),e&&Symbol.for("react.forward_ref"),e&&Symbol.for("react.suspense"),e&&Symbol.for("react.suspense_list"),e&&Symbol.for("react.memo"),e&&Symbol.for("react.lazy"),e&&Symbol.for("react.block"),e&&Symbol.for("react.fundamental"),e&&Symbol.for("react.responder"),e&&Symbol.for("react.scope")},72973:function(r,n,e){e(88359)}}]);