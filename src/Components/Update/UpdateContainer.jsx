import React from 'react';
import { connect } from 'react-redux';
import Update from './Update';
import {addAC,removeAC,updateAC,changeTitleFieldAC,changeTextFieldAC} from '../../redux/TodoReducer.js';

let mapStateToProps = (state) => {
  return {
    valueTitle: state.todoState.valueTitle,
    valueText: state.todoState.valueText,
    choisenID: state.todoState.choisenID
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
    updateTodo: (choisenId) => {
      dispatch(removeAC(choisenId));
      dispatch(addAC(choisenId));
      // dispatch(updateAC(choisenId))
    }
  }
}

let UpdateContainer = connect(mapStateToProps, mapDispatchToProps)(Update);

export default UpdateContainer;