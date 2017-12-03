import React, { Component } from 'react';
import TopBar from './TopBar';
import './App.css';
import MainAccountBody from './mainAccountBody';
import AddTransactionRow from './addTransaction';
class App extends Component {
  render() {    
    return (
      <div className="App">
        <TopBar />
        <AddTransactionRow />
        <MainAccountBody />
      </div>
    );
  }
}

export default App;
