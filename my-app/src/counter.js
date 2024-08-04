import { Button } from "bootstrap"
import { useState } from "react"

function Counter (){
    let[counter,setCounter]=useState(5)

    
    const Addvalue=()=>{
        console.log(Math.random())
        if(counter<20){
            setCounter(counter+1)
        }else{
            alert("you cannt add more numbers")
        }
    }
    const Removevalue=()=>{
        console.log(Math.random())
        if(counter>0){
            setCounter(counter-1)
        }else{
            alert("you cannt decrease more number")
        }
    }
return(
    <div>
        <h1>this is counter</h1>
        <h2>counter valur: {counter}</h2>
        <button onClick={Addvalue}>Add value</button>
        <br></br>
        <button onClick={Removevalue}>remove value</button>
    </div>
)
}
export default Counter