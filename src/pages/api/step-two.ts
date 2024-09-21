import type { APIContext } from 'astro';
import { supabase } from '../../lib/supabaseClient';

export async function POST({ request }: APIContext) {
  const formData = await request.formData();
  const email = formData.get('email');
  const sector = formData.get('sector');
  // Ottieni altri dati dal form

  if (!email || typeof email !== 'string') {
    return new Response('Email non valida.', { status: 400 });
  }

  if (!sector || typeof sector !== 'string') {
    return new Response('Settore di attività non valido.', { status: 400 });
  }

  // Esegui una query sul database Supabase
  try {
    const { data, error } = await supabase
      .from('ateco') // Sostituisci con il nome della tua tabella
      .select('*')
      .ilike('sector', `%${sector}%`); // Utilizza il filtro appropriato

    if (error) {
      throw error;
    }

    // Restituisci i dati come risposta JSON
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Errore durante la ricerca su Supabase:', error);
    return new Response('Errore durante la ricerca.', { status: 500 });
  }
}
