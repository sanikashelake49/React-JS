import React from 'react'
import { useEffect ,useState} from 'react'

const UseEffect = () => {
  const [counter, setCounter] = useState(0)

    useEffect(() => {

     
        console.log("useeffect is running")
        document.title="sanuka";
        document.title="sanika";
        
      },[counter])
    const hadelClick=()=>{
       if(counter>=0){
      const dec=setCounter(counter-1);
       }
       else{
        setCounter(0);
       }
        
    }
    
  return (
    <div>
     h1<h1>Counter={counter}</h1>
     <button onClick={()=>setCounter(counter+1)}>Increase</button> 
     <button onClick={hadelClick}>Decrease</button>

    </div>
  )
}

export default UseEffect