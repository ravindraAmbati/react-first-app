import React from 'react';
import { useState } from 'react/cjs/react.development';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [state,setState] = useState({
    selectedYear: props.selectedYear,
  });
  const onChangeHandler = (event) => {
    "year" === event.target.name && setState({selectedYear:event.target.value});
    props.onSelectYear(event.target.value);
    console.log("in ExpensesFilter.js selectedYear: ",event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select name="year" onChange={onChangeHandler} value={state.selectedYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;