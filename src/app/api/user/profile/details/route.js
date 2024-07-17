import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";


export async function GET(req,res){
    try{
        let headerList = headers()
        let id = parseInt(headerList.get("id"))
        let email = headerList.get("email")
        let prisma = new PrismaClient()
        

        let result = await prisma.users.findUnique({
            where:{id,email}
        })
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:"something went wrong"})
    }
}