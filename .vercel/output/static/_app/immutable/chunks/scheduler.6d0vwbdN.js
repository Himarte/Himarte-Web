function w(){}function E(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function S(){return Object.create(null)}function v(t){t.forEach(j)}function A(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function C(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function D(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function F(t){let n;return m(t,e=>n=e)(),n}function P(t,n,e){t.$$.on_destroy.push(m(n,e))}function U(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|o[s];return a}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,a){if(o){const _=y(n,e,r,a);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function K(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function L(t){const n={};for(const e in t)n[e]=!0;return n}let f;function h(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){k().$$.on_mount.push(t)}function Q(t){k().$$.after_update.push(t)}function R(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const l=[],b=[];let u=[];const g=[],x=Promise.resolve();let p=!1;function q(){p||(p=!0,x.then(z))}function T(){return q(),x}function O(t){u.push(t)}const d=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<l.length;){const n=l[c];c++,h(n),M(n.$$)}}catch(n){throw l.length=0,c=0,n}for(h(null),l.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(l.length);for(;g.length;)g.pop()();p=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function V(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{j as A,l as B,q as C,C as D,E as a,U as b,P as c,G as d,K as e,L as f,I as g,J as h,R as i,b as j,Q as k,F as l,S as m,w as n,N as o,z as p,A as q,v as r,B as s,T as t,H as u,D as v,O as w,V as x,f as y,h as z};
