import React from 'react'
import { useState } from 'react';

const UseState = () => {
    // let counter=0;
    const [counter, setCounter] = useState(100)

    const increase=(value)=>{
        // counter++;
        // console.log(counter)
        // setCounter(prev=>prev+1)
        setCounter(counter+value)
    }

    const decrease=()=>{
   setCounter(counter-100);
    }
  return (

<>
<h1>Counter={counter} </h1>
{/* <button onClick={increase}>increase</button>
<button onClick={decrease}>decrease</button> */}
<button onClick={()=>increase(1)}>increase</button>
 {/* <button onClick={decrease}>decrease</button> */}
</> 
 )
}

export default UseState