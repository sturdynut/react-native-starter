import {
  GET_TODOS_COMPLETE,
  ADD_TODO_COMPLETE
} from '../actions';

function todos(state = [], action) {
  switch (action.type) {
    case GET_TODOS_COMPLETE:
      return action.payload;
    break;
    case ADD_TODO_COMPLETE:
      return [action.payload, ...state];
    break;
    default:
      return state;
  }
}

export default todos;