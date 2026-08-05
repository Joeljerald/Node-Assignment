import { studentModel } from "../model/studentModel.js";


export const createData=async(req,res)=>{
    try {
        const {name,email,age}=req.body;
        const createCrud=await studentModel.create({name,email,age})
        res.status(201).json({msg:"Data is Create Data" ,createCrud})
    } catch (error) {
        res.status(501).json({msg:"Error in inserting Data",error})
        
    }
    
}

export const getData=async(req,res)=>{
    try {
        const getCrud=await studentModel.find()
        res.status(200).json({msg:"Data is displayed",getCrud})
    } catch (error) {
        res.status(501).json({msg:"Error in get Data",error})
    }
   
}

export const updateData=async(req,res)=>{
    try {
        const {name,email,age}=req.body;
        const {id}=req.params;
        const updateCrud=await studentModel.findByIdAndUpdate(id,{name,email,age},{returnDocument:true,runValidators:true})
        res.status(200).json({msg:"updated successfully",updateCrud})
    } catch (error) {
        res.status(501).json({msg:"Error in update Data",error})
    }

}

export const deleteData=async(req,res)=>{
    try {
        const {id} =req.params
        const updateCrud=await studentModel.findByIdAndDelete(id)
        res.status(200).json({msg:"Deleted Successfully"})
    } catch (error) {
        res.status(501).json({msg:"Error in update Data",error})
    }
}