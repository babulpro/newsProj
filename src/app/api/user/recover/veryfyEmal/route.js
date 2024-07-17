import { SendEmail } from "@/utility/emailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try{
        let {searchParams} = new URL(req.url)
        let email = searchParams.get('email')
        let prisma = new PrismaClient()

        let count = await prisma.users.count({where:{email:email}})
        

        if(count ===1){
            let code = Math.floor(100000+Math.random()*900000)
            let text = `your otp code is ${code}`;
            let sun = "hello babul"
            await SendEmail(email,text,sun)


            let result = await prisma.users.update({
                where:{email:email},
                data:{otp:code.toString()}
            })


            return NextResponse.json({status:"success",data:result})
            
        }
        else{
            return NextResponse.json({status:"fail",data:"no data found"})
        }

    }
    catch(e){
        return NextResponse.json({status:"fail",data:e})
    }
}