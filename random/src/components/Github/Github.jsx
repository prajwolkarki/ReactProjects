// import  { useEffect, useState } from 'react'

import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/prajwolkarki')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-slate-600 text-white p-4 text-3xl flex   items-center flex-col'> 
        <h3>Followers:{data.followers}</h3>
       <img src={data.avatar_url} alt="Git picture" width={300} />   
    </div>
  )
}

const Loader  = async() => {   
    const response = await fetch('https://api.github.com/users/prajwolkarki');
    return response.json();
    
}
export  {Github,Loader};