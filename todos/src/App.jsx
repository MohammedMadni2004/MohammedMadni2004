import { useState } from 'react'
import TodosDisc from '../components/todos.jsx'

import './App.css'

function App() {
  const [todo, setTodos] = useState("")
  const [existing,setExisting]=useState([])
  

  return (
    <>
      <form >
        <input placeholder="write your todo" onChange={(event) => setTodos(event.target.value)}></input>
        <button type="submit" onClick={(event)=>{
          event.preventDefault();
          console.log(existing);
          setExisting([...existing,todo]);
          setTodos("")
          console.log("kuch to hua h")
          
        }}>Submit</button> 
      </form>

      <h3>Your todos are as follows:</h3>
      <div>{todo}</div>
      <div>existing todos </div>
      <TodosDisc todos={existing}/>
        

      

    </>
  )
}

export default App
