import React from "react";
import { useState } from "react";
import "../index.css";

export const UpdateTodo = ({updateTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(value === ""){
      console.log("Add a Valid Task!");
    }else{
      updateTodo(value, task.id)
    }
    setValue("")
  };

  return (
    <form onSubmit={handleSubmit}  className="">
      <div className="flex items-center border-2 border-[#845AFC] mt-4">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="todo-input w-[95%] xl:w-[20rem] h-[3rem] text-lg px-2 font-poppins"
          placeholder="What is the task today?"
        />
        <button
          type="submit"
          className="todo-btn text-sm sm:text-lg xl:text-xl w-32 sm:w-36  h-[3rem] xl:p-2 font-poppins text-white bg-[#845AFC]">
          Update Task
        </button>
      </div>
    </form>
  );
};







