import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;