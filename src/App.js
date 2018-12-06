import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hideabletext from './Hideabletext';
import Autocompplete from './Autocomplete';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Autocompplete/>
        </header>
      </div>
    );
  }
}

export default App;
