import React from 'react'

const Filter = () => {
    const person=[
        {id:1,name:"sanika",active:true},
         {id:2,name:"superman",active:false},
        {id:3,name:"spiderman",active:true},
        {id:4,name:"sanika",active:false},


    ]
    // const active_Person=person.filter(data=>data.active)
    // console.log(active_Person)
  return (
    <>
    <div>
        {person
        .filter((data)=>! (data.active))
        .map((item)=>(
            <div key={item.id}>
            <h1>{item.name}</h1>
    </div>
        ))}
        </div>
            </>
  )
}

export default Filter