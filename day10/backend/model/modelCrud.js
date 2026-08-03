import mongoose from "mongoose";

const SchemaCrud=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
},{timestamps:true})

export const modelCrud=mongoose.model("connectFrontend",SchemaCrud)