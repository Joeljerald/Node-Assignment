import mongoose from "mongoose";

const authSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{timestamps:true})

export const authModel=mongoose.model("registerAssignment",authSchema)