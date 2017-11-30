import React, { Component } from 'react';
import './App.css';
import TopLabel from './topLabel';
export default class MainBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainBody">
                <TopLabel />
            </div>
        )
    }
}