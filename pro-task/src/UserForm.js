import React,{useState,useEffect} from "react";

const UserForm=(props)=>{
    const {formSubmission,data}=props
    const[title,setTitle]=useState('')
  
    
    const handleChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
           title:title
        }
        formSubmission(formData)
    }

    useEffect(()=>{
      setTitle('')
    },[data])
  return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>title</label><br/>
            <input type="text" value={title} onChange={handleChange}/><br/>
            <input type="submit"/>
        </form>
    </div>
  )
}
export default UserForm