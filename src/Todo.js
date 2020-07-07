import React from 'react';

// COMPONENT
import TodoList from './components/TodoList'

const Todo = () => {
  const mockTodoItems = [
    {
      id: 1,
      label: 'Foo'
    },
    {
      id: 2,
      label: 'Bar'
    }
  ]

  return (
    <div className="todo">
      <h1>Todo</h1>
      <TodoList
        todoItems={mockTodoItems}
      />
    </div>
  );
}

export default Todo;
