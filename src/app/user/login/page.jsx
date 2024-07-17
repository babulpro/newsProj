import React from 'react';
import LoginForm from "@/component/user/LoginForm";
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
        <div className="mt-32 p-2 ">
            <div className="w-1/2 m-auto">
                <LoginForm/>
            </div>
        </div>
    );
};

export default Page;