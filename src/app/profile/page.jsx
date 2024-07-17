import React from 'react';
import ProfileCom from "@/component/user/ProfileCom";
import {cookies} from "next/headers";






async function getData(cookies){
    const option = {method:"GET",headers:{"Cookies":cookies,cache:"no-store"}}
    let data = (await(await fetch(`${process.env.BASE_URL}/api/user/profile/details`,option)).json())['data']

    return data
}


const Page = async () => {
    let data = await getData();
    console.log(data)
     
    return (
        <div className="mt-32">
            this is the profile page.
            <ProfileCom data = {data}/>

        </div>
    );
};

export default Page;