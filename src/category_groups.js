import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import AddSubcategory from './add_subcategory';
import SubcategoryDropdown from './subcategoryDropdown';
export default class CategoryGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: 'To Be Budgeted',
            from: 'To Be Budgeted',
            to: 'To Be Budgeted',
            amount: '0'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //Description: Switched the state of 'open' so the modal knows when to open
    onOpenModal = () => {
        console.log('open modal');
        this.setState({ open: true });
    };
    //Description: Switches the state of open whenever the user presses the submit button
    onCloseModal = () => {
        this.setState({ open: false });
    };
    //Changes the state. event.target.name comes from the 'name' in the input tags in the modal
    handleChange(event) {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    }
    //Changes the parents state (Parent component is: Budget_Route)
    handleSubmit = (state, categoryGroup) => {
        return this.props.handleAddSubcategory(state, categoryGroup);
        this.onCloseModal();
    }

    render() {
        //categoryGroups is from the parent component Budget_Route. It is part of the state. 
        const categoryGroups = this.props.categoryGroups;
        const categoryGroupsArr = categoryGroups.map((categoryGroup) => {
            const { open } = this.state;
            return (
                <div className='categoryGroupContainer' key={categoryGroup.groupName}>
                    <div className="categoryGroupDiv" >
                        <div className='budget-col1'>
                            {categoryGroup.groupName}
                            {/* This button is for the user to add a new subcategory underneath each Category Group.
                            handleChange(event) changes the state of each input. handleSubmit changes the parent component's
                            state. The parent component is Budget_Route
                            */}
                            <AddSubcategory categoryGroup={categoryGroup} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                        </div>
                        <div className='budget-col2'>
                            {/* How much money has been spent in all of the subcategories */}
                            {categoryGroup.activity}
                        </div>
                        <div className='budget-col3'>
                            {/* User specified amount of budgeted money in all of the subcategories */}
                            {categoryGroup.budgeted}
                        </div>
                    </div>
                    <div className='category'>
                        {categoryGroup.subcategories.map((subcategory) => {
                            return (
                                //maps a div to each subcategory
                                <div className="subcategory" key={subcategory.category}>
                                    <div className='budget-col1'>
                                        {/* User specified category */}
                                        {subcategory.category}
                                    </div>
                                    <div className='budget-col2'>
                                        {/* How much money has been spent in each subcategory */}
                                        {subcategory.activity}
                                    </div>
                                    <div className='budget-col3'>
                                        {/* User specified budget */}
                                        {subcategory.budgeted}
                                    </div>
                                    <div className='budget-col4' onDoubleClick={this.onOpenModal} id='available-div'>
                                        {/* User specified budget */}
                                        <Modal open={open} onClose={this.onCloseModal} >
                                            <h2>Transfer Funds </h2>
                                            Amount: <input type='number' name="amount" onChange={this.handleChange} /> <br />
                                            From: <SubcategoryDropdown toBeBudgeted={this.props.toBeBudgeted} categoryGroups={this.props.categoryGroups} /> <br />
                                            To: <SubcategoryDropdown toBeBudgeted={this.props.toBeBudgeted} categoryGroups={this.props.categoryGroups} /> <br />
                                            
                                        </Modal>
                                        {subcategory.available}

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