import React, { Component } from 'react';
import TopBar from './TopBar';
import './App.css';
import MainBody from './mainBody';
import AddTransactionRow from './addTransaction';
import {Router, Route} from 'react-router';
class Account_Route extends Component {
constructor(props) {
  super(props);
  this.state = {
    balance: "4,000.00",
    transactions: [
      {
        Date: new Date(),
        Payee: 'Andrew Berumen',
        Category: 'To Be Budgeted',
        Outflow: '0.00',
        Inflow: '5,000.00'
      },
      {
        Date: new Date(),
        Payee: 'John Doe',
        Category: 'Rent',
        Outflow: '900.00',
        Inflow: '0.00'
      },
      {
        Date: new Date(),
        Payee: 'Susie Smith',
        Category: 'Drinks',
        Outflow: '100.00',
        Inflow: '0.00'
      }
    ]
  }
}
  handleAddTransaction() {
    var newTransaction = {
      Date: new Date(),
      Payee: 'Test Payee',
      Category: 'Test Budget',
      Outflow: '123.00',
      Inflow: '456.78'
    }
    this.setState({
      transactions: this.state.transactions.concat([newTransaction])
    })

  }
  render() {    
    console.log('this.state.transactions: ' +this.state.transactions);
    return (
      <div className="App">
        <TopBar balance={this.state.balance} />
        <AddTransactionRow handleAddTransaction={this.handleAddTransaction}/>
        <MainBody transactions={this.state.transactions} />
      </div>
    );
  }
}

export default Account_Route;
