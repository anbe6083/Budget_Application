import React, { Component } from 'react';
import './App.css';
import Balance from './Balance';
import {NavLink} from 'react-router-dom';
export default class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TopBarContainer">
                <div className='navBar'>
                    <ul>
                        <li> <NavLink to={`/`} exact activeStyle={{color: '#FFFCF2'}}> Account </NavLink> </li>
                        <li><NavLink to={`/budget`} exact activeStyle={{color: '#FFFCF2'}}> Budgeted Categories </NavLink> </li>
                    </ul>
                    {/* <a href='#'>Budgeted Categories</a>
                    <a href='#'>Account</a> */}
                </div>
                <Balance balance={this.props.balance} label={this.props.label}/>

            </div>
        )
    }
}