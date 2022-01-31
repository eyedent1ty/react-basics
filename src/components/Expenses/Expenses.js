import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
  const { items } = props;
  console.log('Expenses re-rendered');
  console.log(items);
  return (
    <Card className="expenses">
      {/*If you pass a className to your component, you need to manually apply it,
       by going to the codebase of the component and extract the className property on the props object
       and put it in the className of the returning element of that component, e.g., Card component got a className
        Every attribute that is passed in a component will always be a propery of the props object
      */}
      {items.length ? (
        items.map(({ id, title, date, amount }) => (
          <ExpenseItem
            key={id}
            date={date}
            title={title}
            amount={amount}
            id={id}
            onClickRemove={props.onClickRemove}
          />
        ))
      ) : (
        <div style={{ textAlign: 'center', color: 'red' }}>LIST IS EMPTY</div>
      )}
    </Card>
  );
};

export default Expenses;
