import React, { Component } from 'react';
import './App.css';
import Balance from './Balance';
import {Link} from 'react-router-dom';
export default class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TopBarContainer">
                <div className='navBar'>
                    <ul>
                        <li> <Link to={`/`}> Account </Link> </li>
                        <li><Link to={`/budget`}> Budgeted Categories </Link> </li>
                    </ul>
                    {/* <a href='#'>Budgeted Categories</a>
                    <a href='#'>Account</a> */}
                </div>
                <Balance balance={this.props.balance} label={this.props.label}/>

            </div>
        )
    }
}