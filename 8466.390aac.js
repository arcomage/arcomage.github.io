"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[8466],{6526:function(e,t,n){n.d(t,{E:function(){return r}});var r=n(67294).createContext(null)},60682:function(e,t,n){var r=n(67294),u=n(6526),o=n(86496),c=n(1881);t.Z=function(e){var t=e.store,n=e.context,a=e.children,i=(0,r.useMemo)((function(){var e=(0,o.X)(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),s=(0,r.useMemo)((function(){return t.getState()}),[t]);(0,c.L)((function(){var e=i.subscription;return e.trySubscribe(),s!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,s]);var f=n||u.E;return r.createElement(f.Provider,{value:i},a)}},26685:function(e,t,n){n(8679),n(67294),n(59864),n(86496),n(1881),n(6526)}}]);