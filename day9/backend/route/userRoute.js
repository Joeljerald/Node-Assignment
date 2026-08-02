import express from 'express'
import { createLogin, createRegister } from '../controller/authController.js';


const authRouter=express.Router();

// http://localhost:5000/auth/register

// http://localhost:5000/auth/login

authRouter.post("/register",createRegister)
authRouter.post("/login",createLogin)

export default authRouter