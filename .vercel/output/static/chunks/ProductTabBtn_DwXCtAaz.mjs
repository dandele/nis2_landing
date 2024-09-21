import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_D7qnCaNf.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://screwfast.uk");
const $$ProductTabBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductTabBtn;
  const { id, dataTab, title, first } = Astro2.props;
  const BUTTON_CLASS = "flex w-full justify-center rounded-xl border border-transparent p-3 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 focus-visible:ring dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:focus:outline-none md:p-5";
  const HEADING_CLASS = "block text-center font-bold";
  const INACTIVE_HEADING_CLASS = "text-neutral-800 dark:text-neutral-200";
  return renderTemplate`<!-- Tab button element -->${maybeRenderHead()}<button type="button"${addAttribute(`${BUTTON_CLASS} ${first ? "active bg-neutral-100 hover:border-transparent dark:bg-white/[.05]" : ""}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-target")} role="tab"> <!-- Tab text --> <span${addAttribute(`${HEADING_CLASS} ${first ? "text-orange-400 dark:text-orange-300" : INACTIVE_HEADING_CLASS}`, "class")}> ${title} </span> </button>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/buttons/ProductTabBtn.astro", void 0);

export { $$ProductTabBtn as $ };
