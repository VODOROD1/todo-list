import React from 'react';
import logo from './logo.svg';
import ListContainer from './Components/List/ListContainer';
import s from './App.module.css';
import Search from './Components/Search/Search';
import AddContainer from './Components/Add/AddContainer';

function App() {
  return (
    <div className={s.App}>
        <Search />
        <ListContainer />
        <AddContainer />
    </div>
  );
}

export default App;
