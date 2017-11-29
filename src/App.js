import React, { Component } from 'react';
import TopBar from './TopBar';
import './App.css';
import MainBody from './mainBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <MainBody />
      </div>
    );
  }
}

export default App;
