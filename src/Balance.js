import React, {Component} from 'react';
import './App.css';
export default class Balance extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="BalanceContainer">
                $4,000.00
                <br />
                Balance
            </div>
        )
    }
}