"use client"
import React, { useState } from 'react';
import {useRouter} from "next/navigation";

import Link from "next/link";


const SetPassword = () => {


    const myEmail = sessionStorage.getItem("myEmail");
    const myOtp = sessionStorage.getItem("otp");


    const router = useRouter()


    let [fvalue,setFvalue]=useState({  email:myEmail,otp:myOtp,password:""})

    const InputChange=(name,value)=>{
        setFvalue(prev=>({
            ...prev,
            [name]:value
        }))

    }



    let formSubmit=async(e)=>{
        e.preventDefault();


        if(fvalue.password.length===0){

            alert("password is required")

        }


        else{
            let config= {method:"post",body:JSON.stringify(fvalue)}

            let response = await fetch(`/api/user/recover/resetPassword`,config);
            let jsonResult = await response.json();

            if(jsonResult['status']==="success"){


                router.push(`/user/login`);
                sessionStorage.clear()


            }
            else{
                alert("Invalid Otp")
            }

        }


    }
    console.log(fvalue.email,fvalue.password)




    return (
        <div className="my-32"  >
            <form onSubmit={formSubmit} >
                <h6 className="footer-title text-center mb-5">Set password</h6>
                <fieldset className="form-control w-68 flex items-center ">

                    <div className="  w-1/2 ">



                        <label className="label">
                            <span className="label-text">Enter your password</span>
                        </label>
                        <input type="password" value={fvalue.password} onChange={(e) => InputChange('password', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>


                        <input type="submit" value="sunmit here" className="btn btn-primary join-item w-full ml-1"/>


                    </div>
                    <div className="mt-10 text-xs grid grid-cols-2 gap-4">
                        <Link href={"/user/registration"}>Sign Up</Link>
                        <Link href={"/user/resetPassword"}>forget password?</Link>

                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SetPassword;