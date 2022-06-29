import React from 'react';
import './globals.css';
import { Header } from './header';
import { TopCardList } from './top-card-list';
import { Overview } from './overview';
import Switch from './switch'

function App() {

  const [checked, setChecked] = React.useState(false);

  const handleCheckbox = (event) => {
      console.log('done')
      const checked = event.target.checked;
      return setChecked(checked);
  };
  
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
