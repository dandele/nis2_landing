import { c as createAstro, a as createComponent, r as renderTemplate, u as unescapeHTML, b as addAttribute, d as renderComponent, F as Fragment, m as maybeRenderHead, e as renderScript, f as renderSlot, s as spreadAttributes, g as renderHead } from './astro/server_D7qnCaNf.mjs';
import 'kleur/colors';
import { g as getImage } from './_astro_assets_C1gE2Nyu.mjs';
import { i as icon } from './icon_BPETy23W.mjs';
import 'clsx';
/* empty css                          */

const ogImageSrc = new Proxy({"src":"/_astro/social.CWnIx2-K.png","width":1200,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/images/social.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/images/social.png");
							return target[name];
						}
					});

const SITE = {
  title: "ScrewFast",
  tagline: "Top-quality Hardware Tools",
  description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://screwfast.uk",
  author: "Emil Gulamov"
};
const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    }
  }
};
const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc
};

const faviconSvgSrc = new Proxy({"src":"/_astro/icon.B7KHh505.svg","width":512,"height":512,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/images/icon.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/images/icon.svg");
							return target[name];
						}
					});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$e = createAstro("https://screwfast.uk");
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Meta;
  const defaultProps = {
    meta: SITE.description,
    structuredData: SEO.structuredData
  };
  const {
    meta = defaultProps.meta,
    structuredData = defaultProps.structuredData
  } = Astro2.props;
  const URL = `${Astro2.site}`;
  const author = SITE.author;
  const canonical = Astro2.url.href;
  Astro2.url.pathname;
  const ogTitle = OG.title;
  const ogDescription = OG.description;
  const socialImageRes = await getImage({
    src: OG.image,
    width: 1200,
    height: 600
  });
  const socialImage = Astro2.url.origin + socialImageRes.src;
  const languages = {
    en: "",
    fr: "fr"
  };
  function createHref(lang, prefix, path) {
    const hasPrefix = path.startsWith(`/${prefix}/`);
    const basePath2 = hasPrefix ? path : `/${prefix}${path}`;
    const normalizedBasePath = basePath2.replace(/\/\/+/g, "/");
    return `${URL.slice(0, -1)}${normalizedBasePath}`;
  }
  const fullPath = Astro2.url.pathname;
  const alternateLanguageLinks = Object.entries(languages).map(([lang, prefix]) => {
    const basePath2 = lang === "en" ? fullPath.replace(/^\/fr\//, "/") : fullPath;
    const href = createHref(lang, prefix, basePath2);
    return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
  }).join("\n");
  const faviconSvg = await getImage({
    src: faviconSvgSrc,
    format: "svg"
  });
  const appleTouchIcon = await getImage({
    src: icon,
    width: 180,
    height: 180,
    format: "png"
  });
  return renderTemplate`<!-- Inject structured data into the page if provided. This data is formatted as JSON-LD, a method recommended by Google for structured data pass:
     https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data -->${structuredData && renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}<!-- Define the character set, description, author, and viewport settings --><meta charset="utf-8"><meta${addAttribute(meta, "content")} name="description"><meta name="web_author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="canonical"${addAttribute(canonical, "href")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(alternateLanguageLinks)}` })}<!-- Facebook Meta Tags --><meta property="og:locale" content="en_US"><meta property="og:url"${addAttribute(URL, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta content="1200" property="og:image:width"><meta content="600" property="og:image:height"><meta content="image/png" property="og:image:type"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(URL, "content")}><meta property="twitter:url"${addAttribute(URL, "content")}><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(ogDescription, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><!-- Links to the webmanifest and sitemap --><link rel="manifest" href="/manifest.json"><!-- https://docs.astro.build/en/guides/integrations-guide/sitemap/ --><link rel="sitemap" href="/sitemap-index.xml"><!-- Links for favicons --><link href="/favicon.ico" rel="icon" sizes="any" type="image/x-icon"><link${addAttribute(faviconSvg.src, "href")} rel="icon" type="image/svg+xml" sizes="any"><meta name="mobile-web-app-capable" content="yes"><link${addAttribute(appleTouchIcon.src, "href")} rel="apple-touch-icon"><link${addAttribute(appleTouchIcon.src, "href")} rel="shortcut icon"><!-- Set theme color --><meta name="theme-color" content="#facc15">`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/Meta.astro", void 0);

const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dark Theme Toggle Button --><!-- This button is shown when the light theme is active, and when clicked, it switches the theme to dark -->${maybeRenderHead()}<button type="button" aria-label="Dark Theme Toggle" class="hs-dark-mode group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 hs-dark-mode-active:hidden dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-orange-300 dark:focus:outline-none" data-hs-theme-click-value="dark"> <!-- The SVG displayed shows an abstract icon that represents the moon (dark theme) --> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> <!-- Light Theme Toggle Button --> <!-- This button is hidden by default and only appears when the dark theme is active, when clicked, it switches to the light theme --> </button> <button type="button" aria-label="Light Theme Toggle" class="hs-dark-mode group hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-orange-400 hs-dark-mode-active:flex dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-none" data-hs-theme-click-value="light"> <!-- The SVG displayed shows a standard sun icon that stands for the light theme --> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 8a2 2 0 1 0 4 4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> </button>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ThemeIcon.astro", void 0);

const $$Astro$d = createAstro("https://screwfast.uk");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { url, name } = Astro2.props;
  return renderTemplate`<!--
Re-usable link component for navigation bar. Highlights the active link
by comparing the current URL with the href of each link.
We assign an ID matching the URL for easy reference in our script.
If URL is '/' (home page), assign ID as 'home' 
-->${maybeRenderHead()}<a${addAttribute(url === "/" ? "home" : url.replace("/", ""), "id")}${addAttribute(url, "href")} data-astro-prefetch class="rounded-lg text-base font-medium text-neutral-600 outline-none ring-zinc-500 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-none md:py-3 md:text-sm 2xl:text-base"> ${name} </a> ${renderScript($$result, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/links/NavLink.astro", void 0);

const $$Astro$c = createAstro("https://screwfast.uk");
const $$EmailInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$EmailInput;
  const { label = Astro2.currentLocale === "fr" ? "Adresse e-mail" : "Email address", id, errorId } = Astro2.props;
  return renderTemplate`<!-- Container for the label, input, and validation message -->${maybeRenderHead()}<div> <!-- Label for the email input field --> <label${addAttribute(id, "for")} class="mb-2 block text-sm text-neutral-800 dark:text-neutral-200">${label}</label> <!-- Label for the email input field --> <div class="relative"> <!-- Email input field --> <input type="email"${addAttribute(id, "id")} name="email" autocomplete="email" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1" required${addAttribute(id, "aria-describedby")}> <!-- Hidden error icon --> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <!-- Validation message which is hidden by default --> <p class="mt-2 hidden text-xs text-red-600"${addAttribute(errorId, "id")}>
Please include a valid email address so we can get back to you
</p> </div>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/forms/input/EmailInput.astro", void 0);

const $$Astro$b = createAstro("https://screwfast.uk");
const $$PasswordInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$PasswordInput;
  const {
    label = "Password",
    forgot,
    id,
    errorId,
    content
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="flex items-center justify-between"> <label${addAttribute(id, "for")} class="mb-2 block text-sm text-neutral-800 dark:text-neutral-200">${label}</label> ${forgot ? renderTemplate`<button class="rounded-lg text-sm font-medium text-orange-400 decoration-2 outline-none ring-zinc-500 hover:underline focus-visible:ring dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-none dark:focus:ring-1" data-hs-overlay="#hs-toggle-between-modals-recover-modal">
Forgot password?
</button>` : ""} </div> <div class="relative"> <input type="password"${addAttribute(id, "id")} name="password" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1" required${addAttribute(errorId, "aria-describedby")}> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="mt-2 hidden text-xs text-red-600"${addAttribute(errorId, "id")}> ${content} </p> </div>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/forms/input/PasswordInput.astro", void 0);

const $$Astro$a = createAstro("https://screwfast.uk");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const { label = Astro2.currentLocale === "fr" ? "Me rappeler" : "Remember me", id } = Astro2.props;
  return renderTemplate`<!-- Container for the checkbox and its label -->${maybeRenderHead()}<div class="flex items-center"> <!-- Checkbox input --> <div class="flex"> <input${addAttribute(id, "id")} name="remember-me" type="checkbox" class="pointer-events-none mt-0.5 shrink-0 rounded border-neutral-200 text-neutral-600 focus:ring-yellow-400 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-yellow-400 dark:checked:bg-yellow-400 dark:focus:ring-offset-neutral-800"> </div> <!-- Label for the checkbox --> <div class="ms-3"> <label${addAttribute(id, "for")} class="text-sm text-neutral-800 dark:text-neutral-200">${label} ${renderSlot($$result, $$slots["default"])} </label> </div> </div>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/forms/input/Checkbox.astro", void 0);

const $$Astro$9 = createAstro("https://screwfast.uk");
const $$AuthBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AuthBtn;
  const { title } = Astro2.props;
  const baseClasses = "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring outline-none transition duration-300";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
  const hoverClasses = "hover:bg-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const disabledClasses = "disabled:pointer-events-none disabled:opacity-50";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
  return renderTemplate`<!-- Styled submit button with dynamic title -->${maybeRenderHead()}<button type="submit"${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${disabledClasses} ${ringClasses}`, "class")}>${title}</button>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/buttons/AuthBtn.astro", void 0);

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$GoogleBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GoogleBtn;
  const { title } = Astro2.props;
  const baseClasses = "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm dark:text-neutral-400 font-medium text-neutral-600 shadow-sm transition duration-300 focus-visible:ring outline-none";
  const borderClasses = "border border-neutral-200 dark:border-neutral-700";
  const bgColorClasses = "bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-900";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
  const googleSVG = `<svg
    class="h-auto w-4"
    width="46"
    height="47"
    viewBox="0 0 46 47"
    fill="none"
  >
    <path
      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
      fill="#4285F4"></path>
    <path
      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
      fill="#34A853"></path>
    <path
      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
      fill="#FBBC05"></path>
    <path
      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
      fill="#EB4335"></path>
  </svg>`;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${ringClasses}`, "class")}> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(googleSVG)}` })} ${title} </button>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/buttons/GoogleBtn.astro", void 0);

const $$LoginModal = createComponent(($$result, $$props, $$slots) => {
  const config = {
    id: "hs-toggle-between-modals-login-modal",
    // Modal IDENTIFIER
    title: "Sign in",
    // Main HEADING
    subTitle: "Don't have an account yet?",
    // Sub-Heading TEXT
    registerBtn: "Sign up here",
    // Text for REGISTRATION BUTTON
    registerBtnDataHS: "#hs-toggle-between-modals-register-modal"
    // TARGET LINK for registration button
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(config.id, "id")} class="hs-overlay absolute start-0 top-0 z-50 hidden h-full w-full hs-overlay-backdrop-open:bg-neutral-900/90"> <div class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"> <div class="mx-auto w-full max-w-md p-6"> <div class="mt-7 rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"> <div class="p-4 sm:p-7"> <div class="text-center"> <h2 class="block text-2xl font-bold text-neutral-800 dark:text-neutral-200"> ${config.title} </h2> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400"> ${config.subTitle} <button class="rounded-lg p-1 font-medium text-orange-400 decoration-2 outline-none ring-zinc-500 hover:underline focus-visible:ring dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-none"${addAttribute(config.registerBtnDataHS, "data-hs-overlay")}> ${config.registerBtn} </button> </p> </div> <div class="mt-5"> ${renderComponent($$result, "GoogleBtn", $$GoogleBtn, { "title": "Sign in with Google" })} <div class="flex items-center py-3 text-xs uppercase text-neutral-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-neutral-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-neutral-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
Or
</div> <!-- The container for the form --> <form> <!-- A grid layout for the form fields --> <div class="grid gap-y-4"> <!-- The email input field --> ${renderComponent($$result, "EmailInput", $$EmailInput, { "id": "login-email", "errorId": "login-email-error" })} <!-- The password input field --> ${renderComponent($$result, "PasswordInput", $$PasswordInput, { "forgot": true, "id": "password", "errorId": "login-password-error", "content": "8+ characters required" })} <!-- The remember-me checkbox --> ${renderComponent($$result, "Checkbox", $$Checkbox, { "id": "remember-me" })} <!-- The sign-in button --> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Sign in" })} </div> </form> </div> </div> </div> </div> </div> </div>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/forms/LoginModal.astro", void 0);

const $$RegisterModal = createComponent(($$result, $$props, $$slots) => {
  const config = {
    id: "hs-toggle-between-modals-register-modal",
    // Modal identifier
    title: "Sign up",
    // Main heading
    subTitle: "Already have an account?",
    // Sub-heading text
    loginBtn: "Sign in here",
    // Text for login button
    loginBtnDataHS: "#hs-toggle-between-modals-login-modal"
    // Target link for login button
  };
  return renderTemplate`<!-- Root element of the registration modal with the id and styling -->${maybeRenderHead()}<div${addAttribute(config.id, "id")} class="hs-overlay absolute start-0 top-0 z-50 hidden h-full w-full hs-overlay-backdrop-open:bg-neutral-900/90"> <div class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"> <div class="mx-auto w-full max-w-md p-6"> <div class="mt-7 max-h-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"> <div class="p-4 sm:p-7"> <div class="text-center"> <h2 class="block text-2xl font-bold text-neutral-800 dark:text-neutral-200"> ${config.title} </h2> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400"> ${config.subTitle} <!-- Button to toggle login modal --> <button class="rounded-lg p-1 font-medium text-orange-400 decoration-2 outline-none ring-zinc-500 hover:underline focus-visible:ring dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-none"${addAttribute(config.loginBtnDataHS, "data-hs-overlay")}> ${config.loginBtn} </button> </p> </div> <!-- The form for user registration --> <div class="mt-5"> <!-- Google signup button --> ${renderComponent($$result, "GoogleBtn", $$GoogleBtn, { "title": "Sign up with Google" })} <!-- Dividing line with 'Or' text --> <div class="flex items-center py-3 text-xs uppercase text-neutral-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-neutral-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-neutral-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
Or
</div> <!-- Registration form --> <form> <div class="grid gap-y-4"> <!-- Email input field --> ${renderComponent($$result, "EmailInput", $$EmailInput, { "id": "register-email", "errorId": "register-email-error" })} <!-- Password input field --> ${renderComponent($$result, "PasswordInput", $$PasswordInput, { "id": "create-password", "errorId": "register-password-error", "content": "8+ characters required" })} <!-- Password confirmation input field --> ${renderComponent($$result, "PasswordInput", $$PasswordInput, { "label": "Confirm Password", "id": "confirm-password", "errorId": "confirm-password-error", "content": "Password does not match the password" })} <!-- Checkbox with a label and a link for accepting the terms and conditions --> ${renderComponent($$result, "Checkbox", $$Checkbox, { "label": "I accept the ", ",": true, "id": "terms-agree" }, { "default": ($$result2) => renderTemplate` <a class="font-medium text-orange-400 decoration-2 hover:underline dark:text-orange-400 dark:focus:outline-none" href="#">Terms and Conditions</a> ` })} <!-- Submit button for the registration form --> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Sign up" })} </div> </form> </div> </div> </div> </div> </div> </div>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/forms/RegisterModal.astro", void 0);

const $$RecoverModal = createComponent(($$result, $$props, $$slots) => {
  const config = {
    id: "hs-toggle-between-modals-recover-modal",
    // Modal identifier
    title: "Forgot password?",
    // Main heading
    subTitle: "Remember your password?",
    // Sub-heading text
    loginBtn: "Sign in here",
    // Text for login button
    loginBtnDataHS: "#hs-toggle-between-modals-login-modal"
    // Target link for login button
  };
  return renderTemplate`<!-- Root element of the modal with id and styling -->${maybeRenderHead()}<div${addAttribute(config.id, "id")} class="hs-overlay absolute start-0 top-0 z-50 hidden h-full w-full hs-overlay-backdrop-open:bg-neutral-900/90"> <!-- Modal content container --> <div class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"> <div class="mx-auto w-full max-w-md p-6"> <!-- Actual box for the modal elements --> <div class="mt-7 rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"> <div class="p-4 sm:p-7"> <div class="text-center"> <h2 class="block text-2xl font-bold text-neutral-800 dark:text-neutral-200"> ${config.title} </h2> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400"> ${config.subTitle} <!-- Button that, when clicked, opens the login modal --> <button class="rounded-lg p-1 font-medium text-orange-400 decoration-2 outline-none ring-zinc-500 hover:underline focus-visible:ring dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-none"${addAttribute(config.loginBtnDataHS, "data-hs-overlay")}> ${config.loginBtn} </button> </p> </div> <div class="mt-5"> <!-- The form for password recovery --> <form> <div class="grid gap-y-4"> <!-- Email input field imported from EmailInput component --> ${renderComponent($$result, "EmailInput", $$EmailInput, { "id": "recover-email", "errorId": "recover-email-error" })} <!-- Reset password button imported from AuthBtn component --> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Reset password" })} </div> </form> </div> </div> </div> </div> </div> </div>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/forms/RecoverModal.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$LoginBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LoginBtn;
  const { title = "Log in" } = Astro2.props;
  const baseClasses = "flex items-center gap-x-2 text-base md:text-sm font-medium text-neutral-600 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
  const hoverClasses = "hover:text-orange-400 dark:hover:text-orange-300";
  const darkClasses = "dark:border-neutral-700 dark:text-neutral-400 dark:ring-zinc-200 dark:focus:outline-none";
  const mdClasses = "md:my-6 md:border-s md:border-neutral-300 md:ps-6";
  const txtSizeClasses = "2xl:text-base";
  const userSVG = `<svg
      class="h-4 w-4 flex-shrink-0"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>`;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(`${baseClasses} ${hoverClasses} ${darkClasses} ${mdClasses} ${txtSizeClasses}`, "class")} data-hs-overlay="#hs-toggle-between-modals-login-modal"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(userSVG)}` })} ${title} </button>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/buttons/LoginBtn.astro", void 0);

const $$Authentication = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Login Button -->${renderComponent($$result, "LoginBtn", $$LoginBtn, {})} <!-- Login Modal --> ${renderComponent($$result, "LoginModal", $$LoginModal, {})} <!-- Register Modal --> ${renderComponent($$result, "RegisterModal", $$RegisterModal, {})} <!-- Password Recovery Modal --> ${renderComponent($$result, "RecoverModal", $$RecoverModal, {})}`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/sections/misc/Authentication.astro", void 0);

const navBarLinks$1 = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" }
];
const footerLinks$1 = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" }
    ]
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" }
    ]
  }
];
const socialLinks$1 = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/"
};
const enStrings = {
  navBarLinks: navBarLinks$1,
  footerLinks: footerLinks$1,
  socialLinks: socialLinks$1
};

const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "Services", url: "/fr/services" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" }
];
const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/fr/products" },
      { name: "Services de Construction", url: "/fr/services" }
    ]
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" }
    ]
  }
];
const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#"
};
const frStrings = {
  navBarLinks,
  footerLinks,
  socialLinks
};

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$BrandLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BrandLogo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 521 226" fill="none"> <rect width="78.937" height="18.485" x="269" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 269 154.911)"></rect> <rect width="78.937" height="18.485" x="319" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 319 154.911)"></rect> <rect width="78.937" height="18.485" x="369.285" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 369.285 154.911)"></rect> <rect width="28.464" height="18.485" x="419.57" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 419.57 154.911)"></rect> <path class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" d="M499.804 128.068c7.03 2.636 6.885 12.63-.219 15.061l-18.951 6.483c-5.238 1.792-10.669-2.15-10.589-7.686l.196-13.514c.081-5.535 5.624-9.318 10.808-7.374l18.755 7.03Z"></path> <path class="fill-current text-neutral-700 dark:text-neutral-300" fill="currentColor" d="M141.808 83.584c.171 5.803-1.024 10.837-3.584 15.104-5.717 9.387-15.701 14.336-29.952 14.848-6.485.256-13.61-1.323-21.376-4.736l.256-19.328c1.28 1.024 2.944 2.219 4.992 3.584 3.67 2.475 7.808 3.712 12.416 3.712 12.203 0 18.304-4.352 18.304-13.056v-.256c0-4.01-2.219-7.296-6.656-9.856-2.389-1.365-6.827-2.987-13.312-4.864a137.675 137.675 0 0 1-8.32-2.816c-10.496-5.888-15.744-14.421-15.744-25.6v-.768c0-5.12 1.408-9.899 4.224-14.336 2.816-4.523 6.528-8.021 11.136-10.496 4.693-2.56 9.728-3.925 15.104-4.096 7.253-.17 14.08 1.195 20.48 4.096v18.304c-4.693-4.096-10.88-6.144-18.56-6.144-2.816 0-5.419.725-7.808 2.176-3.67 2.219-5.504 5.461-5.504 9.728 0 5.803 4.267 9.984 12.8 12.544 1.536.512 4.565 1.45 9.088 2.816 7.68 2.304 13.184 5.76 16.512 10.368 3.413 4.608 5.248 10.965 5.504 19.072Zm66.758 20.736c-6.656 6.4-14.549 9.6-23.68 9.6-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984 8.704 0 16.299 2.944 22.784 8.832l-10.368 13.952c-3.328-3.67-7.467-5.504-12.416-5.504-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904 0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992 5.12 0 9.344-1.963 12.672-5.888l11.008 13.568Zm42.82-41.6c-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904V112h-17.28V79.616c0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984v17.28Zm77.051 16.896a34.47 34.47 0 0 1-.384 5.12h-50.048c1.109 3.584 3.157 6.485 6.144 8.704 2.987 2.133 6.357 3.2 10.112 3.2 5.205 0 9.515-2.005 12.928-6.016l10.496 13.952c-6.571 6.229-14.379 9.344-23.424 9.344-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984s17.621 3.328 24.192 9.984c6.656 6.57 9.984 14.635 9.984 24.192Zm-19.328-7.808c-3.157-6.059-8.107-9.088-14.848-9.088-6.827 0-11.819 3.03-14.976 9.088h29.824Zm145.596 7.936c0 9.643-3.328 17.792-9.984 24.448-6.571 6.571-14.677 9.856-24.32 9.856-9.472 0-17.579-3.413-24.32-10.24-6.741 6.827-14.848 10.24-24.32 10.24-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448V45.568h17.28v34.176c0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992s8.661-1.664 11.904-4.992c3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v43.008h-.128c3.328 5.461 8.149 8.192 14.464 8.192 4.693 0 8.661-1.664 11.904-4.992 3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v34.176Z"></path> <path class="fill-current text-neutral-700 dark:text-neutral-300" fill="currentColor" d="M56.064 163.616H26.24V212H8.832V110.624h47.232v14.848H26.24v20.096h29.824v18.048ZM147.389 212h-18.304l-3.712-9.984c-6.827 8.021-15.531 12.032-26.112 12.032-9.557 0-17.664-3.328-24.32-9.984-6.57-6.656-9.856-14.72-9.856-24.192 0-7.253 2.048-13.781 6.144-19.584 4.096-5.888 9.557-10.069 16.384-12.544 4.01-1.451 7.936-2.176 11.776-2.176 7.253 0 13.781 2.091 19.584 6.272 5.888 4.096 10.069 9.557 12.544 16.384L147.389 212Zm-31.104-32.128c0-5.973-2.432-10.624-7.296-13.952-2.816-1.963-6.059-2.944-9.728-2.944-5.973 0-10.581 2.389-13.824 7.168-2.048 2.987-3.072 6.229-3.072 9.728 0 5.888 2.432 10.496 7.296 13.824 2.987 2.048 6.187 3.072 9.6 3.072 4.693 0 8.704-1.621 12.032-4.864 3.328-3.328 4.992-7.339 4.992-12.032Zm92.015 12.544c0 4.096-1.365 7.808-4.096 11.136-5.461 6.656-13.227 9.856-23.296 9.6-4.011-.085-8.405-.981-13.184-2.688-4.693-1.707-8.533-3.84-11.52-6.4l9.6-12.416c4.608 4.352 9.515 6.528 14.72 6.528h.384c2.133 0 4.053-.384 5.76-1.152 2.219-1.024 3.328-2.475 3.328-4.352v-.512c-.256-1.963-1.579-3.371-3.968-4.224-.939-.171-2.944-.555-6.016-1.152-3.84-.768-7.083-1.707-9.728-2.816-7.765-3.328-11.648-9.173-11.648-17.536 0-8.021 3.968-14.037 11.904-18.048 3.499-1.792 7.296-2.731 11.392-2.816 4.267-.085 8.704.64 13.312 2.176 5.291 1.792 9.045 4.139 11.264 7.04l-11.52 10.368c-2.987-2.987-6.229-4.48-9.728-4.48-5.461 0-8.192 1.792-8.192 5.376v.256c0 1.707 2.219 3.157 6.656 4.352.341.085 3.157.64 8.448 1.664 10.752 2.048 16.128 8.619 16.128 19.712v.384ZM251.511 212c-9.557 0-17.664-3.285-24.32-9.856-6.656-6.656-9.984-14.763-9.984-24.32v-67.2h17.28v34.944h17.024v14.72h-17.024v17.536c0 4.693 1.664 8.704 4.992 12.032 3.328 3.243 7.339 4.864 12.032 4.864V212Z"></path> </svg>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/BrandLogo.astro", void 0);

const languages = {
  en: "English",
  fr: "Français"
};

const Icons = {
  groups: {
    paths: [
      {
        d: "m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723Zm-243-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-180Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17ZM480-600ZM0-240v-53q0-39.464 42-63.232T150.398-380q12.158 0 23.38.5T196-377.273q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960-293v53H780v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400-390 350-366q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  books: {
    paths: [
      {
        d: "M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  verified: {
    paths: [
      {
        d: "m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  frame: {
    paths: [
      {
        d: "M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  tools: {
    paths: [
      {
        d: "M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  dashboard: {
    paths: [
      {
        d: "M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  house: {
    paths: [
      {
        d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
      }
    ],
    class: "h-6 w-6 flex-shrink-0 text-neutral-700 hs-tab-active:text-orange-400 dark:text-neutral-300 dark:hs-tab-active:text-orange-300 md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowUp: {
    paths: [
      {
        d: "m5 12 7-7 7 7"
      },
      {
        d: "M12 19V5"
      }
    ],
    class: "h-5 w-5 flex-shrink-0 text-orange-400 dark:text-orange-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  checkCircle: {
    paths: [
      {
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM13.707 8.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      }
    ],
    class: "h-5 w-5 shrink-0",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  bookmark: {
    paths: [
      {
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        class: "fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 group-hover:dark:text-red-400"
      }
    ],
    class: "h-6 w-6 fill-none transition duration-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  x: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  linkedIn: {
    paths: [
      {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  share: {
    paths: [
      {
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      }
    ],
    class: "h-4 w-4 group-hover:text-neutral-700",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  github: {
    paths: [
      {
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      }
    ],
    class: "w-4.5 h-4.5 transition flex-shrink-0 text-neutral-700 duration-300 group-hover:-translate-y-1",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  arrowRightStatic: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "size-4 flex-shrink-0",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      }
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6"
      }
    ],
    class: "block h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6"
      }
    ],
    class: "hidden h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  xFooter: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Twitter"
  },
  facebookFooter: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook"
  },
  githubFooter: {
    paths: [
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "GitHub"
  },
  googleFooter: {
    paths: [
      {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Google"
  },
  slackFooter: {
    paths: [
      {
        d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Slack"
  },
  quotation: {
    paths: [
      {
        d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
      }
    ],
    class: "absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-neutral-300 dark:text-neutral-700",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  question: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chatBubble: {
    paths: [
      {
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  envelopeOpen: {
    paths: [
      {
        d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  earth: {
    paths: [
      {
        d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
      }
    ],
    class: "w-4 h-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  guides: {
    paths: [
      {
        d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  puzzle: {
    paths: [
      {
        d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  rocket: {
    paths: [
      {
        d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  hammer: {
    paths: [
      {
        d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  sparks: {
    paths: [
      {
        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  community: {
    paths: [
      {
        d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chevronDown: {
    paths: [
      {
        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
      }
    ],
    class: "ms-2 size-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  }
};

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name } = Astro2.props;
  let icon = Icons[name] || {};
  let paths = icon.paths || [];
  return renderTemplate`${icon ? renderTemplate`${maybeRenderHead()}<svg${addAttribute(icon.class, "class")}${addAttribute(icon.height, "height")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(icon.width, "width")}${addAttribute(icon.fill, "fill")}${addAttribute(icon.clipRule, "clip-rule")}${addAttribute(icon.fillRule, "fill-rule")}${addAttribute(icon.stroke, "stroke")}${addAttribute(icon.strokeWidth, "stroke-width")}${addAttribute(icon.strokeLinecap, "stroke-linecap")}${addAttribute(icon.strokeLinejoin, "stroke-linejoin")}><title>${icon.title}</title>${paths.map((path) => renderTemplate`<path${addAttribute(path.d, "d")}${addAttribute(path.class || "", "class")}></path>`)}</svg>` : "Icon not found"}`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/icons/Icon.astro", void 0);

const $$LanguagePicker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hs-dropdown relative inline-flex"> <button id="hs-dropdown-default" type="button" aria-label="Change language" class="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg px-1.5 py-1.5 text-sm font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 dark:border-neutral-700 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-none"> ${renderComponent($$result, "Icon", $$Icon, { "name": "earth" })} <svg class="size-4 hs-dropdown-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg> </button> <div class="hs-dropdown-menu duration !left-[20%] !top-[98%] mt-2 hidden !transform-none rounded-lg bg-neutral-50 p-2 opacity-0 shadow-md transition-[opacity,margin] before:absolute before:-top-4 before:start-0 before:h-4 before:w-full after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800 md:!left-[90%] md:!top-[80%]" aria-labelledby="hs-dropdown-hover-event"> ${// Map through the list of languages, creating a link for each language
  Object.entries(languages).map(([lang, label]) => renderTemplate`<a class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"${addAttribute(`/${lang === "en" ? "" : lang}`, "href")}> ${label} </a>`)} </div> </div> <!--Import the necessary Dropdown plugin--> <!--https://preline.co/plugins/html/dropdown.html--> ${renderScript($$result, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/LanguagePicker.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/LanguagePicker.astro?astro&type=script&index=1&lang.ts")}`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/LanguagePicker.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://screwfast.uk");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  const strings = Astro2.currentLocale === "fr" ? frStrings : enStrings;
  const homeUrl = Astro2.currentLocale === "fr" ? "/fr" : "/";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', " ", " ", ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = `*{transition: unset !important;}`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> <!--Import the necessary Collapse and Overlay plugins--> <!--https://preline.co/plugins/html/collapse.html--> <!--https://preline.co/plugins/html/overlay.html--> ', ""], ["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', " ", " ", ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = \\`*{transition: unset !important;}\\`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> <!--Import the necessary Collapse and Overlay plugins--> <!--https://preline.co/plugins/html/collapse.html--> <!--https://preline.co/plugins/html/overlay.html--> ', ""])), maybeRenderHead(), addAttribute(homeUrl, "href"), renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-24" }), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), strings.navBarLinks.map((link) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "url": link.url, "name": link.name })}`), renderComponent($$result, "Authentication", $$Authentication, {}), renderComponent($$result, "LanguagePicker", $$LanguagePicker, {}), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), renderScript($$result, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/sections/navbar&footer/Navbar.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/sections/navbar&footer/Navbar.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$FooterSocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FooterSocialLink;
  const { url } = Astro2.props;
  const linkClass = "inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-none ring-zinc-500 hover:bg-neutral-500/10 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(linkClass, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/links/FooterSocialLink.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$EmailFooterInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EmailFooterInput;
  const {
    label = "Search",
    title = Astro2.currentLocale === "fr" ? "S'abonner" : "Subscribe",
    id = "footer-input"
  } = Astro2.props;
  const placeholder = Astro2.currentLocale === "fr" ? "Entrez votre email" : "Enter your email";
  return renderTemplate`${maybeRenderHead()}<div class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-neutral-200 p-2 dark:bg-neutral-800 sm:flex-row sm:gap-3"> <div class="w-full"> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(id, "id")} name="footer-input" class="block w-full rounded-lg border-transparent bg-neutral-100 px-4 py-3 text-sm text-neutral-600 focus:border-orange-400 focus:ring-orange-400 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-gray-300 dark:placeholder:text-neutral-300"${addAttribute(placeholder, "placeholder")}> </div> <a class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-orange-400 p-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-orange-500 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none dark:focus:ring-1 sm:w-auto" href="#"> ${title} </a> </div>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/ui/forms/input/EmailFooterInput.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FooterSection;
  const strings = Astro2.currentLocale === "fr" ? frStrings : enStrings;
  const sectionThreeTitle = Astro2.currentLocale === "fr" ? "Rester \xE0 jour" : "Stay up to date";
  const sectionThreeContent = Astro2.currentLocale === "fr" ? "Restez inform\xE9 des derniers outils et des offres exclusives." : "Stay updated with the latest tools and exclusive deals.";
  const crafted = Astro2.currentLocale === "fr" ? "Fabriqu\xE9 par" : "Crafted by";
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-neutral-300 dark:bg-neutral-900"> <div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl"> <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"> <div class="col-span-full lg:col-span-1"> <!-- Brand Logo --> ${renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-32" })} </div> <!-- An array of links for Product and Company sections --> ${strings.footerLinks.map((section) => renderTemplate`<div class="col-span-1"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${section.section} </h3> <ul class="mt-3 grid space-y-3"> ${section.links.map((link, index) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-none"> ${link.name} </a> ${section.section === "Company" && index === 2 ? renderTemplate`<span class="ms-1 inline rounded-lg bg-orange-500 px-2 py-1 text-xs font-bold text-neutral-50">
We're hiring!
</span>` : null} </li>`)} </ul> </div>`)} <div class="col-span-2"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${sectionThreeTitle} </h3> <form> ${renderComponent($$result, "EmailFooterInput", $$EmailFooterInput, {})} <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400"> ${sectionThreeContent} </p> </form> </div> </div> <div class="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex items-center justify-between"> <p class="text-sm text-neutral-600 dark:text-neutral-400">
© <span id="current-year"></span> ${SITE.title}. ${crafted} <a class="rounded-lg font-medium underline underline-offset-2 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-700 hover:decoration-dashed focus:outline-none focus-visible:ring dark:ring-zinc-200 dark:hover:text-neutral-300" href="https://sobstvennoai.dev" target="_blank" rel="noopener noreferrer">sobstvennoAI</a>.
</p> </div> <!-- Social Brands --> <div> ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.facebook }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "facebookFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.x }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "xFooter" })}` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.github }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "githubFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.google }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "googleFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.slack }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "slackFooter" })} ` })} </div> </div> ${renderScript($$result, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/sections/navbar&footer/FooterSection.astro?astro&type=script&index=0&lang.ts")} </div> </footer>`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/components/sections/navbar&footer/FooterSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://screwfast.uk");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = SITE.title, meta, structuredData, lang = "en" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<!--\nThis is the main structure for the page.\nWe set the language of the page to English and add classes for scrollbar and scroll behavior.\n--><html", ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16 astro-ouamjn2i"> <head><!-- Adding metadata to the HTML document -->', "<!-- Define the title of the page --><title>", '</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem("hs_theme") === "dark" ||\n        (!("hs_theme" in localStorage) &&\n          window.matchMedia("(prefers-color-scheme: dark)").matches)\n      ) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script>', "", '</head> <body class="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 astro-ouamjn2i"> <!--\n    Setting up the main structure of the page.\n    The Navbar is placed at the top, with a slot for the main content and FooterSection at the bottom.\n    --> <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 astro-ouamjn2i"> ', ' <main class="astro-ouamjn2i"> ', " </main> </div> ", "  </body> </html>"])), addAttribute(lang, "lang"), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "class": "astro-ouamjn2i" }), title, renderScript($$result, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "class": "astro-ouamjn2i" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "class": "astro-ouamjn2i" }));
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/layouts/MainLayout.astro", void 0);

export { $$Icon as $, SITE as S, $$MainLayout as a, $$AuthBtn as b };
