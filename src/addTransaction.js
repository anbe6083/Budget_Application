import React, { Component } from 'react';
import './App.css';
import Modal from 'react-responsive-modal';
export default class AddTransactionRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    //Whenever the user presses the "Add a transaction" button, change the state 'open' to open the modal
    onOpenModal = () => {
        console.log('open modal');
        this.setState({ open: true });
    };
    //Whenever the user presses the "Submit" button, change the state 'open' to close the modal
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            //This holds the row where the user can add a new transaction
            // The user can enter the transaction data in the modal that pops up
            <div className='addTransactionRow'>
                <button id="addTransactionBtn" onClick={this.onOpenModal} type="button">Add A Transaction</button>
                <Modal open={open} onClose={this.onCloseModal} >
                    <h2>Add a Transaction</h2>
                    Date: <input type='date' onChange={this.handleChange} /> <br />
                    Payee: <input type='text' name="Payee" onChange={this.handleChange}/> <br />
                    Inflow: <input type='text' name="Inflow" onChange={this.handleChange}/><br />
                    Outflow: <input type='text' name="Outflow" onChange={this.handleChange}/><br />
                </Modal>
            </div>
        )
    }
}