import { s as supabase } from '../../chunks/supabaseClient_2vTXaSDn.mjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const sector = formData.get("sector");
  if (!email || typeof email !== "string") {
    return new Response("Email non valida.", { status: 400 });
  }
  if (!sector || typeof sector !== "string") {
    return new Response("Settore di attività non valido.", { status: 400 });
  }
  try {
    const { data, error } = await supabase.from("ateco").select("*").ilike("sector", `%${sector}%`);
    if (error) {
      throw error;
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Errore durante la ricerca su Supabase:", error);
    return new Response("Errore durante la ricerca.", { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
