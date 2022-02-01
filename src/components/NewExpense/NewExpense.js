import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  const onClickAddButton = () => {
    setIsEditing(true);
  };

  const clickCancelButtonHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancelButton={clickCancelButtonHandler}
        />
      ) : (
        <button onClick={onClickAddButton}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
