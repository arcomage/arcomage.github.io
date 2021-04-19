!function(){"use strict";var e={913:function(){try{self["workbox:core:6.1.5"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},762:function(){try{self["workbox:range-requests:6.1.5"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}!function(){s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}const t=new Set,n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[n.prefix,e,n.suffix].filter((e=>e&&e.length>0)).join("-"),r=e=>e||a(n.precache),i=e=>e||a(n.runtime);function o(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}let c;class h{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let s=!1;setTimeout((()=>{s=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:a,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",((i,o)=>{const c=i.objectStore(e),h=t?c.index(t):c,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(r?e:e.value),a&&l.length>=a?o(l):e.continue()):o(l)}}))}async transaction(e,t,s){return await this.open(),await new Promise(((n,a)=>{const r=this._db.transaction(e,t);r.onabort=()=>a(r.error),r.oncomplete=()=>n(),s(r,(e=>n(e)))}))}async _call(e,t,s,...n){return await this.transaction([t],s,((s,a)=>{const r=s.objectStore(t),i=r[e].apply(r,n);i.onsuccess=()=>a(i.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}h.prototype.OPEN_TIMEOUT=2e3;const l={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(l))for(const s of t)s in IDBObjectStore.prototype&&(h.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});class u{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}function d(e,t){const s=t();return e.waitUntil(s),s}const f={get googleAnalytics(){return e||a(n.googleAnalytics);var e},get precache(){return r()},get prefix(){return n.prefix},get runtime(){return i()},get suffix(){return n.suffix}};function p(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}s(977);class g{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class y{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}function w(e){return"string"==typeof e?new Request(e):e}s(873);class m{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new u,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let n=w(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(t){throw new e("plugin-error-request-will-fetch",{thrownError:t})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i={...a,cacheName:n};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(s,n){const a=w(s);await(0,new Promise((e=>setTimeout(e,0))));const r=await this.getCacheKey(a,"write");if(!n)throw new e("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const c=await this._ensureResponseSafeToCache(n);if(!c)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,s,n){const a=o(t.url,s);if(t.url===a)return e.match(t,n);const r={...n,ignoreSearch:!0},i=await e.keys(t,r);for(const t of i)if(a===o(t.url,s))return e.match(t,n)}(u,r.clone(),["__WB_REVISION__"],l):null;try{await u.put(r,d?c.clone():c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of t)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:h,oldResponse:f,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=w(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a={...n,state:s};return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=i(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new m(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(t,s,n){let a;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,t),!a||"error"===a.type)throw new e("no-response",{url:s.url})}catch(e){for(const r of t.iterateCallbacks("handlerDidError"))if(a=await r({error:e,event:n,request:s}),a)break;if(!a)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))a=await e({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class v extends _{constructor(e={}){e.cacheName=r(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let n;if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return n=await s.fetch(t),n}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==v.copyRedirectedCacheableResponsesPlugin&&(n===v.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const a=t.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,o=function(){if(void 0===c){const e=new Response("");if("body"in e)try{new Response(e.body),c=!0}catch(e){c=!1}c=!1}return c}()?a.body:await a.blob();return new Response(o,i)}(t):t};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:r(e),plugins:[...t,new y({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:a}=p(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(a,t),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return d(e,(async()=>{const t=new g;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return d(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params={cacheKey:s,...e.params},this.strategy.handle(e))}}let b;const C=()=>(b||(b=new R),b);s(80);const U=e=>e&&"object"==typeof e?e:{handle:e};class q{constructor(e,t,s="GET"){this.handler=U(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=U(e)}}class L extends q{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class x{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:s,request:e,event:t,params:a})}catch(e){c=Promise.reject(e)}const h=r&&r.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){n=e}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,U(e))}setCatchHandler(e){this._catchHandler=U(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let K;function T(t,s,n){let a;if("string"==typeof t){const e=new URL(t,location.href);a=new q((({url:t})=>t.href===e.href),s,n)}else if(t instanceof RegExp)a=new L(t,s,n);else if("function"==typeof t)a=new q(t,s,n);else{if(!(t instanceof q))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return(K||(K=new x,K.addFetchListener(),K.addCacheListener()),K).registerRoute(a),a}class k extends q{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}var N;s(762),self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),T((({url:e})=>e.pathname.endsWith(".mp3")),new class extends _{async _handle(t,s){const n=await s.cacheMatch(t);if(!n)throw new e("no-response",{url:t.url});return n}}({cacheName:f.precache,plugins:[{cacheKeyWillBeUsed:({request:e})=>{return t=e.url,C().getCacheKeyForURL(t);var t}},new class{constructor(){this.cachedResponseWillBeUsed=async({request:t,cachedResponse:s})=>s&&t.headers.has("range")?await async function(t,s){try{if(206===s.status)return s;const n=t.headers.get("range");if(!n)throw new e("no-range-header");const a=function(t){const s=t.trim().toLowerCase();if(!s.startsWith("bytes="))throw new e("unit-must-be-bytes",{normalizedRangeHeader:s});if(s.includes(","))throw new e("single-range-only",{normalizedRangeHeader:s});const n=/(\d*)-(\d*)/.exec(s);if(!n||!n[1]&&!n[2])throw new e("invalid-range-values",{normalizedRangeHeader:s});return{start:""===n[1]?void 0:Number(n[1]),end:""===n[2]?void 0:Number(n[2])}}(n),r=await s.blob(),i=function(t,s,n){const a=t.size;if(n&&n>a||s&&s<0)throw new e("range-not-satisfiable",{size:a,end:n,start:s});let r,i;return void 0!==s&&void 0!==n?(r=s,i=n+1):void 0!==s&&void 0===n?(r=s,i=a):void 0!==n&&void 0===s&&(r=a-n,i=a),{start:r,end:i}}(r,a.start,a.end),o=r.slice(i.start,i.end),c=o.size,h=new Response(o,{status:206,statusText:"Partial Content",headers:s.headers});return h.headers.set("Content-Length",String(c)),h.headers.set("Content-Range",`bytes ${i.start}-${i.end-1}/`+r.size),h}catch(e){return new Response("",{status:416,statusText:"Range Not Satisfiable"})}}(t,s):s}}]})),N=[{'revision':'587f1d3ac691a5eaf0f9b4784b5e5b05','url':'https://arcomage.github.io/./index.html'},{'revision':null,'url':'https://arcomage.github.io/10.9490c1.js'},{'revision':null,'url':'https://arcomage.github.io/1473.8e8fcf.js'},{'revision':null,'url':'https://arcomage.github.io/1804.3820de.js'},{'revision':'77fafeda6bc5cc43995b999d16b4bfa1','url':'https://arcomage.github.io/1804.3820de.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/2004.289b6c.js'},{'revision':null,'url':'https://arcomage.github.io/3667.8e52bc.js'},{'revision':'da6e1857291de4855bb602d67c39a264','url':'https://arcomage.github.io/3667.8e52bc.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/4013.17e23b.js'},{'revision':'3d2d88b7877918a326634499feeab80c','url':'https://arcomage.github.io/4013.17e23b.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/4448.1e85af.js'},{'revision':'2597b1d89e2e3c0085eaa4902b839cc5','url':'https://arcomage.github.io/4448.1e85af.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/4890.678d2b.js'},{'revision':null,'url':'https://arcomage.github.io/5244.5101b4.js'},{'revision':null,'url':'https://arcomage.github.io/5318.7e7dbf.js'},{'revision':'a4ca4ce973b61c5819dfd9564b633087','url':'https://arcomage.github.io/5318.7e7dbf.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/5391.710f7a.js'},{'revision':null,'url':'https://arcomage.github.io/7889.d46009.js'},{'revision':null,'url':'https://arcomage.github.io/7906.037776.js'},{'revision':'6fce53c7c7713ebf61712cc2929746fa','url':'https://arcomage.github.io/7906.037776.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/7958.297043.js'},{'revision':null,'url':'https://arcomage.github.io/8466.07a898.js'},{'revision':null,'url':'https://arcomage.github.io/862.f717e9.js'},{'revision':'fe07165234709e61e0cdc05d4056de5c','url':'https://arcomage.github.io/862.f717e9.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/9728.5c3322.js'},{'revision':null,'url':'https://arcomage.github.io/9854.60bb46.js'},{'revision':'45225919d5ebb7a024241727e9e7b055','url':'https://arcomage.github.io/9854.60bb46.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/assets/font/4796f05df52ce79c69ca13d05a24851a.woff'},{'revision':null,'url':'https://arcomage.github.io/assets/font/4effd203a092015cbc048cc56ac3f71b.woff'},{'revision':null,'url':'https://arcomage.github.io/assets/font/74c96f947016b48907df6b01a30ff0b9.woff2'},{'revision':null,'url':'https://arcomage.github.io/assets/font/7842987ecb5c2b0146da655ce1522ee2.woff'},{'revision':null,'url':'https://arcomage.github.io/assets/font/7c39659e8f6ab8d099cb1ee58b6a9911.woff2'},{'revision':null,'url':'https://arcomage.github.io/assets/font/b1b5b131a0d82c764166369c1cca3a78.woff2'},{'revision':null,'url':'https://arcomage.github.io/assets/img/00bf8ed73c6a23ee1c3818d64382b59f.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/01768efb986f604f83b75745a9be1ba7.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/0a807cc11a0c895482a6dd312fe8d2f0.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/0c28b8a64fa1e8350e83e0684f882276.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/0edc7f6fa776f156ea2974c0dc759640.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/12713f427a773c7b0837332faf5f82fd.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/12b98285bc66381141f096a5819f2ac9.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/140ea8f4c84055400d30c652b1615b10.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1417a9bedd1226c1463d129b2cb962b3.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/16057d3390fca2a8d326701309899ca0.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/16ab2e4702d25a15985555a23a1455d3.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/18ba7e05d5522444b13b0675c1ff0135.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1b22f3074ed5557ce2f991cab53dbd07.svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1d7695f8338d3436555472e8df7fce75.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1f2ea33f7b1f361ba43420bacf9bf320.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1fbc70c3f36f5ef10961a4fc88cb7b03.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/209bc7b65298248816dcccafd958f4cf.svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/20b7a9767b46e7031b47b8aac9eedf39.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/22028fa858ddbc951a368f72c47f05d6.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/229c38df63fa54426609d24e0b48713e.svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/249e5974880e7e1dce46154bc6f1dc5b.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/25c8431f293b460d3c3a2160f01a39c4.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/27425389c8e194e189b17f9e2fe874ca.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/2e39772a06aaaed8a7421177ea30de0c.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/361656f916b7e365ad45bc3588eea6ab.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/37e50ea0af4f55282738581e692d7f49.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3baf36a3eb833e996bae7488362c2e49.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3cda709bc864014a55c0eca88d670859.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3f498c9c549597a2b7772adac85f1c4e.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/449bff06dc82d61560d129a48061f3f8.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4785fbef25f7e1750753ff4bfcb42048.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4a11631e5e3a372ea045af3f3bf7e7df.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4b8d795d06520db72429fdc7ffbca6b8.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4c7448fa80c067908c5f15fed5b8e0e2.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4f86e84a3497cfadaf4e355399d39939.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4fc574eb19d1f22840815a4516ef1595.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/50fae4ca04a48be65562623d9e314f15.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/54fb008dff193c52fa9419570596aa85.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/56625807c8e5fe7376116e85bb4b6bd5.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/568084e8b3d90707562c10415615c1b7.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/59dd8a952e303be8101672fa67db58cc.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5a3b73ee7e1c6c5aadf4f5ed22d057d3.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5ac1880917eac8bc9def46fa325ecb24.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5f354d4c3c8af8bbddad6fbd4954e5b0.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/658b025d05c2fc6922254aa73cce71de.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6598d1b830788ec9615d36baa1ffdffc.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/67fa70c465af42feda3bcf94a7b16bb7.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/68388367cbb0169893eaadc5a9abedae.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/698b356a06db025500b92e5273c131ee.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/69c90183a4851ed86ce030c0751ff289.jpg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6d4363ad049190552a85297f7e3e01e5.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6e4eaf0d2882d56bcef3645fa274def9.svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/70b73e6c8853fac9083bcf720174d621.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/71af9fb5a98a124cf010aaaf876cbb4c.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/72bd46a4d1b7e7eeefada12253a4179e.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/72d6ccb7a67afe1f2b47a7b7302a8e31.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/784df16e31a87867945f9c2c45031ddd.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/78f471351c51c1ae95057be4574300ff.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/7c5c10bf0506145187bc2bb8d7eba8d6.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8071e1c07c3cbdf8900adae35e2968d3.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/81f626c9a1ba14f082d8517b00abee5d.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8248c2fc1d58aca3864f5747611edf8d.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8811fe11f792ef764d2ff05a0736d07b.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/896ff82d64e151ae54c015c89189a8bf.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8a5ff8832dc152b3ea968514888343fd.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8d0bf8a2cf66c68e04d59636c22f8013.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8fbc339945dc91aa1dfb87f356e04efa.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/903cd740dbf47084551480645c8d1453.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/906ba0e144813df43338b2eef9ebe321.svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/913f4ac070bfa52e4ae1e2b5b0230084.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/91db559c9b69e670a23036d8c03429bf.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/983065098cba87963f010696aa60a411.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/9e687410b5ec9c1fa6670d1c283ca0c9.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a1e43d63aae972108d9d75e92b6c7517.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a1f1648e793528993a62a3c6ed9fc776.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a23956436d1e55ae0a4c6f690bd0aac9.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a36a0ceed33df46d4070738523ae936f.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a4df4e83c939a2eb5835c1a5158d6ea8.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a4fe335cd948b15571bfcd7da3084c2a.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a875bd1185400bc49ebd9cf47fb6dff7.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a996b5cc1d9f4160fe771c4675297a2a.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a9e06b9d8001cd5fbe33319ad97b09b6.svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/aff239582e072b73ed9a0150adeeb8b7.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b20d8aeda10022a1f3c016b6a2d9e6fd.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b417f80cb58548d6dd2fefaa03bd8969.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b59444571dc3cb01e0413144ab90dd4b.svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b8594d15fcabf39d6150a1c3390c9f38.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b8cfb0fdbb95a0b0768c034c90ff6ac2.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ba11d3180327de15989d4cb84f67b944.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ba7313256dabef726762571e7ed80852.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/bae62a26bf5e51ec40d85f4f175babd4.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/bbf54c08bc38298cc15c6058dee6f4ca.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/beb5223daf3307a141698d6e0d7afd62.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c148deab0b916ddc70fb22e0e0cd6c6f.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c206fc76bbf94d800ac32f600543ba24.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c2a178e878fdba87e1c9534bda0255a9.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c78bda61dfcc2c25107d763af295060a.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c9031563645aad06d68a5f138378890e.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/cecb30c9e6c1284d224accacf394b632.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d07e906a91f5084a1a9826821aa45a5f.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d1edf46f190b2995343c3f0c258fd453.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d32aa3e462598abd30f55496da26118b.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d4d3d4fb5a617abdc7a5a683a70a62cd.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d6267eb33173cf0a94ddd4d1d6ceab07.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d8b6434117ee1252154b6b2be2fc9776.svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dac0b6c2ff68b0f84f80ccb1c9bc13c3.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dc29e1530b7e715570ad828fb00129ad.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dcb9179a699e8fe0397d19e31f9ac4c5.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dcf4389e4c83f133d77cc8c5252c45c9.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/df888c2c5218ebb26ba80e097121b3a7.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e05ff4d45677b9ef7d0c75a07613cfb3.svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e11476494f3c249be13cd54062d6231d.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e280a49f8dd6383d0e6e2e712421c951.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e8b7d6d2e3e4e09a2ab1b90fc77e0f16.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e9f32a9a473ee93cec7b364a8da8dc1e.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ed1ba44be4699770a9d60c025c531c06.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ef6158a71a9808f582efddf9922636a1.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f03600e59e5470a1d4013b54190a8d95.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f3389365de6e61d0a2148ba34a9c5588.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/fa59c51c603014b7fa95edab8c5dd854.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/fb9e21a2d11da4912a53693ec95d67d6.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/fc1460e75820da2c369b021b181783b8.png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ffa2c57d0aec2b35fbb415ae9b66f904.png'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/058ea063c515445d25237889ecedd961.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/2691571c68af06abae6d8be0912bbc53.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/446cfc270d5ee17d4b645b62a7eb84ad.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/556d150421e10442ccfb722d98dd9499.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/5c970bcb7928ae681d6345b27b5ea669.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/82548a43fb163e5e460f7b98479bfe1f.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/90b5936645af87b919b24bc099bf764f.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/91f3d957b0b5fa07f4aad48edd0710ee.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/9f9ab9836b93cfd166525eb99aeec80b.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/a906069723d4112d25a5bdea2bc5553b.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/cc3b470adc932d04659c84a743e5279e.mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/ed0d7478e8b5890460507b7bbc09f446.mp3'},{'revision':null,'url':'https://arcomage.github.io/cardi18n0.3dba86.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n10.58e15b.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n12.6a02df.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n14.32046c.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n16.7fbdb9.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n18.91b8e8.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n2.5f425f.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n6.3d5bf9.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n8.035788.js'},{'revision':'9504c5b005e24a0ccbcf1f2af5d4be92','url':'https://arcomage.github.io/favicon-120.png'},{'revision':'cba139067744fbf50968ad4fba21eac0','url':'https://arcomage.github.io/favicon-128.png'},{'revision':'c0ec476a3b59d24f659ca2fd61b69d49','url':'https://arcomage.github.io/favicon-144.png'},{'revision':'c42b61700fd1ea48ccd635ede778abee','url':'https://arcomage.github.io/favicon-152.png'},{'revision':'ea6f55df4dd0bf3d30526ab54d006c9f','url':'https://arcomage.github.io/favicon-180.png'},{'revision':'d5ada869f1fffdc4ef8f41359ea42371','url':'https://arcomage.github.io/favicon-192.png'},{'revision':'3a25bc71e2c61559440c310b7fd9d902','url':'https://arcomage.github.io/favicon-36.png'},{'revision':'de89724348a3e407811d1499c52ff079','url':'https://arcomage.github.io/favicon-384.png'},{'revision':'1c854029d9624de95c5ba5f319673706','url':'https://arcomage.github.io/favicon-72.png'},{'revision':'6432d6a95bf27ce5537480707700c508','url':'https://arcomage.github.io/favicon-96.png'},{'revision':'d80799c16a4337f322701c389a7fe3b1','url':'https://arcomage.github.io/favicon.ico'},{'revision':'7ffce037b0aeb98eb1bc89ea1fa7d8aa','url':'https://arcomage.github.io/favicon.svg'},{'revision':'b046dc69fd45866f3b87051532d1d93e','url':'https://arcomage.github.io/favicon_logo-512.png'},{'revision':'69c56c8416c6eb198acbb70747b783f5','url':'https://arcomage.github.io/favicon_logo.svg'},{'revision':'a1a263ce5d8e6429526cbd24a9fb92ef','url':'https://arcomage.github.io/favicon_logo_maskable.svg'},{'revision':'86c4b32f7139ae91c90e5f0d4869ef4f','url':'https://arcomage.github.io/favicon_maskable.svg'},{'revision':null,'url':'https://arcomage.github.io/i18n0.7a55d4.js'},{'revision':null,'url':'https://arcomage.github.io/i18n10.7ef30d.js'},{'revision':null,'url':'https://arcomage.github.io/i18n12.c14b03.js'},{'revision':null,'url':'https://arcomage.github.io/i18n14.0f0025.js'},{'revision':null,'url':'https://arcomage.github.io/i18n16.7d3789.js'},{'revision':null,'url':'https://arcomage.github.io/i18n18.f6750a.js'},{'revision':null,'url':'https://arcomage.github.io/i18n2.1acf47.js'},{'revision':null,'url':'https://arcomage.github.io/i18n6.9c82c0.js'},{'revision':null,'url':'https://arcomage.github.io/i18n8.98b59b.js'},{'revision':null,'url':'https://arcomage.github.io/index-0af64f4f.162508.js'},{'revision':null,'url':'https://arcomage.github.io/index-296f7ffc.97f87e.js'},{'revision':null,'url':'https://arcomage.github.io/index-31743c5a.f2636a.js'},{'revision':null,'url':'https://arcomage.github.io/index-3eca0924.6b09b3.js'},{'revision':null,'url':'https://arcomage.github.io/index-40116712.2513f4.js'},{'revision':null,'url':'https://arcomage.github.io/index-45e5e0b9.8d999f.js'},{'revision':null,'url':'https://arcomage.github.io/index-4dffeee1.7d25ec.js'},{'revision':null,'url':'https://arcomage.github.io/index-749a6420.93cd44.js'},{'revision':null,'url':'https://arcomage.github.io/index-84781932.5a75f6.js'},{'revision':null,'url':'https://arcomage.github.io/index-bec83d1f.76bb36.js'},{'revision':null,'url':'https://arcomage.github.io/index-d135d46d.657c33.js'},{'revision':null,'url':'https://arcomage.github.io/index-d5f16b18.bff53c.js'},{'revision':null,'url':'https://arcomage.github.io/index-e9c37989.b6adf2.js'},{'revision':'e93bed6755e07d0d310db63183728318','url':'https://arcomage.github.io/logo.svg'},{'revision':'34b758580c7cd4b1ee59b6200a3570ef','url':'https://arcomage.github.io/manifest.json'},{'revision':null,'url':'https://arcomage.github.io/pwacompat.58bcbe.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n0.633eed.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n10.76a230.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n12.8678ca.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n14.0202a7.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n16.46e3f7.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n18.6f101c.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n2.b38bbe.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n6.465611.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n8.e233b5.js'}],C().precache(N),function(e){const t=C();T(new k(t,undefined))}()}()}();