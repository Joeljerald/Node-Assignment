import { modelCrud } from "../model/modelCrud.js";

export const createCrud=async(req,res)=>{
    try {
        const {name,email,age}=req.body;

        if(!name || !email || !age){
            return res.status(409).json({msg:"Enter all Field"})
        }

        const checkEmail=await modelCrud.findOne({email})
        if(checkEmail){
            return res.status(404).json({msg:"Email Already Exist"})
        }

        const createCrud=await modelCrud.create({name,email,age})

        res.status(201).json({msg:"Successfully Created",createCrud})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"error in create day",error:error.message})
        
    }
}

export const getCrud=async (req,res)=>{
    try {
        const getData=await modelCrud.find();
        res.status(200).json({msg:"Data is get Successfully",getData})
    } catch (error) {
        res.status(501).json({msg:"Error in getting data",error:error.message})
    }
}