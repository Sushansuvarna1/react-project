import React,{useState} from "react";
import axios from "axios"
import UserForm from "./UserForm";
import UserList from "./UserList";


const UserContainer=(props)=>{
    const [data,setData]=useState([])
    console.log(data)

    const formSubmission=(formData)=>{
       axios.post("http://localhost:3060/api/title",formData)
       .then((response)=>{
        const result=response.data
        setData([...data,result])
       
       })
       .catch((err)=>{
        console.log(err.mesaage)
       })
    }
   return(
      <div>
    
    <UserList data={data}/>
    <UserForm formSubmission={formSubmission} data={data}/>
      </div>
  
   )
}

export default UserContainer