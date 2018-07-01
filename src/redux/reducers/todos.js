import { MainActions } from '../constants/ActionTypes';

const todos = (state = [], action) => {
  switch(action.type) {
    case MainActions.ADD_TODOS:
      return action.todos;
    case MainActions.ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          completed: false,
        },
      ];

    case MainActions.TOGGLE_TODO:
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


export default todos;
