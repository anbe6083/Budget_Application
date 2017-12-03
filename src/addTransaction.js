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
                <Modal open={open} onClose={this.onCloseModal} >
                    <h2>Add a Transaction</h2>
                    Date: <input type='date' /> <br />
                    Payee: <input type='text' name="Payee"/> <br />
                    Inflow: <input type='text' name="Inflow"/><br />
                    Outflow: <input type='text' name="Outflow"/><br />
                </Modal>
            </div>
        )
    }
}