import{n as de,s as it,t as me}from"./scheduler.a7-2wmif.js";new URL("sveltekit-internal://");function ct(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function lt(e){return e.split("%25").map(decodeURI).join("%25")}function ft(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function pe({href:e}){return e.split("#")[0]}const ut=["href","pathname","search","toString","toJSON"];function dt(e,t,n){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),r[o](s));t();const i=Reflect.get(r,o);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of ut)Object.defineProperty(a,r,{get(){return t(),e[r]},enumerable:!0,configurable:!0});return a}const pt="/__data.json",ht=".html__data.json";function gt(e){return e.endsWith(".html")?e.replace(/\.html$/,ht):e.replace(/\/$/,"")+pt}function _t(...e){let t=5381;for(const n of e)if(typeof n=="string"){let a=n.length;for(;a;)t=t*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)t=t*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}const Ce=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&F.delete(Ee(e)),Ce(e,t));const F=new Map;function mt(e){const t=atob(e),n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n.buffer}function yt(e,t){const n=Ee(e,t),a=document.querySelector(n);if(a?.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&F.set(n,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=mt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,t)}function wt(e,t,n){if(F.size>0){const a=Ee(e,n),r=F.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(r.body,r.init);F.delete(a)}}return window.fetch(t,n)}function Ee(e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const r=[];t.headers&&r.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&r.push(t.body),a+=`[data-hash="${_t(...r)}"]`}return a}const vt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${kt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return he(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return he(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const d=vt.exec(c),[,g,u,f,p]=d;return t.push({name:f,matcher:p,optional:!!g,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":g?"([^/]*)?":"([^/]+?)"}return he(c)}).join("")}).join("")}/?$`),params:t}}function Et(e){return!/^\([^)]+\)$/.test(e)}function kt(e){return e.slice(1).split("/").filter(Et)}function St(e,t,n){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<t.length;s+=1){const c=t[s];let l=r[s-i];if(c.chained&&c.rest&&i&&(l=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){a[c.name]=l;const d=t[s+1],g=r[s+1];d&&!d.rest&&d.optional&&g&&c.chained&&(i=0),!d&&!g&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function he(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function At({nodes:e,server_loads:t,dictionary:n,matchers:a}){const r=new Set(t);return Object.entries(n).map(([s,[c,l,d]])=>{const{pattern:g,params:u}=bt(s),f={id:s,exec:p=>{const h=g.exec(p);if(h)return St(h,u,a)},errors:[1,...d||[]].map(p=>e[p]),layouts:[0,...l||[]].map(i),leaf:o(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function Ve(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function xe(e,t,n=JSON.stringify){const a=n(t);try{sessionStorage[e]=a}catch{}}const N=[];function Xt(e,t){return{subscribe:ne(e,t).subscribe}}function ne(e,t=de){let n;const a=new Set;function r(s){if(it(e,s)&&(e=s,n)){const c=!N.length;for(const l of a)l[1](),N.push(l,e);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function o(s){r(s(e))}function i(s,c=de){const l=[s,c];return a.add(l),a.size===1&&(n=t(r,o)||de),s(e),()=>{a.delete(l),a.size===0&&n&&(n(),n=null)}}return{set:r,update:o,subscribe:i}}const A=globalThis.__sveltekit_1v8wl5n?.base??"",Rt=globalThis.__sveltekit_1v8wl5n?.assets??A,It="1705619375031",Fe="sveltekit:snapshot",qe="sveltekit:scroll",Ge="sveltekit:states",Lt="sveltekit:pageurl",j="sveltekit:history",G="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function Me(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ke(){return{x:pageXOffset,y:pageYOffset}}function O(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Te={...W,"":W.hover};function He(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Be(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=He(e)}}function ye(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!a||ae(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=n?.origin===z&&e.hasAttribute("download");return{url:n,external:r,target:a,download:o}}function X(e){let t=null,n=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=O(s,"preload-code")),r===null&&(r=O(s,"preload-data")),t===null&&(t=O(s,"keepfocus")),n===null&&(n=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=He(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Te[a??"off"],preload_data:Te[r??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Ne(e){const t=ne(e);let n=!0;function a(){n=!0,t.update(i=>i)}function r(i){n=!1,t.set(i)}function o(i){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}function Pt(){const{set:e,subscribe:t}=ne(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${Rt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==It;return i&&(e(!0),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:a}}function ae(e,t){return e.origin!==z||!e.pathname.startsWith(t)}const Ut=-1,xt=-2,Tt=-3,Nt=-4,Ot=-5,jt=-6;function Zt(e,t){return Ke(JSON.parse(e),t)}function Ke(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,a=Array(n.length);function r(o,i=!1){if(o===Ut)return;if(o===Tt)return NaN;if(o===Nt)return 1/0;if(o===Ot)return-1/0;if(o===jt)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=n[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=t?.[c];if(l)return a[o]=l(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let f=1;f<s.length;f+=1)d.add(r(s[f]));break;case"Map":const g=new Map;a[o]=g;for(let f=1;f<s.length;f+=2)g.set(r(s[f]),r(s[f+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const u=Object.create(null);a[o]=u;for(let f=1;f<s.length;f+=2)u[s[f]]=r(s[f+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==xt&&(c[l]=r(d))}}else{const c={};a[o]=c;for(const l in s){const d=s[l];c[l]=r(d)}}return a[o]}return r(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const $t=new Set([...ze]);[...$t];function Dt(e){return e.filter(t=>t!=null)}class re{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Je{constructor(t,n){this.status=t,this.location=n}}class Se extends Error{constructor(t,n,a){super(a),this.status=t,this.text=n}}const Ct="x-sveltekit-invalidated",Vt="x-sveltekit-trailing-slash";function Z(e){return e instanceof re||e instanceof Se?e.status:500}function Ft(e){return e instanceof Se?e.text:"Internal Error"}const T=Ve(qe)??{},M=Ve(Fe)??{},L={url:Ne({}),page:Ne({}),navigating:ne(null),updated:Pt()};function Ae(e){T[e]=ke()}function qt(e,t){let n=e+1;for(;T[n];)delete T[n],n+=1;for(n=t+1;M[n];)delete M[n],n+=1}function $(e){return location.href=e.href,new Promise(()=>{})}function Oe(){}let oe,we,Q,I,ve,C;const Re=[],ee=[];let U=null;const Ye=[],Gt=[];let q=[],m={branch:[],error:null,url:null},Ie=!1,te=!1,je=!0,H=!1,V=!1,We=!1,se=!1,x,w,S,k,D,ge;async function Qt(e,t,n){document.URL!==location.href&&(location.href=location.href),C=e,oe=At(e),I=document.documentElement,ve=t,we=e.nodes[0],Q=e.nodes[1],we(),Q(),w=history.state?.[j],S=history.state?.[G],w||(w=S=Date.now(),history.replaceState({...history.state,[j]:w,[G]:S},""));const a=T[w];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await Yt(ve,n):zt(location.href,{replaceState:!0}),Jt()}async function Mt(){if(await(ge||=Promise.resolve()),!ge)return;ge=null;const e=le(m.url,!0);U=null;const t=D={},n=e&&await Ue(e);t===D&&(n&&(n.type==="redirect"?await ie(new URL(n.location,m.url).href,{},1,t):(n.props.page!==void 0&&(k=n.props.page),x.$set(n.props))),Re.length=0)}function Xe(e){ee.some(t=>t?.snapshot)&&(M[e]=ee.map(t=>t?.snapshot?.capture()))}function Ze(e){M[e]?.forEach((t,n)=>{ee[n]?.snapshot?.restore(t)})}function $e(){Ae(w),xe(qe,T),Xe(S),xe(Fe,M)}async function ie(e,t,n,a){return Y({type:"goto",url:Me(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:a,accept:()=>{t.invalidateAll&&(se=!0)}})}async function Ht(e){return U={id:e.id,promise:Ue(e).then(t=>(t.type==="loaded"&&t.state.error&&(U=null),t))},U.promise}async function _e(e){const t=oe.find(n=>n.exec(tt(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function Qe(e,t){m=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),k=e.props.page,x=new C.root({target:t,props:{...e.props,stores:L,components:ee},hydrate:!0}),Ze(S);const a={from:null,to:{params:m.params,route:{id:m.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};q.forEach(r=>r(a)),te=!0}async function B({url:e,params:t,branch:n,status:a,error:r,route:o,form:i}){let s="never";if(A&&(e.pathname===A||e.pathname===A+"/"))s="always";else for(const f of n)f?.slash!==void 0&&(s=f.slash);e.pathname=ct(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:r,route:o},props:{constructors:Dt(n).map(f=>f.node.component),page:k}};i!==void 0&&(c.props.form=i);let l={},d=!k,g=0;for(let f=0;f<Math.max(n.length,m.branch.length);f+=1){const p=n[f],h=m.branch[f];p?.data!==h?.data&&(d=!0),p&&(l={...l,...p.data},d&&(c.props[`data_${g}`]=l),g+=1)}return(!m.url||e.href!==m.url.href||m.error!==r||i!==void 0&&i!==k.form||d)&&(c.props.page={error:r,params:t,route:{id:o?.id??null},state:{},status:a,url:new URL(e),form:i??null,data:d?l:k.data}),c}async function Le({loader:e,parent:t,url:n,params:a,route:r,server_data_node:o}){let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:p}=new URL(f,n);c.dependencies.add(p)}};const g={route:new Proxy(r,{get:(u,f)=>(s&&(c.route=!0),u[f])}),params:new Proxy(a,{get:(u,f)=>(s&&c.params.add(f),u[f])}),data:o?.data??null,url:dt(n,()=>{s&&(c.url=!0)},u=>{s&&c.search_params.add(u)}),async fetch(u,f){let p;u instanceof Request?(p=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):p=u;const h=new URL(p,n);return s&&d(h.href),h.origin===n.origin&&(p=h.href.slice(n.origin.length)),te?wt(p,h.href,f):yt(p,f)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),t()},untrack(u){s=!1;try{return u()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??o?.data??null,slash:l.universal?.trailingSlash??o?.slash}}function De(e,t,n,a,r,o){if(se)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==m.params[i])return!0;for(const i of r.dependencies)if(Re.some(s=>s(new URL(i))))return!0;return!1}function Pe(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function Bt(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const a of n){const r=e.searchParams.getAll(a),o=t.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&n.delete(a)}return n}async function Ue({id:e,invalidating:t,url:n,params:a,route:r}){if(U?.id===e)return U.promise;const{errors:o,layouts:i,leaf:s}=r,c=[...i,s];o.forEach(_=>_?.().catch(()=>{})),c.forEach(_=>_?.[1]().catch(()=>{}));let l=null;const d=m.url?e!==m.url.pathname+m.url.search:!1,g=m.route?r.id!==m.route.id:!1,u=Bt(m.url,n);let f=!1;const p=c.map((_,y)=>{const v=m.branch[y],b=!!_?.[0]&&(v?.loader!==_[1]||De(f,g,d,u,v.server?.uses,a));return b&&(f=!0),b});if(p.some(Boolean)){try{l=await rt(n,p)}catch(_){return ce({status:Z(_),error:await K(_,{url:n,params:a,route:{id:r.id}}),url:n,route:r})}if(l.type==="redirect")return l}const h=l?.nodes;let R=!1;const E=c.map(async(_,y)=>{if(!_)return;const v=m.branch[y],b=h?.[y];if((!b||b.type==="skip")&&_[1]===v?.loader&&!De(R,g,d,u,v.universal?.uses,a))return v;if(R=!0,b?.type==="error")throw b;return Le({loader:_[1],url:n,params:a,route:r,parent:async()=>{const fe={};for(let ue=0;ue<y;ue+=1)Object.assign(fe,(await E[ue])?.data);return fe},server_data_node:Pe(b===void 0&&_[0]?{type:"skip"}:b??null,_[0]?v?.server:void 0)})});for(const _ of E)_.catch(()=>{});const P=[];for(let _=0;_<c.length;_+=1)if(c[_])try{P.push(await E[_])}catch(y){if(y instanceof Je)return{type:"redirect",location:y.location};let v=Z(y),b;if(h?.includes(y))v=y.status??v,b=y.error;else if(y instanceof re)b=y.body;else{if(await L.updated.check())return await $(n);b=await K(y,{params:a,url:n,route:{id:r.id}})}const J=await et(_,P,o);return J?await B({url:n,params:a,branch:P.slice(0,J.idx).concat(J.node),status:v,error:b,route:r}):await at(n,{id:r.id},b,v)}else P.push(void 0);return await B({url:n,params:a,branch:P,status:200,error:null,route:r,form:t?void 0:null})}async function et(e,t,n){for(;e--;)if(n[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:t,url:n,route:a}){const r={};let o=null;if(C.server_loads[0]===0)try{const l=await rt(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==z||n.pathname!==location.pathname||Ie)&&await $(n)}const s=await Le({loader:we,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Pe(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return await B({url:n,params:r,branch:[s,c],status:e,error:t,route:null})}function le(e,t){if(!e||ae(e,A))return;let n;try{n=C.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=tt(n);for(const r of oe){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:t,route:r,params:ft(o),url:e}}}function tt(e){return lt(e.slice(A.length)||"/")}function nt({url:e,type:t,intent:n,delta:a}){let r=!1;const o=st(m,n,e,t);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return H||Ye.forEach(s=>s(i)),r?null:o}async function Y({type:e,url:t,popped:n,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Oe,block:d=Oe}){const g=le(t,!1),u=nt({url:t,type:e,delta:n?.delta,intent:g});if(!u){d();return}const f=w,p=S;l(),H=!0,te&&L.navigating.set(u.navigation),D=c;let h=g&&await Ue(g);if(!h){if(ae(t,A))return await $(t);h=await at(t,{id:null},await K(new Se(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=g?.url||t,D!==c)return u.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(s>=20)h=await ce({status:500,error:await K(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(h.location,t).href,{},s+1,c),!1;else h.props.page.status>=400&&await L.updated.check()&&await $(t);if(Re.length=0,se=!1,Ae(f),Xe(p),h.props.page.url.pathname!==t.pathname&&(t.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const _=o?0:1,y={[j]:w+=_,[G]:S+=_,[Ge]:i};(o?history.replaceState:history.pushState).call(history,y,"",t),o||qt(w,S)}if(U=null,h.props.page.state=i,te){m=h.state,h.props.page&&(h.props.page.url=t);const _=(await Promise.all(Gt.map(y=>y(u.navigation)))).filter(y=>typeof y=="function");if(_.length>0){let y=function(){q=q.filter(v=>!_.includes(v))};_.push(y),callbacks.after_navigate.push(..._)}x.$set(h.props),We=!0}else Qe(h,ve);const{activeElement:R}=document;await me();const E=n?n.scroll:r?ke():null;if(je){const _=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));E?scrollTo(E.x,E.y):_?_.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==R&&document.activeElement!==document.body;!a&&!P&&be(),je=!0,h.props.page&&(k=h.props.page),H=!1,e==="popstate"&&Ze(S),u.fulfil(void 0),q.forEach(_=>_(u.navigation)),L.navigating.set(null)}async function at(e,t,n,a){return e.origin===z&&e.pathname===location.pathname&&!Ie?await ce({status:a,error:n,url:e,route:t}):await $(e)}function Kt(){let e;I.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function t(o){a(o.composedPath()[0],1)}I.addEventListener("mousedown",t),I.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(_e(i.target.href),n.unobserve(i.target))},{threshold:0});function a(o,i){const s=Be(o,I);if(!s)return;const{url:c,external:l,download:d}=ye(s,A);if(l||d)return;const g=X(s);if(!g.reload)if(i<=g.preload_data){const u=le(c,!1);u&&Ht(u)}else i<=g.preload_code&&_e(c.pathname)}function r(){n.disconnect();for(const o of I.querySelectorAll("a")){const{url:i,external:s,download:c}=ye(o,A);if(s||c)continue;const l=X(o);l.reload||(l.preload_code===W.viewport&&n.observe(o),l.preload_code===W.eager&&_e(i.pathname))}}q.push(r),r()}function K(e,t){if(e instanceof re)return e.body;const n=Z(e),a=Ft(e);return C.hooks.handleError({error:e,event:t,status:n,message:a})??{message:a}}function zt(e,t={}){return e=Me(e),e.origin!==z?Promise.reject(new Error("goto: invalid URL")):ie(e,t,0)}function en(){return se=!0,Mt()}async function tn(e){if(e.type==="error"){const t=new URL(location.href),{branch:n,route:a}=m;if(!a)return;const r=await et(m.branch.length,n,a.errors);if(r){const o=await B({url:t,params:m.params,branch:n.slice(0,r.idx).concat(r.node),status:e.status??500,error:e.error,route:a});m=o.state,x.$set(o.props),me().then(be)}}else e.type==="redirect"?ie(e.location,{invalidateAll:!0},0):(x.$set({form:null,page:{...k,form:e.data,status:e.status}}),await me(),x.$set({form:e.data}),e.type==="success"&&be())}function Jt(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if($e(),!H){const a=st(m,void 0,null,"leave"),r={...a.navigation,cancel:()=>{n=!0,a.reject(new Error("navigation cancelled"))}};Ye.forEach(o=>o(r))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&$e()}),navigator.connection?.saveData||Kt(),I.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Be(t.composedPath()[0],I);if(!n)return;const{url:a,external:r,target:o,download:i}=ye(n,A);if(!a)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const s=X(n);if(!(n instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(r||s.reload){nt({url:a,type:"link"})?H=!0:t.preventDefault();return}const[l,d]=a.href.split("#");if(d!==void 0&&l===pe(location)){const[,g]=m.url.href.split("#");if(g===d){t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):n.ownerDocument.getElementById(d)?.scrollIntoView();return}if(V=!0,Ae(w),e(a),!s.replace_state)return;V=!1}t.preventDefault(),Y({type:"link",url:a,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??a.href===location.href})}),I.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if((a?.formMethod||n.method)!=="get")return;const o=new URL(a?.hasAttribute("formaction")&&a?.formAction||n.action);if(ae(o,A))return;const i=t.target,s=X(i);if(s.reload)return;t.preventDefault(),t.stopPropagation();const c=new FormData(i),l=a?.getAttribute("name");l&&c.append(l,a?.getAttribute("value")??""),o.search=new URLSearchParams(c).toString(),Y({type:"form",url:o,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??o.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[j]){const n=t.state[j];if(D={},n===w)return;const a=T[n],r=t.state[Ge]??{},o=new URL(t.state[Lt]??location.href),i=t.state[G],s=pe(location)===pe(m.url);if(i===S&&(We||s)){e(o),T[w]=ke(),a&&scrollTo(a.x,a.y),r!==k.state&&(k={...k,state:r},x.$set({page:k})),w=n;return}const l=n-w;await Y({type:"popstate",url:o,popped:{state:r,scroll:a,delta:l},accept:()=>{w=n,S=i},block:()=>{history.go(-l)},nav_token:D})}else if(!V){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[j]:++w,[G]:S},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&L.navigating.set(null)});function e(t){m.url=t,L.page.set({...k,url:t}),L.page.notify()}}async function Yt(e,{status:t=200,error:n,node_ids:a,params:r,route:o,data:i,form:s}){Ie=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=le(c,!1)||{});let l;try{const d=a.map(async(f,p)=>{const h=i[p];return h?.uses&&(h.uses=ot(h.uses)),Le({loader:C.nodes[f],url:c,params:r,route:o,parent:async()=>{const R={};for(let E=0;E<p;E+=1)Object.assign(R,(await d[E]).data);return R},server_data_node:Pe(h)})}),g=await Promise.all(d),u=oe.find(({id:f})=>f===o.id);if(u){const f=u.layouts;for(let p=0;p<f.length;p++)f[p]||g.splice(p,0,void 0)}l=await B({url:c,params:r,branch:g,status:t,error:n,form:s,route:u??null})}catch(d){if(d instanceof Je){await $(new URL(d.location,location.href));return}l=await ce({status:Z(d),error:await K(d,{url:c,params:r,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),Qe(l,e)}async function rt(e,t){const n=new URL(e);n.pathname=gt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Vt,"1"),n.searchParams.append(Ct,t.map(r=>r?"1":"0").join(""));const a=await Ce(n.href);if(!a.ok){let r;throw a.headers.get("content-type")?.includes("application/json")?r=await a.json():a.status===404?r="Not Found":a.status===500&&(r="Internal Error"),new re(a.status,r)}return new Promise(async r=>{const o=new Map,i=a.body.getReader(),s=new TextDecoder;function c(d){return Ke(d,{Promise:g=>new Promise((u,f)=>{o.set(g,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:g}=await i.read();if(d&&!l)break;for(l+=!g&&l?`
`:s.decode(g,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return r(f);if(f.type==="data")f.nodes?.forEach(p=>{p?.type==="data"&&(p.uses=ot(p.uses),p.data=c(p.data))}),r(f);else if(f.type==="chunk"){const{id:p,data:h,error:R}=f,E=o.get(p);o.delete(p),R?E.reject(c(R)):E.fulfil(c(h))}}}})}function ot(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function be(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function st(e,t,n,a){let r,o;const i=new Promise((c,l)=>{r=c,o=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:a,complete:i},fulfil:r,reject:o}}export{Je as R,tn as a,Qt as b,en as i,Zt as p,Xt as r,L as s,ne as w};
