import React, { Component } from 'react';
import TopBar from './TopBar';
import './App.css';
import MainBody from './mainBody';
import AddTransactionRow from './addTransaction';
class App extends Component {
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

  render() {    
    console.log('this.state.transactions: ' +this.state.transactions);
    return (
      <div className="App">
        <TopBar balance={this.state.balance} />
        <AddTransactionRow />
        <MainBody transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
