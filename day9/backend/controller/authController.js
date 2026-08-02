import { authModel } from "../model/authModel.js";
import bcrypt from 'bcrypt'

export const createRegister=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            res.status(400).json({msg:"Enter all Fields"})
            return;
        }

        const checkEmail=await authModel.findOne({email})

        if(checkEmail){
            res.status(409).json({msg:"Email is Already Exist"})
            return;
        }

        const changePassword=await bcrypt.hash(password,10);

        const authReg=await authModel.create({name,email,password:changePassword})
        res.status(201).json({msg:"Registered SuccessFully",name:authReg.name,email:authReg.email})
    } catch (error) {
        console.log(`Error in Register`,error);
        res.status(501).json({msg:"Internal Error in Register"})
        
    }
}

export const createLogin=async(req,res)=>{
    try {
        const {email,password}=req.body;
    if(!email || !password){
        res.status(400).json({msg:"Enter a email and password"})
        return;
    }

    const compareEmail=await authModel.findOne({email});

    if(!compareEmail){
        res.status(404).json({msg:"Invaild Email"});
        return;
    }

    const comparePassword=await bcrypt.compare(password,compareEmail.password);
     if(!comparePassword){
            res.status(404).json({msg:"Invaild Password"})
            return
        }

    res.status(201).json({msg:`Login Successfully on ${compareEmail.email}`,
            name:compareEmail.name,
            id:compareEmail.id,
            email:compareEmail.email})
    } catch (error) {
        console.log("Error on login",error);
        res.status(500).json({msg:"Internal Error in Login"})
        
    }
}