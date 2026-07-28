export const createProduct=async(req,res)=>{
    try {
        res.send("All Products");
        
    } catch (error) {
        console.log(error);
        
    }
}

export const  getProduct=async(req,res)=>{
    try {
        res.send("Product Created")
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteProduct=async(req,res)=>{
    try {
        const id =req.params.id
        res.send(`product with id ${id} is deleted`)
    } catch (error) {
        console.log(error);
        
    }
}