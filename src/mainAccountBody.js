import React, { Component } from 'react';
import './App.css';
import TopLabel from './topLabel';
import Transaction from './transaction';

//Description: This is the class for the main account body. This shows the TopLabel, which shows the date, payee, category
//outflow and inflow labels. 
//Transaction is all of the user inputted transactions
export default class MainAccountBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainBody">
                <TopLabel />
                <Transaction transactions={this.props.transactions} />
            </div>
        )
    }
}