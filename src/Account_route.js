import React, { Component } from 'react';
import TopBar from './TopBar';
import './App.css';
import MainAccountBody from './mainAccountBody';
import AddTransactionRow from './addTransaction';
import {Router, Route} from 'react-router';

//This is the main router for all of the Account details. The user can see incoming and outgoing money,
//their balance, and each transaction
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
  this.handleAddTransaction = this.handleAddTransaction.bind(this);
}

  //Description: Sets the new state when the user inputs a new transaction in the AddTransactionRow component.
  //Takes input from the AddTransactionRow modal
  handleAddTransaction(newTransactionObj) {
    var newTransaction = {
      Date: newTransactionObj.date,
      Payee: newTransactionObj.Payee,
      Category: newTransactionObj.Category,
      Outflow: newTransactionObj.Outflow,
      Inflow: newTransactionObj.Inflow
    }
    this.setState({transactions: this.state.transactions.concat([newTransaction])});
  }
  render() {    
    return (
      <div className="App">
        <TopBar balance={this.state.balance} label={"Balance"} />
        <AddTransactionRow handleAddTransaction={this.handleAddTransaction}/>
        <MainAccountBody transactions={this.state.transactions} />
      </div>
    );
  }
}

export default Account_Route;
