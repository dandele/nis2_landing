import type { APIContext } from 'astro';

export async function GET({}: APIContext) {
  // Reindirizza alla pagina principale
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/',
    },
  });
}

export async function POST({ request }: APIContext) {
  console.log('Funzione POST chiamata');
  const formData = await request.formData();
  const inputValue = formData.get('inputValue');

  // Validazione semplice
  if (!inputValue) {
    return new Response('Valore non valido.', { status: 400 });
  }

  // Log per debug
  console.log('Inviando i seguenti dati a Make:', { inputValue });

  // Invia il valore a Make tramite webhook
  const webhookUrl = 'https://hook.eu1.make.com/2t95u44nkhouznc2tzxrpmdoc49rmhw3'; // Sostituisci con il tuo URL webhook

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify({ inputValue }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Errore nella risposta da Make');
    }

    // Reindirizza alla pagina di ringraziamento
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/thank-you',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response('Si è verificato un errore.', { status: 500 });
  }
}
