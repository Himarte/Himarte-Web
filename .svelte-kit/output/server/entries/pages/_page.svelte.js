import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, h as each } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Plus$1 = Plus;
const planetaVenus = "/_app/immutable/assets/venus.LgamJeNX.svg";
const planetaUrano = "/_app/immutable/assets/urano.rvjWFB8N.png";
const planetaSaturno = "/_app/immutable/assets/saturno.PyrJ_q7J.png";
const planetaJupiter = "/_app/immutable/assets/jupiter.lGmw94e_.svg";
const planetaMarte = "/_app/immutable/assets/marte.cKE68kCo.svg";
const css$1 = {
  code: "@keyframes svelte-1ubpan1-rotate{from{transform:rotate(3deg)}to{transform:rotate(-2deg)}}.rotate.svelte-1ubpan1{animation:svelte-1ubpan1-rotate 1s infinite alternate}",
  map: null
};
const PlanetaCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nome } = $$props;
  let { imagem } = $$props;
  let { megas } = $$props;
  let { preco } = $$props;
  let { blipClient } = $$props;
  if ($$props.nome === void 0 && $$bindings.nome && nome !== void 0)
    $$bindings.nome(nome);
  if ($$props.imagem === void 0 && $$bindings.imagem && imagem !== void 0)
    $$bindings.imagem(imagem);
  if ($$props.megas === void 0 && $$bindings.megas && megas !== void 0)
    $$bindings.megas(megas);
  if ($$props.preco === void 0 && $$bindings.preco && preco !== void 0)
    $$bindings.preco(preco);
  if ($$props.blipClient === void 0 && $$bindings.blipClient && blipClient !== void 0)
    $$bindings.blipClient(blipClient);
  $$result.css.add(css$1);
  return `<div class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border border-primary-500/60 bg-transparent p-6 hover:border-primary-600"><img${add_attribute("src", imagem, 0)}${add_attribute("alt", `Planeta ${nome}`, 0)} class="absolute bottom-[73%] left-[75%] w-28 rotate-12 rotate svelte-1ubpan1"> <div><h5 class="text-4xl font-bold text-primary-600">${escape(nome)}</h5> <div class="flex flex-col items-baseline text-white"><span class="text-5xl font-extrabold tracking-tight">${escape(megas)} <span class="text-3xl font-extrabold tracking-tight" data-svelte-h="svelte-1xf5qbq">MEGAS</span></span> <span class="flex">${validate_component(Plus$1, "Plus").$$render($$result, { color: "#EF562F" }, {}, {})} ROTEADOR</span></div></div> <div class="flex flex-col"><span class="flex items-baseline justify-center text-white"><span class="text-2xl font-semibold text-primary-600" data-svelte-h="svelte-oijhfr">R$</span> <span class="text-4xl font-extrabold tracking-tight">${escape(preco)}</span> <span class="text-2xl font-extrabold tracking-tight text-primary-600" data-svelte-h="svelte-1ui1613">,</span> <span class="text-2xl font-extrabold tracking-tight" data-svelte-h="svelte-11r6zgv">90</span> <span class="ms-1 text-xl font-normal text-gray-400" data-svelte-h="svelte-1lk4ouo">/Mes</span></span> <button class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary" data-svelte-h="svelte-grdolt">Saber mais</button></div> </div>`;
});
const planetaPlutao = "/_app/immutable/assets/plutao.pmIQT7Uz.svg";
const imgMedlife = "/_app/immutable/assets/logo-medlife.KSjPFLmS.svg";
const imgSicredi = "/_app/immutable/assets/logo-sicredi.UUMXRKbk.svg";
const imgRbs = "/_app/immutable/assets/logo-rbs.Qtt4jmQn.svg";
const imgUnimed = "/_app/immutable/assets/logo-unimed.ZYxfRq3N.svg";
const MainImg = "/_app/immutable/assets/hi-astronauta-main.ffRGJgfk.png";
const MiniAstro = "/_app/immutable/assets/mini-astro.BdMhEHk3.png";
const Wave1t = "/_app/immutable/assets/wave1t 2.1Jf7W9yH.svg";
const seta = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABQCAYAAABbAybgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEdmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIzLTEyLTI5PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmE3NDRhMmZiLTRmZmUtNDQ0MC05ZjEwLTg1YWUzYjYwMjc2MDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5EZXNpZ24gc2VtIG5vbWUgLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlv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";
const ClienteItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { alt } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<img${add_attribute("src", img, 0)}${add_attribute("alt", alt, 0)} class="card flex w-40 items-center justify-center rounded-3xl">`;
});
const ClienteList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clientes } = $$props;
  if ($$props.clientes === void 0 && $$bindings.clientes && clientes !== void 0)
    $$bindings.clientes(clientes);
  return `<section class="flex flex-col gap-10 py-16"><h3 class="fontSpace flex items-center justify-center text-center text-2xl md:text-4xl" data-svelte-h="svelte-lyvn3t">Nossos clientes</h3> <div class="flex flex-wrap items-center justify-center gap-4">${each(clientes, (cliente) => {
    return `${validate_component(ClienteItem, "ClienteItem").$$render($$result, { img: cliente.img, alt: cliente.alt }, {}, {})}`;
  })}</div></section>`;
});
const css = {
  code: "@keyframes svelte-qyg7r9-vibate{0%{box-shadow:0 0px 2rem 0.1rem #eb4f27/50}25%{box-shadow:0 0px 2rem 0.1rem #eb4f27}50%{box-shadow:0 0px 2rem 0.1rem #eb4f27/80}75%{box-shadow:0 0px 2rem 0.1rem #eb4f27}100%{box-shadow:0 0px 2rem 0.1rem #eb4f27/50}}.vibrate.svelte-qyg7r9{animation:svelte-qyg7r9-vibate 3s ease-in-out infinite}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let clientes = [
    { img: imgMedlife, alt: "Logo Medlife" },
    { img: imgSicredi, alt: "Logo Sicredi" },
    { img: imgRbs, alt: "Logo RBS" },
    { img: imgUnimed, alt: "Logo unimed" }
  ];
  let fraseDigitada = "";
  let blipClient;
  $$result.css.add(css);
  return `<picture class="flex h-screen items-end justify-center bg-cover bg-center bg-no-repeat pb-40" style="${"background-image: url(" + escape(MainImg, true) + ")"}"><p class="fontSpace text-center text-2xl font-bold md:text-6xl">${escape(fraseDigitada)}</p></picture> <img${add_attribute("src", Wave1t, 0)} alt="Wave1" class="flex w-full opacity-30"> <section class="flex flex-col items-center justify-center gap-10 p-10 md:pt-20"><div class="flex flex-col gap-10 md:flex-row"> <div class="relative"><figure class="absolute -left-[5.5rem] -top-[3.5rem] hidden w-52 -rotate-[20deg] sm:flex vibate" data-svelte-h="svelte-qssyzi"><img${add_attribute("src", seta, 0)} alt="Seta indicando o melhor preço" class="w-16 -rotate-6"> <figcaption class="absolute right-[1.3rem] bg-primary-800/40 -top-[0.9rem] rounded-xl border-2 px-2 text-xl font-bold text-white shadow-[0_0px_2rem_0.1rem] shadow-primary-700 hover:border-2 hover:border-white vibrate svelte-qyg7r9">Melhor Preço</figcaption></figure> ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaSaturno,
      nome: "Saturno",
      megas: "400",
      preco: "99"
    },
    {},
    {}
  )}</div> ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaJupiter,
      nome: "Jupiter",
      megas: "700",
      preco: "149"
    },
    {},
    {}
  )} ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaMarte,
      nome: "Marte",
      megas: "1",
      preco: "199"
    },
    {},
    {}
  )}</div> <div class="flex flex-col gap-10 md:flex-row">${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaVenus,
      nome: "Venus",
      megas: "90",
      preco: "79"
    },
    {},
    {}
  )} ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaUrano,
      nome: "Urano",
      megas: "120",
      preco: "89"
    },
    {},
    {}
  )} ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaPlutao,
      nome: "Plutão",
      megas: "60",
      preco: "59"
    },
    {},
    {}
  )}</div></section> ${validate_component(ClienteList, "ClienteList").$$render($$result, { clientes }, {}, {})} <section class="flex h-[36rem] px-5 md:px-10 md:h-[50rem] md:justify-around" data-svelte-h="svelte-1ivul2z"><img${add_attribute("src", MiniAstro, 0)} alt="mini astro" class="hidden md:flex md:w-[35rem]"> <article class="flex w-[55rem] flex-col items-center justify-center gap-5 md:gap-10"><h1 class="fontSpace flex items-center justify-center text-center text-2xl md:text-4xl">Quem somos?</h1> <p class="text-md p-5 text-justify md:text-2xl">Bem-vindo à Himarte, sua porta de entrada para o futuro digital! Somos mais do que um
            provedor de internet, somos pioneiros em conectividade. Na Himarte, a experiência do
            cliente é nossa prioridade, e nosso compromisso com a mais alta qualidade reflete-se em
            cada byte que entregamos. Exploramos novos horizontes no universo digital, não apenas
            oferecemos internet confiável, mas convidamos você a &quot;Dizer Hi para o futuro&quot;.</p> <p class="text-md p-5 text-justify md:text-2xl">Na Himarte, <span class="uppercase underline decoration-primary-600">o futuro é aqui</span>!</p></article> </section>`;
});
export {
  Page as default
};
