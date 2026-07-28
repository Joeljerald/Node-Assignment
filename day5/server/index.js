import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import userroute from './routers/authRouter.js';
import productRoute from './routers/authProduct.js';
import studentRoute from './routers/authStudent.js';

dotenv.config();

const app=express()

app.use(cors())

app.use(express.json())


const port= process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})

//api for user
// http://localhost:5000/api/users

app.use("/api/users",userroute)


// api for product 
//http://localhost:5000/api/products

app.use("/api/product",productRoute)


// api for student

//http://localhost:5000/api/students

app.use("/api/student",studentRoute)



