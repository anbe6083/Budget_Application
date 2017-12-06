import React, { Component } from 'react';
import './App.css';
import TopBudgetLabel from './topBudgetLabel';
import CategoryGroups from './category_groups';

//Description: This is the main body for the budgeted tab. Includes a TopLabel with Date,Payee,Category,Outflow, and Inflow
//labels. CategoryGroups renders the category groups and subcategories to the page
export default class MainBudgetBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainBody">
                <TopBudgetLabel />
                <CategoryGroups returnSubcategoryDropdown={this.props.returnSubcategoryDropdown} categoryGroups={this.props.categoryGroups} handleAddSubcategory={this.props.handleAddSubcategory}/>
            </div>
        )
    }
}