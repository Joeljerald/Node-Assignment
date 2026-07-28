import express from 'express'
import { createUser, getUser} from '../controller/authRegister.js';

const userroute=express.Router();

// Endpoint:
// GET  http://localhost:5000/api/users/user
// POST http://localhost:5000/api/users/user

userroute.get("/getuser",getUser)
userroute.post("/createuser",createUser)


export default userroute