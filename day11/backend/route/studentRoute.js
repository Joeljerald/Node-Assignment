import express from 'express'
import { createData, deleteData, getData, updateData } from '../controller/studentConteoller.js';

const studentRoute=express.Router();

studentRoute.post("/createdata",createData)
studentRoute.get("/getdata",getData)
studentRoute.put("/updatedata/:id",updateData)
studentRoute.delete("/deletedata/:id",deleteData)

export default studentRoute;