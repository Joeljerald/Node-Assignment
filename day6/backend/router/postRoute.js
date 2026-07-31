import express from 'express'
import { controllerRegister , contollerLogin} from '../controller/postontroller.js';

const handlePost=express.Router();

handlePost.post("/register",controllerRegister)

handlePost.post("/loginApi",contollerLogin)

export default handlePost;

