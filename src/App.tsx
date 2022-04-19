import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Singleton } from './components/singleton';

function App() {
  return (
    <div className="App">
      <Singleton />
    </div>
  );
}

export default App;
