import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const GetEmp = () => {

    const [getAll, setGetAll] = useState([])

    const getAllRec=async()=>{

        try{
            const response=await axios.get("http://localhost:5000/employee1");

            setGetAll(response.data);

        }catch(error){
            console.log(error);
        }
    }

    const deleteRec=async(id)=>{
        try{
            const response=await axios.delete(`http://localhost:5000/employee1/${id}`);
            alert(response.data);
            getAllRec();
        }catch(error){
            console.log(error);
        }

    }


  return (
    <>
    <div>
     <button onClick={getAllRec}>Get All Records</button>

    </div>

    <div>
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {
                    getAll.map((emp)=>{
                        return(
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td><button onClick={()=>deleteRec(emp.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>


    </>
  )
}

export default GetEmp