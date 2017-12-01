import React, {Component} from 'react';

export default class Categories extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const categoryGroups = this.props.categoryGroups;

        const subCategoryArr = categoryGroups.map((categoryGroup) => {
            return categoryGroup.subcategories.map((subcategory) => {
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
            })
            
        })
        console.log('subCategoryArr ' +subCategoryArr);
        return (
            <div className="category" >
                {subCategoryArr}
            </div>
        )
    }
}