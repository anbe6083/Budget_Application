import React, {Component} from 'react';

export default class TopLabel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <div className="col1">
                    Date
                </div>
                <div className="col2">
                    Payee
                </div>
                <div className="col3">
                    Category
                </div>
                <div className="col4">
                    Outflow
                </div>
                <div className="col5">
                    Inflow
                </div>
            </div>
        )
    }
}