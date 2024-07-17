"use client"
import React, { useState ,useEffect} from 'react';

import CommentsList from "@/component/news/CommentsForm";
import {useRouter} from "next/navigation";

const Comments = ({postId}) => {
    let router = useRouter();




    let [fvalue,setFvalue]=useState({postId:postId,description:""})

    const InputChange=(name,value)=>{
        setFvalue(prev=>({
            ...prev,
            [name]:value
        }))

    }



    let formSubmit=async(e)=>{
        e.preventDefault();

        if(fvalue.description.length===0){

            alert("text is required")
        }


        else{

            let config= {method:"post",body:JSON.stringify(fvalue)}
            let response = await fetch(`/api/comments/manage`,config);
            let jsonResult = await response.json();

            if(jsonResult['status']==="success"){
                fvalue.description=""
                router.refresh()
                // alert("comments done")

            }
            else{
                alert("something went wrong")
            }

        }


    }



    return (
        <div className="">

            {postId}
            <form onSubmit={formSubmit} >

                <fieldset className="form-control w-full flex items-center ">

                    <div className="w-full px-10 mb-10 ">

                         <label>

                            <h1>Enter your comments</h1>
                        </label>
                        <input type="text" value={fvalue.description} onChange={(e) => InputChange('description', e.target.value)}
                               className="input input-bordered join-item w-full"/><br/><br/>

                        <input type="submit" value="LogIn" className="btn btn-primary join-item w-full ml-1"/>

                    </div>

                </fieldset>
            </form>
            {/*<CommentsForm postId={postId}/>*/}
            <CommentsList postId={postId}/>
        </div>
    );
};

export default Comments;