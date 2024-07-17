import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try{
        let headerList = headers()
        let id = parseInt(headerList.get('id'))
        let prisma = new PrismaClient()
        let result = await prisma.comments.findMany({
            
            where:{userId:id},
            include:{news_list:{select:{title:true}}}
        })
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:"something went wrong"})
    }

}



export async function POST(req,res){
    try{
        let headerList = headers()
        let id =  parseInt(headerList.get('id'))
        let reqBody = await req.json()
        reqBody.userId = id
 

        let prisma = new PrismaClient()
        let result = await prisma.comments.create({
            data:{
                userId:id,
                postId:parseInt(reqBody['postId']),
                description:reqBody['description']
            }
        })
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:"something went wrong"})
    }

}








export async function DELETE(req,res){
    try{
        let headerList = headers()
        let userID =  parseInt(headerList.get('id'))
        let reqBody = await req.json()
        let commentsId = parseInt(reqBody['comments_id'])
         
        
 

        let prisma = new PrismaClient()
        let result = await prisma.comments.deleteMany({
            where:{
                AND:[
                    {userId:userID},{postId:commentsId}
                ]
            }
        })
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:"something went wrong"})
    }

}