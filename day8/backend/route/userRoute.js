import express from 'express'
import { createData, getAllData, getDataById, updateData,deleteData } from '../contoller/userController.js';

const route=express.Router();

route.post('/createdata',createData)
route.get('/getalldata',getAllData)
route.post("/getdatabyID/:id",getDataById)
route.put("/updatedata/:id",updateData)
route.delete("/delete/:id",deleteData)

export default route