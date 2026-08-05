import mongoose from "mongoose"

const connectDB=async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB connected Successsfully ${conn.connection.host}`);
    } catch (error) {
        console.log("error in db",error);
        
    }
    
    
}
export default connectDB