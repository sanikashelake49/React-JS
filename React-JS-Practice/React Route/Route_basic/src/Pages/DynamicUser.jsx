import React from 'react'
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom'

const DynamicUser = () => {
    let {id}=useParams();
       const user=[
        {id:1,name:"superman",gmail:"super@gmail.com",age:20},
        {id:2,name:"spiderman",gmail:"spider@gmail.com",age:34},
        {id:3,name:"ironman",gmail:"ironman@gmail.com",age:45},       
         {id:4,name:"batman",gmail:"batman@gmail.com",age:15},
        
    ]
    const specific_user=user.find(data=>data.id==id);
    const location=useLocation();
    const navigate=useNavigate();


  return (
    <>
    <div>DynamicUser</div>
    <h1>id:{id}</h1>
    <h1>name={specific_user.name}</h1>
        <h1>gmail={specific_user.gmail}</h1>
    <h1>age={specific_user.age}</h1>
     
     {location.pathname==`/user/${id}` && <div><h1>hello {specific_user.name}</h1></div>}
     {<button onClick={()=>navigate('/')}>Go to homepage</button>}
    </>
  )


    
}

export default DynamicUser