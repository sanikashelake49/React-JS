import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const EmpForm = () => {
    const [emp, setEmp] = useState({
        name:"",
        email:""
    })

    const handleChange=(e)=>{
        setEmp({
            ...emp,[e.target.name]:e.target.value
        })
      }
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{

        const response=await axios.post("http://localhost:5000/employee1",emp);

        alert(response.data);
      
        setEmp({
          name:"",
          email:""
        })
        }
        catch(error){
            console.log(error);
        }
    }

    
  return (
    <>
    <div>
        <div><h2>Emp Login Form</h2></div><br/>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder='Enter name' value={emp.name}required></input><br/><br/>
        <input onChange={handleChange} type="email" name="email" placeholder='Enter Email' value={emp.email}required></input>
        <button>Login</button>
      </form>

    </div>
    </>
  )
}

export default EmpForm