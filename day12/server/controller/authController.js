import { authModel } from "../model/middlewarModel.js";
import bcrypt from 'bcrypt'
import jwt from 'JsonWebToken'

export const registerData=async(req,res)=>{
    try {
        const {name,email,password}=req.body;

       

        const securePasword=await bcrypt.hash(password,10)

        const register=await authModel.create({name,email,password:securePasword})

        res.status(201).json({msg:"Register Successfully"})
    } catch (error) {
        console.log("error in register controller",error);
        res.status(404).json({msg:"Internal in register"})
    }
}

export const loginData=async(req,res)=>{
    try {
        const{email,password}=req.body
        const checkEmail=await authModel.findOne({email})

        if(!checkEmail){
            return res.status(404).json({msg:"Invaild Email"})
        }

        const checkPassword=await bcrypt.compare(password,checkEmail.password)

        if(!checkPassword){
            return res.status(404).json({msg:"Password Incorrect"})
        }


        const accesstoken=jwt.sign({id:checkEmail._id,name:checkEmail.name},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"5m"})

        const refreshtoken=jwt.sign({id:checkEmail._id,name:checkEmail.name},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"})
        
        checkEmail.refreshtoken=refreshtoken
        await checkEmail.save()
        //  res.status(200).json({msg:"success",})

        res.status(200).json({msg:"Login Successfully",users:{id:checkEmail._id,name:checkEmail.name,email:checkEmail.email,accesstoken,refreshtoken}})

        
    } catch (error) {
        console.log('error in login controller',error)
        res.status(404).json({msg:"Internal error in login"})
    }
}