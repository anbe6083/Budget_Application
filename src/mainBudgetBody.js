import React, { Component } from 'react';
import './App.css';
import TopLabel from './topLabel';
import CategoryGroups from './category_groups';
export default class MainBudgetBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainBody">
                <TopLabel />
                <CategoryGroups categoryGroups={this.props.categoryGroups}/>
            </div>
        )
    }
}