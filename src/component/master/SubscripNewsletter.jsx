"use client"
import React, { useState } from 'react';

const SubscripNewsletter = () => {
  let [myValue,setmyValue] =useState('subscrib')

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
      let config= {method:"post",body:JSON.stringify(fvalue)}
      let response = await fetch("api/subscriber",config);
      let jsonResult = await response.json();
       
      if(jsonResult['status']==="success"){
        alert("subscribe successfully")
        setmyValue("success") 
        setFvalue({email:""})     
      }
      else{
        alert("try again")
      }

    }


  }
 

     
    return (
        <div>
            <form onSubmit={formSubmit}>
                        <h6 className="footer-title">Newsletter</h6> 
                        <fieldset className="form-control w-68">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label> 
                        <div className="join w-1/3">
                            <input type="email" value={fvalue.email} onChange={(e)=>InputChange('email',e.target.value)}  className="input input-bordered join-item" /> 
                            {/* <button className="btn btn-primary join-item ml-1" type ="submit">Subscribe</button> */}
                            {/* <SubmitButton submit={false}/> */}
                            <input type ="submit" value ={myValue}  className="btn btn-primary join-item ml-1"/>
                        </div>
                        </fieldset>
                    </form>
        </div>
    );
};

export default SubscripNewsletter;