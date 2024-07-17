"use client"

import React, { useState } from 'react';
import Link from "next/link"
import { useRouter } from 'next/navigation';
import Navbar from "@/component/navbar";

 

const AppnavBar = (props) => {
    let router = useRouter()
    let [data,setData] =useState({word:""})




    let inputChange= (name,value)=>{
        setData(pre=>(
          {  ...pre,
            [name]:value}
        ))
    }

    const fSubmit=async(e)=>{
        e.preventDefault()
        router.replace(`/search?keyword=${data.word}`)

    }
    
   
    return (
        <div className='fixed top-0 z-50 w-full'>
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                                <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link href={"/"}>home</Link></li>
                                    {
                                        props.data['category'].map((value,index)=>{
                                            return(
                                                <li><Link href={`/category?id=${value.id}`} key={value.id}>{value.name}</Link></li>


                                            )
                                        })
                                    }


                                    <li>
                                    <Link href={"/"}>Parent</Link>
                                    <ul className="p-2">
                                        <li><Link href={"/"}>Submenu 1</Link></li>
                                        <li><Link href={"/"}>Submenu 2</Link></li>
                                    </ul>
                                    </li>
                                     
                                </ul>
                                </div>
                            <a className="btn btn-ghost text-xl">daisyUI</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><Link href={"/"}>home</Link></li>

                                {
                                        props.data['category'].map((value,index)=>{
                                            return(
                                                <li><Link href={`/category?id=${value.id}`} key={index}>{value.name}</Link></li>


                                            )
                                        })
                                    }



                                <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2">
                                    <li><Link href={"/"}>Submenu 1</Link></li>
                                    <li><Link href={"/"}>Submenu 2</Link></li>
                                    </ul>
                                </details>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <div className=" mr-3">
                                <form onSubmit={fSubmit}>
                                    <input type="text" value={data.word}
                                           onChange={(e) => inputChange("word", e.target.value)}
                                           className="input input-bordered w-24 md:w-auto"/>
                                    <input type="submit" value=""/>
                                </form>
                            </div>
                            <div className=" mr-3">
                                {
                                    props.isToken?(
                                         <Navbar/>
                                    ):(
                                        <Link href={"/user/login"}>LogIn</Link>
                                    )
                                }
                            </div>
                            {/* <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div> */}
                        </div>
                    </div>
        </div>
    );
};

export default AppnavBar;