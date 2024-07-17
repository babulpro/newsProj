 import  nodemailer from "nodemailer"


 export async function SendEmail(emailTo,text,sub){
    let transport = nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{
            user:"info@teamrabbil.com",
            pass:"~sR4[bhaC[Qs"
        },
        tls:{
            rejectUnauthorized:false
        }
    })


    let mailOption ={
        from:"nextJs newsportal <info@teamrabbil.com>",
        to:emailTo,
        subject:sub,
        text:text
    }

    return await transport.sendMail(mailOption)
 }