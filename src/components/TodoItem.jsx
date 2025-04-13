// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, index, removeTask }) => {
  return (
    <div className="bg-white w-full rounded-[8px] p-3 pl-5 text-[#1f2937] flex justify-between shadow-xl mt-5 align-center">
      <li key={index} className="text-center flex pt-1">
        {todo}
      </li>
      <button
        className="bg-red-500 text-white p-1 rounded-[8px] mb-0 text-center"
        onClick={() => removeTask(index)}
      >
        Remove Task
      </button>
    </div>
  );
};

export default TodoItem;
