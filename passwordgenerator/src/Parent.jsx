import {useCallback, useState} from 'react'
import Todos from './Todos'
const Parent = () => {
  const [count,setCount] = useState(0);
  const [todo,setTodos] = useState([]);
  const addTodo = useCallback(()=>{setTodos([...todo,'new todo'])},[todo]);
  return (
    <>
    <Todos todos={todo} addTodo={addTodo}/>
    <hr />
    <div>
      Count:{count}
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
    </>
  )
}

export default Parent;