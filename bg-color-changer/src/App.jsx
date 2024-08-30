import { useState } from "react"
import Card from "./Components/Card";
function App() {
    const [color,setColor] = useState("green");
  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
            
            <div className="flex items-center justify-center h-screen">
            <Card src = "https://dims.apnews.com/dims4/default/96f3651/2147483647/strip/true/crop/2847x4268+0+0/resize/400x599!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2F3353bc7507a6464889e47642c90d8346%2F2847.jpeg" />
            </div>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
              <button
              onClick={()=>{setColor("Yellow")}}
              className="outline-none px-4 py-1 rounded-full"
              style={{backgroundColor:"yellow"}}>Yellow</button>
              <button
              onClick={()=>{setColor("Blue") }}
              className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"blue"}}>Blue</button>
              <button onClick={()=>{setColor("olive")}}
              className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"olive"}}>Olive</button>
              <button onClick={()=>{setColor("pink")}}
              className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"pink"}}>Pink</button>
              </div>

          </div>
      </div>
  )
}

export default App
