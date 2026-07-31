import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import handleGet from './router/getData.js';
import handlePost from './router/postRoute.js';

dotenv.config();

const app=express();

app.use(cors())

app.use(express())


const PORT=process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

app.use("/api/get",handleGet)

app.use("/api/post",handlePost)

//api

// http://localhost:5000/api/get

// http://localhost:5000/api/post