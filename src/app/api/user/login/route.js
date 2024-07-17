import { CreateToken } from "@/utility/jwtHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import {cookies} from "next/headers";



export async function POST(req,res){
    try{
        let reqBody = await req.json();

        let prisma = new PrismaClient();

       
        let result = await prisma.users.findUnique({
            where: {email:reqBody['email'],password:reqBody['password']}
        })

        if(result.length===0){
            return NextResponse.json({status:"fail",data:"no data fount"})

        }
        else{
            let token = await CreateToken(result['email'],result['id'])
            let expirationTime = new Date(Date.now()+24*60*60*1000)
            let cookieString = `token=${token};expires=${expirationTime.toUTCString()};secure;HttpOnly;SameSite=Restrict;Path=/;`
            return NextResponse.json({status:"success",data:token},{status:200,headers:{'set-cookie':cookieString}})
        }
        

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:e})
    }
   
}



export  async  function  GET(req,res){
     let expirationTime = new Date(Date.now()-24*60*60*1000);
     let response = NextResponse.redirect(new URL("/",req.url));
     response.cookies.set('token','',{expires:expirationTime})

    return response

}