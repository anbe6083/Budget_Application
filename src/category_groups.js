import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import AddSubcategory from './add_subcategory';
export default class CategoryGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            Subcategory: '',
            Budget: 0
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
        this.setState({ [event.target.name]: event.target.value });
    }
    //Changes the parents state (Parent component is: Budget_Route)
    handleSubmit = (categoryGroup) => {
        console.log('categoryGroup' +categoryGroup);
        this.props.handleAddSubcategory(this.state, categoryGroup.groupName );
        this.onCloseModal();
    }

    render() {
        const { open } = this.state;
        //categoryGroups is from the parent component Budget_Route. It is part of the state. 
        const categoryGroups = this.props.categoryGroups;
        const categoryGroupsArr = categoryGroups.map((categoryGroup) => {
            return (
                <div className = 'categoryGroupContainer' key={categoryGroup.groupName}>
                    <div className="categoryGroupDiv" >
                        <div className="col1"></div>
                        <div className="col2"></div>
                        <div className='col3'>
                            {categoryGroup.groupName}
                            {/* This button is for the user to add a new subcategory underneath each Category Group.
                            handleChange(event) changes the state of each input. handleSubmit changes the parent component's
                            state. The parent component is Budget_Route
                            */}
                            <AddSubcategory open={open} categoryGroup={categoryGroup} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                        </div>
                        <div className='col4'>
                            {/* How much money has been spent in all of the subcategories */}
                            {categoryGroup.activity}
                        </div>
                        <div className='col5'>
                            {/* User specified amount of budgeted money in all of the subcategories */}
                            {categoryGroup.budgeted}
                        </div>
                    </div>
                    <div className='category'>
                        {categoryGroup.subcategories.map((subcategory) => {
                            return (
                                //maps a div to each subcategory
                                <div className="subcategory" key={subcategory.category}>
                                    <div className='col1'>
                                    </div>
                                    <div className='col2'>
                                    </div>
                                    <div className='col3'>
                                        {/* User specified category */}
                                        {subcategory.category}
                                    </div>
                                    <div className='col4'>
                                        {/* How much money has been spent in each subcategory */}
                                        {subcategory.activity}
                                    </div>
                                    <div className='col5'>
                                        {/* User specified budget */}
                                        {subcategory.budgeted}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        });

        return (
            <div className='categoryGroup'>
                {categoryGroupsArr}
            </div>
        )
    }
}