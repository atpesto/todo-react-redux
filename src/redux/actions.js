import axios from 'axios';

import { MainActions } from './constants/ActionTypes';


export const getTodos = () => (dispatch, getState) => {
  return axios.get('http://localhost:8000/todos')
      .then(todos => {
        dispatch(addTodos(todos.data));
      });
}

export const addTodos = (todos) => ({
  type: MainActions.ADD_TODOS,
  todos,
})

export const addTodo = (text) => ({
  type: MainActions.ADD_TODO,
  text,
});

export const toggleTodo = (id) => ({
  type: MainActions.TOGGLE_TODO,
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: MainActions.SET_VISIBILITY_FILTER,
  filter,
});

