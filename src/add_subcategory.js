import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
export default class AddSubcategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            Subcategory: '',
            Budget: '0'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Description: Switched the state of 'open' so the modal knows when to open
    onOpenModal = () => {
        this.setState({ open: true });
    };
    //Description: Switches the state of open whenever the user presses the submit button
    onCloseModal = () => {
        this.setState({ open: false });
    };
    //Changes the state. event.target.name comes from the 'name' in the input tags in the modal
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.type === 'number' ? parseFloat(event.target.value) : event.target.value });
    }

    //Changes the parents state (Parent component is: Budget_Route)
    handleSubmit = (categoryGroup) => {
        this.props.handleSubmit(this.state, categoryGroup.groupName);
        this.onCloseModal();
    }


    render() {
        const { open } = this.state;
        return (
            <div className='add-subcategory'>
                <button type='button' onClick={this.onOpenModal}> + </button>
                <Modal open={open} onClose={this.onCloseModal} >
                    <h2>Add a New Subcategory </h2>
                    Subcategory: <input type='text' name='Subcategory' onChange={this.handleChange} /> <br />
                    Budget: <input type='number' name="Budget" onChange={this.handleChange} /> <br />
                    <button type='button' onClick={() => this.handleSubmit(this.props.categoryGroup)}>Submit</button>
                </Modal>
            </div>
        )
    }
}