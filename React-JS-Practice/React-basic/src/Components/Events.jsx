import React from 'react'

const Events = () => {
    const showAlert=()=>{
        alert("This is alert with event")
    }
    const bg_light=()=>{
        document.body.style.backgroundColor="white";
        document.body.style.color="black"
    }
    const bg_dark=()=>{
         document.body.style.backgroundColor="black";
        document.body.style.color="white"
    }
        let curr="black"
       const change_color=()=>{
        if( curr==="black"){
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        curr="white"
        }
        else if(curr==="white"){
             //curr="white";
             document.body.style.backgroundColor="black"
        document.body.style.color="white"
        curr="black"
        }
        
        else{
            console.log("no change")
        }
    }

  return (
    <>
    <h1>Events</h1>
    <button onClick={showAlert}>Click</button>
    <div>
        <button onClick={bg_light}>Change_to_light</button>
        <button onClick={bg_dark}>Change_to_dark</button>
        <button onClick={change_color}>Change</button>
        


    </div>
    </>
  )
}

export default Events