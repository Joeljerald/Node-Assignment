import createModel from "../model/userModel.js"

export const createData=async(req,res)=>{
    try {
        const {name,email,age}=req.body
        const createUser=await createModel.create({name,email,age})
        res.status(201).json({msg:"User is Create Successfully"})
    } catch (error) {
        console.log("Error in Create Data");
        res.status(501).json({msg:"Something went wrong"})   
    } 
}

export const getAllData=async(req,res)=>{
    try {
        const getData=await createModel.find()
        res.status(201).json({msg:"All Data is Showed",getData})
    } catch (error) {
        console.log("Error in get all data",error);
        res.status(501).json({msg:"Something Went Wrong"})
    }
}

export const getDataById=async(req,res)=>{
    try {
        const getId=req.params.id;
        const getIdData=await createModel.findById({getId})
        res.status(201).json({msg:`The Selected ID ${getId}is Shown `},getIdData)
    } catch (error) {
        console.log("Error in get all data",error);
        res.status(501).json({msg:"Something Went Wrong"})
    }
}

export const updateData=async(req,res)=>{
    try {
        const updateId=req.params.id
        const {name,email,age}=req.body;
        const updateData=await createModel.findByIdAndUpdate(updateId,{name,email,age},{returnDocument:"after"})
        res.status(201).json({msg:"The Data is Updated Successfully",updateData})

    } catch (error) {
        console.log("Error in get all data",error);
        res.status(501).json({msg:"Something Went Wrong"})
    }
}

export const deleteData=async(req,res)=>{
    try {
        const deleteId=req.params.id
        const deletData=await createModel.findByIdAndDelete({deleteId})
        res.status(201).json({msg:"User Data is Deleted Succedssfully",})

         const remainingData = await createModel.find();

        res.status(200).json({msg: "User Data Deleted Successfully",remainingData})
    } catch (error) {
        console.log("Error in get all data",error);
        res.status(501).json({msg:"Something Went Wrong"})
    }
}