import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number
},{timeStamp:true})
export const studentModel=mongoose.model("studentCrud",studentSchema)