import React, { Component } from 'react';
import TopBar from './TopBar';
import AddCategoryBar from './addCategory';
import TopLabel from './topLabel';
import categoryGroups from './category_groups';
import MainBudgetBody from './mainBudgetBody';
import Modal from 'react-responsive-modal';

//Description: This class holds the state and is the main router for the Budget tab. 
//A user can add budget categories, subcategories and specify amounts that should be budgeted in each category
export default class Budget_Route extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        console.log('balance is' +this.props.ToBeBudgeted.budgeted)
        return (
            <div>
                <TopBar label={"To Be Budgeted"} balance={this.props.ToBeBudgeted.budgeted}/>
                <AddCategoryBar handleAddCategory={this.props.handleAddCategory.bind(this)} />
                <MainBudgetBody categoryGroups={this.props.categoryGroups} handleAddSubcategory={this.props.handleAddSubcategory} />
            </div>
        )
    }
}