// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTask }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TodoList;
