import { authModel } from "../model/middlewarModel.js";
import jwt from 'jsonwebtoken'


export const loginrMiddleware= async(req,res,next)=>{
    try {
        const authHeader=req.headers.authorization
        if(!authHeader){
            res.status(404).json({msg:"Auth Header is Missing"});
        }
        const token=authHeader.split()[1]
        if(!token){
            res.status(404).json({msg:"token is missing"})
        }

        const decoded =jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)

        req.user=decoded
        next()
    } catch (error) {
        res.status(404).json.msg({msg:"Login fail",error})        
    }

}

export const registerMiddleWare=async(req,res,next)=>{
    try {

        const{name,email,password}=req.body
         if(!name || !email || !password){
                    return res.status(409).json({msg:"Enter all field"})
                }
        
        const existEmail=await authModel.findOne({email})
        
        if(existEmail){
                    return res.status(401).json({msg:"Email ALready Exist"})
                }

        if(password.length<6)
        {
            return res.status(401).json({msg:"minimum 7 characters"})
        }

        // if(email.includes("@"))
        // {
        //     return res.status(401).json({msg:"must contain @"})
        // }

        next()

        
    } catch (error) {
        res.status(404).json({msg:"Register failed"}) 
        console.log(error.message);
         
    }
}