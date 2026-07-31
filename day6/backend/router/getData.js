import express from 'express'
import { controllProduct, controllStudent, controllWelcome , controllerAuth, controllerUser, controllerstudentDetails } from '../controller/getController.js';

const handleGet=express.Router();

//end point

//http://localhost:5000/api/get/welcome
//http://localhost:5000/api/get/student
//http://localhost:5000/api/get/userprofile/:id
//http://localhost:5000/api/get/ProductSearch
//http://localhost:5000/api/get/profile



handleGet.get("/welcome",controllWelcome);

handleGet.get("/student",controllStudent)

handleGet.get("/userprofile/:id",controllerUser)

handleGet.get("/ProductSearch",controllProduct)


handleGet.get("/profile",controllerAuth);

handleGet.get("student/:id",controllerstudentDetails)







export default handleGet