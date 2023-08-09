import { createClient } from "@refinedev/supabase";

const supabaseUrl = "https://cyorlzgnhgkwcveapcqw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5b3JsemduaGdrd2N2ZWFwY3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2MDYyMTYsImV4cCI6MjAwNzE4MjIxNn0.9aJeqh21Db0VIt-PU87Cop5zeuta31vuwkMDT5EfgHk";

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
