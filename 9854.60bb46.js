/*! For license information please see 9854.60bb46.js.LICENSE.txt */
(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[9854],{577:function(e){!function(){"use strict";var r="undefined"!=typeof window&&void 0!==window.document?window.document:{},t=e.exports,s=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,n=t.length,i={};s<n;s++)if((e=t[s])&&e[1]in r){for(s=0;s<e.length;s++)i[t[0][s]]=e[s];return i}return!1}(),n={change:s.fullscreenchange,error:s.fullscreenerror},i={request:function(e,t){return new Promise(function(n,i){var E=function(){this.off("change",E),n()}.bind(this);this.on("change",E);var o=(e=e||r.documentElement)[s.requestFullscreen](t);o instanceof Promise&&o.then(E).catch(i)}.bind(this))},exit:function(){return new Promise(function(e,t){if(this.isFullscreen){var n=function(){this.off("change",n),e()}.bind(this);this.on("change",n);var i=r[s.exitFullscreen]();i instanceof Promise&&i.then(n).catch(t)}else e()}.bind(this))},toggle:function(e,r){return this.isFullscreen?this.exit():this.request(e,r)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,t){var s=n[e];s&&r.addEventListener(s,t,!1)},off:function(e,t){var s=n[e];s&&r.removeEventListener(s,t,!1)},raw:s};s?(Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(r[s.fullscreenElement])}},element:{enumerable:!0,get:function(){return r[s.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(r[s.fullscreenEnabled])}}}),t?e.exports=i:window.screenfull=i):t?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()},6376:function(e,r,t){const s=t(4225),{MAX_LENGTH:n,MAX_SAFE_INTEGER:i}=t(3295),{re:E,t:o}=t(5765),l=t(2893),{compareIdentifiers:c}=t(6742);class a{constructor(e,r){if(r=l(r),e instanceof a){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid Version: ${e}`);if(e.length>n)throw new TypeError(`version is longer than ${n} characters`);s("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const t=e.trim().match(r.loose?E[o.LOOSE]:E[o.FULL]);if(!t)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const r=+e;if(r>=0&&r<i)return r}return e})):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(s("SemVer.compare",this.version,this.options,e),!(e instanceof a)){if("string"==typeof e&&e===this.version)return 0;e=new a(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof a||(e=new a(e,this.options)),c(this.major,e.major)||c(this.minor,e.minor)||c(this.patch,e.patch)}comparePre(e){if(e instanceof a||(e=new a(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const t=this.prerelease[r],n=e.prerelease[r];if(s("prerelease compare",r,t,n),void 0===t&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===t)return-1;if(t!==n)return c(t,n)}while(++r)}compareBuild(e){e instanceof a||(e=new a(e,this.options));let r=0;do{const t=this.build[r],n=e.build[r];if(s("prerelease compare",r,t,n),void 0===t&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===t)return-1;if(t!==n)return c(t,n)}while(++r)}inc(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}e.exports=a},6269:function(e,r,t){const s=t(6376);e.exports=(e,r,t)=>new s(e,t).compare(new s(r,t))},1544:function(e,r,t){const s=t(6269);e.exports=(e,r,t)=>s(e,r,t)<0},3295:function(e){const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:r,MAX_SAFE_COMPONENT_LENGTH:16}},4225:function(e){const r="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=r},6742:function(e){const r=/^[0-9]+$/,t=(e,t)=>{const s=r.test(e),n=r.test(t);return s&&n&&(e=+e,t=+t),e===t?0:s&&!n?-1:n&&!s?1:e<t?-1:1};e.exports={compareIdentifiers:t,rcompareIdentifiers:(e,r)=>t(r,e)}},2893:function(e){const r=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!=typeof e?{loose:!0}:r.filter((r=>e[r])).reduce(((e,r)=>(e[r]=!0,e)),{}):{}},5765:function(e,r,t){const{MAX_SAFE_COMPONENT_LENGTH:s}=t(3295),n=t(4225),i=(r=e.exports={}).re=[],E=r.src=[],o=r.t={};let l=0;const c=(e,r,t)=>{const s=l++;n(s,r),o[e]=s,E[s]=r,i[s]=new RegExp(r,t?"g":void 0)};c("NUMERICIDENTIFIER","0|[1-9]\\d*"),c("NUMERICIDENTIFIERLOOSE","[0-9]+"),c("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),c("MAINVERSION",`(${E[o.NUMERICIDENTIFIER]})\\.(${E[o.NUMERICIDENTIFIER]})\\.(${E[o.NUMERICIDENTIFIER]})`),c("MAINVERSIONLOOSE",`(${E[o.NUMERICIDENTIFIERLOOSE]})\\.(${E[o.NUMERICIDENTIFIERLOOSE]})\\.(${E[o.NUMERICIDENTIFIERLOOSE]})`),c("PRERELEASEIDENTIFIER",`(?:${E[o.NUMERICIDENTIFIER]}|${E[o.NONNUMERICIDENTIFIER]})`),c("PRERELEASEIDENTIFIERLOOSE",`(?:${E[o.NUMERICIDENTIFIERLOOSE]}|${E[o.NONNUMERICIDENTIFIER]})`),c("PRERELEASE",`(?:-(${E[o.PRERELEASEIDENTIFIER]}(?:\\.${E[o.PRERELEASEIDENTIFIER]})*))`),c("PRERELEASELOOSE",`(?:-?(${E[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${E[o.PRERELEASEIDENTIFIERLOOSE]})*))`),c("BUILDIDENTIFIER","[0-9A-Za-z-]+"),c("BUILD",`(?:\\+(${E[o.BUILDIDENTIFIER]}(?:\\.${E[o.BUILDIDENTIFIER]})*))`),c("FULLPLAIN",`v?${E[o.MAINVERSION]}${E[o.PRERELEASE]}?${E[o.BUILD]}?`),c("FULL",`^${E[o.FULLPLAIN]}$`),c("LOOSEPLAIN",`[v=\\s]*${E[o.MAINVERSIONLOOSE]}${E[o.PRERELEASELOOSE]}?${E[o.BUILD]}?`),c("LOOSE",`^${E[o.LOOSEPLAIN]}$`),c("GTLT","((?:<|>)?=?)"),c("XRANGEIDENTIFIERLOOSE",`${E[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),c("XRANGEIDENTIFIER",`${E[o.NUMERICIDENTIFIER]}|x|X|\\*`),c("XRANGEPLAIN",`[v=\\s]*(${E[o.XRANGEIDENTIFIER]})(?:\\.(${E[o.XRANGEIDENTIFIER]})(?:\\.(${E[o.XRANGEIDENTIFIER]})(?:${E[o.PRERELEASE]})?${E[o.BUILD]}?)?)?`),c("XRANGEPLAINLOOSE",`[v=\\s]*(${E[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[o.XRANGEIDENTIFIERLOOSE]})(?:${E[o.PRERELEASELOOSE]})?${E[o.BUILD]}?)?)?`),c("XRANGE",`^${E[o.GTLT]}\\s*${E[o.XRANGEPLAIN]}$`),c("XRANGELOOSE",`^${E[o.GTLT]}\\s*${E[o.XRANGEPLAINLOOSE]}$`),c("COERCE",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`),c("COERCERTL",E[o.COERCE],!0),c("LONETILDE","(?:~>?)"),c("TILDETRIM",`(\\s*)${E[o.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",c("TILDE",`^${E[o.LONETILDE]}${E[o.XRANGEPLAIN]}$`),c("TILDELOOSE",`^${E[o.LONETILDE]}${E[o.XRANGEPLAINLOOSE]}$`),c("LONECARET","(?:\\^)"),c("CARETTRIM",`(\\s*)${E[o.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",c("CARET",`^${E[o.LONECARET]}${E[o.XRANGEPLAIN]}$`),c("CARETLOOSE",`^${E[o.LONECARET]}${E[o.XRANGEPLAINLOOSE]}$`),c("COMPARATORLOOSE",`^${E[o.GTLT]}\\s*(${E[o.LOOSEPLAIN]})$|^$`),c("COMPARATOR",`^${E[o.GTLT]}\\s*(${E[o.FULLPLAIN]})$|^$`),c("COMPARATORTRIM",`(\\s*)${E[o.GTLT]}\\s*(${E[o.LOOSEPLAIN]}|${E[o.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",c("HYPHENRANGE",`^\\s*(${E[o.XRANGEPLAIN]})\\s+-\\s+(${E[o.XRANGEPLAIN]})\\s*$`),c("HYPHENRANGELOOSE",`^\\s*(${E[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${E[o.XRANGEPLAINLOOSE]})\\s*$`),c("STAR","(<|>)?=?\\s*\\*"),c("GTE0","^\\s*>=\\s*0.0.0\\s*$"),c("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")}}]);