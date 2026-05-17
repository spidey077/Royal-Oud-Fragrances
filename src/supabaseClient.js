import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id') || supabaseUrl === 'your_supabase_project_url') {
    console.warn(
        '⚠️ Supabase credentials are not configured or are still placeholders. Please update VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
    );
}

// Fallback to avoid crashes during configuration
const finalUrl = supabaseUrl && !supabaseUrl.includes('your-project-id') && supabaseUrl !== 'your_supabase_project_url'
    ? supabaseUrl
    : 'https://placeholder.supabase.co';

const finalKey = supabaseAnonKey && supabaseAnonKey !== 'your_supabase_anon_key_here' && supabaseAnonKey !== 'your_supabase_anon_key'
    ? supabaseAnonKey
    : 'placeholder-key';

export const supabase = createClient(finalUrl, finalKey);
