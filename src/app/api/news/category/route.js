import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try{
        let {searchParams} = new URL(req.url)
        let cat_id = searchParams.get('id')
        let prisma = new PrismaClient()
        let result  = await prisma.news_list.findMany({
            where:{catId:parseInt(cat_id)} ,
            select:{id:true,short_des:true,title:true,img1:true,}
        })
        return NextResponse.json({status:"success",data:result})


    }
    catch(e){
        return NextResponse.json({status:"fail",data:e})
    }
}