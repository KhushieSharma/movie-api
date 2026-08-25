import {prisma} from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generatetoken.js";
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExits = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (userExits) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        });
        const token = generateToken(newUser.id,res);
        

        res.status(201).json({
            message: "User registered successfully",
            user:{id:newUser.id,name:newUser.name,email:newUser.email},
            token: token
        });

    } catch (err) {
    console.log(err);
    console.log("MESSAGE:", err.message);
    console.log("CODE:", err.code);
    console.log("META:", err.meta);

    res.status(500).json({
        message: err.message,
        code: err.code,
        meta: err.meta
    });
}
};
const login=async(req,res)=>{
    const {email,password}=req.body;
    const user=await prisma.user.findUnique({
        where:{
            email:email}
    });
    if(!user){
        return res.status(400).json({message:"Invalid credentials"});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:"Invalid credentials"});
    }
    //generate token
    const token=generateToken(user.id,res);

    res.status(200).json({message:"Login successful",user:user,token:token});
};
const logout=async(req,res)=>{
    res.cookie("jwt","",{
        httpOnly:true,
        expires:new Date(0),

    });
    res.status(200).json({status:"success",message:"logged out successfully"});

}

export {register, login, logout};