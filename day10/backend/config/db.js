import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB is Successfully connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error In DB Connection ${error.message}`);
    }
}
export default connectDB
