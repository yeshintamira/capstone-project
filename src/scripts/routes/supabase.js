import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pgvyextmpgrjelznttvz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndnlleHRtcGdyamVsem50dHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1ODU4NDksImV4cCI6MjAzNDE2MTg0OX0.b6QtmT7ArzF5W3ACO5JZ33WIsgmEtvjHD3uW2qhCdjY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
