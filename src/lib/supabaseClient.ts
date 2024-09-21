import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;

console.log('Inizializzo Supabase con URL:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseServiceKey);
