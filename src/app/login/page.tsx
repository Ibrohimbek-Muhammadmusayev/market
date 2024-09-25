'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/";
import { useRouter } from "next/navigation";

type UserCredentials = {
    email: string,
    password: string,
}

export default function Login() {
    const router = useRouter();
    const [selectedItems, setSelectedItems] = useState<UserCredentials>({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);

    const OnSubmit = async () => {
        // Basic validation
        if (!selectedItems.email || !selectedItems.password) {
            setError("Email and password are required.");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, selectedItems.email, selectedItems.password);
            const user = userCredential.user;
            console.log("User logged in: ", user);

            if (typeof window !== "undefined") {
                useEffect(()=>{
                    window.localStorage.setItem("token", JSON.stringify(user));
                }, [])
            }
            if (user.photoURL === 'siller') {
                router.push("/sillerprofile");
            } else if (user.photoURL === 'user') {
                router.push("/userprofile");
            }
        } catch (error:any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error logging in: ", errorCode, errorMessage);
            setError("Failed to log in. Please check your credentials.");
        }
    };

    return (
        <div className="w-full">
            <div className="mt-[80px] mx-[20px]">
                <div className="max-w-[450px] px-[20px] rounded-[12px] mx-auto bg-gradient-to-r from-cyan-500 to-green-500 p-[20px] min-h-[700px]">
                    <div className="flex mt-[70px] justify-center">
                        <h1 className="text-white text-[25px] font-bold drop-shadow-xl">Login</h1>
                    </div>
                    {error && (
                        <div className="text-red-500 text-center mb-4">{error}</div>
                    )}
                    <div className="flex flex-col mt-[170px] mx-[40px] gap-[10px]">
                        <Input 
                            value={selectedItems.email} 
                            onChange={(e) => setSelectedItems({...selectedItems, email: e.target.value})} 
                            type="email" 
                            placeholder={"Email"} 
                        />
                        <Input 
                            value={selectedItems.password} 
                            onChange={(e) => setSelectedItems({...selectedItems, password: e.target.value})} 
                            type="password" 
                            placeholder={"Password"} 
                        />
                    </div>
                    <div className="flex justify-end mt-[20px] mx-[40px]">
                        <Link href="/signup" className="text-white text-[15px] font-bold">Register</Link>
                    </div>
                    <div className="flex justify-center mt-[50px] px-[40px]">
                        <Button onClick={OnSubmit} className="w-[400px]">Login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
