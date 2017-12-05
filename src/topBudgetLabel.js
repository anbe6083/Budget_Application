import React, {Component} from 'react';

export default class TopBudgetLabel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="topLabel">
                <div className="budget-col1">
                    Category
                </div>
                <div className="budget-col2">
                    Activity
                </div>
                <div className="budget-col3">
                    Budgeted
                </div>
                <div className="budget-col4">
                    Available
                </div>
            </div>
        )
    }
}