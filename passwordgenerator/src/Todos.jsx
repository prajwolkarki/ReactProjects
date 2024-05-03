
import { memo } from "react";
const Todos = ({todos,addTodo}) => {
  console.log('child render');
  return (
    <div>
      <h1>My Todos</h1>
      {todos.map((todo,index)=>{
        return <div key={index}>{todo}{index}</div>
      })}
      <button onClick={addTodo}>Add todo</button>
    </div>
  )
}

export default memo(Todos)