import React from 'react';
import SignUp from "@/component/user/SignUp";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const Page = () => {
    // let myCookie = cookies()
    // let token = myCookie.get('token')
    // if(typeof token !== "undefined"){
    //     redirect("/")
    //
    // }
    return (
        <div className="mt-32 p-2">
            <SignUp/>
        </div>
    );
};

export default Page;