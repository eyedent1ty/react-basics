import React from 'react';

const FilterExpenses = (props) => {
  const onDateChange = (event) => {
    props.filterByDate(event.target.value);
  };

  return (
    <select
      style={{ marginLeft: '45%', padding: '15px' }}
      onChange={onDateChange}
    >
      <option>None</option>
      <option>2020</option>
      <option>2021</option>
      <option>2022</option>
    </select>
  );
};

export default FilterExpenses;
