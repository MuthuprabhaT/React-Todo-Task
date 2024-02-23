import { useState } from "react";
import AddToDo from "./AddToDo"
import TaskList from "./TaskList"

let initialId = 0;
function App() {
  const [todos,setTodos]=useState([]);

  const [status, setStatus] = useState("Not Completed")

  const handleAddTodo = (todoName,description) => {
    setTodos([...todos,{
      id:initialId++,
      todoName:todoName,
      description:description,
      status:"Not Completed"
    }]);
    setStatus("Not Completed")
  }

const updateStatus = (id,newStatus) => {
  const updatedTodos = todos.map((todo) => {
    if(todo.id === id){
      return {...todo,status:newStatus}
    }
    return todo;
  })
  setTodos(updatedTodos)
}

  const handleChangeTodo = (editTodo)=>{
    setTodos(todos.map (t => {
      if(t.id === editTodo.id){
        return editTodo;
      }else{
        return t;
      }
    }))
  }

  const handleDeleteTodo = (deleteTodo) => {
    setTodos(todos.filter(t => t.id !== deleteTodo))
  }

  return (
    <>
      <AddToDo onAddTodo={handleAddTodo}/>

      <TaskList todos={todos} updateStatus={updateStatus} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
