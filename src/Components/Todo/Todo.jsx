import React from 'react';
import s from './Todo.module.css';

let Todo = (props) => {

  const id = props.id;

  let removeTodo = (e) => {
    e.stopPropagation();
    let result = window.confirm('Are you sure of delete todo?');
    if(result) {
      props.removeTodo(id);
    }
  }

  let openModalChange = (e) => {
    e.stopPropagation();
    props.openModalChange(id,props.title,props.text);
  }

  return (
    <li className={s.li} onClick={(e) => openModalChange(e)}>
      <div className={s.title}>{props.title}</div>
      <div className={s.text}>{props.text}</div>
      <div className={s.deleteButtonWrapper}>
        <button className={s.deleteButton} onClick={(e) => removeTodo(e)}><i className="fas fa-trash-alt"></i></button>
      </div>
    </li>
  )
}

export default Todo;