/*useCallback:-
 useCallback is a React Hook that lets you cache a function
 definition between re-renders.*/

/*useEffect:- 
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)
useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
This is not what we want. There are several ways to control when side effects run.
We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.*/

/*useRef:-
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.  
*/


import { useState, useCallback, useEffect, useRef } from "react"
function Createing()
{
    const [length, setLength]=useState(8)
    const [numberalowed,setnumberalowed]=useState(false)
    const [charalowed,setcharalowed]=useState(false)
    const [password, setpassword]=useState('')


    const passwordref = useRef(null)

    const passwordgenerator= useCallback(()=>{
        let pass ="";
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberalowed)str += "0123456789"
        if(charalowed)str += "&*$#@!%-_"
        for(let i=1; i<=length;i++){
            let char =Math.floor(Math.random()*str.length+1)
            pass += str.charAt(char)
        }
        setpassword(pass)
    },[length,numberalowed,charalowed,setpassword])

    const Copypasswordtoclip =useCallback(()=>{
        passwordref.current?.select();
        
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{passwordgenerator()}, [length,numberalowed,charalowed,passwordgenerator])

    return(
        <div>
            <div className="w-full max-w-sm mx-auto shadow-md 
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
                readOnly
                ref={passwordref}></input>
                <button className="outline-none px-3 py-0.5 shrink-0 bg-blue-800 text-white"
                onClick={Copypasswordtoclip}>Copy</button>
             </div>
             <div className="flex text-sm gap-x-1">
                <div className="flex items-center gap-x-1">
                    <input type="range" min={6} max={100} value={length}
                    className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}></input>
                    <label>length:{length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input type="checkbox" defaultChecked={numberalowed} id="numberinput"
                    className="cursor-pointer" onChange={()=>{setnumberalowed((prev)=>!prev)}}></input>
                    <label>Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input type="checkbox" defaultChecked={numberalowed} id="numberinput"
                    className="cursor-pointer" onChange={()=>{setnumberalowed((prev)=>!prev)}}></input>
                    <label>characters</label>
                </div>

             </div>

            </div>
        </div>
    );
}
export default Createing;