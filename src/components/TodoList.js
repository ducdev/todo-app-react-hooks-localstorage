import React from 'react';

// COMPONENT
import TodoItem from './TodoItem';

const TodoList = ({ todoItems, onRemoveTodo, onToggleTodoDone, onEditTodo, setCustomError }) => {
  return (
    <ul>
      {
        todoItems && // Check if todoItems exists
        Array.isArray(todoItems) && // Check if it's an array
        todoItems.length > 0 && // The array should not be empty
        todoItems.map(({ id, todo, isDone }) => ( // If all conditions are met, we render a list of todo items
          <TodoItem
            key={id}s
            id={id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onToggleTodoDone={onToggleTodoDone}
            onEditTodo={onEditTodo}
            isDone={isDone}
            setCustomError={setCustomError}
          />
        ))
      }
    </ul>
  )
};

export default React.memo(TodoList);