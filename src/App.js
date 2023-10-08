import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
        <Weather />
      <h1>Weather app </h1>
      </header>
      
      <footer> This project is coded by <a href="https://github.com/irinaoloinic?tab=repositories" target="blank">Irina Oloinic </a>  and is 
      <a href="https://github.com/irinaoloinic/react-weatherapp" target="blank"> open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
