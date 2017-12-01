import React, {Component} from 'react';
import TopBar from './TopBar';
import AddCategoryBar from './addCategory';
import TopLabel from './topLabel';
import Category from './category'; 
import MainBudgetBody from './mainBudgetBody';
export default class Budget_Route extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryGroups: [
                {
                    groupName:'Immediate Obligations',
                    budgeted:'5,000.00',
                    activity:'3,275.76',
                    subcategories:[
                        {
                            category: 'food',
                            budgeted: '500.00',
                            activity: '300.76'
                        },
                        {
                            category: 'rent',
                            budgeted: '1,000.00',
                            activity: '1,000.00'
                        }
                    ]
                },
                {
                    groupName:'True Expenses',
                    budgeted:'2,000.00',
                    activity:'1,000.33',
                    subcategories:[
                        {
                            category: 'Car Insurance',
                            budgeted: '60.00',
                            activity: '60.00'
                        },
                        {
                            category: 'Gas',
                            budgeted: '100.00',
                            activity: '34.50'
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <TopBar label={"To Be Budgeted"} />
                <AddCategoryBar />
                <MainBudgetBody />
            </div>
        )
    }
}