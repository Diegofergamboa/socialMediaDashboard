import React from 'react';
import './globals.css';
import { Header } from './header';
import { TopCardList } from './top-card-list';
import { Overview } from './overview';
import Switch from './switch'

function App() {
  
  return (
    <React.Fragment>
      <main className='mainClass'>
      <Header>
        <Switch 
          handleCheckbox={handleCheckbox}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCardList/>
      <Overview/>
      </main>
    </React.Fragment>
  );
}

export default App;
