import guid from "../Guid";

const ADD_TODO = 'ADD-TODO';
const REMOVE_TODO = 'REMOVE-TODO';
const UPDATE_TODO = 'UPDATE-TODO';
const CHANGE_TITLE_FIELD = 'CHANGE-TITLE-FIELD';
const CHANGE_TEXT_FIELD = 'CHANGE-TEXT-FIELD';
const CHANGE_CHOISEN_ID = 'CHANGE-CHOISEN-ID';

const initialState = {
  todos: [],
  choisenID: 0,
  valueTitle: '',
  valueText: ''
}

let TodoReducer = (state = initialState, action) => {
    switch(action.type){
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, {
            id: action.id,
            title: state.valueTitle,
            text: state.valueText
          }]
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
      case CHANGE_CHOISEN_ID:
        return {
          ...state,
          choisenID: action.id
        };
      case CHANGE_TITLE_FIELD:
        return {
          ...state,
          valueTitle: action.value
        };
      case CHANGE_TEXT_FIELD:
        return {
          ...state,
          valueText: action.value
        };
      default:
        return state;
    }
}

////////////////////////////////////////////////////////

export let addAC = (id) => {
  return {
    type: ADD_TODO,
    id: id
  }
}

export let removeAC = (id) => {
  return {
    type: REMOVE_TODO,
    id: id
  }
}

export let updateAC = (choisenId) => {
  return {
    type: UPDATE_TODO,
    id: choisenId
  }
}

export let changeChoisenIdAC = (id) => {
  return {
    type: CHANGE_CHOISEN_ID,
    id: id
  }
}

export let changeTitleFieldAC = (fieldValue) => {
  return {
    type: CHANGE_TITLE_FIELD,
    value: fieldValue
  }
}

export let changeTextFieldAC = (fieldValue) => {
  return {
    type: CHANGE_TEXT_FIELD,
    value: fieldValue
  }
}

export default TodoReducer;