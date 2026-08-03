import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js';
import route from './route/crudRoute.js';

dotenv.config();

const app=express();

app.use(cors());

app.use(express.json());

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT} `);
})
connectDB();
// http://localhost:5000/api/crud
app.use("/api/crud",route)


