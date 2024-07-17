'use client'
import React from 'react';
import {redirect, useSearchParams} from 'next/navigation'
import PinVeryFication from "@/component/user/PinVeryFication";
import {cookies} from "next/headers";

const Page = () => {
    // let myCookie = cookies()
    // let token = myCookie.get('token')
    // if(typeof token !== "undefined"){
    //     redirect("/")
    //
    // }
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    let myEmail = sessionStorage.getItem('myEmail');
    return (
        <div className="mt-32">

            <PinVeryFication />
        </div>
    );
};

export default Page;