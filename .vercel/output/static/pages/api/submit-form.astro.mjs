export { renderers } from '../../renderers.mjs';

async function GET({}) {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/"
    }
  });
}
async function POST({ request }) {
  console.log("Funzione POST chiamata");
  const formData = await request.formData();
  const inputValue = formData.get("inputValue");
  if (!inputValue) {
    return new Response("Valore non valido.", { status: 400 });
  }
  console.log("Inviando i seguenti dati a Make:", { inputValue });
  const webhookUrl = "https://hook.eu1.make.com/2t95u44nkhouznc2tzxrpmdoc49rmhw3";
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      body: JSON.stringify({ inputValue }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error("Errore nella risposta da Make");
    }
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/thank-you"
      }
    });
  } catch (error) {
    console.error(error);
    return new Response("Si è verificato un errore.", { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
