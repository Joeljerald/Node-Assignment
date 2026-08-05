import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createData, deleteData, getData, updateData } from '../api/axios'

const App = () => {

  const[form,setForm]=useState({name:"",email:"",age:""})
  const[displayData,setDisplayData]=useState([])
  const[editId,setEditId]=useState(null)

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const gettingData=async()=>{
    try {
      const getdatas=await getData();
      

console.log(getdatas.data);

// setDisplayData(getdatas.data.getData);  
      
      setDisplayData(getdatas.data.getCrud)


    } catch (error) {
      console.log(error.response.data.msg);
      
    }
  }

  useEffect(()=>{
    gettingData()
  },[])

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const FetchData=await createData(form)
      console.log(FetchData.data);
      await gettingData()
      setForm({name:"",email:"",age:""})


      
    } catch (error) {
      console.log(error.response.data.msg);
      
    }
  }

  const handleEdit=(e)=>{
    setForm({name:e.name,email:e.email,age:e.age})
    setEditId(e._id)

  }

  const handleUpdate=async(e)=>{
    e.preventDefault()
    try {
      const updateDatas=await updateData(editId,form)
      alert(updateDatas.data.msg)
      await gettingData()
      setForm({name:"",email:"",age:""})
      setEditId(null)
    } catch (error) {
      console.log(error.response.data.msg);
      
    }
  }

  const handleDelete=async(id)=>{
    try {
      const deleteDatas=await deleteData(id)
      console.log(deleteDatas.data.msg);
      await gettingData()
      
    } catch (error) {
      console.log(error.response.data.msg);
      
    }
  }


  return (
    <>
    <form>
      <label >User Name : </label>
      <input type="text"  name="name" placeholder='Enter your name' value={form.name} onChange={handleChange} />
      <br></br>

      <label>User Email : </label>
      <input type="text" name='email' placeholder='Enter your email' value={form.email} onChange={handleChange} />

      <br></br>

      <label>user Age : </label>
      <input type="text" name='age' placeholder='Enter your age' value={form.age} onChange={handleChange} />

    {editId?<button onClick={handleUpdate}>Update</button>:<button onClick={handleSubmit}>Submit</button>}
    </form>

    {displayData.map((e)=>(
      <div key={e._id}>
      <h1>Name : {e.name}</h1>
      <p>Email : {e.email}</p>
      <p>Age : {e.age}</p>
      <button onClick={()=>handleEdit(e)}>Edit</button>
      <button onClick={()=>handleDelete(e._id)}>Delete</button>

      </div>

    ))}
    </>
  )
}

export default App