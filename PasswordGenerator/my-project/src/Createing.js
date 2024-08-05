/*useCallback
 useCallback is a React Hook that lets you cache a function
 definition between re-renders.*/

import { useState, useCallback } from "react"
function Createing()
{
    const [length, setLength]=useState(8)
    const [numberalowed,setnumberalowed]=useState(false)
    const [charalowed,setcharalowed]=useState(false)
    const [password, setpassword]=useState('')

    const passwordgenerator= useCallback(()=>{
        let pass ="";
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberalowed)str += "0123456789"
        if(charalowed)str += "&*$#@!%-_"
        for(let i=1; i<=Array.length;i++){
            let char =Math.floor(Math.random()*str.length+1)
            pass = str.charAt(char)
        }
        setpassword(pass)
    },[length,numberalowed,charalowed,setpassword])

//     
    return(
        <div>
            <div className="w-full max-w-2xl mx-auto shadow-md 
             rounded-lg px-4 my-8 text-orange-500 
             bg-gray-800 h-40"> 

            <h2 className="text-4xl text-center text-white"> PassWord Genarator</h2>
             
             <div className=" shadow rounded-lg 
             overflow-hidden md-4">
                <input 
                type="teext"
                value={password}
                className="outline-none  rounded-2xl w-full py-1 px-3"
                placeholder="password"
                readOnly></input>
                <button className="bg-blue-800 text-white">Copy</button>
             </div>
                </div>
        </div>
    );
}
export default Createing;