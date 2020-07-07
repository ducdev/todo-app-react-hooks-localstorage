import React from 'react';

// COMPONENT
import TodoItem from './TodoItem';

const TodoList = ({ todoItems }) => (
  <ul>
    {
      todoItems && // Check if todoItems exists
      Array.isArray(todoItems) && // Check if it's an array
      todoItems.length > 0 && // The array should not be empty
      todoItems.map(({ id, todo }) => ( // If all conditions are met, we render a list of todo items
        <TodoItem
          key={id}
          todo={todo}
        />
      ))
    }
  </ul>
);

export default TodoList;