export const controllWelcome= async(req,res)=>{
    try {
        res.send("Welcome to Express.js")
    } catch (error) {
        console.log("Error in get welcome",error)
    }
}

export const controllStudent=async(req,res)=>{
    try {
        res.json({
            "id": 101,
            "name": "Sudhan",
            "course": "MERN Stack"
        }
)
    } catch (error) {
        console.log("Error in get student",error);   
    }
}

export const controllerUser=async(req,res)=>{
    try {
        const id =req.params.id

        res.send(`Received ID is ${id}`)

    } catch (error) {
        console.log("Error in get User",error);
        
        
    }
}

export const controllProduct=async(req,res)=>{
    try {
        res.send("Product is searching")
    } catch (error) {
        console.log("Error in get product",error);
    }
}

export const controllerAuth=async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        res.json({authorization: authHeader})
    } catch (error) {
        console.log("Error in get authorization",error);   
    } 
}

export const controllerstudentDetails=async(req,res)=>{
    try {
        const id=req.params.id;
        res.send(`Student Details API ${id}`)
    } catch (error) {
        console.log("Error in get StudentDetails",error);
    }
}

