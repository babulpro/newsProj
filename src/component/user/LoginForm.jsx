"use client"
import React, { useState } from 'react';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const router = useRouter()
 

    let [fvalue,setFvalue]=useState({email:"",password:""})

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
        else if(fvalue.password.length===0){

            alert("password  required")

        }

        else{

            let config= {method:"post",body:JSON.stringify(fvalue)}
            let response = await fetch(`/api/user/login`,config);
            let jsonResult = await response.json();

            if(jsonResult['status']==="success"){

                window.location.href="/"


            }
            else{
                alert("try again")
            }

        }


    }



    return (
        <div >
            <form onSubmit={formSubmit} >
                <h6 className="footer-title text-center mb-5">Log In</h6>
                <fieldset className="form-control w-68 flex items-center ">

                    <div className="  w-1/2 ">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <input type="email" value={fvalue.email} onChange={(e) => InputChange('email', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>
                        <label className="label">
                            <span className="label-text">Enter your password</span>
                        </label>
                        <input type="password" value={fvalue.password} onChange={(e) => InputChange('password', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>


                        {/* <button className="btn btn-primary join-item ml-1" type ="submit">Subscribe</button> */}
                        {/* <SubmitButton submit={false}/> */}
                        <input type="submit" value="LogIn" className="btn btn-primary join-item w-full ml-1"/>


                    </div>
                    <div className="mt-10 text-xs grid grid-cols-2 gap-4">
                        <Link href={"/user/registration"}>Sign Up</Link>
                        <Link href={"/user/emailVeryfy"}>forget password?</Link>

                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default LoginForm;