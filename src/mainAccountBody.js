import React, { Component } from 'react';
import './App.css';
import TopLabel from './topLabel';
import Transaction from './transaction';
export default class MainAccountBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('transactions in main body: ' +this.props.transactions);
        return (
            <div className="mainBody">
                <TopLabel />
                <Transaction transactions={this.props.transactions} />
            </div>
        )
    }
}