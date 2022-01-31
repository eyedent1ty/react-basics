import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {/*If you pass a className to your component, you need to manually apply it,
       by going to the codebase of the component and extract the className property on the props object
       and put it in the className of the returning element of that component, e.g., Card component got a className
        Every attribute that is passed in a component will always be a propery of the props object
      */}
      {props.items
        .filter((item) => item.date.getFullYear().toString() === filteredYear)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
