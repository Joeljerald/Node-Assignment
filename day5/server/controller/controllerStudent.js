export const getStudent=async(req,res)=>{
    try {
        res.send("All Student");
        
    } catch (error) {
        console.log(error);
        
    }
}

export const  createStudent=async(req,res)=>{
    try {
        res.send("Student List Created")
    } catch (error) {
        console.log(error);
        
    }
}


export const putStudent = async (req, res) => {
  try {
    res.send("Student Updated");
  } catch (error) {
    console.log(error);
  }
}

export const deleteStudent=async(req,res)=>{
    try {
        const id =req.params.id
        res.send(`studnet with id ${id} is deleted`)
    } catch (error) {
        console.log(error);
        
    }
}