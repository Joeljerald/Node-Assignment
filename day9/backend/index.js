import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
import authRouter from './route/userRoute.js';


dotenv.config();

const app=express();

app.use(cors());
app.use(express.json())


const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})

connectDB();

// http://localhost:5000/auth

app.use("/auth",authRouter)