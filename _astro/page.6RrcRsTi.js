const __vite__mapDeps=(e,t=__vite__mapDeps,i=t.f||(t.f=["_astro/SwupA11yPlugin.CbqqmqBu.js","_astro/Swup.ytUFgklH.js","_astro/index.modern.CkIAsQri.js","_astro/SwupPreloadPlugin.CIXicyY9.js","_astro/SwupScrollPlugin.DbO9qDqe.js","_astro/SwupHeadPlugin.FjGODCox.js","_astro/SwupScriptsPlugin.o5PkFIdr.js"]))=>e.map((e=>i[e]));import{_ as i}from"./preload-helper.DR5yUBE6.js";function r(e){return JSON.parse(e,w)}function w(e,t){if(Array.isArray(t)&&2===t.length&&"string"==typeof t[1]){const e=t[0];if(t=t[1],":regex:"===e){const e=t.match(/\/(.*?)\/([a-z]*)?$/i)||[];return new RegExp(e[1],e[2]||"")}if(":function:"===e)return new Function(`return (${t}).apply(this, arguments);`)}return t}function s(e,{timeoutFallback:t=1e3}={}){"requestIdleCallback"in window?window.requestIdleCallback((()=>e())):setTimeout((()=>e()),t)}function p(e){"complete"===document.readyState?setTimeout((()=>e()),0):window.addEventListener("load",(()=>e()))}function l(e,{delayAfterLoad:t=0}={}){p((()=>{t>0?setTimeout((()=>s(e)),t):s(e)}))}async function f(){const[e,t,n,s,a,o]=await Promise.all([i((()=>import("./Swup.ytUFgklH.js").then((e=>e.S))),[]).then((e=>e.default)),i((()=>import("./SwupA11yPlugin.CbqqmqBu.js")),__vite__mapDeps([0,1,2])).then((e=>e.default)),i((()=>import("./SwupPreloadPlugin.CIXicyY9.js")),__vite__mapDeps([3,2,1])).then((e=>e.default)),i((()=>import("./SwupScrollPlugin.DbO9qDqe.js")),__vite__mapDeps([4,2,1])).then((e=>e.default)),i((()=>import("./SwupHeadPlugin.FjGODCox.js")),__vite__mapDeps([5,2])).then((e=>e.default)),i((()=>import("./SwupScriptsPlugin.o5PkFIdr.js")),__vite__mapDeps([6,2])).then((e=>e.default))]),u=new e({animationSelector:'[class*="transition-swup-"]',containers:["main"],cache:!0,plugins:[new t(r("{}")),new n(r('{"preloadHoveredLinks":true,"preloadVisibleLinks":false}')),new s(r("{}")),new a(r('{"awaitAssets":true}')),new o(r("{}"))]});window.swup=u}l(f);