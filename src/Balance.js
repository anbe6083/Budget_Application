import React, {Component} from 'react';
import './App.css';
export default class Balance extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            //render the div in TopBar that displays either the balance or To Be Budgeted amount
            <div className="BalanceContainer">
                {this.props.balance}
                <br />
                {this.props.label}
            </div>
        )
    }
}