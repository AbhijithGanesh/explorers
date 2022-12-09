import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string | undefined =
  "https://tqodfyadkocrkvniakxp.supabase.co";
const supabaseAnonKey: string | undefined =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxb2RmeWFka29jcmt2bmlha3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU4MzMwNTUsImV4cCI6MTk3MTQwOTA1NX0.k67wgyYXyu28YUu-cSErTJApvYnXocrdkbhu7lv-1kE";

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
