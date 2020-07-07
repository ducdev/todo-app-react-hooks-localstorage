import React from 'react';

// COMPONENT
import TodoItem from './TodoItem'

const TodoList = ({ todoItems }) => (
  <ul>
    {
      todoItems.map(({ id, label }) => <TodoItem key={id} label={label} />)
    }
  </ul>
)

export default TodoList