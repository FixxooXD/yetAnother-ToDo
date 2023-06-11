import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, updateTodo}) => {
  return (
     
    <div className='flex p-2 px-4 justify-between items-center w-[85%] sm:w-[60%] md:w-[70%] xl:w-[15rem] 2xl:w-[24rem] mt-4 h-12 xl:h-14 bg-[#845AFC]'>
     <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? "line-through" : ""} font-poppins text-xl text-white shadow-inner`} >{task.task}</p>
      <div className='w-16 px-1 flex justify-between items-center'>
       <FontAwesomeIcon className='text-white text-xl' icon={faPenToSquare} onClick={() =>updateTodo(task.id)} />
       <FontAwesomeIcon className='text-white text-xl' icon={faTrash} onClick={() => deleteTodo(task.id)} />
       </div>
    </div>
 )
}
