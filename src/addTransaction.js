import React, {Component} from 'react';
import './App.css';
export default class AddTransactionRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='addTransactionRow'>
                <button id="addTransactionBtn" type="button">Add A Transaction</button>
            </div>
        )
    }
}