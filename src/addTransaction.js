import React, { Component } from 'react';
import './App.css';
import Modal from 'react-responsive-modal';

//Description: This class allows the user to add a new transaction
export default class AddTransactionRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            date: '',
            Payee: '',
            Inflow: '0',
            Outflow: '0',
            Category: '',
            value: 'food'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    //Whenever the user presses the "Add a transaction" button, change the state 'open' to open the modal
    onOpenModal = () => {
        this.setState({ open: true });
    };
    //Whenever the user presses the "Submit" button, change the state 'open' to close the modal
    onCloseModal = () => {
        this.setState({ open: false });
    };
    //handles any input change
    handleChange(event, stateName) {
        console.log('[event.target.name] ' +[event.target.name]);
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        this.props.handleAddTransaction(this.state);
        this.onCloseModal();
    }

    render() {
        const { open } = this.state;
        return (
            //This holds the row where the user can add a new transaction
            // The user can enter the transaction data in the modal that pops up
            <div className='addTransactionRow'>
                <button id="addTransactionBtn" onClick={this.onOpenModal} type="button">Add A Transaction</button>
                <Modal open={open} onClose={this.onCloseModal} >
                    <h2>Add a Transaction</h2>
                    Date: <input type='date' name='date' onChange={this.handleChange} /> <br />
                    Payee: <input type='text' name="Payee" onChange={this.handleChange} /> <br />
                    Inflow: <input type='text' name="Inflow" onChange={this.handleChange} /><br />
                    Outflow: <input type='text' name="Outflow" onChange={this.handleChange} /><br />
                    <select onChange={this.handleChange} name="value" value={this.state.value} >
                        {this.props.categoryGroups.map(categoryGroup => {
                            console.log(this.props);
                                return categoryGroup.subcategories.map(subcategory => {
                                    return (
                                        <option value={subcategory.category} >{subcategory.category}</option>
                                    )
                                })
                        })}
                    </select>

                    <button type='button' onClick={this.handleSubmit}>Submit</button>
                </Modal>
            </div>
        )
    }
}