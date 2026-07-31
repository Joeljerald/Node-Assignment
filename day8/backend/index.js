import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
import route from './route/userRoute.js';


dotenv.config();

const app=express();

app.use(cors())

app.use(express())

connectDB()

app.use("/api/user",route)


const PORT=process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})



