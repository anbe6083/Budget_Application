import React, {Component} from 'react';

export default class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="col1">
                    11/29/2017
                </div>
                <div className="col2">
                    Andrew Berumen
                </div>
                <div className="col3">
                    To Be Budgeted
                </div>
                <div className="col4">
                    0.00
                </div>
                <div className="col5">
                    10,000.00
                </div>
            </div>
        )
    }
}