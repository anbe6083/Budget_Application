import React, { Component } from 'react';

export default class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const transactions = this.props.transactions;
        const transactionsArr = transactions.map((transaction) => {
            return (
                <div className="transaction">
                    <div className='col1'>
                        {transaction.Date.toString()}
                    </div>
                    <div className='col2'>
                        {transaction.Payee}
                    </div>
                    <div className='col3'>
                        {transaction.Category}
                    </div>
                    <div className='col4'>
                        {transaction.Outflow}
                    </div>
                    <div className='col5'>
                        {transaction.Inflow}
                    </div>
                </div>

            )
        });
        return (
            <div>
                {transactionsArr}
            </div>
        )
    }
}