import { useEffect, useState } from "react"
import axios from 'axios'

const App = () => {
  const[form,setForm]=useState({name:"",email:"",age:""})
  const[getData,setGetData]=useState([])
  const [editId,setEditId]=useState(null)


  const gettingData=async()=>{
    try {

      const getFetch=await axios.get("http://localhost:5000/api/crud/getcrud")
      console.log(getFetch.data);
      setGetData(getFetch.data.getData);
      
      
    } catch (error) {
      alert(error.response.data.msg)
      
    }
  }
  useEffect(()=>{
    gettingData()
  },[])

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const addData=await axios.post("http://localhost:5000/api/crud/createcrud",form)
      
      console.log(addData.data);
      setForm({name:"",email:"",age:""})
      
      
    } catch (error) {
      console.log("Error",error.Response.message); 
    }

  }

  const handleEdit=(user)=>{
    setForm({name:user.name,email:user.email,age:user.age})
    setEditId(user._id)
  }

  
  return (  
    <>

    <form >
      <label>UserName</label>
      <input type="text" placeholder="Enter your name" value={form.name} onChange={handleChange} name="name" />
      <label>User Email</label>
      <input type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} name="email" />
      <label>User Age</label>
      <input type="number" placeholder="Enter your age" value={form.age} onChange={handleChange} name="age" />
      {editId?<button>Update</button>:<button onClick={handleSubmit}>Add</button>}
    </form>
    

    {getData.map((e) => (
  <div key={e._id}>
    <h1>Name: {e.name}</h1>
    <p>Email: {e.email}</p>
    <p>Age: {e.age}</p>
    <button onClick={()=>handleEdit(e)}>Edit</button>
  </div>
))}
    
    
    
    
    </>
  )
}

export default App