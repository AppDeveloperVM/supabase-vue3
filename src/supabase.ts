import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://wmzhlpusxveejjscjmab.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtemhscHVzeHZlZWpqc2NqbWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MzMyOTQsImV4cCI6MjA1NjAwOTI5NH0.v8QFbcF0sqUH3PO8Dgw3MbFuy6m6xhriqDXLliT7iVA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
