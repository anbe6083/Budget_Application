import React, { Component } from 'react';

export default class AddCategoryBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='addCategoryRow'>
                <button id="addCategoryBtn" type="button">Add A Category</button>
            </div>
        )
    }
}