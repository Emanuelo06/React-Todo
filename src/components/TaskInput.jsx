// TaskInput.js
import React from 'react';

const TaskInput = ({ inputValue, updateInput, addTask }) => {
  return (
    <div className='w-full h-[90px] flex p-5 bg-[#FFFFFF] rounded-[8px] shadow-xl'>
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={updateInput}
        className="border-[#E5E7Eb] border-2 rounded-[8px] pl-5 w-[75%] outline-0"
      />
      <button
        className="bg-[#2563EB] w-[20%] ml-10 rounded-[8px] text-white"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
