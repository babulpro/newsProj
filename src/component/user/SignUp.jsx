"use client"
import React, { useState } from 'react';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";
import {useRouter} from "next/navigation";


const SignUp = () => {
    let router = useRouter();
    let [myValue,setmyValue] =useState('LogIn')

    let [fvalue,setFvalue]=useState({firstName:"",lastName:"",mobile:"", email:"",password:""})

    const InputChange=(name,value)=>{
        setFvalue(prev=>({
            ...prev,
            [name]:value
        }))

    }



    let formSubmit=async(e)=>{
        e.preventDefault();

     if(fvalue.firstName.length===0){

            alert("first name  required")

        }

        else if(fvalue.email.length===0){

            alert("email required")
        }
        else if(fvalue.password.length===0){

            alert("password  required")

        }

        else if(fvalue.mobile.length===0){

            alert("first name  required")

        }

        else{

            let config= {method:"post",body:JSON.stringify(fvalue)}
            let response = await fetch(`/api/user/register`,config);
            let jsonResult = await response.json();

            if(jsonResult['status']==="success"){
                router.push("/user/login")




            }
            else{
                alert("try again")
            }

        }


    }



    return (
        <div   >
            <form onSubmit={formSubmit} >
                <h6 className="footer-title text-center mb-5">Registration</h6>
                <fieldset className="form-control w-68 flex items-center ">

                    <div className="  w-1/2 ">
                        <label className="label">
                            <span className="label-text">Enter your first name</span>
                        </label>
                        <input type="text" value={fvalue.firstName} onChange={(e) => InputChange('firstName', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>
                        <label className="label">
                            <span className="label-text">Enter your last name</span>
                        </label>
                        <input type="text" value={fvalue.lastName} onChange={(e) => InputChange('lastName', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>
                        <label className="label">
                            <span className="label-text">Enter your mobile number</span>
                        </label>
                        <input type="text" value={fvalue.mobile} onChange={(e) => InputChange('mobile', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <input type="email" value={fvalue.email} onChange={(e) => InputChange('email', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>
                        <label className="label">
                            <span className="label-text">Enter your password</span>
                        </label>
                        <input type="password" value={fvalue.password}
                               onChange={(e) => InputChange('password', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>


                        {/* <button className="btn btn-primary join-item ml-1" type ="submit">Subscribe</button> */}
                        {/* <SubmitButton submit={false}/> */}
                        <input type="submit" value={myValue} className="btn btn-primary join-item w-full ml-1"/>


                    </div>
                    <div className="mt-10 text-xs grid grid-cols-2 gap-4">
                        <Link href={"/user/login"}>already have a account</Link>
                        <Link href={"/user/emailVeryfy"}>forget password?</Link>

                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUp;