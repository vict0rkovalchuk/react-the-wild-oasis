import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bucalgvzontulywslgzq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1Y2FsZ3Z6b250dWx5d3NsZ3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MjAzNTQsImV4cCI6MjA5MzE5NjM1NH0.llRJASxfuRzsOv35QeXINXr1cym3QDulwaAyPxEbEqM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
