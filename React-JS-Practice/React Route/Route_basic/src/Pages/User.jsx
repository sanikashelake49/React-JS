import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const user=[
        {id:1,name:"superman",gmail:"super@gmail.com",age:20},
        {id:2,name:"spiderman",gmail:"spider@gmail.com",age:34},
        {id:3,name:"ironman",gmail:"ironman@gmail.com",age:45},       
         {id:4,name:"batman",gmail:"batman@gmail.com",age:15},
        
    ]
  return (
    <>
    {
user.map((data)=> <div key={data.id}>
  <Link to={`/user/${data.id}`}><h1>{data.name}</h1></Link>
  </div>
)
}
</>
    
  )

}



export default User