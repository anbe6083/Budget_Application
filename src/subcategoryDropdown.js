import React, { Component } from 'react';

export default class SubcategoryDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'To Be Budgeted',

        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, stateName) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }

    render() {
        return (
            <select onChange={this.handleChange} name="value" value={this.state.value} >
                <option value={this.props.toBeBudgeted}> To Be Budgeted </option>
                {this.props.categoryGroups.map(categoryGroup => {
                    return categoryGroup.subcategories.map(subcategory => {
                        return (
                            <option value={subcategory.category} >{subcategory.category}</option>
                        )
                    })
                })}
            </select>
        )
    }
}