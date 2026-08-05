import axios from 'axios'

const API=axios.create({
    baseURL:import.meta.env.VITE_API_URI
})

export const createData=(userData)=>{
    return API.post("/createdata",userData)
}

export const getData=()=>{
    return API.get("/getdata")
}

export const updateData=(userid,userdata)=>{
        return API.put(`/updatedata/${userid}`,userdata)
}

export const deleteData=(userid)=>{
    return API.delete(`/deletedata/${userid}`)
}