export const controllerRegister=(req,res)=>{
    try {
        res.send(req.body);
    } catch (error) {
        console.log("Error",error);
        
    }  
}


export const contollerLogin=async (req,res)=>{
    try {
        res.send("Login Successfully",req.body)
    } catch (error) {
        console.log("Error",error);
    }
}