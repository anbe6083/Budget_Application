import React, { Component } from 'react';
import Modal from 'react-responsive-modal';


//Description: This class allows the user to add a new Category group, which is concatenated to Budget_Route's state
//Each category group has an array of subcategories

export default class AddCategoryBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            category_group: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //handles any input changes
    handleChange(event) {
        console.log(this.state.category_group);
        this.setState({[event.target.name]: event.target.value});
      }

    onOpenModal = () => {
        console.log('open modal');
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    //Description: Concatenates a new category group in Budget_Route's state. 
    handleSubmit = () => {
        this.props.handleAddCategory(this.state.category_group);
        this.onCloseModal();
    }

    render() {
        const {open} = this.state;
        return (
            // Returns the div that includes a button that the user can add a new category group
            <div className='addCategoryRow'>
                <button id="addCategoryBtn" onClick={this.onOpenModal} type="button">Add A Category Group</button>
                <Modal open={open} onClose={this.onCloseModal} >
                    <h2>Add a Category Group</h2>
                        Category Group: <input type='text' name="category_group" value={this.state.category_group} onChange={this.handleChange}/> <br />
                        <button type='button' onClick={this.handleSubmit}>Submit</button>                    
                </Modal>
            </div>
        );
    }
}