import {useCallback, useEffect, useRef, useState} from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);
  const [password,setPassword] = useState('');
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
    {
      let pass = "";
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      if(number) str+="0123456789";
      if(character) str+="!@#$%^&*()_+";
      for(let i=1;i<=length;i++){
        pass+=str.charAt(Math.floor(Math.random()*str.length)+1);
      }
      setPassword(pass)
      
    }
  },[length,number,character])

  const copytoClipboard = useCallback(()=>{
    navigator.clipboard.writeText(passwordRef.current.value);
    passwordRef.current?.select();
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,number,character])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-8 my-44 text-red-500 bg-gray-400'>
        <h1 className='text-white text-center text-3xl mb-2'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden   bg-neutral-200 shadow'>
          <input type="text"
          value={password}
          ref={passwordRef}
          className='outline-none border-none rounded bg-neutral-200 w-full my-4  mx-2 px-4 py-2'
          placeholder='Password'
          readOnly
           />
           <button className='outline-none bg-blue-400 text-white px-4 py- shrink-0' onClick={copytoClipboard} >Copy</button>
        </div>  
        <div className='flex text-sm gap-x-2 mt-5'>
          <div className='flex items-center gap-x-2'>
            <input type="range"
            min={6} 
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={number} 
            onChange={()=>setNumber((prev)=>!prev)}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={character} 
            onChange={()=>setCharacter((prev)=>!prev)}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App