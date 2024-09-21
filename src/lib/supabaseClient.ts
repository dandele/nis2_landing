import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yakpcjsjffdyurpebpfn.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlha3BjanNqZmZkeXVycGVicGZuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjg1NTA3MCwiZXhwIjoyMDQyNDMxMDcwfQ.nuJyrNgOw0ga-p288ZPfve3f5_U1haQ6z434bHCLwY4';

console.log('Inizializzo Supabase con URL:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseServiceKey);
