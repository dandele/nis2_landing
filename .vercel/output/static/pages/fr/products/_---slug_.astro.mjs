/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderScript, m as maybeRenderHead } from '../../../chunks/astro/server_D7qnCaNf.mjs';
import 'kleur/colors';
import { S as SITE, a as $$MainLayout } from '../../../chunks/MainLayout_BUnOXSiw.mjs';
import { $ as $$ProductTabBtn } from '../../../chunks/ProductTabBtn_DwXCtAaz.mjs';
import { $ as $$PrimaryCTA } from '../../../chunks/PrimaryCTA_C3-L1v00.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_C1gE2Nyu.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_DUFY5cVT.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://screwfast.uk");
async function getStaticPaths() {
  const productEntries = await getCollection(
    "products",
    ({ id }) => id.startsWith("fr/")
  );
  return productEntries.map((product) => {
    const slugWithoutLang = product.slug.replace(/^fr\//, "");
    return {
      params: { lang: "fr", slug: slugWithoutLang },
      props: { product }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { product } = Astro2.props;
  const pageTitle = `${product.data.title} | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="overlay" class="fixed inset-0 bg-neutral-200 dark:bg-neutral-800"></div> <section class="mx-auto flex max-w-[85rem] flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <p id="fadeText" class="mb-8 max-w-prose text-pretty font-light text-neutral-700 dark:text-neutral-300 sm:text-xl"> ${product.data.main.content} </p> </div> <div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0"> <div id="fadeInUp"> <h1 class="block text-4xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-200 sm:text-5xl md:text-6xl lg:text-7xl"> ${product.data.title} </h1> <p class="text-lg text-neutral-600 dark:text-neutral-400"> ${product.data.description} </p> </div> <div> ${renderComponent($$result2, "Image", $$Image, { "id": "fadeInMoveRight", "src": product.data.main.imgMain, "class": "w-[600px]", "alt": product.data.main.imgAlt, "format": "avif", "loading": "eager" })} </div> </div> </section> <div class="mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14"> <nav class="mx-auto grid max-w-6xl gap-y-px sm:flex sm:gap-x-4 sm:gap-y-0" aria-label="Tabs" role="tablist"> ${product.data.tabs.map((tab, index) => renderTemplate`${renderComponent($$result2, "ProductTabBtn", $$ProductTabBtn, { "title": tab.title, "id": tab.id, "dataTab": tab.dataTab, "first": index === 0 })}`)} </nav> <div class="mt-12 md:mt-16"> <div id="tabs-with-card-1" role="tabpanel"> <div class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14"> <div class="grid gap-12 md:grid-cols-2"> <div class="lg:w-3/4"> <h2 class="text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:leading-tight lg:text-4xl"> ${product.data.longDescription.title} </h2> <p class="mt-3 text-pretty text-neutral-600 dark:text-neutral-400"> ${product.data.longDescription.subTitle} </p> <p class="mt-5"> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": product.data.longDescription.btnTitle, "url": product.data.longDescription.btnURL })} </p> </div> <div class="space-y-6 lg:space-y-10"> ${product.data.descriptionList.map((list) => renderTemplate`<div class="flex"> <div> <h3 class="text-base font-bold text-neutral-800 dark:text-neutral-200 sm:text-lg"> ${list.title} </h3> <p class="mt-1 text-neutral-600 dark:text-neutral-400"> ${list.subTitle} </p> </div> </div>`)} </div> </div> </div> </div> <div id="tabs-with-card-2" class="hidden" role="tabpanel"> <div class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14"> <div class="grid w-full grid-cols-1 gap-x-16 md:grid-cols-2"> <div class="max-w-md space-y-6"> ${product.data.specificationsLeft.map((spec) => renderTemplate`<div> <h3 class="block font-bold text-neutral-800 dark:text-neutral-200"> ${spec.title} </h3> <p class="text-neutral-600 dark:text-neutral-400"> ${spec.subTitle} </p> </div>`)} </div> ${product.data.specificationsRight ? renderTemplate`<div class="mt-6 max-w-md space-y-6 md:ml-auto md:mt-0"> ${product.data.specificationsRight?.map((spec) => renderTemplate`<div> <h3 class="block font-bold text-neutral-800 dark:text-neutral-200"> ${spec.title} </h3> <p class="text-neutral-600 dark:text-neutral-400"> ${spec.subTitle} </p> </div>`)} </div>` : product.data.tableData ? renderTemplate`<div class="mt-6 space-y-6 md:ml-auto md:mt-0"> <div class="flex flex-col"> <div class="-m-1.5 overflow-x-auto"> <div class="inline-block min-w-full p-1.5 align-middle"> <div class="overflow-hidden"> <table class="min-w-full divide-y divide-neutral-300 dark:divide-neutral-700"> <thead> <tr> ${product.data.tableData?.[0].feature?.map(
    (header) => renderTemplate`<th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-neutral-500 dark:text-neutral-500"> ${header} </th>`
  )} </tr> </thead> <tbody class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${product.data.tableData?.map(
    (row) => (
      // Wrap each row's content in a separate <tr> element
      row.description.map((rowData) => renderTemplate`<tr>  ${rowData.map((cellValue) => (
        // Render each cell value in its own <td> element
        renderTemplate`<td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-600 dark:text-neutral-400"> ${cellValue} </td>`
      ))} </tr>`)
    )
  )} </tbody> </table> </div> </div> </div> </div> </div>` : null} </div> </div> </div> </div> </div> <div id="tabs-with-card-3" class="hidden" role="tabpanel"> <div class="mx-auto mb-20 flex w-full md:mb-28 2xl:w-4/5"> <div class="relative left-12 top-12 z-10 overflow-hidden rounded-xl shadow-lg md:left-12 md:top-16 md:-ml-12 lg:ml-0"> ${product.data.blueprints.first && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": product.data.blueprints.first, "class": "h-full w-full object-cover object-center", "alt": "Blueprint Illustration", "format": "avif" })}`} </div> <div class="relative right-12 overflow-hidden rounded-xl shadow-xl"> ${product.data.blueprints.second && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": product.data.blueprints.second, "class": "h-full w-full object-cover object-center", "alt": "Blueprint Illustration", "format": "avif" })}`} </div> </div> </div> ` })} ${renderScript($$result, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/pages/fr/products/[...slug].astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/pages/fr/products/[...slug].astro?astro&type=script&index=1&lang.ts")}`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/pages/fr/products/[...slug].astro", void 0);

const $$file = "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/pages/fr/products/[...slug].astro";
const $$url = "/fr/products/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
