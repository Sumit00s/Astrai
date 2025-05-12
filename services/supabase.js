import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your exportdatabase
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_KEY)