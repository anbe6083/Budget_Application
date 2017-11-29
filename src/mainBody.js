import React, { Component } from 'react';
import './App.css';
import AddTransactionRow from './addTransaction';
export default class MainBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainBody">
                <AddTransactionRow />
            </div>
        )
    }
}