import { create } from '../services';
import * as api from '../services/api';
import * as types from './types';

export const getTodos = () => (
  create(
    types.GET_TODOS,
    types.GET_TODOS_COMPLETE,
    () => api.get('todos')
  )
);

export const addTodo = (todo) => (
  create(
    types.ADD_TODO,
    types.ADD_TODO_COMPLETE,
    () => api.post('todos', todo)
  )
);
