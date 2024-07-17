import { NextResponse } from "next/server"
import { VeryfiToken } from "./utility/jwtHelper"

export async function middleware(req,res){
    try{
        let token = req.cookies.get('token')
        let payload = await VeryfiToken(token['value'])
        let newHeaders = new Headers(req.headers)
        newHeaders.set("email",payload['email'])
        newHeaders.set("id",payload['id'])


        return NextResponse.next({request:{headers:newHeaders}})

    }
    catch(e){
        if(req.nextUrl.pathname.startsWith("/api/")){
            return NextResponse.json({status:"fail",data:"no data fount"},{status:401})
        }
        else {
            return  NextResponse.redirect(new URL("/user/login",req.url))
        }

    }

}


export const  config={
    matcher:[

        "/profile",
        "/comments",
        "/api/comments/manage",
        "/api/user/profile/details",
        "/api/user/profile/update"


    ]

}