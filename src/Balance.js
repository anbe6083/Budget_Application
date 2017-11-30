import React, {Component} from 'react';
import './App.css';
export default class Balance extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="BalanceContainer">
                {this.props.balance}
                <br />
                Balance
            </div>
        )
    }
}