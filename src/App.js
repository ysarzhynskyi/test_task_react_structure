import React from 'react';

import Item from './components/item'
import Path from './components/path'

import './App.css';

function App() {
  return (
    <div className="App">
      <Path text="Computers > Monitors" />
      <div>
        <Item text="Computers" />
      </div>
    </div>
  );
}

export default App;
