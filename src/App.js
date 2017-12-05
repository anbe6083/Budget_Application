import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Account_Route from './Account_route';
import Budget_Route from './Budget_route';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ToBeBudgeted: {
        groupName: 'To Be Budgeted',
        budgeted: '0.00',
        activity: '0.00',
      },
      balance: "0.00",
      transactions: [
        {
          Date: new Date(),
          Payee: 'Andrew Berumen',
          Category: 'To Be Budgeted',
          Outflow: '0.00',
          Inflow: '5,000.00'
        },
        {
          Date: new Date(),
          Payee: 'John Doe',
          Category: 'Rent',
          Outflow: '900.00',
          Inflow: '0.00'
        },
        {
          Date: new Date(),
          Payee: 'Susie Smith',
          Category: 'Drinks',
          Outflow: '100.00',
          Inflow: '0.00'
        }
      ],
      categoryGroups: [
        
        {
            groupName: 'Immediate Obligations',
            budgeted: '0.00',
            activity: '0.00',
            subcategories: [
                {
                    category: 'food',
                    budgeted: '500.00',
                    activity: '300.76'
                },
                {
                    category: 'rent',
                    budgeted: '1000.00',
                    activity: '1000.00'
                }
            ]
        },
        {
            groupName: 'True Expenses',
            budgeted: '0.00',
            activity: '0.00',
            subcategories: [
                {
                    category: 'Car Insurance',
                    budgeted: '60.00',
                    activity: '60.00'
                },
                {
                    category: 'Gas',
                    budgeted: '100.00',
                    activity: '34.50'
                }
            ]
        }
    ]
    }
    this.handleChangeBalance = this.handleChangeBalance.bind(this);
    this.handleChangeToBeBudgeted = this.handleChangeToBeBudgeted.bind(this);
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.handleAddSubcategory = this.handleAddSubcategory.bind(this);    
    this.handleAddCategory = this.handleAddCategory.bind(this);
  }

  handleChangeToBeBudgeted( newSubcategoryObj ) {
    this.setState((oldState, props) => {
      return {
        ToBeBudgeted: {
          groupName: oldState.groupName,
          budgeted: parseFloat(oldState.ToBeBudgeted.budgeted) - parseFloat(newSubcategoryObj.Budget),
          activity: oldState.activity
        }
      }
    })
  }

  handleChangeBalance(newTransactionObj) {
    this.setState((oldState, props) => {
      return {
        ToBeBudgeted: {
          groupName: oldState.groupName,
          budgeted: parseFloat(oldState.ToBeBudgeted.budgeted) + parseFloat(newTransactionObj.Inflow),
          activity: oldState.activity
        },
        balance: parseFloat(oldState.balance) + parseFloat(newTransactionObj.Inflow) - parseFloat(newTransactionObj.Outflow)
      }
    })
  }

  //Description: Called whenever the user inputs data from the modal in the AddCategoryBar component
  handleAddCategory(categoryGroup) {
    this.setState((prevState, props) => {
      console.log('prevState' +prevState);
        return {
            categoryGroups: prevState.categoryGroups.concat([
                {
                    groupName: categoryGroup,
                    budgeted: 0.00,
                    activity: 0.00,
                    subcategories: []
                }
            ])
        }
    });
}

//Description: Concatenates a new subcategory underneath the category group. Called from
//the CategoryGroups component in MainBudgetBody
//TODO
handleAddSubcategory(newSubcategoryObj, newSubcategoryCategoryGroup) {
    this.setState((prevState, props) => {
        return {
            categoryGroups: prevState.categoryGroups.map( (categoryGroup) => {
                if(categoryGroup.groupName === newSubcategoryCategoryGroup) {
                    this.handleChangeToBeBudgeted(newSubcategoryObj);
                    return {
                        groupName: categoryGroup.groupName,
                        budgeted: parseFloat(categoryGroup.budgeted) + parseFloat(newSubcategoryObj.Budget),
                        activity: parseFloat(categoryGroup.activity),
                        subcategories: categoryGroup.subcategories.concat(
                            {
                                category: newSubcategoryObj.Subcategory,
                                budgeted: newSubcategoryObj.Budget,
                                activity: 0.00
                            }
                        )
                    }
                } else {
                    return categoryGroup;
                }
            } )
        }
    })
}

//Description: Sets the new state when the user inputs a new transaction in the AddTransactionRow component.
  //Takes input from the AddTransactionRow modal
  handleAddTransaction(newTransactionObj) {
    var newTransaction = {
      Date: newTransactionObj.date,
      Payee: newTransactionObj.Payee,
      Category: newTransactionObj.value,
      Outflow: newTransactionObj.Outflow,
      Inflow: newTransactionObj.Inflow
    }
    this.setState( (prevState, props) => {
      return {
        transactions: this.state.transactions.concat([newTransaction])
      }
    });
    this.handleChangeBalance(newTransactionObj);
  }

  //Each router allows the user to click a link and change the page from the Account tab to the Budgeting tab
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} render={() => (<Account_Route categoryGroups={this.state.categoryGroups} transactions = {this.state.transactions} balance={this.state.balance} 
          handleChangeBalance={this.handleChangeBalance} handleAddTransaction={this.handleAddTransaction} />)}>

          </Route>
          <Route path={'/budget'} render={() => (<Budget_Route ToBeBudgeted={this.state.ToBeBudgeted} handleChangeToBeBudgeted={this.handleChangeToBeBudgeted} 
          categoryGroups={this.state.categoryGroups} handleAddSubcategory={this.handleAddSubcategory} handleAddCategory={this.handleAddCategory} />)}>
          </Route>
        </div>

      </Router>
    );
  }
}

export default App;
