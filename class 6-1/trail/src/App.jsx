import { useEffect, useState } from 'react'
import React from "react"

function App() {
  const [todos,setTodos] = useState([{
    id:1,
    title:"go to the gym",
    description:"gym jao"
  },{
    id:2,
    title:"go to the gym1",
    description:"gym jao"
  },{
    id:3,
    title:"go to the gym2",
    description:"gym jao"
  }])
  function updateTitle(){
    setTitle("my name is "+Math.random());
  }

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title:"go to the gym3",
      description:"gym jao"

    }])
    useEffect(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res){
          const json = await res.json();
          setTodos(json.todos);
        })
    },[])

  }
  return (
    <>
        <button onClick={addTodo}>Add a todo</button>
        {todos.map(todo=><Todo title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
