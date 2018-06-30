import React from 'react';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map(todo => (
        <li
          key={todo.id}
          style={
            {
              textDecoration: (todo.completed ? 'line-through' : ''),
            }
          }
          onClick={() => { toggleTodo(todo.id) }}
          >
          {todo.text}
        </li>
      ))
    }
  </ul>
);

export default TodoList;