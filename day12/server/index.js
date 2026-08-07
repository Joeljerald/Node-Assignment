import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js';
import route from './route/middlewarRoute.js';

dotenv.config()

const app=express();

const PORT=process.env.PORT || 3000

app.use(cors())

app.use(express.json())

connectDB()

app.listen(PORT,()=>{
    console.log(`server is succesfully running on http://localhost:${PORT}`);
    
})

app.use("/api/auth",route)

//http://localhost:5000/api/auth