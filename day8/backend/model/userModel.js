import mongoose from "mongoose";

const createScheme=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true},
    createdBy:{type:String,default:"ADMIN"}
},{timestamps:true})

const createModel=mongoose.model("Day8",createScheme)

export default createModel;