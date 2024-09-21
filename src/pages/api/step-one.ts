import type { APIContext } from 'astro';

export async function POST({ request }: APIContext) {
  const formData = await request.formData();
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return new Response('Email non valida.', { status: 400 });
  }

  // Reindirizza l'utente alla pagina del secondo step, passando l'email come parametro di query
  return new Response(null, {
    status: 302,
    headers: {
      Location: `/step-two?email=${encodeURIComponent(email)}`,
    },
  });
}
