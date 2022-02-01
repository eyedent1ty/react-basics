import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  const sum = (...args) => {
    let total = 0;
    for (const num of args) {
      total += num;
    }
    return total;
  };

  const dataPointValues = filteredExpenses.map((expense) => expense.amount);
  const totalExpensesAmount = sum(...dataPointValues);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
        totalAmount={totalExpensesAmount}
      />
      <ExpensesChart
        expenses={filteredExpenses}
        totalAmount={totalExpensesAmount}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
