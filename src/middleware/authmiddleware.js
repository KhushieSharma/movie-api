import jwt from 'jsonwebtoken';
import {prisma} from '../config/db.js';
const authmiddlware=async(req,res,next)=>{
    console.log("authmiddleware called");
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1];
    }
    else if(req.cookies?.jwt){
        token=req.cookies.jwt;
    }
    if(!token){
        return res.status(401).json({error:"not authorized token nhi h"});

    }
    try{ //token is valid, extract the user id from token and attach it to the request object
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await prisma.user.findUnique({
            where:{id:decoded.id},
        });
        if(!user){
            return res.status(401).json({error:"user nhi h"});
        }
        req.user=user;
        next(); //move forrward to next mw or route
    }catch(err){
        return res.status(401).json({error:"not authorized token invalid"});
    }
};
export {authmiddlware};