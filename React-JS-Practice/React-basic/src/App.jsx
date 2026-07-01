import React from 'react'
import Product from './Components/Product'
import Items from './Components/Items'
import Events from './Components/Events'
import UseState from './Components/UseState'
import Map from './Components/Map'
import Filter from './Components/Filter'
import UseEffect from './Components/UseEffect'

const App = () => {
  const obj={
    ram:'4gb',
    rom:'128gb',
    chip:'intel i-9'
  }
  // /alert("this is new alert"+value)
    //console.log("count value after"+value)

  
  return (
    <>
    {/* { <Product 
    name="iphone-16"price={70000} color="blue" data={obj}/>
    <Product name="iphone-17"price={70000} color="blue"/>
<Items/> }
<Events/> 
<div>
<h1 id="count">Counter</h1>
{ <button onClick={handleClick}>count </button> }
</div>
<UseState/> */}

{/* <Map/> */}
{/* <Filter/> */}
<UseEffect/>


    </>
  )
}

export default App

// import React from 'react'
// import Product from './Components/Product'

// const App = () => {

//   // const name="sanika"
//   // const person={
//   //   name:'superman',
//   //   gmail:'superman@gmail.com'
  
//   return (
//     <> 

// <Product/>
// <h1>welcome to the product component</h1>


//     </>

//     // {/* <div>
//     //   <h1>2+5</h1>
//     //   <h1>{2+5}</h1>
//     //   <h1>name={name}</h1>
//     //   <h1>name={person.name}</h1>
//     //   <h1>gamil={person.gmail}</h1>
//     // </div>
//     //  <h1>hii</h1> */}
 
    
//   )

// }
// export default App






// const App=()=>{
//   return <div>Hello</div>
// }

// export default App;

// export const App=()=><div>Hello</div>