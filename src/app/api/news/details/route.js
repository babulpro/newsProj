import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try{
        let {searchParams} = new URL(req.url)
        let id = searchParams.get('id')
        let prisma = new PrismaClient()
        let result  = await prisma.news_list.findUnique({
            where:{id:parseInt(id)} ,
            include:{categories:true}
        })
        return NextResponse.json({status:"success",data:result})


    }
    catch(e){
        return NextResponse.json({status:"fail",data:"no"})
    }
}