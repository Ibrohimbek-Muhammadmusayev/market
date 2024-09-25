"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Userprofile(){
    const router = useRouter()
    const [token, setToken] = useState<any>()
    useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem('token') as string)
        setToken(token)
        console.log(token);
    }, [])
    if (token?.photoURL == 'user') {
        return (
            <div className="w-full">
                User
            </div>
        )
    } else {
        if (token?.photoURL == 'siller') {
            router.push('/sillerprofile')
        } if(token === null){
            router.push('/')
        }
    }
}