import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Account_Route from './Account_route';
import Budget_Route from './Budget_route';
class App extends Component {
constructor(props) {
  super(props);
  
}
  //Each router allows the user to click a link and change the page from the Account tab to the Budgeting tab
  render() {    
    return (
      <Router>
        <div>
        <Route exact path={'/'} component={Account_Route}>
        
        </Route>
        <Route path={'/budget'} component={Budget_Route}>
        </Route>
        </div>
        
      </Router>
    );
  }
}

export default App;
