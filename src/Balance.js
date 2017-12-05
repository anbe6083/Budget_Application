import React, {Component} from 'react';
import './App.css';

//Description: Allows the user to see their to be budgeted amount in the Budget tab,
//or their balance in the account tab
export default class Balance extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.balance);
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