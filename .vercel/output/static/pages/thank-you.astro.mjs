/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D7qnCaNf.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../chunks/MainLayout_BUnOXSiw.mjs';
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="thank-you" class="py-16 bg-white dark:bg-gray-800"> <div class="container mx-auto px-4"> <h1 class="text-3xl font-bold text-center mb-8">Grazie!</h1> <p class="text-center text-lg">
La tua richiesta è stata inviata con successo.
</p> </div> </section> ` })}`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/pages/thank-you.astro", void 0);

const $$file = "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
