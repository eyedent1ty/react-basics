import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const { date, amount } = props;

  // useState() function  returns array with 2 elements
  // the value, and the function that you needed to invoke to change that value
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('New Title'); // Asynchronous
  };

  return (
    <Card className="expense-item">
      {/*If you pass a className to your component, you need to manually apply it,
       by going to the codebase of the component and extract the className property on the props object
       and put it in the className of the returning element of that component, e.g., Card component got a className
        Every attribute that is passed in a component will always be a propery of the props object
      */}
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;