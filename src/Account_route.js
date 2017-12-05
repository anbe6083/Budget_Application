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
}
  render() {    
    return (
      <div className="App">
        <TopBar balance={this.props.balance} label={"Balance"} />
        <AddTransactionRow ToBeBudgeted={this.props.ToBeBudgeted} handleAddTransaction={this.props.handleAddTransaction} categoryGroups = {this.props.categoryGroups}/>
        <MainAccountBody transactions={this.props.transactions} />
      </div>
    );
  }
}

export default Account_Route;
