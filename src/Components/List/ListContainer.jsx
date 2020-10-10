import List from './List';
import {connect} from 'react-redux';
import {addAC, removeAC, updateAC} from '../../redux/TodoReducer.js';

let mapStateToProps = (state) => {
  return {
    todos: state.todosArr.todos
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => {
      dispatch(removeAC(id))
    },
    addTodo: () => {

    },
    updateTodo: () => {

    }
  }
}


let ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;