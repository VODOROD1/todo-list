const ADD_TODO = 'ADD-TODO';
const REMOVE_TODO = 'REMOVE-TODO';
const UPDATE_TODO = 'UPDATE-TODO';

const initialState = {
  todos: []
}

let TodoReducer = (state = initialState, action) => {
    switch(action.type){
      case ADD_TODO:
        return {

        };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((elem) => {
            return elem.id !== action.id
          })
        }
      case UPDATE_TODO:
        return;
      default:
        return state;
    }
}

////////////////////////////////////////////////////////

export let addAC = () => {
  return {
    type: ADD_TODO,

  }
}

export let removeAC = (id) => {
  return {
    type: REMOVE_TODO,
    id: id
  }
}

export let updateAC = () => {
  return {
    type: UPDATE_TODO,

  }
}

export default TodoReducer;