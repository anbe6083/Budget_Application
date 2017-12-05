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
        this.state = {
            categoryGroups: [
                
                {
                    groupName: 'Immediate Obligations',
                    budgeted: '0.00',
                    activity: '0.00',
                    subcategories: [
                        // {
                        //     category: 'food',
                        //     budgeted: '500.00',
                        //     activity: '300.76'
                        // },
                        // {
                        //     category: 'rent',
                        //     budgeted: '1000.00',
                        //     activity: '1000.00'
                        // }
                    ]
                },
                {
                    groupName: 'True Expenses',
                    budgeted: '0.00',
                    activity: '0.00',
                    subcategories: [
                        // {
                        //     category: 'Car Insurance',
                        //     budgeted: '60.00',
                        //     activity: '60.00'
                        // },
                        // {
                        //     category: 'Gas',
                        //     budgeted: '100.00',
                        //     activity: '34.50'
                        // }
                    ]
                }
            ]
        }
        this.handleAddSubcategory = this.handleAddSubcategory.bind(this);
    }
    //Description: Called whenever the user inputs data from the modal in the AddCategoryBar component
    handleAddCategory(categoryGroup) {
        this.setState((prevState, props) => {
            return {
                categoryGroups: prevState.categoryGroups.concat([
                    {
                        groupName: categoryGroup,
                        budgeted: 0.00,
                        activity: 0.00,
                        subcategories: []
                    }
                ])
            }
        });
    }
    //Description: Concatenates a new subcategory underneath the category group. Called from
    //the CategoryGroups component in MainBudgetBody
    //TODO
    handleAddSubcategory(newSubcategoryObj, newSubcategoryCategoryGroup) {
        this.setState((prevState, props) => {
            return {
                categoryGroups: prevState.categoryGroups.map( (categoryGroup) => {
                    if(categoryGroup.groupName === newSubcategoryCategoryGroup) {
                        return {
                            groupName: categoryGroup.groupName,
                            budgeted: parseFloat(categoryGroup.budgeted) + parseFloat(newSubcategoryObj.Budget),
                            activity: parseFloat(categoryGroup.activity),
                            subcategories: categoryGroup.subcategories.concat(
                                {
                                    category: newSubcategoryObj.Subcategory,
                                    budgeted: newSubcategoryObj.Budget,
                                    activity: 0.00
                                }
                            )
                        }
                    } else {
                        return categoryGroup;
                    }
                } )
            }
        })
    }

    render() {
        console.log('balance is' +this.props.ToBeBudgeted.budgeted)
        return (
            <div>
                <TopBar label={"To Be Budgeted"} balance={this.props.ToBeBudgeted.budgeted}/>
                <AddCategoryBar handleAddCategory={this.handleAddCategory.bind(this)} />
                <MainBudgetBody categoryGroups={this.state.categoryGroups} handleAddSubcategory={this.handleAddSubcategory} />
            </div>
        )
    }
}