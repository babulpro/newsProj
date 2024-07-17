import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req,res){
    try{
        let {searchParams} =new URL(req.url)
        let myTypes = searchParams.get('type')
        ;

        console.log(myTypes);
        let prisma = new PrismaClient()
        let result = await prisma.polices.findMany({where:{type:myTypes}})
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:"something went wrong"})
    }
}