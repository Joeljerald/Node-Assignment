import mongoose from "mongoose";

const authSchema=mongoose.Schema({
    "name":String,
    "email":String,
    "password":String
},{timestamps:true})

export const authModel=mongoose.model("middlewar",authSchema)