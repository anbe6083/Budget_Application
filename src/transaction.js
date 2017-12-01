import React, { Component } from 'react';

export default class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const transactions = this.props.transactions;
        const transactionsArr = transactions.map((transaction) => {
            console.log('this.props.transactions ' + this.props.transactions);
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
        console.log('transactionsArr ' + transactionsArr);
        return (
            <div>
                {transactionsArr}
            </div>
        )
        // return (
        //     <div>
        //         <div className="col1">
        //             11/29/2017
        //         </div>
        //         <div className="col2">
        //             Andrew Berumen
        //         </div>
        //         <div className="col3">
        //             To Be Budgeted
        //         </div>
        //         <div className="col4">
        //             0.00
        //         </div>
        //         <div className="col5">
        //             10,000.00
        //         </div>
        //     </div>
        // )
    }
}