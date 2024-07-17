import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req,res){
    try{
        
       
        let prisma = new PrismaClient()
        let result = await prisma.socials.findMany({})
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:"something went wrong"})
    }
}