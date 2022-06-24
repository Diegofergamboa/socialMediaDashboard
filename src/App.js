import React from 'react';
import './globals.css';
import { Header } from './header';
import { TopCardList } from './top-card-list';
import { Overview } from './overview';
import { Switch } from './switch';

function App() {
  return (
    <React.Fragment>
      <Header>
        <Switch/>
      </Header>
      <TopCardList/>
      <Overview/>
    </React.Fragment>
  );
}

export default App;
