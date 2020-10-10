import {createStore, combineReducers} from 'redux';
import TodoReducer from './TodoReducer.js';

let reducers = combineReducers({
  todosArr: TodoReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;