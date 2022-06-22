import React from 'react';
import './App.css';
import { Header } from './header';
import { TopCardList } from './top-card-list';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <TopCardList/>
    </React.Fragment>
  );
}

export default App;
