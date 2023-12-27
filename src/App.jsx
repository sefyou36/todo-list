import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoInput from './TodoInput';


const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];
function App() {
  const [myTodo,setMyTodo] = useState(DUMMY_TODOS)


  return (
    <>
     <TodoInput data={myTodo} setData={setMyTodo}/>
     <TodoList data={myTodo}/>
     
        
    </>
  )
}

export default App
