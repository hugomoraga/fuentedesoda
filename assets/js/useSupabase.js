const { createClient } = supabase;
import useAuthUser from "./useAuthUser.js";


const supabaseUrl = 'https://ncjymzvhdpnxtbalacvu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5janltenZoZHBueHRiYWxhY3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ4OTg0MjcsImV4cCI6MTk2MDQ3NDQyN30.H5vtVB1lI3Q4C7rvs8WrsdDnBENSldAmh3UA95avm7I'

const supabase = createClient(supabaseUrl, supabaseAnonKey);

supabase.auth.onAuthStateChange((event, session) => {
    // the "event" is a string indicating what trigger the state change (ie. SIGN_IN, SIGN_OUT, etc)
    // the session contains info about the current session most importanly the user dat
    const { user } = useAuthUser();
  
    // if the user exists in the session we're logged in
    // and we can set our user reactive ref
    user.value = session?.user || null;
  });
  
  // expose supabase client
  export default function useSupabase() {
    return { supabase };
  }