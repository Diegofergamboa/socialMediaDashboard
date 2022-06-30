import React from 'react';
import './globals.css';
import { Header } from './header';
import { TopCardList } from './top-card-list';
import { Overview } from './overview';
import { Switch } from './switch'

function App() {

  const [checked, setChecked] = React.useState('');

  const handleEventChecked = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <React.Fragment>
      <main className='mainClass'>
      <Header>
        <Switch
          checked={checked}
          setChecked={setChecked}
          handleEventChecked={handleEventChecked}
        />
      </Header>
      <TopCardList/>
      <Overview/>
      </main>
    </React.Fragment>
  );
}

export default App;
