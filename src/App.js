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
    this.state = {
      balance: "0.00"
    }
    this.handleChangeBalance = this.handleChangeBalance.bind(this);
  }

  handleChangeBalance(newTransactionObj) {
    console.log(newTransactionObj);
    this.setState((oldState, props) => {
      return {
        balance: parseFloat(oldState.balance) + parseFloat(newTransactionObj.Inflow) - parseFloat(newTransactionObj.Outflow)
      }
    })
  }
  //Each router allows the user to click a link and change the page from the Account tab to the Budgeting tab
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} render={() => (<Account_Route balance={this.state.balance} handleChangeBalance={this.handleChangeBalance} />)}>

          </Route>
          <Route path={'/budget'} render={() => (<Budget_Route />)}>
          </Route>
        </div>

      </Router>
    );
  }
}

export default App;
