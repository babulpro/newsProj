import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try{
        let {searchParams}= new URL(req.url)
        let id = parseInt(searchParams.get('post_id'))
     
        let  prisma = new PrismaClient()

        let result = await prisma.comments.findMany({
            where:{postId:id},
            include:{users:{select:{firstName:true,lastName:true}}}
        })
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",data:"something went wrong"})
    }
}