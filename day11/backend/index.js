import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js';
import studentRoute from './route/studentRoute.js';

dotenv.config();

const app=express();

const PORT=process.env.PORT || 3000

app.use(cors())

app.use(express.json())


app.listen(PORT,()=>{
    console.log(`server is successfully run on http://localhost:${PORT}`);
    
})

connectDB()

// http://localhost:5000/api/students

app.use("/api/students",studentRoute)