import React from 'react';
import { connect } from 'react-redux';
import Add from './Add';
import {addAC,changeTitleFieldAC,changeTextFieldAC} from '../../redux/TodoReducer.js';
import guid from "../../Guid";

let mapStateToProps = (state) => {
  return {
    valueTitle: state.todoState.valueTitle,
    valueText: state.todoState.valueText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeTitleField: (fieldValue1) => {
      dispatch(changeTitleFieldAC(fieldValue1))
    },
    changeTextField: (fieldValue2) => {
      dispatch(changeTextFieldAC(fieldValue2))
    },
    createTodo: () => {
      dispatch(addAC(guid()))
    }
  }
}

let AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add);

export default AddContainer;