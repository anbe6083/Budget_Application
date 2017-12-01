import React, { Component } from 'react';
import './App.css';
import TopLabel from './topLabel';
import Category from './category';
export default class MainBudgetBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainBody">
                <TopLabel />
                <Category />
            </div>
        )
    }
}