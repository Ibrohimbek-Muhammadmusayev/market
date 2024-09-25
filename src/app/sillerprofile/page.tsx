"use client"

import { Button, Drawer } from "antd"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import type { DrawerProps, RadioChangeEvent } from 'antd';
import Menus from "@/components/antdesign/menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sillerprofile(){
    const router = useRouter()
    const [token, setToken] = useState<any>()
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem('token') as string)
        setToken(token)
    }, [])

    const [placement, setPlacement] = useState<DrawerProps['placement']>('left')
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    if (token?.photoURL == 'siller') {
        return (
            <div className="w-full">
                <div className="w-[100%] flex">
                    <div className="w-full max-w-[280px] hidden sm:block md:block lg:block xl:block">
                        <div className="h-[100vh] bg-slate-400">
                            {/* <div className="hidden sm:block md:block lg:block xl:block"> */}
                                <Menus/>
                            {/* </div> */}
                        </div>
                        <Drawer
                            title="Menu"
                            placement={"left"}
                            closable={false}
                            onClose={onClose}
                            open={open}
                            key={placement}
                            extra={
                                  <Button type="primary" onClick={onClose}>
                                    OK
                                  </Button>
                              }
                        >
                            <div className="">
                                <Menus/>
                            </div>
                        </Drawer>
                    </div>
                    <div className="w-full shadow-md">
                        <div className="max-w-[1400px] px-[20px] bg-slate-400 gap-[10px] h-[80px] flex justify-between items-center">
                            <div className="hidden sm:block md:block lg:block xl:block"></div>
                            <Button className="block sm:hidden md:hidden lg:hidden xl:hidden" onClick={showDrawer}>open</Button>
                            <div className="flex justify-center gap-[20px] items-center">
                                <h1 className="text-[30px]">Siller Dashboard</h1>
                                <Avatar>
                                    <AvatarImage src="https://sh-tarutinskaya-r04.gosweb.gosuslugi.ru/netcat_files/108/690/speaker_azzurro_1.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <div className="w-full max-w-[1400px] h-[100vh] mx-auto bg-slate-300 px-[20px]">
                            sad
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        if (token?.photoURL == 'user') {
            router.push('/userprofile')
        } if(token === null){
            router.push('/')
        }
    }
}