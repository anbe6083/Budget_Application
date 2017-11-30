import React, { Component } from 'react';
import './App.css';
import ToBeBudgeted from './toBeBudgeted';
export default class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TopBarContainer">
                <div className='navBar'>
                    <a href='#'>Budgeted Categories</a>
                    <a href='#'>Account</a>
                </div>
                <ToBeBudgeted />

            </div>
        )
    }
}