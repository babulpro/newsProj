import { SendEmail } from "@/utility/emailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        // let {searchParams} = new URL(req.url)
        // let email = searchParams.get('email')
        let reqBody = await req.json()

     

        let prisma = new PrismaClient()

        let count = await prisma.users.count({where:reqBody})
        
        

        if(count ===1){
      
            return NextResponse.json({status:"success",data:count})
            
        }
        else{
            return NextResponse.json({status:"fail",data:"no data found"})
        }

    }
    catch(e){
        return NextResponse.json({status:"fail",data:"something"})
    }
}