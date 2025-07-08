"use client";
import React, { useState } from 'react';

import { Icons } from "@/components/Icons";
import { useToast } from "@/hooks/use-toast";
import { Album } from "lucide-react";
import { signIn } from "next-auth/react";

//import AuthForm from "@/components/authform";

export default function SignIn(){
    const {toast}=useToast();
    const [loading,setLoading]=useState(false);
    const onSignIn=async ()=>{
        try{
            setLoading(true)
            await signIn('google', { callbackUrl: '/dashboard' });
        }catch(err){
            console.error(err.message)
            toast({
                variant: "destructive",
                title: "Uh Oh!",
                description: "Failed to sig-in"
            })
        }finally{
            setLoading(false)
        }
        
    }
    return <section className="w-full flex h-screen justify-center items-center">
        <div className="w-full sm:w-1/2 md:w-1/5 mx-4 p-4 rounded-lg bg-zinc-800 flex flex-col items-center gap-4">
            <Album className="size-12 text-gray-400"/>
            <p className="text-center text-sm text-gray-300 ">Welcome</p>
            <button onClick={onSignIn} className="flex gap-2 items-center bg-gray-500/50 hover:bg-gray-500/40 transition-colors duration-200  px-10 py-2 rounded font-bold text-lg"><Icons.GoogleLogo className="size-7" /> {loading? 'loading...': 'Sign In'}</button>
        </div>
    </section>
    //  <section className="w-full flex h-screen justify-center items-center">
    //     <AuthForm />
    // </section>
}
