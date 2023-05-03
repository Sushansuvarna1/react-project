import React,{useState} from "react"

const UserList=(props)=>{
    const {data}=props
    const[energy,setEnergy]=useState('')

    const handleChange=(e)=>{
      console.log(e.target.value)
      setEnergy(e.target.value)
    }
   
  return(
    <div>
    <h1>Q1.What is JavaScripts</h1>
     {
        data.map((ele)=>{
            return(
                <div>
                <h3 key={ele._id}>
                  <input type="radio" value={ele.title}  checked={energy===ele.title} onChange={handleChange}/>
                  {ele.title}
                  </h3>
                  
                </div>
           
            )
        })
     }
    </div>
    
  )
}

export default UserList