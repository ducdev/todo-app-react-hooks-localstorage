import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders add todo input', () => {
  const { getByPlaceholderText } = render(<Todo />);
  const addTodoInputElement = getByPlaceholderText(/What needs to be done?/i);
  expect(addTodoInputElement).toBeInTheDocument();
});
