import React, {useState} from 'react';
import s from './Update.module.css';
import {openUpdate} from '../List/List';

let Add = (props) => {

  let closeWindow = () => {
    openUpdate(false);
  }

  let updateTodo = () => {
    props.updateTodo(props.choisenID);
    closeWindow();
  }

  let onTitleChange = (e) => {
    let value = e.target.innerText;
    props.changeTitleField(value);
  }

  let onTextChange = (e) => {
    let value = e.target.innerText;
    props.changeTextField(value);
  }

  return (
    <div>
      (
        <div className={s.modal}>
         <div className={s.modalBody}>
            <div className={s.title}
                data-placeholder='Input title'
                contentEditable="true"
                onInput={(e) => onTitleChange(e)}
                innerText={props.valueTitle}
            >
              {props.valueTitle}
            </div>
            <br/>
            <div className={s.text}
                data-placeholder='Input text'
                contentEditable="true"
                onInput={(e) => onTextChange(e)}
                innerText={props.valueText}
            >
              {props.valueText}
            </div>
            <div className={s.buttonWrapper}>
                <button className={s.saveButton} onClick={updateTodo}>Save</button>
                <button className={s.closeButton} onClick={closeWindow}>Close</button>
            </div>
         </div>
        </div>
        )
    </div>
  )
}

export default Add;