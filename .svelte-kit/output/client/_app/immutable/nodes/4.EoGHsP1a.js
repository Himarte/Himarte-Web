import{s as S,j as T,n as y,r as k}from"../chunks/scheduler.a7-2wmif.js";import{S as q,i as I,e as L,k as _,c as M,C as A,m as j,o as b,h as v,g}from"../chunks/index.G-6XglCo.js";import{g as F}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.XE3JFLVW.js";import{p as D,i as H,a as O}from"../chunks/entry.Z0A2SGgP.js";function N(n,a){const m='a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';let l,e;function c(t){t.shiftKey&&t.code==="Tab"&&(t.preventDefault(),e.focus())}function i(t){!t.shiftKey&&t.code==="Tab"&&(t.preventDefault(),l.focus())}const o=t=>t.filter(s=>s.tabIndex>=0).sort((s,p)=>s.tabIndex===0&&p.tabIndex>0?1:s.tabIndex>0&&p.tabIndex===0?-1:s.tabIndex-p.tabIndex),r=t=>{const s=[...n.querySelectorAll("[data-focusindex]")];return!s||s.length===0?t:s.sort((p,x)=>+p.dataset.focusindex-+x.dataset.focusindex)[0]||t},u=t=>{if(a===!1)return;const s=o(Array.from(n.querySelectorAll(m)));s.length&&(l=s[0],e=s[s.length-1],t||r(l).focus(),l.addEventListener("keydown",c),e.addEventListener("keydown",i))};u(!1);function f(){l&&l.removeEventListener("keydown",c),e&&e.removeEventListener("keydown",i)}const E=(t,s)=>(t.length&&(f(),u(!0)),s),h=new MutationObserver(E);return h.observe(n,{childList:!0,subtree:!0}),{update(t){a=t,t?u(!1):f()},destroy(){f(),h.disconnect()}}}function K(n){const a=JSON.parse(n);return a.data&&(a.data=D(a.data)),a}function C(n){return HTMLElement.prototype.cloneNode.call(n)}function R(n,a=()=>{}){const m=async({action:e,result:c,reset:i=!0,invalidateAll:o=!0})=>{c.type==="success"&&(i&&HTMLFormElement.prototype.reset.call(n),o&&await H()),(location.origin+location.pathname===e.origin+e.pathname||c.type==="redirect"||c.type==="error")&&O(c)};async function l(e){var s,p,x,w;if(((s=e.submitter)!=null&&s.hasAttribute("formmethod")?e.submitter.formMethod:C(n).method)!=="post")return;e.preventDefault();const i=new URL((p=e.submitter)!=null&&p.hasAttribute("formaction")?e.submitter.formAction:C(n).action),o=new FormData(n),r=(x=e.submitter)==null?void 0:x.getAttribute("name");r&&o.append(r,((w=e.submitter)==null?void 0:w.getAttribute("value"))??"");const u=new AbortController;let f=!1;const h=await a({action:i,cancel:()=>f=!0,controller:u,formData:o,formElement:n,submitter:e.submitter})??m;if(f)return;let t;try{const d=await fetch(i,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:o,signal:u.signal});t=K(await d.text()),t.type==="error"&&(t.status=d.status)}catch(d){if((d==null?void 0:d.name)==="AbortError")return;t={type:"error",error:d}}h({action:i,formData:o,formElement:n,update:d=>m({action:i,result:t,reset:d==null?void 0:d.reset,invalidateAll:d==null?void 0:d.invalidateAll}),result:t})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",l),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",l)}}}function P(n){let a,m='<h1 class="h1 text-center font-bold gradient-heading fontSpace">Trabalhe Conosco</h1>',l,e,c='<div class="md:flex w-full gap-5"><div class="flex flex-col gap-3 md:w-1/2"><label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Nome Completo:</span> <input required="" class="px-3 input" type="text" name="nome" placeholder="ex. John da Silva"/></label> <label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Telefone:</span> <input required="" class="px-3 input" title="Input (tel)" type="tel" name="telefone" placeholder="ex. (51) 1234-5678"/></label></div> <div class="flex flex-col gap-3 md:w-1/2"><label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Email:</span> <input required="" class="px-3 input" type="Email" placeholder="john@himarte.com.br" autocomplete="email" name="emailRemetente"/></label> <label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Vaga desejada:</span> <input required="" class="px-3 input" type="text" name="vagaDesejada" placeholder="ex. Suporte Técnico"/></label></div></div> <label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Mensagem/Corpo do E-mail:</span> <textarea required="" class="textarea" rows="8" name="mensagem" placeholder="Conte-nos um pouco sobre você, suas experiências e por que essa vaga seria perfeita para você!"></textarea></label> <input type="file" name="curriculo" class="input" accept="application/pdf" required=""/> <div class="flex w-full flex-col md:flex-row gap-5 md:justify-center md:py-2"><button type="reset" class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center">Limpar campos</button> <button type="submit" class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center">Enviar Currículo</button></div>',i,o;return{c(){a=L("section"),a.innerHTML=m,l=_(),e=L("form"),e.innerHTML=c,this.h()},l(r){a=M(r,"SECTION",{class:!0,"data-svelte-h":!0}),A(a)!=="svelte-1vdw09t"&&(a.innerHTML=m),l=j(r),e=M(r,"FORM",{action:!0,method:!0,enctype:!0,class:!0,"data-svelte-h":!0}),A(e)!=="svelte-1ym20pc"&&(e.innerHTML=c),this.h()},h(){b(a,"class","px-10 pt-10 space-y-5"),b(e,"action","?/enviarEmail"),b(e,"method","POST"),b(e,"enctype","multipart/form-data"),b(e,"class","card flex flex-col rounded-3xl px-5 md:px-10 py-5 mx-2 my-5 gap-5 md:mx-28")},m(r,u){v(r,a,u),v(r,l,u),v(r,e,u),i||(o=[T(N.call(null,e,!0)),T(R.call(null,e,n[3]))],i=!0)},p:y,i:y,o:y,d(r){r&&(g(a),g(l),g(e)),i=!1,k(o)}}}function J(n){let a=["nome","telefone","emailRemetente","vagaDesejada","mensagem"];const m={nome:"Nome inválido",telefone:"Telefone inválido",Email:"E-mail inválido",vagaDesejada:"Vaga desejada inválida",mensagem:"Mensagem inválida"},l=F();return[a,m,l,({formData:c,cancel:i})=>{const o=a.filter(r=>c.get(r)===" "||c.get(r)===null);o.length>0?(o.forEach(r=>{const u=m[r]||"Campo inválido";l.trigger({message:u,timeout:3500,background:"variant-filled-error"})}),i()):o.length===0&&l.trigger({message:"Enviado com sucesso!",timeout:3500,background:"variant-filled-success"})}]}class B extends q{constructor(a){super(),I(this,a,J,P,S,{})}}export{B as component};
