 
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        // let {searchParams} = new URL(req.url)
        // let email = searchParams.get('email')
        let reqBody = await req.json()

     

        let prisma = new PrismaClient()

        let count = await prisma.users.count({where:{email:reqBody['email']}})
        
        

        if(count ===1){
            let result = await prisma.users.update({
                where:{email:reqBody['email']},
                data:{password:reqBody['password'],otp:"0"}
            })
      
            return NextResponse.json({status:"success",data:result})
            
        }
        else{
            return NextResponse.json({status:"fail",data:"no data found"})
        }

    }
    catch(e){
        return NextResponse.json({status:"fail",data:"something"})
    }
}