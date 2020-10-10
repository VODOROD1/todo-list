import React from 'react';
import s from './Todo.module.css';

let Todo = (props) => {

  const id = props.id;

  let removeTodo = () => {
    let result = window.confirm('Are you sure of delete todo?');
    if(result) {
      props.removeTodo(id);
    }
  }

  return (
    <li className={s.li}>
      <div className={s.title}>{props.title}</div>
      <div className={s.text}>{props.text}</div>
      <div className={s.deleteButtonWrapper}>
        <button className={s.deleteButton} onClick={removeTodo}><i className="fas fa-trash-alt"></i></button>
      </div>
    </li>
  )
}

export default Todo;