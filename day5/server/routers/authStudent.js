import express from 'express'
import { createStudent, deleteStudent, getStudent, putStudent } from '../controller/controllerStudent.js';

const studentRoute=express.Router();
//endpoint

// GET http://localhost:5000/api/students/getstudent
studentRoute.get("/getstudent",getStudent)

// POST http://localhost:5000/api/students/createstudent

studentRoute.post("/createstudent",createStudent);

// PUT http://localhost:5000/api/students/putstudent

studentRoute.put("/putstudent",putStudent)

// delete http://localhost:5000/api/students/deletestudent

studentRoute.delete("/deletestudent",deleteStudent)

export default studentRoute

