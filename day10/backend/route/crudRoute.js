import express from 'express'
import { createCrud, getCrud } from '../controller/crudController.js';

const route=express.Router();

// http://localhost:5000/api/crud/createcrud
// http://localhost:5000/api/crud/getcrud

route.post("/createcrud",createCrud)
route.get("/getcrud",getCrud)

export default route