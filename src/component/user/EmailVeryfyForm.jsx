 "use client"
import React, { useState } from 'react';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";
 import {useRouter} from "next/navigation";

const EmailVeryfyForm = () => {
    let router = useRouter()
    let [myValue,setmyValue] =useState('LogIn')

    let [fvalue,setFvalue]=useState({email:""})

    const InputChange=(name,value)=>{
        setFvalue(prev=>({
            ...prev,
            [name]:value
        }))

    }



    let formSubmit=async(e)=>{
        e.preventDefault();

        if(fvalue.email.length===0){

            alert("email required")

        }


        else{
            let response = await fetch(`/api/user/recover/veryfyEmal?email=${fvalue.email}`);
            let jsonResult = await response.json();

            if(jsonResult['status']==="success"){
                sessionStorage.setItem("myEmail", fvalue.email);
                router.push(`/user/otpVeryfy?email=${fvalue.email}`);




            }
            else{
                alert("Invalid Email")
            }

        }


    }



    return (
        <div className="my-32"  >
            <form onSubmit={formSubmit} >
                <h6 className="footer-title text-center mb-5">Email Veryfy</h6>
                <fieldset className="form-control w-68 flex items-center ">

                    <div className="  w-1/2 ">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <input type="email" value={fvalue.email} onChange={(e) => InputChange('email', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>

                        <input type="submit" value={myValue} className="btn btn-primary join-item w-full ml-1"/>


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

export default EmailVeryfyForm;