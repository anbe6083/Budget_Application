import React, { Component } from 'react';

export default class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const categoryGroups = [
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
        ];
        const categoryGroupsArr = categoryGroups.map((categoryGroup) => {
            console.log('categoryGroup.groupName ' +categoryGroup.groupName);
            console.log('categoryGroup.activity ' +categoryGroup.activity);
            console.log('categoryGroup.budgeted ' +categoryGroup.budgeted);
            return (
                <div className="categoryGroupDiv">
                    <div className="col1"></div>
                    <div className="col2"></div>
                    <div className='col3'>
                        {categoryGroup.groupName}
                    </div>
                    <div className='col4'>
                        {categoryGroup.activity}
                    </div>
                    <div className='col5'>
                        {categoryGroup.budgeted}
                    </div>
                </div>

            )
        });

        return (
            <div className='category'>
                {categoryGroupsArr}
            </div>
        )
    }
}