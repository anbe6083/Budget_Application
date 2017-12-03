import React, { Component } from 'react';
import Categories from './categories';
export default class CategoryGroups extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const categoryGroups = this.props.categoryGroups;
        console.log(JSON.stringify(categoryGroups));
        const categoryGroupsArr = categoryGroups.map((categoryGroup) => {
            return (
                <div>
                    <div className="categoryGroupDiv" key={categoryGroup.groupName}>
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
                    <div className='category'>
                        {categoryGroup.subcategories.map((subcategory) => {
                            return (
                                <div className="subcategory">
                                    <div className='col1'>
                                    </div>
                                    <div className='col2'>
                                    </div>
                                    <div className='col3'>
                                        {subcategory.category}
                                    </div>
                                    <div className='col4'>
                                        {subcategory.activity}
                                    </div>
                                    <div className='col5'>
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