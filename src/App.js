import React from 'react';
import logo from './logo.svg';
import ListContainer from './Components/List/ListContainer';
import s from './App.module.css';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className={s.App}>
        <Search />
        <ListContainer />
    </div>
  );
}

export default App;
