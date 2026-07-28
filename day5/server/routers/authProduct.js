import express from 'express'
import { createProduct, deleteProduct, getProduct } from '../controller/controllerProduct.js'

const productRoute=express.Router()

//post http://localhost:5000/api/products/createproduct
//get http://localhost:5000/api/products/getproduct
//DELETE  http://localhost:5000/api/products/:id

productRoute.post("/createproduct",createProduct)

productRoute.get("/getproduct",getProduct)

productRoute.delete("/:id",deleteProduct)

export default productRoute