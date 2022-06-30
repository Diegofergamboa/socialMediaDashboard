import React from 'react';
import './globals.css';
import { Header } from './header';
import { TopCardList } from './top-card-list';
import { Overview } from './overview';
import { Switch } from './switch'

function App() {

  

  const handleEventChecked = (event) => {
    console.log(event)
  }
  // let valueClassName = 'is-light-mode';
  // (!checked) ? valueClassName = 'is-dark-mode' : valueClassName = 'is-light-mode'


  return (
    <React.Fragment>
      <main className={''}>
      <Header>
        <Switch 
        
          onChange={handleEventChecked}
        />
      </Header>
      <TopCardList/>
      <Overview/>
      </main>
    </React.Fragment>
  );
}

export default App;
