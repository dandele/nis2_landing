/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D7qnCaNf.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../chunks/MainLayout_BUnOXSiw.mjs';
import { s as supabase } from '../chunks/supabaseClient_2vTXaSDn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$StepTwo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StepTwo;
  const email = Astro2.url.searchParams.get("email");
  if (!email) {
    throw new Error("Email non fornita. Torna alla pagina precedente e inserisci la tua email.");
  }
  let sector = "";
  let atecoCode = "";
  let numberOfEmployees = "";
  let annualRevenue = "";
  let hasSector = false;
  let hasAtecoCode = false;
  let conditionsMet = false;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    sector = formData.get("sector");
    atecoCode = formData.get("atecoCode");
    numberOfEmployees = formData.get("numberOfEmployees");
    annualRevenue = formData.get("annualRevenue");
    hasSector = Boolean(sector && typeof sector === "string" && sector.trim() !== "");
    hasAtecoCode = Boolean(atecoCode && typeof atecoCode === "string" && atecoCode.trim() !== "");
    if (!hasSector && !hasAtecoCode) {
      throw new Error("Per favore, inserisci almeno il Settore di Attivit\xE0 o il Codice ATECO.");
    }
    if (!numberOfEmployees || isNaN(Number(numberOfEmployees))) {
      throw new Error("Numero di dipendenti non valido.");
    }
    if (!annualRevenue || isNaN(Number(annualRevenue))) {
      throw new Error("Fatturato annuale non valido.");
    }
    const numEmployees = Number(numberOfEmployees);
    const revenue = Number(annualRevenue);
    const isRevenueValid = revenue > 10;
    const isEmployeesValid = numEmployees > 50;
    let hasMatch = false;
    try {
      console.log("Eseguo la query su Supabase con i dati inseriti dall'utente.");
      let query = supabase.from("ateco").select("*");
      if (hasSector && hasAtecoCode) {
        query = query.or(`codice_ateco.eq.${atecoCode},sector.ilike.%${sector}%`);
      } else if (hasAtecoCode) {
        query = query.eq("codice_ateco", atecoCode);
      } else if (hasSector) {
        query = query.ilike("sector", `%${sector}%`);
      }
      const { data, error } = await query;
      if (error) {
        console.error("Errore dalla query Supabase:", error);
        throw error;
      }
      console.log("Risultati ottenuti da Supabase:", data);
      hasMatch = data.length > 0;
      conditionsMet = isRevenueValid && isEmployeesValid && hasMatch;
    } catch (error) {
      console.error("Errore durante la ricerca su Supabase:", error);
      if (error instanceof Error) {
        throw new Error(`Errore durante la ricerca: ${error.message}`);
      } else {
        throw new Error("Errore durante la ricerca: errore sconosciuto.");
      }
    }
  }
  return renderTemplate`<!-- Il tuo template HTML -->---
${renderComponent($$result, "Layout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="py-16 min-h-screen flex items-center justify-center"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-center mb-8 text-neutral-700 dark:text-neutral-300">I tuoi risultati</h2>${Astro2.request.method !== "POST" ? renderTemplate`<!-- Form -->
        <!-- ... Il form aggiornato come mostrato sopra ... -->` : renderTemplate`<!-- Risultato -->
        <div class="text-center">${conditionsMet ? renderTemplate`<p class="text-xl font-bold mb-4 text-neutral-700 dark:text-neutral-300">Ok, sembra che la tua azienda sia coinvolta dalla direttiva NIS2!</p>
            <p class="text-xl font-bold mb-4 text-neutral-700 dark:text-neutral-300">Ma niente ansia, ci siamo noi a farti vedere come puoi essere in regola con la direttiva NIS2!</p>` : renderTemplate`<p class="text-xl font-bold mb-4 text-neutral-700 dark:text-neutral-300">Tutto bene, dai, sembra che la tua azienda non sia coinvolta dalla direttiva NIS2.</p>
            <p class="text-xl font-bold mb-4 text-neutral-700 dark:text-neutral-300">Ma vale lo stesso per i tuoi clienti?.</p>`}<p class="text-lg mb-4 text-neutral-700 dark:text-neutral-300">Hai inserito i seguenti dati:</p><ul class="list-disc pl-5 inline-block text-left text-neutral-700 dark:text-neutral-300"><li><strong>Email:</strong>${email}</li>${hasSector && renderTemplate`<li><strong>Settore di Attività:</strong>${sector}</li>`}${hasAtecoCode && renderTemplate`<li><strong>Codice ATECO:</strong>${atecoCode}</li>`}<li><strong>Numero di Dipendenti:</strong>${numberOfEmployees}</li><li><strong>Fatturato Annuale:</strong>${annualRevenue} milioni di euro</li></ul></div>`}</div></section>` })}`;
}, "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/pages/step-two.astro", void 0);

const $$file = "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/pages/step-two.astro";
const $$url = "/step-two";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StepTwo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
