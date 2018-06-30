import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          completed: false,
        },
      ];

    case 'TOGGLE_TODO':
      return state.map(todo => (
        (todo.id === action.id) ?
          {
            ...todo,
            completed: !todo.completed,
          } :
          todo
        )
      );
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;