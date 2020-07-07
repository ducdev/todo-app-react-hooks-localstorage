import React, { useState, useCallback } from 'react';

// COMPONENT
import TodoList from './components/TodoList';
import AddNewTodoForm from './components/AddNewTodoForm';

// HELPER
import { getTodoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './helpers'

const Todo = () => {
  // Initialize todoItems state with the JSON string stored under todo key in localStorage, if it's falsy, use an empty array instead
  const [todoItems, setTodoItems] = useState(getTodoItemsFromLocalStorage('todo') || [])

  // Event handler for adding new Todo, using useCallback to return a memoized callback.
  const addTodoHandler = useCallback(todo => {
    // Todo id should be unique and numeric >= 1, then the new Todo id should the biggest existing Todo id + 1
    let latestTodoItem = null
    if (todoItems.length === 1) {
      latestTodoItem = todoItems[0]
    }
    else if (todoItems.length > 1) {
      const todoItemsDescendingSortedById = todoItems.sort((a, b) => a.id > b.id)
      latestTodoItem = todoItemsDescendingSortedById[0]
    }
    
    // Add new Todo at the beginning of the array
    const newTodoItems = [
      {
        id: latestTodoItem ? latestTodoItem.id + 1 : 0,
        todo,
      },
      ...todoItems,
    ]

    // Update todoItems state
    setTodoItems(newTodoItems)

    // Save to localStorage
    saveTodoItemsToLocalStorage('todo', newTodoItems)
  }, [todoItems]) // Dependencies list for useCallback

  const removeTodoHandler = useCallback(id => {
    // Filter out the todoItem which is about to be removed
    const newTodoItems = todoItems.filter(todoItem => todoItem.id !== id)

    // Update todoItems state
    setTodoItems(newTodoItems)

    // Save to localStorage
    saveTodoItemsToLocalStorage('todo', newTodoItems)
  }, [todoItems])

  const toggleTodoDoneHandler = useCallback(id => {
    const todo = todoItems.find(todoItem => todoItem.id === id)
    todo.isDone = !todo.isDone

    // Update todoItems state
    setTodoItems([...todoItems])

    // Save to localStorage
    saveTodoItemsToLocalStorage('todo', todoItems)

  }, [todoItems])

  return (
    <div className="todo">
      <h1>Todo</h1>

      <AddNewTodoForm
        onAddTodo={addTodoHandler} // Passing addTodoHandler to AddNewTodoForm
      />

      <TodoList
        todoItems={todoItems} // Passing todoItems to TodoList
        onRemoveTodo={removeTodoHandler} // Passing removeTodoHandler to TodoList
        onToggleTodoDone={toggleTodoDoneHandler} // Passing toggleTodoDoneHandler to TodoList
      />
    </div>
  );
}

export default React.memo(Todo);
