import React, { Component } from 'react';

export default class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const categoryGroups = this.props.categoryGroups;
        const categoryGroupsArr = categoryGroups.map((categoryGroup) => {
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