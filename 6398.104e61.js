"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[6398],{76398:(r,e,t)=>{t.d(e,{zt:()=>n.Z,I0:()=>f,v9:()=>g});var n=t(60682),u=(t(26685),t(6526));t(63480),t(87462);var c=t(67294);function o(){return(0,c.useContext)(u.E)}function i(r){void 0===r&&(r=u.E);var e=r===u.E?o:function(){return(0,c.useContext)(r)};return function(){return e().store}}var a=i();function s(r){void 0===r&&(r=u.E);var e=r===u.E?a:i(r);return function(){return e().dispatch}}var f=s(),v=t(86496),h=t(1881),d=function(r,e){return r===e};function b(r){void 0===r&&(r=u.E);var e=r===u.E?o:function(){return(0,c.useContext)(r)};return function(r,t){void 0===t&&(t=d);var n=e(),u=function(r,e,t,n){var u,o=(0,c.useReducer)((function(r){return r+1}),0)[1],i=(0,c.useMemo)((function(){return(0,v.X)(t,n)}),[t,n]),a=(0,c.useRef)(),s=(0,c.useRef)(),f=(0,c.useRef)(),d=(0,c.useRef)(),b=t.getState();try{if(r!==s.current||b!==f.current||a.current){var g=r(b);u=void 0!==d.current&&e(g,d.current)?d.current:g}else u=d.current}catch(r){throw a.current&&(r.message+="\nThe error may be correlated with this previous error:\n"+a.current.stack+"\n\n"),r}return(0,h.L)((function(){s.current=r,f.current=b,d.current=u,a.current=void 0})),(0,h.L)((function(){function r(){try{var r=t.getState();if(r===f.current)return;var n=s.current(r);if(e(n,d.current))return;d.current=n,f.current=r}catch(r){a.current=r}o()}return i.onStateChange=r,i.trySubscribe(),r(),function(){return i.tryUnsubscribe()}}),[t,i]),u}(r,t,n.store,n.subscription);return(0,c.useDebugValue)(u),u}}var g=b(),E=t(71679);(0,t(9256).F)(E.m)}}]);