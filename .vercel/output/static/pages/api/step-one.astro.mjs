export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  if (!email || typeof email !== "string") {
    return new Response("Email non valida.", { status: 400 });
  }
  return new Response(null, {
    status: 302,
    headers: {
      Location: `/step-two?email=${encodeURIComponent(email)}`
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
