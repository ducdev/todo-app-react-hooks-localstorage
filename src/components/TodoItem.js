import React, { useCallback } from 'react';

const TodoItem = ({ todo, id, onRemoveTodo }) => {
  const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])

  return (
    <li>
      <span>{todo}</span>
      <button onClick={removeTodoHandler}>Remove</button>
    </li>
  )
};

export default TodoItem;