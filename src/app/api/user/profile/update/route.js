import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(req,res){
    try{
        let headerList = headers()
        let reqBody = await req.json()
        let id = parseInt(headerList.get("id"))
        let email = headerList.get("email")
        let prisma = new PrismaClient()
        

        let count = await prisma.users.count({
            where:{id,email}
        })
        if(count===0){
            return NextResponse.json({status:"fail",msg:"something went wron"})
        }
        else{
            let result = await prisma.users.update({
                where:{id:id},
                data:{...reqBody}
            })
            return NextResponse.json({status:"success",data:result})
        }
    

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:"something went wrong"})
    }
}