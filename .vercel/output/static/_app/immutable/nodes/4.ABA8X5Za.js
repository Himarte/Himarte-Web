import{s as ge,f as $,c as de,u as me,g as pe,d as he,r as Re,p as Ae,e as qe,h as fe,i as B,b as Fe,n as ve}from"../chunks/scheduler.bA8xtfAf.js";import{S as be,i as Ie,g as m,s as x,h as p,j as P,c as S,f as h,B as De,k as i,A as Ne,a as H,x as f,y as k,d as j,p as Pe,t as F,b as xe,m as Ce,z as J,n as ye,r as Ee,u as Te,v as Le,w as ze,C as w}from"../chunks/index.9u6dcQei.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.WIrV0m6L.js";import{g as Ue,I as Oe,a as Ge}from"../chunks/Icon.ORSXjyD_.js";const Je=t=>({}),Se=t=>({}),Ke=t=>({}),je=t=>({}),Qe=t=>({}),Ve=t=>({});function Be(t){let e,a,o;const s=t[18].lead,l=de(s,t,t[17],Ve);return{c(){e=m("div"),l&&l.c(),this.h()},l(n){e=p(n,"DIV",{class:!0});var u=P(e);l&&l.l(u),u.forEach(h),this.h()},h(){i(e,"class",a="dropzone-lead "+t[5])},m(n,u){H(n,e,u),l&&l.m(e,null),o=!0},p(n,u){l&&l.p&&(!o||u[0]&131072)&&me(l,s,n,n[17],o?he(s,n[17],u,Qe):pe(n[17]),Ve),(!o||u[0]&32&&a!==(a="dropzone-lead "+n[5]))&&i(e,"class",a)},i(n){o||(j(l,n),o=!0)},o(n){F(l,n),o=!1},d(n){n&&h(e),l&&l.d(n)}}}function We(t){let e,a="Upload a file",o;return{c(){e=m("strong"),e.textContent=a,o=Ce(" or drag and drop")},l(s){e=p(s,"STRONG",{"data-svelte-h":!0}),J(e)!=="svelte-13uz6lq"&&(e.textContent=a),o=ye(s," or drag and drop")},m(s,l){H(s,e,l),H(s,o,l)},p:ve,d(s){s&&(h(e),h(o))}}}function He(t){let e,a,o;const s=t[18].meta,l=de(s,t,t[17],Se);return{c(){e=m("small"),l&&l.c(),this.h()},l(n){e=p(n,"SMALL",{class:!0});var u=P(e);l&&l.l(u),u.forEach(h),this.h()},h(){i(e,"class",a="dropzone-meta "+t[7])},m(n,u){H(n,e,u),l&&l.m(e,null),o=!0},p(n,u){l&&l.p&&(!o||u[0]&131072)&&me(l,s,n,n[17],o?he(s,n[17],u,Je):pe(n[17]),Se),(!o||u[0]&128&&a!==(a="dropzone-meta "+n[7]))&&i(e,"class",a)},i(n){o||(j(l,n),o=!0)},o(n){F(l,n),o=!1},d(n){n&&h(e),l&&l.d(n)}}}function Xe(t){let e,a,o,s,l,n,u,E,V,R,v,z,T,b,U,A,D=[{type:"file"},{name:t[2]},{class:o="dropzone-input "+t[9]},t[11]()],N={};for(let c=0;c<D.length;c+=1)N=$(N,D[c]);let _=t[13].lead&&Be(t);const O=t[18].message,I=de(O,t,t[17],je),M=I||We();let d=t[13].meta&&He(t);return{c(){e=m("div"),a=m("input"),s=x(),l=m("div"),n=m("div"),_&&_.c(),u=x(),E=m("div"),M&&M.c(),R=x(),d&&d.c(),this.h()},l(c){e=p(c,"DIV",{class:!0,"data-testid":!0});var g=P(e);a=p(g,"INPUT",{type:!0,name:!0,class:!0}),s=S(g),l=p(g,"DIV",{class:!0});var W=P(l);n=p(W,"DIV",{class:!0});var C=P(n);_&&_.l(C),u=S(C),E=p(C,"DIV",{class:!0});var X=P(E);M&&M.l(X),X.forEach(h),R=S(C),d&&d.l(C),C.forEach(h),W.forEach(h),g.forEach(h),this.h()},h(){De(a,N),i(E,"class",V="dropzone-message "+t[6]),i(n,"class",v="dropzone-interface-text "+t[4]),i(l,"class",z="dropzone-interface "+t[8]+" "+t[3]),i(e,"class",T="dropzone "+t[10]),i(e,"data-testid","file-dropzone"),Ne(e,"opacity-50",t[12].disabled)},m(c,g){H(c,e,g),f(e,a),a.autofocus&&a.focus(),t[32](a),f(e,s),f(e,l),f(l,n),_&&_.m(n,null),f(n,u),f(n,E),M&&M.m(E,null),f(n,R),d&&d.m(n,null),b=!0,U||(A=[k(a,"change",t[31]),k(a,"change",t[19]),k(a,"dragenter",t[20]),k(a,"dragover",t[21]),k(a,"dragleave",t[22]),k(a,"drop",t[23]),k(a,"click",t[24]),k(a,"keydown",t[25]),k(a,"keyup",t[26]),k(a,"keypress",t[27]),k(a,"focus",t[28]),k(a,"focusin",t[29]),k(a,"focusout",t[30])],U=!0)},p(c,g){De(a,N=Ue(D,[{type:"file"},(!b||g[0]&4)&&{name:c[2]},(!b||g[0]&512&&o!==(o="dropzone-input "+c[9]))&&{class:o},c[11]()])),c[13].lead?_?(_.p(c,g),g[0]&8192&&j(_,1)):(_=Be(c),_.c(),j(_,1),_.m(n,u)):_&&(Pe(),F(_,1,1,()=>{_=null}),xe()),I&&I.p&&(!b||g[0]&131072)&&me(I,O,c,c[17],b?he(O,c[17],g,Ke):pe(c[17]),je),(!b||g[0]&64&&V!==(V="dropzone-message "+c[6]))&&i(E,"class",V),c[13].meta?d?(d.p(c,g),g[0]&8192&&j(d,1)):(d=He(c),d.c(),j(d,1),d.m(n,null)):d&&(Pe(),F(d,1,1,()=>{d=null}),xe()),(!b||g[0]&16&&v!==(v="dropzone-interface-text "+c[4]))&&i(n,"class",v),(!b||g[0]&264&&z!==(z="dropzone-interface "+c[8]+" "+c[3]))&&i(l,"class",z),(!b||g[0]&1024&&T!==(T="dropzone "+c[10]))&&i(e,"class",T),(!b||g[0]&5120)&&Ne(e,"opacity-50",c[12].disabled)},i(c){b||(j(_),j(M,c),j(d),b=!0)},o(c){F(_),F(M,c),F(d),b=!1},d(c){c&&h(e),t[32](null),_&&_.d(),M&&M.d(c),d&&d.d(),U=!1,Re(A)}}}const Ye="textarea relative flex justify-center items-center",Ze="w-full absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 disabled:!opacity-0 cursor-pointer",we="flex justify-center items-center text-center";function $e(t,e,a){let o,s,l;const n=["files","fileInput","name","border","padding","rounded","regionInterface","regionInterfaceText","slotLead","slotMessage","slotMeta"];let u=Ae(e,n),{$$slots:E={},$$scope:V}=e;const R=qe(E);let{files:v=void 0}=e,{fileInput:z=void 0}=e,{name:T}=e,{border:b="border-2 border-dashed"}=e,{padding:U="p-4 py-8"}=e,{rounded:A="rounded-container-token"}=e,{regionInterface:D=""}=e,{regionInterfaceText:N=""}=e,{slotLead:_="mb-4"}=e,{slotMessage:O=""}=e,{slotMeta:I="opacity-75"}=e;function M(){return delete u.class,u}function d(r){B.call(this,t,r)}function c(r){B.call(this,t,r)}function g(r){B.call(this,t,r)}function W(r){B.call(this,t,r)}function C(r){B.call(this,t,r)}function X(r){B.call(this,t,r)}function K(r){B.call(this,t,r)}function ae(r){B.call(this,t,r)}function ee(r){B.call(this,t,r)}function q(r){B.call(this,t,r)}function te(r){B.call(this,t,r)}function G(r){B.call(this,t,r)}function Q(){v=this.files,a(0,v)}function le(r){Fe[r?"unshift":"push"](()=>{z=r,a(1,z)})}return t.$$set=r=>{a(33,e=$($({},e),fe(r))),a(12,u=Ae(e,n)),"files"in r&&a(0,v=r.files),"fileInput"in r&&a(1,z=r.fileInput),"name"in r&&a(2,T=r.name),"border"in r&&a(14,b=r.border),"padding"in r&&a(15,U=r.padding),"rounded"in r&&a(16,A=r.rounded),"regionInterface"in r&&a(3,D=r.regionInterface),"regionInterfaceText"in r&&a(4,N=r.regionInterfaceText),"slotLead"in r&&a(5,_=r.slotLead),"slotMessage"in r&&a(6,O=r.slotMessage),"slotMeta"in r&&a(7,I=r.slotMeta),"$$scope"in r&&a(17,V=r.$$scope)},t.$$.update=()=>{a(10,o=`${Ye} ${b} ${U} ${A} ${e.class??""}`)},a(9,s=`${Ze}`),a(8,l=`${we}`),e=fe(e),[v,z,T,D,N,_,O,I,l,s,o,M,u,R,b,U,A,V,E,d,c,g,W,C,X,K,ae,ee,q,te,G,Q,le]}class et extends be{constructor(e){super(),Ie(this,e,$e,Xe,ge,{files:0,fileInput:1,name:2,border:14,padding:15,rounded:16,regionInterface:3,regionInterfaceText:4,slotLead:5,slotMessage:6,slotMeta:7},null,[-1,-1])}}function tt(t){let e;const a=t[2].default,o=de(a,t,t[3],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,l){o&&o.m(s,l),e=!0},p(s,l){o&&o.p&&(!e||l&8)&&me(o,a,s,s[3],e?he(a,s[3],l,null):pe(s[3]),null)},i(s){e||(j(o,s),e=!0)},o(s){F(o,s),e=!1},d(s){o&&o.d(s)}}}function at(t){let e,a;const o=[{name:"file-up"},t[1],{iconNode:t[0]}];let s={$$slots:{default:[tt]},$$scope:{ctx:t}};for(let l=0;l<o.length;l+=1)s=$(s,o[l]);return e=new Oe({props:s}),{c(){Ee(e.$$.fragment)},l(l){Te(e.$$.fragment,l)},m(l,n){Le(e,l,n),a=!0},p(l,[n]){const u=n&3?Ue(o,[o[0],n&2&&Ge(l[1]),n&1&&{iconNode:l[0]}]):{};n&8&&(u.$$scope={dirty:n,ctx:l}),e.$set(u)},i(l){a||(j(e.$$.fragment,l),a=!0)},o(l){F(e.$$.fragment,l),a=!1},d(l){ze(e,l)}}}function lt(t,e,a){let{$$slots:o={},$$scope:s}=e;const l=[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]];return t.$$set=n=>{a(1,e=$($({},e),fe(n))),"$$scope"in n&&a(3,s=n.$$scope)},e=fe(e),[l,e,o,s]}class st extends be{constructor(e){super(),Ie(this,e,lt,at,ge,{})}}function nt(t){let e,a,o;return a=new st({props:{size:40}}),{c(){e=m("span"),Ee(a.$$.fragment),this.h()},l(s){e=p(s,"SPAN",{class:!0});var l=P(e);Te(a.$$.fragment,l),l.forEach(h),this.h()},h(){i(e,"class","flex justify-center")},m(s,l){H(s,e,l),Le(a,e,null),o=!0},p:ve,i(s){o||(j(a.$$.fragment,s),o=!0)},o(s){F(a.$$.fragment,s),o=!1},d(s){s&&h(e),ze(a)}}}function ot(t){let e,a="Carregue o arquivo",o;return{c(){e=m("span"),e.textContent=a,o=Ce(" ou arraste e solte-o"),this.h()},l(s){e=p(s,"SPAN",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-ee2aw0"&&(e.textContent=a),o=ye(s," ou arraste e solte-o"),this.h()},h(){i(e,"class","font-semibold")},m(s,l){H(s,e,l),H(s,o,l)},p:ve,d(s){s&&(h(e),h(o))}}}function rt(t){let e;return{c(){e=Ce("Apenas PDF")},l(a){e=ye(a,"Apenas PDF")},m(a,o){H(a,e,o)},d(a){a&&h(e)}}}function it(t){let e,a='<h1 class="h1 text-center font-bold gradient-heading fontSpace">Trabalhe Conosco</h1>',o,s,l,n,u,E,V="Nome Completo:",R,v,z,T,b='<span class="md:h4 text-primary-500 card-header">Telefone:</span> <input class="px-3 input" title="Input (tel)" type="tel" placeholder="ex. (51) 1234-5678"/>',U,A,D,N,_="Email:",O,I,M,d,c,g="Vaga desejada:",W,C,X,K,ae='<span class="md:h4 text-primary-500 card-header">Mensagem/Corpo do E-mail:</span> <textarea class="textarea" rows="8" placeholder="Conte-nos um pouco sobre você, suas experiências e por que essa vaga seria perfeita para você!"></textarea>',ee,q,te,G,Q,le="Limpar campos",r,Y,ke="Enviar Currículo",se,_e,Me;return q=new et({props:{name:"files",class:"input md:h-36",type:"file",id:"anexos",$$slots:{meta:[rt],message:[ot],lead:[nt]},$$scope:{ctx:t}}}),q.$on("change",t[4]),{c(){e=m("section"),e.innerHTML=a,o=x(),s=m("form"),l=m("div"),n=m("div"),u=m("label"),E=m("span"),E.textContent=V,R=x(),v=m("input"),z=x(),T=m("label"),T.innerHTML=b,U=x(),A=m("div"),D=m("label"),N=m("span"),N.textContent=_,O=x(),I=m("input"),M=x(),d=m("label"),c=m("span"),c.textContent=g,W=x(),C=m("input"),X=x(),K=m("label"),K.innerHTML=ae,ee=x(),Ee(q.$$.fragment),te=x(),G=m("div"),Q=m("button"),Q.textContent=le,r=x(),Y=m("button"),Y.textContent=ke,this.h()},l(y){e=p(y,"SECTION",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-r41171"&&(e.innerHTML=a),o=S(y),s=p(y,"FORM",{class:!0});var L=P(s);l=p(L,"DIV",{class:!0});var Z=P(l);n=p(Z,"DIV",{class:!0});var ne=P(n);u=p(ne,"LABEL",{class:!0});var oe=P(u);E=p(oe,"SPAN",{class:!0,"data-svelte-h":!0}),J(E)!=="svelte-1fa9avi"&&(E.textContent=V),R=S(oe),v=p(oe,"INPUT",{class:!0,type:!0,id:!0,name:!0,placeholder:!0}),oe.forEach(h),z=S(ne),T=p(ne,"LABEL",{class:!0,"data-svelte-h":!0}),J(T)!=="svelte-uowrv5"&&(T.innerHTML=b),ne.forEach(h),U=S(Z),A=p(Z,"DIV",{class:!0});var re=P(A);D=p(re,"LABEL",{class:!0});var ie=P(D);N=p(ie,"SPAN",{class:!0,"data-svelte-h":!0}),J(N)!=="svelte-gixcec"&&(N.textContent=_),O=S(ie),I=p(ie,"INPUT",{class:!0,type:!0,placeholder:!0,autocomplete:!0,id:!0,name:!0}),ie.forEach(h),M=S(re),d=p(re,"LABEL",{class:!0});var ce=P(d);c=p(ce,"SPAN",{class:!0,"data-svelte-h":!0}),J(c)!=="svelte-t2q9em"&&(c.textContent=g),W=S(ce),C=p(ce,"INPUT",{class:!0,type:!0,id:!0,name:!0,placeholder:!0}),ce.forEach(h),re.forEach(h),Z.forEach(h),X=S(L),K=p(L,"LABEL",{class:!0,"data-svelte-h":!0}),J(K)!=="svelte-wp7t4x"&&(K.innerHTML=ae),ee=S(L),Te(q.$$.fragment,L),te=S(L),G=p(L,"DIV",{class:!0});var ue=P(G);Q=p(ue,"BUTTON",{class:!0,"data-svelte-h":!0}),J(Q)!=="svelte-jkxxyi"&&(Q.textContent=le),r=S(ue),Y=p(ue,"BUTTON",{class:!0,"data-svelte-h":!0}),J(Y)!=="svelte-kafg3y"&&(Y.textContent=ke),ue.forEach(h),L.forEach(h),this.h()},h(){i(e,"class","px-10 pt-10 space-y-5"),i(E,"class","md:h4 text-primary-500 card-header"),i(v,"class","px-3 input"),i(v,"type","text"),i(v,"id","nome"),i(v,"name","nome"),i(v,"placeholder","ex. John da Silva"),i(u,"class","label space-y-2"),i(T,"class","label space-y-2"),i(n,"class","flex flex-col gap-3 md:w-1/2"),i(N,"class","md:h4 text-primary-500 card-header"),i(I,"class","px-3 input"),i(I,"type","email"),i(I,"placeholder","john@himarte.com.br"),i(I,"autocomplete","email"),i(I,"id","emailRemetente"),i(I,"name","emailRemetente"),i(D,"class","label space-y-2"),i(c,"class","md:h4 text-primary-500 card-header"),i(C,"class","px-3 input"),i(C,"type","text"),i(C,"id","vagaDesejada"),i(C,"name","vagaDesejada"),i(C,"placeholder","ex. Suporte Técnico"),i(d,"class","label space-y-2"),i(A,"class","flex flex-col gap-3 md:w-1/2"),i(l,"class","md:flex w-full gap-5"),i(K,"class","label space-y-2"),i(Q,"class","btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center"),i(Y,"class","btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center"),i(G,"class","flex w-full flex-col md:flex-row gap-5 md:justify-center"),i(s,"class","card flex flex-col rounded-3xl px-5 md:px-10 py-5 mx-2 my-5 gap-5 md:mx-28")},m(y,L){H(y,e,L),H(y,o,L),H(y,s,L),f(s,l),f(l,n),f(n,u),f(u,E),f(u,R),f(u,v),w(v,t[0]),f(n,z),f(n,T),f(l,U),f(l,A),f(A,D),f(D,N),f(D,O),f(D,I),w(I,t[1]),f(A,M),f(A,d),f(d,c),f(d,W),f(d,C),w(C,t[2]),f(s,X),f(s,K),f(s,ee),Le(q,s,null),f(s,te),f(s,G),f(G,Q),f(G,r),f(G,Y),se=!0,_e||(Me=[k(v,"input",t[5]),k(I,"input",t[6]),k(C,"input",t[7]),k(Y,"click",t[3])],_e=!0)},p(y,[L]){L&1&&v.value!==y[0]&&w(v,y[0]),L&2&&I.value!==y[1]&&w(I,y[1]),L&4&&C.value!==y[2]&&w(C,y[2]);const Z={};L&512&&(Z.$$scope={dirty:L,ctx:y}),q.$set(Z)},i(y){se||(j(q.$$.fragment,y),se=!0)},o(y){F(q.$$.fragment,y),se=!1},d(y){y&&(h(e),h(o),h(s)),ze(q),_e=!1,Re(Me)}}}let ct="";async function ut(t){return new Promise(e=>{setTimeout(()=>{e("E-mail enviado com sucesso!")},2e3)})}function ft(t,e,a){let o="",s="",l="",n=[];async function u(){const z="trabalheconosco@himarte.com.br",T=`Currículo para Trabalhe Conosco - ${l}`;console.log("E-mail enviado para:",z),console.log("Assunto:",T),console.log("Corpo do e-mail:",ct),console.log("Anexos:",n);const b=await ut();console.log("Resposta da API de envio de e-mail:",b)}function E(z){const T=z.target.files[0];n.push(T)}function V(){o=this.value,a(0,o)}function R(){s=this.value,a(1,s)}function v(){l=this.value,a(2,l)}return[o,s,l,u,E,V,R,v]}class _t extends be{constructor(e){super(),Ie(this,e,ft,it,ge,{})}}export{_t as component};
