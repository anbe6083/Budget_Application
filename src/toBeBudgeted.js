import React, {Component} from 'react';
import './App.css';
export default class ToBeBudgeted extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="ToBeBudgetedContainer">
                $4,000.00
                <br />
                To Be Budgeted
            </div>
        )
    }
}