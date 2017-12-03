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

    onOpenModal = () => {
        console.log('open modal');
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div className='addTransactionRow'>
                <button id="addTransactionBtn" onClick={this.onOpenModal} type="button">Add A Transaction</button>
                <Modal open={open} onClose={this.onCloseModal} little>
                    <h2>Add a Transaction</h2>
                    Payee: <input type='text' name="Payee"/> <br />
                    Amount: <input type='text' name="Amount"/><br />
                </Modal>
            </div>
        )
    }
}