import{k as q,l as z}from"./index.pQbJqlm8.js";import{r as B}from"./scheduler.qsg2qU0_.js";function F(n){return n?.length!==void 0?n:Array.from(n)}function G(n,a){n.d(1),a.delete(n.key)}function C(n,a){z(n,1,1,()=>{a.delete(n.key)})}function H(n,a){n.f(),C(n,a)}function I(n,a,M,v,x,y,f,S,m,A,_,j){let i=n.length,d=y.length,o=i;const h={};for(;o--;)h[n[o].key]=o;const c=[],r=new Map,u=new Map,g=[];for(o=d;o--;){const e=j(x,y,o),t=M(e);let s=f.get(t);s?v&&g.push(()=>s.p(e,a)):(s=A(t,e),s.c()),r.set(t,c[o]=s),t in h&&u.set(t,Math.abs(o-h[t]))}const k=new Set,p=new Set;function w(e){q(e,1),e.m(S,_),f.set(e.key,e),_=e.first,d--}for(;i&&d;){const e=c[d-1],t=n[i-1],s=e.key,l=t.key;e===t?(_=e.first,i--,d--):r.has(l)?!f.has(s)||k.has(s)?w(e):p.has(l)?i--:u.get(s)>u.get(l)?(p.add(s),w(e)):(k.add(l),i--):(m(t,f),i--)}for(;i--;){const e=n[i];r.has(e.key)||m(e,f)}for(;d;)w(c[d-1]);return B(g),c}export{G as d,F as e,H as f,I as u};
