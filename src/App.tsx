import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Singleton } from './components/singleton';
import { InternetAvailabilityObserver } from './components/observer';

function App() {
  return (
    <div className="App">
      {/* <Singleton /> */}
      <InternetAvailabilityObserver />
    </div>
  );
}

export default App;
