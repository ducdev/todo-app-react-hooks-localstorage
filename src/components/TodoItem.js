import React, { useCallback } from 'react';

const TodoItem = ({ todo, id, onRemoveTodo, onToggleTodoDone, onEditTodo, isDone }) => {
  const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])

  const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone])
  const editTodoHandler = useCallback(event => {
    if (event.keyCode === 13) { // Detect ENTER key down
      event.preventDefault(); // Prevent adding a new line because it's supposed to be single line
      onEditTodo(id, event.target.value);
      event.target.blur(); // Make the current input lost focus after finishing onEditTodo
    }
  }, [id, onEditTodo])

  return (
    <li>
      <input
        defaultValue={todo} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onKeyDown={editTodoHandler} // handle innerHTML change
        tagName='span' // Use a custom HTML tag (uses a div by default)
        style={{textDecoration: isDone ? 'line-through' : 'none'}}
      />
      <button onClick={removeTodoHandler}>Remove</button>
      <button onClick={toggleTodoDoneHandler}>{`Mark as ${isDone ? 'pending': 'done'}`}</button>
    </li>
  )
};

export default React.memo(TodoItem);