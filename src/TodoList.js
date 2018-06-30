import React from 'react';
import FilterLink from './FilterLink';

import { VisibilityFilters } from './redux/constants/ActionTypes';

const TodoList = ({ todos, toggleTodo }) => (
  <div>
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

    <div>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>

  </div>
);

export default TodoList;