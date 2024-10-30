import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jlpthaynezxnijlwhbvn.supabase.co";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://jlpthaynezxnijlwhbvn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpscHRoYXluZXp4bmlqbHdoYnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMzYyNzUsImV4cCI6MjA0MzgxMjI3NX0.sPHNDGTXLH2Fog1DJ8hj3K2dCyjwmpjCsWxcp8MQpWQ"
);

export default supabase;
