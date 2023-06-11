import React from "react";
import { useState } from "react";
import "../index.css";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(value === ""){
      console.log("Add a Valid Task!");
    }else{
      addTodo(value)
    }
    setValue("")
  };

  return (
    <form onSubmit={handleSubmit}  className="mt-5">
      <div className="flex items-center border-2 border-[#845AFC]">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="todo-input w-[95%] xl:w-[20rem] h-[3rem] text-lg px-2 font-poppins"
          placeholder="What is the task today?"
        />
        <button
          type="submit"
          className="todo-btn text-sm sm:text-lg xl:text-xl w-24 sm:w-36  h-[3rem] xl:p-2 font-poppins text-white bg-[#845AFC]">
          Add Task
        </button>
      </div>
    </form>
  );
};
