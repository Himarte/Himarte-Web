import{n as p,s as k}from"./scheduler.mRkECR82.js";const u=[];function w(e,t){return{subscribe:d(e,t).subscribe}}function d(e,t=p){let s;const o=new Set;function r(n){if(k(e,n)&&(e=n,s)){const c=!u.length;for(const i of o)i[1](),u.push(i,e);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(n){r(n(e))}function a(n,c=p){const i=[n,c];return o.add(i),o.size===1&&(s=t(r,l)||p),n(e),()=>{o.delete(i),o.size===0&&s&&(s(),s=null)}}return{set:r,update:l,subscribe:a}}const E=globalThis.__sveltekit_5sf3bn?.base??"",m=globalThis.__sveltekit_5sf3bn?.assets??E,A="1704312514477",I="sveltekit:snapshot",y="sveltekit:scroll",N="sveltekit:states",U="sveltekit:pageurl",L="sveltekit:history",O="sveltekit:navigation",b={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},g=location.origin;function Y(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const s=document.getElementsByTagName("base");t=s.length?s[0].href:document.URL}return new URL(e,t)}function x(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...b,"":b.hover};function v(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function P(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function V(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!s||!!o||T(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=s?.origin===g&&e.hasAttribute("download");return{url:s,external:r,target:o,download:l}}function G(e){let t=null,s=null,o=null,r=null,l=null,a=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=f(n,"preload-code")),r===null&&(r=f(n,"preload-data")),t===null&&(t=f(n,"keepfocus")),s===null&&(s=f(n,"noscroll")),l===null&&(l=f(n,"reload")),a===null&&(a=f(n,"replacestate")),n=v(n);function c(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:_[o??"off"],preload_data:_[r??"off"],keepfocus:c(t),noscroll:c(s),reload:c(l),replace_state:c(a)}}function h(e){const t=d(e);let s=!0;function o(){s=!0,t.update(a=>a)}function r(a){s=!1,t.set(a)}function l(a){let n;return t.subscribe(c=>{(n===void 0||s&&c!==n)&&a(n=c)})}return{notify:o,set:r,subscribe:l}}function R(){const{set:e,subscribe:t}=d(!1);let s;async function o(){clearTimeout(s);try{const r=await fetch(`${m}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==A;return a&&(e(!0),clearTimeout(s)),a}catch{return!1}}return{subscribe:t,check:o}}function T(e,t){return e.origin!==g||!e.pathname.startsWith(t)}function K(e){e.client}const j={url:h({}),page:h({}),navigating:d(null),updated:R()};export{L as H,O as N,U as P,y as S,N as a,I as b,G as c,j as d,E as e,P as f,V as g,b as h,T as i,K as j,w as k,g as o,Y as r,x as s,d as w};
