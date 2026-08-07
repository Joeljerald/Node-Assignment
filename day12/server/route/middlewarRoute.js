import express from 'express'
import { loginData, registerData } from '../controller/authController.js'
import { loginrMiddleware, registerMiddleWare } from '../middleware/authMiddlewar.js'

const route=express.Router()


//http://localhost:5000/api/auth/register
//http://localhost:5000/api/auth/login


route.post("/register",registerMiddleWare,registerData)
route.post("/login",loginData)
// route.get("/dashboard",dashboardData)

export default route