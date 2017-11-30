import React, { Component } from 'react';
import TopBar from './TopBar';
import './App.css';
import MainBody from './mainBody';
import AddTransactionRow from './addTransaction';
class App extends Component {
  render() {    
    return (
      <div className="App">
        <TopBar />
        <AddTransactionRow />
        <MainBody />
      </div>
    );
  }
}

export default App;
