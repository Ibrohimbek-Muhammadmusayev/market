'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { type } from "os";
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
  

type type = {
    email: string,
    password: string,
    username: string,
    phoneNumber: string,
    type: string | number,
}

export default function Signup(){
    const router = useRouter();
    const [selectedItems, setSelectedItems] = useState<type>({
        email: "",
        password: "",
        username: "",
        phoneNumber: '',
        type: "",
    });

    const OnSubmit = () => {
        createUserWithEmailAndPassword(auth, selectedItems.email, selectedItems.password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: selectedItems.username,
                photoURL: `${selectedItems.type}`,
            })
            .then(() => {
                if (typeof window !== "undefined") {
                    window.localStorage.setItem("token", JSON.stringify(user));
                    if (user.photoURL == 'siller') {
                        router.push("/sillerprofile");
                    } if (user.photoURL == 'user') {
                        router.push("/userprofile");
                    }
                }
            })
            .catch((error) => {
                console.log("Error updating profile: ", error);
            });
        })
        .catch((error) => {
            console.log("Error creating user: ", error.message);
        });
    };
    
    return (
        <div className="w-full">
            <div className="mt-[80px] mx-[20px]">
                <div className="max-w-[450px] px-[20px] rounded-[12px] mx-auto bg-gradient-to-r from-cyan-500 to-green-500 p-[20px] min-h-[700px]">
                    <div className="flex mt-[70px] justify-center">
                        <h1 className="text-white text-[25px] font-bold drop-shadow-xl">Signup</h1>
                    </div>
                    <div className="flex flex-col mt-[170px] mx-[40px] gap-[10px]">
                        <div className="mx-auto">
                        </div>
                        <Select onValueChange={(e:any)=>setSelectedItems({...selectedItems, type: e})}>
                            <SelectTrigger className="w-[w-full]">
                                <SelectValue placeholder="who do you want to work" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="user">User</SelectItem>
                                <SelectItem value="siller">Siller</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input value={selectedItems.email} onChange={(e)=>setSelectedItems({...selectedItems, email: e.target.value})} type="email" placeholder={"Email"}/>
                        <Input value={selectedItems.password} onChange={(e)=>setSelectedItems({...selectedItems, password: e.target.value})} type="password" placeholder={"Password"}/>
                        <Input value={selectedItems.username} onChange={(e)=>setSelectedItems({...selectedItems, username: e.target.value})} type="text" placeholder={"Username"}/>
                        <Input value={`${selectedItems.phoneNumber}`} onChange={(e)=>setSelectedItems({...selectedItems, phoneNumber: e.target.value})} type="text" placeholder={"Phone Number"}/>
                    </div>
                    <div className="flex justify-end mt-[20px] mx-[40px]">
                        <Link href="/login" className="text-white text-[15px] font-bold">Login</Link>
                    </div>
                    <div className="flex justify-center mt-[50px] px-[40px]">
                        <Button onClick={OnSubmit} className="w-[400px]">Signup</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}