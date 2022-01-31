import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import FilterExpenses from './components/Expenses/FilterExpenses';
import EXPENSES_DATA from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: EXPENSES_DATA,
      previewExpenses: EXPENSES_DATA,
    };
  }

  saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    this.setState((prevState) => {
      prevState.expenses.push(expenseData);
      return {
        expenses: prevState.expenses,
        previewExpenses: prevState.expenses,
      };
    });
  };

  removeExpense = (expenseId) => {
    this.setState((prevState) => {
      return {
        expenses: prevState.expenses.filter(
          (expense) => expense.id !== expenseId
        ),
        previewExpenses: prevState.expenses.filter(
          (expense) => expense.id !== expenseId
        ),
      };
    });
  };

  filterByDate = (selectedDate) => {
    if (selectedDate === 'None') {
      this.setState((prevState) => {
        return {
          expenses: prevState.expenses,
          previewExpenses: prevState.expenses,
        };
      });
      return;
    }

    this.setState((prevState) => {
      return {
        expenses: prevState.expenses,
        previewExpenses: prevState.expenses.filter(
          (expense) => expense.date.getFullYear().toString() === selectedDate
        ),
      };
    });
  };

  render() {
    return (
      <div>
        <NewExpense onSaveExpenseData={this.saveExpenseDataHandler} />
        <FilterExpenses filterByDate={this.filterByDate} />
        <Expenses
          items={this.state.previewExpenses}
          onClickRemove={this.removeExpense}
        />
        ;
      </div>
    );
  }
}

export default App;
