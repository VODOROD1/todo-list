import React from 'react';
import s from './Search.module.css';

let Search = (props) => {
  return (
    <div className={s.searchWrapper}>
      <input type='search' className={s.searchField} 
            value={props.searchValue} placeholder='Search'/>
    </div>
  )
}

export default Search;