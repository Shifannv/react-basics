import { useState } from "react"

function Counter(){
    
    const [number,setNumber]=useState(0)

    return(
        
        <>
    <div style={{backgroundColor:"blue"}}>

        <button style={{ backgroundColor:"red", color:"white"}} onClick={()=>setNumber(number -1)}
        disabled={number === 0}>decrement</button>
        <h1>{number}</h1>
        <button style={{ backgroundColor:"red", color:"white"}} onClick={()=>setNumber(number +1)}>+</button>
        <button style={{ backgroundColor:"red", color:"white"}} onClick={()=>setNumber(0)}>rest</button>
      </div>

        </>
        
    )
}

 export default Counter