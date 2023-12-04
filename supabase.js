import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ceenmjtthgjntnyrlnqe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlZW5tanR0aGdqbnRueXJsbnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNTE5MTgsImV4cCI6MjAxNjkyNzkxOH0.uRUtH5SKDKI_vAqFsJMXIzR7InNVt0rDbuXELLDhYKA";

export const supabase = createClient(supabaseUrl, supabaseKey);
