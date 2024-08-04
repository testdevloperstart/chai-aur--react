import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="App w-full h-screen duration-75"  style={{backgroundColor:color}}>
      <h1>this is a color changing app</h1>
      <div className='fixed flex flex-wrap justify-center bottom-2 inset-x-2 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bd-white px-3 py-2 rounded-2xl'>
          <button onClick={()=>setColor("red")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("black")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>setColor("orange")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>setColor("brown")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"brown"}}>brown</button>
        </div>
      </div>
     
     
    </div>
  );
}

export default App;
