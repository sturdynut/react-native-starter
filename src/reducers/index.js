import todos from './todos.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todos
})

export default rootReducer
