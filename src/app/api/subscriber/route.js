import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){
    try{
        let reqBody = await  req.json();
        let prisma = new PrismaClient()
        let result = await prisma.subscrib.create({data:{email:reqBody['email']}})
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:"something went wron"})
    }
}