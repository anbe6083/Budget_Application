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
            //available balance = budgeted - activity

            {
              category: 'Food',
              budgeted: '0.00',
              activity: '0.00',
              available: '0.00'
            },
            {
              category: 'Rent',
              budgeted: '0.00',
              activity: '0.00',
              available: '0.00'
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
              budgeted: '0.00',
              activity: '0.00',
              available: '0.00'
            },
            {
              category: 'Gas',
              budgeted: '0.00',
              activity: '0.00',
              available: '0.00'
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
    this.handleChangeSubcategoryAvailableBalance = this.handleChangeSubcategoryAvailableBalance.bind(this);
  }


  handleChangeToBeBudgeted(newSubcategoryObj) {
    this.setState((oldState, props) => ({
      ToBeBudgeted: {
        groupName: oldState.groupName,
        budgeted: parseFloat(oldState.ToBeBudgeted.budgeted) - parseFloat(newSubcategoryObj.Budget),
        activity: oldState.activity
      }
    }))
  }

  handleChangeBalance(newTransactionObj) {
    this.setState((oldState, props) => ({
      ToBeBudgeted: {
        groupName: oldState.groupName,
        budgeted: parseFloat(oldState.ToBeBudgeted.budgeted) + parseFloat(newTransactionObj.Inflow),
        activity: oldState.activity
      },
      balance: parseFloat(oldState.balance) + parseFloat(newTransactionObj.Inflow) - parseFloat(newTransactionObj.Outflow)
    }))
  }

  //Description: Called whenever the user inputs data from the modal in the AddCategoryBar component
  handleAddCategory(categoryGroup) {
    this.setState((prevState, props) => ({
      categoryGroups: prevState.categoryGroups.concat([
        {
          groupName: categoryGroup,
          budgeted: 0.00,
          activity: 0.00,
          subcategories: []
        }
      ])
    }));
  }

  //Description: Concatenates a new subcategory underneath the category group. Called from
  //the CategoryGroups component in MainBudgetBody
  //TODO
  handleAddSubcategory(newSubcategoryObj, newSubcategoryCategoryGroup) {
    this.setState((prevState, props) => ({
      categoryGroups: prevState.categoryGroups.map((categoryGroup) => {
        if (categoryGroup.groupName === newSubcategoryCategoryGroup) {
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
      })
    }))
  }

  handleChangeSubcategoryAvailableBalance(newTransactionObj) {
    this.setState((oldState, props) => ({
      categoryGroups: oldState.categoryGroups.map(categoryGroup => {
        return {
          groupName: categoryGroup.groupName,
          budgeted: categoryGroup.budgeted,
          activity: categoryGroup.activity,
          subcategories: categoryGroup.subcategories.map(subcategory => {
            if (subcategory.category === newTransactionObj.value) {
              return {
                category: subcategory.category,
                budgeted: parseFloat(subcategory.budgeted),
                activity: parseFloat(subcategory.activity) - parseFloat(newTransactionObj.Outflow),
                available: parseFloat(subcategory.available) - parseFloat(newTransactionObj.Outflow) + parseFloat(newTransactionObj.Inflow)
              }
            } else {
              return subcategory;
            }
          })
        }
      })
    }))
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
    this.setState((prevState, props) => ({
      transactions: prevState.transactions.concat([newTransaction])
    }));
    this.handleChangeBalance(newTransactionObj);
    this.handleChangeSubcategoryAvailableBalance(newTransactionObj);
  }

  findSubcategory(searchTerm) {
    return this.state.categoryGroups.filter(
      categoryGroup => categoryGroup.subcategories.some(
        subcategory => subcategory.category === 'Gas'
      )
    );
  }

  // moveMoneyBetweenCategories(fromCategory, toCategory, amount) {
  //   const prevCategoryAmt = this.state.categoryGroups.
  // }


  //Each router allows the user to click a link and change the page from the Account tab to the Budgeting tab
  render() {
    console.log( 'findsubcategory ' +JSON.stringify(this.findSubcategory('Food')) );
    return (
      <Router>
        <div>
          <Route exact path={'/'} render={() => (<Account_Route categoryGroups={this.state.categoryGroups} transactions={this.state.transactions} balance={this.state.balance}
            handleChangeBalance={this.handleChangeBalance} handleAddTransaction={this.handleAddTransaction}
            ToBeBudgeted={this.state.ToBeBudgeted.groupName} />)}>

          </Route>
          <Route path={'/budget'} render={() => (<Budget_Route balance={this.state.ToBeBudgeted.budgeted} ToBeBudgeted={this.state.categoryGroups} handleChangeToBeBudgeted={this.handleChangeToBeBudgeted}
            categoryGroups={this.state.categoryGroups} handleAddSubcategory={this.handleAddSubcategory} handleAddCategory={this.handleAddCategory}
          />)}>
          </Route>
        </div>

      </Router>
    );
  }
}

export default App;
