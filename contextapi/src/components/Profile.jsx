import { useContext } from "react"
import UserContext from "../context/UserContext"
const Profile = () => {
    const {user} = useContext(UserContext);

 
    if(!user) return <h1 className="text-center bg-black text-white w-1/2 mx-auto p-4">Not Logged In</h1>
    return <div className="text-center bg-black text-white w-1/2 mx-auto p-4">Welcome {user.username}</div>
  
}

export default Profile