import React from 'react';
import './globals.css';
import { Header } from './header';
import { TopCardList } from './top-card-list';
import { Overview } from './overview';
import { Switch } from './switch'

function App() {

  const [checked, setChecked] = React.useState('');


  let valueClassName = '' ;
  const setupMode = () => {
    if (!checked ) {
      valueClassName = 'is-dark-mode'
    } else {
      valueClassName = 'is-light-mode'
    }
  }

  return (
    <React.Fragment>
      <main className={setupMode}>
      <Header>
        <Switch />
      </Header>
      <TopCardList/>
      <Overview/>
      </main>
    </React.Fragment>
  );
}

export default App;
