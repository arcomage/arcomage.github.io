!function(){"use strict";var e={913:function(){try{self["workbox:core:6.2.4"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},762:function(){try{self["workbox:range-requests:6.2.4"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}!function(){s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}const t=new Set,n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[n.prefix,e,n.suffix].filter((e=>e&&e.length>0)).join("-"),r=e=>e||a(n.precache),i=e=>e||a(n.runtime);function c(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}let o;class h{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}function l(e,t){const s=t();return e.waitUntil(s),s}const u={get googleAnalytics(){return e||a(n.googleAnalytics);var e},get precache(){return r()},get prefix(){return n.prefix},get runtime(){return i()},get suffix(){return n.suffix}};function d(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}s(977);class f{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class p{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}function g(e){return"string"==typeof e?new Request(e):e}s(873);class y{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new h,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let n=g(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=g(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(s,n){const a=g(s);await(0,new Promise((e=>setTimeout(e,0))));const r=await this.getCacheKey(a,"write");if(!n)throw new e("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const o=await this._ensureResponseSafeToCache(n);if(!o)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,s,n){const a=c(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i)if(a===c(t.url,s))return e.match(t,n)}(u,r.clone(),["__WB_REVISION__"],l):null;try{await u.put(r,d?o.clone():o)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of t)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:h,oldResponse:f,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=g(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class w{constructor(e={}){this.cacheName=i(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new y(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(t,s,n){let a;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,t),!a||"error"===a.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(a=await r({error:e,event:n,request:s}),a)break;if(!a)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))a=await e({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class m extends w{constructor(e={}){e.cacheName=r(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let n;const a=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=a.integrity,r=t.integrity,i=!r||r===e;n=await s.fetch(new Request(t,{integrity:r||e})),e&&i&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,n.clone()))}return n}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==m.copyRedirectedCacheableResponsesPlugin&&(n===m.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const a=t.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,c=function(){if(void 0===o){const e=new Response("");if("body"in e)try{new Response(e.body),o=!0}catch(e){o=!1}o=!1}return o}()?a.body:await a.blob();return new Response(c,i)}(t):t};class _{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:r(e),plugins:[...t,new p({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:a}=d(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(a,t),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return l(e,(async()=>{const t=new f;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return l(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}let R;const v=()=>(R||(R=new _),R);s(80);const b=e=>e&&"object"==typeof e?e:{handle:e};class C{constructor(e,t,s="GET"){this.handler=b(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=b(e)}}class q extends C{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class U{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,b(e))}setCatchHandler(e){this._catchHandler=b(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let L;function k(t,s,n){let a;if("string"==typeof t){const e=new URL(t,location.href);a=new C((({url:t})=>t.href===e.href),s,n)}else if(t instanceof RegExp)a=new q(t,s,n);else if("function"==typeof t)a=new C(t,s,n);else{if(!(t instanceof C))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return(L||(L=new U,L.addFetchListener(),L.addCacheListener()),L).registerRoute(a),a}class x extends C{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(a);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}var K;s(762),self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),k((({url:e})=>e.pathname.endsWith(".mp3")),new class extends w{async _handle(t,s){const n=await s.cacheMatch(t);if(!n)throw new e("no-response",{url:t.url});return n}}({cacheName:u.precache,plugins:[{cacheKeyWillBeUsed:({request:e})=>{return t=e.url,v().getCacheKeyForURL(t);var t}},new class{constructor(){this.cachedResponseWillBeUsed=async({request:t,cachedResponse:s})=>s&&t.headers.has("range")?await async function(t,s){try{if(206===s.status)return s;const n=t.headers.get("range");if(!n)throw new e("no-range-header");const a=function(t){const s=t.trim().toLowerCase();if(!s.startsWith("bytes="))throw new e("unit-must-be-bytes",{normalizedRangeHeader:s});if(s.includes(","))throw new e("single-range-only",{normalizedRangeHeader:s});const n=/(\d*)-(\d*)/.exec(s);if(!n||!n[1]&&!n[2])throw new e("invalid-range-values",{normalizedRangeHeader:s});return{start:""===n[1]?void 0:Number(n[1]),end:""===n[2]?void 0:Number(n[2])}}(n),r=await s.blob(),i=function(t,s,n){const a=t.size;if(n&&n>a||s&&s<0)throw new e("range-not-satisfiable",{size:a,end:n,start:s});let r,i;return void 0!==s&&void 0!==n?(r=s,i=n+1):void 0!==s&&void 0===n?(r=s,i=a):void 0!==n&&void 0===s&&(r=a-n,i=a),{start:r,end:i}}(r,a.start,a.end),c=r.slice(i.start,i.end),o=c.size,h=new Response(c,{status:206,statusText:"Partial Content",headers:s.headers});return h.headers.set("Content-Length",String(o)),h.headers.set("Content-Range",`bytes ${i.start}-${i.end-1}/${r.size}`),h}catch(e){return new Response("",{status:416,statusText:"Range Not Satisfiable"})}}(t,s):s}}]})),K=[{'revision':'fba3b345a9fadaa8a40caf3cb2dfe4de','url':'https://arcomage.github.io/./index.html'},{'revision':null,'url':'https://arcomage.github.io/1150.316f4a.js'},{'revision':'413145a22fdaf4a4e9ccad86ed987f11','url':'https://arcomage.github.io/1150.316f4a.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/155.5d7a23.js'},{'revision':null,'url':'https://arcomage.github.io/1637.5ccdbd.js'},{'revision':null,'url':'https://arcomage.github.io/1862.8e56b9.js'},{'revision':'da6e1857291de4855bb602d67c39a264','url':'https://arcomage.github.io/1862.8e56b9.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/1934.d438f0.js'},{'revision':'fe07165234709e61e0cdc05d4056de5c','url':'https://arcomage.github.io/1934.d438f0.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/2004.c46ac3.js'},{'revision':null,'url':'https://arcomage.github.io/2137.229a3e.js'},{'revision':null,'url':'https://arcomage.github.io/2459.fae28a.js'},{'revision':'6fce53c7c7713ebf61712cc2929746fa','url':'https://arcomage.github.io/2459.fae28a.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/2839.fa8db1.js'},{'revision':null,'url':'https://arcomage.github.io/2899.db5726.js'},{'revision':'77fafeda6bc5cc43995b999d16b4bfa1','url':'https://arcomage.github.io/2899.db5726.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/3.3dbdd6.js'},{'revision':null,'url':'https://arcomage.github.io/3065.70bf23.js'},{'revision':null,'url':'https://arcomage.github.io/3949.abfd02.js'},{'revision':null,'url':'https://arcomage.github.io/3978.f70c50.js'},{'revision':null,'url':'https://arcomage.github.io/4013.2b1428.js'},{'revision':'3d2d88b7877918a326634499feeab80c','url':'https://arcomage.github.io/4013.2b1428.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/4448.797f4f.js'},{'revision':'2597b1d89e2e3c0085eaa4902b839cc5','url':'https://arcomage.github.io/4448.797f4f.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/4783.cffb77.js'},{'revision':null,'url':'https://arcomage.github.io/4890.ea1941.js'},{'revision':null,'url':'https://arcomage.github.io/5006.8b234c.js'},{'revision':null,'url':'https://arcomage.github.io/5244.5b8752.js'},{'revision':null,'url':'https://arcomage.github.io/5250.5283f2.js'},{'revision':'45225919d5ebb7a024241727e9e7b055','url':'https://arcomage.github.io/5250.5283f2.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/5390.9383aa.js'},{'revision':null,'url':'https://arcomage.github.io/5391.a10283.js'},{'revision':null,'url':'https://arcomage.github.io/5912.c31190.js'},{'revision':'b3559217401a8bb1fd6ebd078d7973b7','url':'https://arcomage.github.io/5912.c31190.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/7906.566b83.js'},{'revision':'6fce53c7c7713ebf61712cc2929746fa','url':'https://arcomage.github.io/7906.566b83.js.LICENSE.txt'},{'revision':null,'url':'https://arcomage.github.io/8328.26f5a9.js'},{'revision':null,'url':'https://arcomage.github.io/8466.417fcf.js'},{'revision':null,'url':'https://arcomage.github.io/9845.000151.js'},{'revision':null,'url':'https://arcomage.github.io/assets/font/4796f05df52ce79c69ca..woff'},{'revision':null,'url':'https://arcomage.github.io/assets/font/4effd203a092015cbc04..woff'},{'revision':null,'url':'https://arcomage.github.io/assets/font/74c96f947016b48907df..woff2'},{'revision':null,'url':'https://arcomage.github.io/assets/font/7842987ecb5c2b0146da..woff'},{'revision':null,'url':'https://arcomage.github.io/assets/font/7c39659e8f6ab8d099cb..woff2'},{'revision':null,'url':'https://arcomage.github.io/assets/font/b1b5b131a0d82c764166..woff2'},{'revision':null,'url':'https://arcomage.github.io/assets/img/0119a286f28cc730c5d8..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/05c418a8174e7b829227..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/06e1447587cb29348ff7..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/08b52d47292e00c4a091..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/0a5c93da27857ceeaf6f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/0cfb99cdc072b935a3ed..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/13ca26d214dce4481605..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/16bb65cfe8ac067e311f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1c71306744827cd0cef6..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1cec58f8d9444a9b39e2..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/1e6c5b9e3fe893432602..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/2988fb07d30bc7b26895..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/29b35691a27ff688c543..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/2b86a2b4b293f7dee29f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/2c87abb26e80b624c00b..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/31ba3c9cfc682987fa5f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/320c82484037f16ebbf3..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3512741d6755e6225c24..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3658744bb4e636aaff10..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/38a5e4bd309a6b202b4c..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/38b6f5d088effb0c4181..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3b743365484bd050a647..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/3fe8cc18a63e41f8eb83..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4288504c5e1cdc5f7f1b..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/460ea8cb161c1774b46d..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4974db5571fb59bb153f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/49a6ac63ceae5b49a107..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4c03ce1a0331e931e837..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4c446faa72fc91c2392d..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/4d1f32b4472c67f1f31c..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/54042853fbd990ad1c03..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5648dfb3535a5a0bda83..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/58ff0689923217a99bde..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/596d3594aac49d129e07..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5bc360a20c53e0b8375f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5c7a37bf58c56e93c027..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5e07820f6b849fd87384..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/5ed76c43ae5dd0bd3b42..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6291f3f6f818f8bac871..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/655c0b70b5dc4abe32ac..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/66a5c6934d495c274b62..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/66caad0c1e170a55edca..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/67c619215cd56c07605d..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/68bf08d37e8c28e140b9..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/69817da7b6698406d51f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6a70a4a8f941db1bcce4..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6bb0624172895bed0e65..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6dd6fcb844cbd75850d3..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/6f2d907d3757ddfe57c8..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/751527034e7107a29012..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/7623b55dc4c9f4c7cdb3..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/775e9adf03ba9e78cce0..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/7a07e85590770a6b334b..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/7ab6172f37e0cfe83089..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/7dea9a80a7b70df24e71..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/808ae2e0f5b9db44f0be..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/81d4405607754b0d202d..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/82e12d122adbf6ac0887..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8331038c529676e9f760..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/84362eca03ded96f4e29..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/87e66184c8cf05760d2f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/89c7beed10cf1b558ab0..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/8c7d09674f51ed33dffd..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/906ba0e144813df43338..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/920a1690c6968a223b88..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/9297d7497684e895778e..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/966671bf50e6dd1a04a1..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/99e9c927d06fd06e4601..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/9aa9fa6377464e610fbf..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/9c07b4af28dddd4689fb..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/9f85dd82bd307fcab191..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a1592da9e7a73d79b384..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a5996ce1960eff1b69ad..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a6e6576ca89c3f6398d4..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/a7caa471f05169c845ef..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/aa6baa2bacadc8514cf1..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/aa77b8a046a43db69629..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ac6368510ae4ba0dbb8e..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/acf4d276e07e3bb46c84..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/afb8e05164edbeb4ec57..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b065b3d4f82818ac72a5..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b1daf3cf3b5ff0e6c84b..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b4079c2eb1402a318c27..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b56c454b1d030cb55c89..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/b9a29de99456130a4721..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/bd046e176ce27616108b..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/be729d3be23184a4c4f6..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/bf8909ff36cd7afb0be1..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c0f524414444374b459f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c5a9942e6ee1df974179..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c5dfcf6f7a1b767f483f..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c690aa1ea4ee84a0781d..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/c7722f835f5f50f341c0..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/cedc9ce014a0c3e41078..svg'},{'revision':null,'url':'https://arcomage.github.io/assets/img/cffaa6f78714f272a2e4..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d336da290a29bcf442b0..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d45c8209a6b2c8a31b47..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d5eb04db27112c54f925..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d6bad322f9d21c06e92e..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d6ddf44ab2f3989ead73..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/d7120f968b38dab21206..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dab0219832046d7bf8a6..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/dd19e936d9ce1399b2cc..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/de1f968ae88c5c181c3d..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/de56f57b2cd4beff0afb..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e390f9696ffba38d91c5..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e45c1f5ef7b8ca80f4a5..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e7441813dc73ebb971ae..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e7cc53096975ffcc6584..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/e8040dbdaed956848b49..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ed3e81c31003cc3aa9af..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f0da95854c72df9db778..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f2b5b70e96af547ea74e..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f52baf5e7b9c7c28bc45..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f61c422c35ffec020338..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f6a9f331aabb82f3c08c..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f6e95a237469a558604b..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f84577335ec2441bd153..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/f8558ea9dc2e347e314b..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/faf668c3cc6dc925d967..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/fb0a90a0be280d07d9ee..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/fd703e132f3bb2227064..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/img/ff76d4df9f55551952c4..webp'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/058ea063c515445d2523..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/2691571c68af06abae6d..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/446cfc270d5ee17d4b64..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/556d150421e10442ccfb..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/5c970bcb7928ae681d63..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/82548a43fb163e5e460f..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/90b5936645af87b919b2..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/91f3d957b0b5fa07f4aa..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/9f9ab9836b93cfd16652..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/a906069723d4112d25a5..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/cc3b470adc932d04659c..mp3'},{'revision':null,'url':'https://arcomage.github.io/assets/sfx/ed0d7478e8b589046050..mp3'},{'revision':null,'url':'https://arcomage.github.io/cardi18n0.09cafe.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n10.f0efc6.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n12.a5e4e8.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n14.5d86ff.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n16.08d8d4.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n18.c22a05.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n2.3db8d7.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n20.8df16b.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n22.75f5a8.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n24.2e5ded.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n6.5adfcd.js'},{'revision':null,'url':'https://arcomage.github.io/cardi18n8.58907a.js'},{'revision':'9504c5b005e24a0ccbcf1f2af5d4be92','url':'https://arcomage.github.io/favicon-120.png'},{'revision':'cba139067744fbf50968ad4fba21eac0','url':'https://arcomage.github.io/favicon-128.png'},{'revision':'c0ec476a3b59d24f659ca2fd61b69d49','url':'https://arcomage.github.io/favicon-144.png'},{'revision':'c42b61700fd1ea48ccd635ede778abee','url':'https://arcomage.github.io/favicon-152.png'},{'revision':'ea6f55df4dd0bf3d30526ab54d006c9f','url':'https://arcomage.github.io/favicon-180.png'},{'revision':'d5ada869f1fffdc4ef8f41359ea42371','url':'https://arcomage.github.io/favicon-192.png'},{'revision':'3a25bc71e2c61559440c310b7fd9d902','url':'https://arcomage.github.io/favicon-36.png'},{'revision':'de89724348a3e407811d1499c52ff079','url':'https://arcomage.github.io/favicon-384.png'},{'revision':'1c854029d9624de95c5ba5f319673706','url':'https://arcomage.github.io/favicon-72.png'},{'revision':'6432d6a95bf27ce5537480707700c508','url':'https://arcomage.github.io/favicon-96.png'},{'revision':'d80799c16a4337f322701c389a7fe3b1','url':'https://arcomage.github.io/favicon.ico'},{'revision':'7ffce037b0aeb98eb1bc89ea1fa7d8aa','url':'https://arcomage.github.io/favicon.svg'},{'revision':'b046dc69fd45866f3b87051532d1d93e','url':'https://arcomage.github.io/favicon_logo-512.png'},{'revision':'69c56c8416c6eb198acbb70747b783f5','url':'https://arcomage.github.io/favicon_logo.svg'},{'revision':'a1a263ce5d8e6429526cbd24a9fb92ef','url':'https://arcomage.github.io/favicon_logo_maskable.svg'},{'revision':'86c4b32f7139ae91c90e5f0d4869ef4f','url':'https://arcomage.github.io/favicon_maskable.svg'},{'revision':null,'url':'https://arcomage.github.io/i18n0.9543de.js'},{'revision':null,'url':'https://arcomage.github.io/i18n10.a447b6.js'},{'revision':null,'url':'https://arcomage.github.io/i18n12.3dbf7d.js'},{'revision':null,'url':'https://arcomage.github.io/i18n14.cb3773.js'},{'revision':null,'url':'https://arcomage.github.io/i18n16.82311e.js'},{'revision':null,'url':'https://arcomage.github.io/i18n18.3392b8.js'},{'revision':null,'url':'https://arcomage.github.io/i18n2.1567bc.js'},{'revision':null,'url':'https://arcomage.github.io/i18n20.2a4e23.js'},{'revision':null,'url':'https://arcomage.github.io/i18n22.f1abd0.js'},{'revision':null,'url':'https://arcomage.github.io/i18n24.aa8ec5.js'},{'revision':null,'url':'https://arcomage.github.io/i18n6.1e3260.js'},{'revision':null,'url':'https://arcomage.github.io/i18n8.356e00.js'},{'revision':null,'url':'https://arcomage.github.io/index-0af64f4f.2fd28b.js'},{'revision':null,'url':'https://arcomage.github.io/index-0d1013ee.504afa.js'},{'revision':null,'url':'https://arcomage.github.io/index-31743c5a.8d98bc.js'},{'revision':null,'url':'https://arcomage.github.io/index-3eca0924.80152d.js'},{'revision':null,'url':'https://arcomage.github.io/index-40116712.9aaa74.js'},{'revision':null,'url':'https://arcomage.github.io/index-45e5e0b9.ff4f92.js'},{'revision':null,'url':'https://arcomage.github.io/index-4dffeee1.f8626a.js'},{'revision':null,'url':'https://arcomage.github.io/index-749a6420.c549cd.js'},{'revision':null,'url':'https://arcomage.github.io/index-78975918.c0c29e.js'},{'revision':null,'url':'https://arcomage.github.io/index-84781932.e851b8.js'},{'revision':null,'url':'https://arcomage.github.io/index-bde52cb3.fc0621.js'},{'revision':null,'url':'https://arcomage.github.io/index-bec83d1f.79297e.js'},{'revision':null,'url':'https://arcomage.github.io/index-d5f16b18.044c33.js'},{'revision':null,'url':'https://arcomage.github.io/index-e9c37989.48b7cc.js'},{'revision':'e93bed6755e07d0d310db63183728318','url':'https://arcomage.github.io/logo.svg'},{'revision':'4fac74df45a6f8b420e5713e5091b148','url':'https://arcomage.github.io/manifest.json'},{'revision':null,'url':'https://arcomage.github.io/pwacompat.58bcbe.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n0.2620a7.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n10.5cc0d4.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n12.d27f0e.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n14.03c584.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n16.950144.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n18.d185f7.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n2.ea0374.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n20.669f2b.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n22.7946b5.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n24.e7841b.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n6.f33232.js'},{'revision':null,'url':'https://arcomage.github.io/taverni18n8.518019.js'}],v().precache(K),function(e){const t=v();k(new x(t,undefined))}()}()}();