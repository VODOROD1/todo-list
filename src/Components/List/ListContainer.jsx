import React from 'react';
import List from './List';
import {connect} from 'react-redux';
import {removeAC,changeChoisenIdAC,changeTitleFieldAC,changeTextFieldAC} from '../../redux/TodoReducer.js';

let mapStateToProps = (state) => {
  return {
    todos: state.todoState.todos
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => {
      dispatch(removeAC(id))
    },
    changeID: (id) => {
      dispatch(changeChoisenIdAC(id));
    },
    changeTitleField: (fieldValue1) => {
      dispatch(changeTitleFieldAC(fieldValue1))
    },
    changeTextField: (fieldValue2) => {
      dispatch(changeTextFieldAC(fieldValue2))
    }
  }
}


let ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;

// let connect = (mapStateToProps,mapDispatchToProps) => {
//     return function(WrappedComponent) {
//       let stateResult = mapStateToProps();
//       let dispatchResult = mapDispatchToProps();
//       return class extends React.Component {
//         render() {
//           return (
//             <WrappedComponent />
//           )
//         }
//       }
//     }
// }