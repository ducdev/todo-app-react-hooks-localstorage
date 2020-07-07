import React, { useCallback } from 'react';

const TodoItem = ({ todo, id, onRemoveTodo, onToggleTodoDone, isDone }) => {
  const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])

  const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone])

  return (
    <li>
      <span style={{textDecoration: isDone ? 'line-through' : 'none'}}>{todo}</span>
      <button onClick={removeTodoHandler}>Remove</button>
      <button onClick={toggleTodoDoneHandler}>{`Mark as ${isDone ? 'pending': 'done'}`}</button>
    </li>
  )
};

export default React.memo(TodoItem);