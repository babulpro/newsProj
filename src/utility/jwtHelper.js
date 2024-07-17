import { jwtVerify,SignJWT } from "jose";

export async function CreateToken(email,id){
    let secrect = new TextEncoder().encode(process.env.JWT_SECRECT)

    let token = await new SignJWT({email:email,id:id})
    .setProtectedHeader({alg:"HS256"})
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_TIME)
    .sign(secrect)

    return token
}

export async function VeryfiToken(token){
    let secrect = new TextEncoder().encode(process.env.JWT_SECRECT)
    let decoded =await jwtVerify(token,secrect)
    return decoded["payload"]

}






