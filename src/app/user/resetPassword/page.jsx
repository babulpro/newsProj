
import React from 'react';
import SetPassword from "@/component/user/SetPassword";
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
        <div className="mt-32">
            this is the password reset page
            <SetPassword/>

        </div>
    );
};

export default Page;