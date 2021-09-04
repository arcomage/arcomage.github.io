!function(){"use strict";var e={913:function(){try{self["workbox:core:6.2.4"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},762:function(){try{self["workbox:range-requests:6.2.4"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}!function(){s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}const t=new Set,n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[n.prefix,e,n.suffix].filter((e=>e&&e.length>0)).join("-"),r=e=>e||a(n.precache),i=e=>e||a(n.runtime);function c(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}let o;class h{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}function l(e,t){const s=t();return e.waitUntil(s),s}const u={get googleAnalytics(){return e||a(n.googleAnalytics);var e},get precache(){return r()},get prefix(){return n.prefix},get runtime(){return i()},get suffix(){return n.suffix}};function d(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}s(977);class f{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class p{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}function g(e){return"string"==typeof e?new Request(e):e}s(873);class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new h,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let n=g(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=g(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(s,n){const a=g(s);await(0,new Promise((e=>setTimeout(e,0))));const r=await this.getCacheKey(a,"write");if(!n)throw new e("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const o=await this._ensureResponseSafeToCache(n);if(!o)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,s,n){const a=c(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i)if(a===c(t.url,s))return e.match(t,n)}(u,r.clone(),["__WB_REVISION__"],l):null;try{await u.put(r,d?o.clone():o)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of t)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:h,oldResponse:f,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=g(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class y{constructor(e={}){this.cacheName=i(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new w(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(t,s,n){let a;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,t),!a||"error"===a.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(a=await r({error:e,event:n,request:s}),a)break;if(!a)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))a=await e({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class m extends y{constructor(e={}){e.cacheName=r(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let n;if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return n=await s.fetch(t),n}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==m.copyRedirectedCacheableResponsesPlugin&&(n===m.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const a=t.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,c=function(){if(void 0===o){const e=new Response("");if("body"in e)try{new Response(e.body),o=!0}catch(e){o=!1}o=!1}return o}()?a.body:await a.blob();return new Response(c,i)}(t):t};class _{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:r(e),plugins:[...t,new p({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:a}=d(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(a,t),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return l(e,(async()=>{const t=new f;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return l(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}let R;const v=()=>(R||(R=new _),R);s(80);const b=e=>e&&"object"==typeof e?e:{handle:e};class C{constructor(e,t,s="GET"){this.handler=b(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=b(e)}}class U extends C{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class q{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,b(e))}setCatchHandler(e){this._catchHandler=b(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let L;function k(t,s,n){let a;if("string"==typeof t){const e=new URL(t,location.href);a=new C((({url:t})=>t.href===e.href),s,n)}else if(t instanceof RegExp)a=new U(t,s,n);else if("function"==typeof t)a=new C(t,s,n);else{if(!(t instanceof C))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return(L||(L=new q,L.addFetchListener(),L.addCacheListener()),L).registerRoute(a),a}class x extends C{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}var T;s(762),self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),k((({url:e})=>e.pathname.endsWith(".mp3")),new class extends y{async _handle(t,s){const n=await s.cacheMatch(t);if(!n)throw new e("no-response",{url:t.url});return n}}({cacheName:u.precache,plugins:[{cacheKeyWillBeUsed:({request:e})=>{return t=e.url,v().getCacheKeyForURL(t);var t}},new class{constructor(){this.cachedResponseWillBeUsed=async({request:t,cachedResponse:s})=>s&&t.headers.has("range")?await async function(t,s){try{if(206===s.status)return s;const n=t.headers.get("range");if(!n)throw new e("no-range-header");const a=function(t){const s=t.trim().toLowerCase();if(!s.startsWith("bytes="))throw new e("unit-must-be-bytes",{normalizedRangeHeader:s});if(s.includes(","))throw new e("single-range-only",{normalizedRangeHeader:s});const n=/(\d*)-(\d*)/.exec(s);if(!n||!n[1]&&!n[2])throw new e("invalid-range-values",{normalizedRangeHeader:s});return{start:""===n[1]?void 0:Number(n[1]),end:""===n[2]?void 0:Number(n[2])}}(n),r=await s.blob(),i=function(t,s,n){const a=t.size;if(n&&n>a||s&&s<0)throw new e("range-not-satisfiable",{size:a,end:n,start:s});let r,i;return void 0!==s&&void 0!==n?(r=s,i=n+1):void 0!==s&&void 0===n?(r=s,i=a):void 0!==n&&void 0===s&&(r=a-n,i=a),{start:r,end:i}}(r,a.start,a.end),c=r.slice(i.start,i.end),o=c.size,h=new Response(c,{status:206,statusText:"Partial Content",headers:s.headers});return h.headers.set("Content-Length",String(o)),h.headers.set("Content-Range",`bytes ${i.start}-${i.end-1}/${r.size}`),h}catch(e){return new Response("",{status:416,statusText:"Range Not Satisfiable"})}}(t,s):s}}]})),T=[{'revision':'6e7cdcd853862b44ae36226391b1ee9d','url':'https://arcomage.github.io/./index.html'},{'revision':null,'url':'https://arcomage.github.io/1150.316f4a.js'},{'revision':'413145a22fdaf4a4e9ccad86ed987f11','url':'https://arcomage.github.io/1150.316f4a.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/155.5d7a23.js'},{'revision':null,'url':'https://arcomage.github.io/1637.52dc6d.js'},{'revision':null,'url':'https://arcomage.github.io/1862.8e56b9.js'},{'revision':'da6e1857291de4855bb602d67c39a264','url':'https://arcomage.github.io/1862.8e56b9.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/2004.c46ac3.js'},{'revision':null,'url':'https://arcomage.github.io/2137.229a3e.js'},{'revision':null,'url':'https://arcomage.github.io/2839.fa8db1.js'},{'revision':null,'url':'https://arcomage.github.io/2899.db5726.js'},{'revision':'77fafeda6bc5cc43995b999d16b4bfa1','url':'https://arcomage.github.io/2899.db5726.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/3.3dbdd6.js'},{'revision':null,'url':'https://arcomage.github.io/3065.70bf23.js'},{'revision':null,'url':'https://arcomage.github.io/3949.abfd02.js'},{'revision':null,'url':'https://arcomage.github.io/3978.264abd.js'},{'revision':null,'url':'https://arcomage.github.io/4013.a415cf.js'},{'revision':'3d2d88b7877918a326634499feeab80c','url':'https://arcomage.github.io/4013.a415cf.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/4160.fa2376.js'},{'revision':null,'url':'https://arcomage.github.io/4448.797f4f.js'},{'revision':'2597b1d89e2e3c0085eaa4902b839cc5','url':'https://arcomage.github.io/4448.797f4f.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/451.534ccc.js'},{'revision':'6fce53c7c7713ebf61712cc2929746fa','url':'https://arcomage.github.io/451.534ccc.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/4890.ea1941.js'},{'revision':null,'url':'https://arcomage.github.io/5006.8b234c.js'},{'revision':null,'url':'https://arcomage.github.io/5244.5b8752.js'},{'revision':null,'url':'https://arcomage.github.io/5250.5283f2.js'},{'revision':'45225919d5ebb7a024241727e9e7b055','url':'https://arcomage.github.io/5250.5283f2.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/5390.9383aa.js'},{'revision':null,'url':'https://arcomage.github.io/5391.a10283.js'},{'revision':null,'url':'https://arcomage.github.io/5912.c31190.js'},{'revision':'b3559217401a8bb1fd6ebd078d7973b7','url':'https://arcomage.github.io/5912.c31190.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/7196.d55577.js'},{'revision':'fe07165234709e61e0cdc05d4056de5c','url':'https://arcomage.github.io/7196.d55577.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/7889.31eacd.js'},{'revision':null,'url':'https://arcomage.github.io/7906.566b83.js'},{'revision':'6fce53c7c7713ebf61712cc2929746fa','url':'https://arcomage.github.io/7906.566b83.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/8328.26f5a9.js'},{'revision':null,'url':'https://arcomage.github.io/8466.659ad7.js'},{'revision':null,'url':'https://arcomage.github.io/9845.000151.js'},{'revision':null,'url':'https://arcomage.github.io/assets/font/4796f05df52ce79c69ca..woff'},{'revision':null,'url':'https://arcomage.github.io/assets/font/4effd203a092015cbc04..woff'},{'revision':null,'url':'https://arcomage.github.io/assets/font/74c96f947016b48907df..woff2'},{'revision':null,'url':'https://arcomage.github.io/assets/font/7842987ecb5c2b0146da..woff'},{'revision':null,'url':'https://arcomage.github.io/assets/font/7c39659e8f6ab8d099cb..woff2'},{'revision':null,'url':'https://arcomage.github.io/assets/font/b1b5b131a0d82c764166..woff2'},{'revision':null,'url':'https://arcomage.github.io/assets/img/00bf8ed73c6a23ee1c38..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/01768efb986f604f83b7..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/0a807cc11a0c895482a6..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/0c28b8a64fa1e8350e83..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/0edc7f6fa776f156ea29..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/12713f427a773c7b0837..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/12b98285bc66381141f0..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/140ea8f4c84055400d30..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1417a9bedd1226c1463d..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/16057d3390fca2a8d326..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/16ab2e4702d25a159855..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/18ba7e05d5522444b13b..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1b22f3074ed5557ce2f9..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1d7695f8338d34365554..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1f2ea33f7b1f361ba434..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1fbc70c3f36f5ef10961..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/209bc7b65298248816dc..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/20b7a9767b46e7031b47..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/22028fa858ddbc951a36..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/229c38df63fa54426609..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/249e5974880e7e1dce46..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/25c8431f293b460d3c3a..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/27425389c8e194e189b1..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/2e39772a06aaaed8a742..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/361656f916b7e365ad45..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/37e50ea0af4f55282738..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3baf36a3eb833e996bae..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3cda709bc864014a55c0..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3f498c9c549597a2b777..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/449bff06dc82d61560d1..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4785fbef25f7e1750753..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4a11631e5e3a372ea045..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4b8d795d06520db72429..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4c7448fa80c067908c5f..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4f86e84a3497cfadaf4e..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4fc574eb19d1f2284081..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/50fae4ca04a48be65562..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/54fb008dff193c52fa94..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/56625807c8e5fe737611..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/568084e8b3d90707562c..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/59dd8a952e303be81016..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5a3b73ee7e1c6c5aadf4..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5ac1880917eac8bc9def..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5f354d4c3c8af8bbddad..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/658b025d05c2fc692225..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6598d1b830788ec9615d..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/67fa70c465af42feda3b..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/68388367cbb0169893ea..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/698b356a06db025500b9..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/69c90183a4851ed86ce0..jpg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6d4363ad049190552a85..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6e4eaf0d2882d56bcef3..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/70b73e6c8853fac9083b..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/71af9fb5a98a124cf010..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/72bd46a4d1b7e7eeefad..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/72d6ccb7a67afe1f2b47..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/784df16e31a87867945f..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/78f471351c51c1ae9505..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/7c5c10bf0506145187bc..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8071e1c07c3cbdf8900a..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/81f626c9a1ba14f082d8..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8248c2fc1d58aca3864f..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8811fe11f792ef764d2f..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/896ff82d64e151ae54c0..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8a5ff8832dc152b3ea96..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8d0bf8a2cf66c68e04d5..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8fbc339945dc91aa1dfb..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/903cd740dbf470845514..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/906ba0e144813df43338..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/913f4ac070bfa52e4ae1..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/91db559c9b69e670a230..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/983065098cba87963f01..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/9e687410b5ec9c1fa667..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a1e43d63aae972108d9d..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a1f1648e793528993a62..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a23956436d1e55ae0a4c..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a36a0ceed33df46d4070..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a4df4e83c939a2eb5835..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a4fe335cd948b15571bf..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a875bd1185400bc49ebd..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a996b5cc1d9f4160fe77..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a9e06b9d8001cd5fbe33..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/aff239582e072b73ed9a..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b20d8aeda10022a1f3c0..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b417f80cb58548d6dd2f..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b59444571dc3cb01e041..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b8594d15fcabf39d6150..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b8cfb0fdbb95a0b0768c..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ba11d3180327de15989d..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ba7313256dabef726762..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/bae62a26bf5e51ec40d8..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/bbf54c08bc38298cc15c..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/beb5223daf3307a14169..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c148deab0b916ddc70fb..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c206fc76bbf94d800ac3..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c2a178e878fdba87e1c9..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c78bda61dfcc2c25107d..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c9031563645aad06d68a..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/cecb30c9e6c1284d224a..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d07e906a91f5084a1a98..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d1edf46f190b2995343c..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d32aa3e462598abd30f5..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d4d3d4fb5a617abdc7a5..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d6267eb33173cf0a94dd..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d8b6434117ee1252154b..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dac0b6c2ff68b0f84f80..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dc29e1530b7e715570ad..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dcb9179a699e8fe0397d..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dcf4389e4c83f133d77c..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/df888c2c5218ebb26ba8..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e05ff4d45677b9ef7d0c..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e11476494f3c249be13c..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e280a49f8dd6383d0e6e..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e8b7d6d2e3e4e09a2ab1..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e9f32a9a473ee93cec7b..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ed1ba44be4699770a9d6..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ef6158a71a9808f582ef..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f03600e59e5470a1d401..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f3389365de6e61d0a214..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/fa59c51c603014b7fa95..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/fb9e21a2d11da4912a53..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/fc1460e75820da2c369b..png'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ffa2c57d0aec2b35fbb4..png'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/058ea063c515445d2523..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/2691571c68af06abae6d..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/446cfc270d5ee17d4b64..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/556d150421e10442ccfb..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/5c970bcb7928ae681d63..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/82548a43fb163e5e460f..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/90b5936645af87b919b2..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/91f3d957b0b5fa07f4aa..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/9f9ab9836b93cfd16652..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/a906069723d4112d25a5..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/cc3b470adc932d04659c..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/ed0d7478e8b589046050..mp3'},{'revision':null,'url':'https://arcomage.github.io/cardi18n0.09cafe.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n10.f0efc6.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n12.d7c0b9.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n14.d09272.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n16.37df11.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n18.e4c525.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n2.3db8d7.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n20.4b9aaa.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n6.5adfcd.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n8.58907a.js'},{'revision':'9504c5b005e24a0ccbcf1f2af5d4be92','url':'https://arcomage.github.io/favicon-120.png'},{'revision':'cba139067744fbf50968ad4fba21eac0','url':'https://arcomage.github.io/favicon-128.png'},{'revision':'c0ec476a3b59d24f659ca2fd61b69d49','url':'https://arcomage.github.io/favicon-144.png'},{'revision':'c42b61700fd1ea48ccd635ede778abee','url':'https://arcomage.github.io/favicon-152.png'},{'revision':'ea6f55df4dd0bf3d30526ab54d006c9f','url':'https://arcomage.github.io/favicon-180.png'},{'revision':'d5ada869f1fffdc4ef8f41359ea42371','url':'https://arcomage.github.io/favicon-192.png'},{'revision':'3a25bc71e2c61559440c310b7fd9d902','url':'https://arcomage.github.io/favicon-36.png'},{'revision':'de89724348a3e407811d1499c52ff079','url':'https://arcomage.github.io/favicon-384.png'},{'revision':'1c854029d9624de95c5ba5f319673706','url':'https://arcomage.github.io/favicon-72.png'},{'revision':'6432d6a95bf27ce5537480707700c508','url':'https://arcomage.github.io/favicon-96.png'},{'revision':'d80799c16a4337f322701c389a7fe3b1','url':'https://arcomage.github.io/favicon.ico'},{'revision':'7ffce037b0aeb98eb1bc89ea1fa7d8aa','url':'https://arcomage.github.io/favicon.svg'},{'revision':'b046dc69fd45866f3b87051532d1d93e','url':'https://arcomage.github.io/favicon_logo-512.png'},{'revision':'69c56c8416c6eb198acbb70747b783f5','url':'https://arcomage.github.io/favicon_logo.svg'},{'revision':'a1a263ce5d8e6429526cbd24a9fb92ef','url':'https://arcomage.github.io/favicon_logo_maskable.svg'},{'revision':'86c4b32f7139ae91c90e5f0d4869ef4f','url':'https://arcomage.github.io/favicon_maskable.svg'},{'revision':null,'url':'https://arcomage.github.io/i18n0.9150f4.js'},{'revision':null,'url':'https://arcomage.github.io/i18n10.35db6c.js'},{'revision':null,'url':'https://arcomage.github.io/i18n12.363fea.js'},{'revision':null,'url':'https://arcomage.github.io/i18n14.22374f.js'},{'revision':null,'url':'https://arcomage.github.io/i18n16.69f2b1.js'},{'revision':null,'url':'https://arcomage.github.io/i18n18.46c8b6.js'},{'revision':null,'url':'https://arcomage.github.io/i18n2.4433d5.js'},{'revision':null,'url':'https://arcomage.github.io/i18n20.cd01de.js'},{'revision':null,'url':'https://arcomage.github.io/i18n6.5338c8.js'},{'revision':null,'url':'https://arcomage.github.io/i18n8.dd4f23.js'},{'revision':null,'url':'https://arcomage.github.io/index-0af64f4f.9d7f9b.js'},{'revision':null,'url':'https://arcomage.github.io/index-0d1013ee.45b48d.js'},{'revision':null,'url':'https://arcomage.github.io/index-31743c5a.6ec7df.js'},{'revision':null,'url':'https://arcomage.github.io/index-38e054b8.46a655.js'},{'revision':null,'url':'https://arcomage.github.io/index-3eca0924.b2cc32.js'},{'revision':null,'url':'https://arcomage.github.io/index-40116712.991a49.js'},{'revision':null,'url':'https://arcomage.github.io/index-45e5e0b9.ff4f92.js'},{'revision':null,'url':'https://arcomage.github.io/index-4dffeee1.5b5c83.js'},{'revision':null,'url':'https://arcomage.github.io/index-5e987886.c11799.js'},{'revision':null,'url':'https://arcomage.github.io/index-749a6420.405964.js'},{'revision':null,'url':'https://arcomage.github.io/index-84781932.749519.js'},{'revision':null,'url':'https://arcomage.github.io/index-bde52cb3.a20d51.js'},{'revision':null,'url':'https://arcomage.github.io/index-d5f16b18.81fd55.js'},{'revision':'e93bed6755e07d0d310db63183728318','url':'https://arcomage.github.io/logo.svg'},{'revision':'34b758580c7cd4b1ee59b6200a3570ef','url':'https://arcomage.github.io/manifest.json'},{'revision':null,'url':'https://arcomage.github.io/pwacompat.58bcbe.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n0.2620a7.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n10.5cc0d4.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n12.f02a0a.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n14.2a4aa9.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n16.c08c30.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n18.192373.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n2.ea0374.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n20.2b0536.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n6.f33232.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n8.518019.js'}],v().precache(T),function(e){const t=v();k(new x(t,undefined))}()}()}();