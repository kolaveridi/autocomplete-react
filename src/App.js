import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hideabletext from './Hideabletext';
import Autocompplete from './Autocomplete';
import countries from './countries';
class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App-Component">
           <div className="App-Component">
               <Autocompplete items={countries}/>
         </div>
      </div>
      </div>
    );
  }
}

export default App;
