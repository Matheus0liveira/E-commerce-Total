import React, { } from 'react';
import './App.css'
import Routes from './routes'
import ListItemsProvider from './Components/Context/ListItems'



function App() {



  return (
    <div>
      <ListItemsProvider>

        <Routes />

      </ListItemsProvider>
    </div >
  );
}

export default App;
