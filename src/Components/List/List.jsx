import React from 'react';
import s from './List.module.css';
import Todo from '../Todo/Todo.jsx';
import guid from '../../Guid.js';

let List = (props) => {

  const initialState = {
    todos:[
      {title: 'Todo1', text: 'Text for todo1'},
      {title: 'Todo2', text: 'Text for todo2'},
      {title: 'Todo3', text: 'Text for todo3'}
    ]
  }

  if(props.todos.length === 0) {
    initialState.todos.map((todo) => {
      todo.id = guid();
      props.todos.push(todo);
    })
  }

  let todos = props.todos.map((todo) => {
      return (<Todo key={todo.id} id={todo.id} title={todo.title} text={todo.text} removeTodo={props.removeTodo}/>)
  })

    return (
      <ul className={s.ul}>
          {todos}
      </ul>
    )
}

export default List;