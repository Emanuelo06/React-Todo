import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TodoList from './components/TodoList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const updateInput = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTodos([inputValue, ...todos]);
      setInputValue('');
    }
  };

  const removeTask = (indexToRemove) => {
    const filteredTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(filteredTodos);
  };

  return (
    <div className="bg-[#f9fafb] w-full h-[100vh] pt-5">
      <div className="w-150 m-auto">
        <h1 className="task font-bold text-start text-3xl text-[#1F2937]">Task Manager</h1>
        <p className="text-[#4b5563] mt-3 mb-8">Keep Track of your daily tasks</p>

        {/* TaskInput Component */}
        <TaskInput inputValue={inputValue} updateInput={updateInput} addTask={addTask} />

        {/* TodoList Component */}
        <TodoList todos={todos} removeTask={removeTask} />
      </div>
    </div>
  );
}

export default App;