import React, {useState} from 'react';
import s from './Add.module.css';

let Add = (props) => {

  const [isAdd, setIsAdd] = useState(false);

  let openModal = () => {
    setIsAdd(true);
  }

  let closeWindow = () => {
    setIsAdd(false);
  }

  let createTodo = () => {
    props.createTodo();
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
      <div className={s.plus} onClick={openModal}>+</div>
      {isAdd && (
        <div className={s.modal}>
         <div className={s.modalBody}>
            <div className={s.title}
                data-placeholder='Input title'
                contentEditable="true"
                onInput={(e) => onTitleChange(e)}
            >
              {/* {props.valueTitle} */}
              hhhhhhh
            </div>
            <br/>
            <div className={s.text}
                data-placeholder='Input text'
                contentEditable="true"
                onInput={(e) => onTextChange(e)}
                innerText='hhhh'
            >
            </div>
            <div className={s.buttonWrapper}>
                <button className={s.createButton} onClick={createTodo}>Create</button>
                <button className={s.closeButton} onClick={closeWindow}>Close</button>
            </div>
         </div>
        </div>
        )
      }
    </div>
  )
}

export default Add;