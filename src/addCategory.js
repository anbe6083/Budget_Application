import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

export default class AddCategoryBar extends Component {
    constructor(props){
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
        const {open} = this.state;
        return (
            <div className='addCategoryRow'>
                <button id="addCategoryBtn" onClick={this.onOpenModal} type="button">Add A Category Group</button>
                <Modal open={open} onClose={this.onCloseModal} >
                    <h2>Add a Category Group</h2>
                    Category Group: <input type='text' name="category-group"/> <br />
                </Modal>
            </div>
        )
    }
}