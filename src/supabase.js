import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
console.log(supabaseUrl, supabaseAnonKey);

export default createClient(supabaseUrl, supabaseAnonKey);
