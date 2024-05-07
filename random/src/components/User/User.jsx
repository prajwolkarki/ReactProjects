import { useParams } from "react-router-dom"
const User = () => {
    const {userId} = useParams();
  return (
    <div className="h-[50vh] flex justify-center items-center">The user id is {userId}</div>
  )
}

export default User