import { useState,useContext } from "react"
import UserContext from "../context/UserContext"
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className=" mx-auto w-[50%] bg-slate-600 text-white flex items-center justify-center flex-col h-[50vh]">
        <h2 className="text-2xl font-bold mb-5">Login</h2>
        <input type="text" name="" id="" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username} className="mb-4 px-2 py-1 rounded-lg text-black outline-none indent-2"/>
        <input type="password" name="" id="" placeholder="Password"value={password} onChange={(e)=>{setPassword(e.target.value)}} className="mb-4 px-2 py-1 rounded-lg text-black outline-none indent-2"/>
        <button onClick={handleSubmit} className="bg-slate-500 text-white rounded px-4 py-2 font-bold">Submit</button>
    </div>
  )
}

export default Login