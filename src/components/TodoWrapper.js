import React, {useState} from 'react';
import '../index.css';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { UpdateTodo } from './UpdateTodo';
uuidv4();


 export const TodoWapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) =>{
    setTodos([...todos, {id: uuidv4(), task: todo, completed:false, isEditing:false}])
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo,  completed: !todo.completed}:todo ))
  }

   const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
   }

  //  its Updating the spefifed task
   const updateTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
   }

  //  its Updatting all the task
   const editTask = (updateTask, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task:updateTask, isEditing: !todo.isEditing}: todo))

   }
         
  return (     
    <>
    <div className='mt-[5rem] p-[2rem] w-[90%] sm:w-[70%] xl:w-[60%] 2xl:w-[40%] shadow-2xl min-h-[25rem] flex flex-col items-center bg-[#1B1A41]'>
    <h1 className="text-center text-2xl py-2 font-poppins text-4xl font-bold text-white">Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
    
      {todos.map((todo, index)=>(
        todo.isEditing ?(<UpdateTodo updateTodo={editTask} task={todo}/>
        ) : (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        )
      ))} 
          </div>  
    </>
  )
}