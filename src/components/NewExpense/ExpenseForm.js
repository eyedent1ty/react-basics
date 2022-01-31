import React from 'react';

import './ExpenseForm.css';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      amount: '',
      date: '',
    };
  }

  inputChangeHandler = (event) => {
    const name = [event.target.name];
    this.setState((prevState) => {
      return { ...prevState, [name]: event.target.value };
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    const { title, amount, date } = this.state;

    if (!title.trim().length || !amount.trim().length || !date.trim().length)
      return;

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    this.props.onSaveExpenseData(expenseData); // send the new expense data to App.js
    this.setState({ title: '', amount: '', date: '' });
  };

  render() {
    const { submitHandler, inputChangeHandler } = this;
    const { title, amount, date } = this.state;

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={inputChangeHandler}
              value={title}
              type="text"
              name="title"
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              onChange={inputChangeHandler}
              value={amount}
              type="number"
              min="0.01"
              step="0.01"
              name="amount"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={inputChangeHandler}
              value={date}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              name="date"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
