import{w as p,r as T}from"./entry.eQ1Iqpzk.js";import{l as M,m as S,p as I}from"./scheduler.a7-2wmif.js";const v={message:"Missing Toast Message",autohide:!0,timeout:5e3},w="toastStore";function R(){const r=M(w);if(!r)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return r}function _(){const r=E();return S(w,r)}function z(){const r=Math.random();return Number(r).toString(32)}function E(){const{subscribe:r,set:u,update:n}=p([]),a=t=>n(e=>{if(e.length>0){const s=e.findIndex(i=>i.id===t),o=e[s];o&&(o.callback&&o.callback({id:t,status:"closed"}),o.timeoutId&&clearTimeout(o.timeoutId),e.splice(s,1))}return e});function c(t){if(t.autohide===!0)return setTimeout(()=>{a(t.id)},t.timeout)}return{subscribe:r,close:a,trigger:t=>{const e=z();return n(s=>{t&&t.callback&&t.callback({id:e,status:"queued"}),t.hideDismiss&&(t.autohide=!0);const o={...v,...t,id:e};return o.timeoutId=c(o),s.push(o),s}),e},freeze:t=>n(e=>(e.length>0&&clearTimeout(e[t].timeoutId),e)),unfreeze:t=>n(e=>(e.length>0&&(e[t].timeoutId=c(e[t])),e)),clear:()=>u([])}}const f={};function h(r){return r==="local"?localStorage:sessionStorage}function m(r,u,n){const a=n?.serializer??JSON,c=n?.storage??"local";function t(e,s){h(c).setItem(e,a.stringify(s))}if(!f[r]){const e=p(u,i=>{const d=h(c).getItem(r);d&&i(a.parse(d));{const g=l=>{l.key===r&&i(l.newValue?a.parse(l.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:s,set:o}=e;f[r]={set(i){t(r,i),o(i)},update(i){const d=i(I(e));t(r,d),o(d)},subscribe:s}}return f[r]}m("modeOsPrefers",!1);m("modeUserPrefers",void 0);m("modeCurrent",!1);const b="(prefers-reduced-motion: reduce)";function L(){return window.matchMedia(b).matches}const C=T(L(),r=>{{const u=a=>{r(a.matches)},n=window.matchMedia(b);return n.addEventListener("change",u),()=>{n.removeEventListener("change",u)}}});export{R as g,_ as i,C as p};
