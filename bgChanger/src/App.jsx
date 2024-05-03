import { useState } from 'react'


function App() {
  
let [color,setColor] = useState("blue");
  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>
        <div className='w-full bg-white p-4  fixed bottom-12 flex flex-wrap gap-4 justify-center'>
        <button onClick={()=>setColor("red")} className='px-5 py-3 bg-red-500 text-white rounded-lg'>Red</button>
        <button onClick={()=>setColor("green")} className='px-5 py-3 bg-green-500 text-white rounded-lg'>Green</button>
        <button onClick={()=>setColor("blue")} className='px-5 py-3 bg-blue-500 text-white rounded-lg'>Blue</button>
        <button onClick={()=>setColor("yellow")} className='px-5 py-3 bg-yellow-500 text-white rounded-lg'>Yellow</button>
        <button onClick={()=>setColor("pink")} className='px-5 py-3 bg-pink-500 text-white rounded-lg'>Pink</button>
        <button onClick={()=>setColor("orange")} className='px-5 py-3 bg-orange-500 text-white rounded-lg'>Orange</button>
        <button onClick={()=>setColor("cyan")} className='px-5 py-3 bg-cyan-500 text-white rounded-lg'>Cyan</button>
        <button onClick={()=>setColor("yellow")} className='px-5 py-3 bg-gray-500 text-white rounded-lg'>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
