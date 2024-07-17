import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req,res){
    try{
        let prisma = new PrismaClient();
        let reqBody = await req.json();
        reqBody.otp="0"
        let result = await prisma.users.create({data:reqBody})
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:e})
    }
   
}
