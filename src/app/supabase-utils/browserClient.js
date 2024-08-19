import { createBrowserClient } from "@supabase/ssr";

export const createSupabaseClient = () =>
    createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        // {
        //     cookies: {
        //         getAll: () => /* code for getting all cookies */,
        //         setAll: (cookies) => /* a list of cookies to set */
        //     }
        // }
    );


// A function called createSupabaseClient() that initializes a new
// Supabase client with the given values.This function can now be imported from any other file.