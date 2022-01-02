import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [state, setState] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const onChangeHanlder = (event) => {
    "title" === event.target.name &&
      setState((prevState) => {
        return { ...prevState, enteredTitle: event.target.value };
      });
    "amount" === event.target.name &&
      setState((prevState) => {
        return { ...prevState, enteredAmount: parseFloat(event.target.value) };
      });
    "date" === event.target.name &&
      setState((prevState) => {
        return { ...prevState, enteredDate: event.target.value };
      });
  };

  const onSubmitHanlder = (event) => {
    if ("newExpenseForm" === event.target.name) {
      event.preventDefault();
      const newExpense = {
        title: state.enteredTitle,
        amount: +state.enteredAmount,
        date: new Date(state.enteredDate),
      };
      console.log("in ExpenseForm.js newExpense ", newExpense);
      props.onSaveExpenseData(newExpense);
      setState({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    }
  };
  const onClickCancel = (event) => {
    if ("cancel" === event.target.name) {
      return props.isShowAddNewExpenseButton(true);
    }
  };
  return (
    <form name="newExpenseForm" onSubmit={onSubmitHanlder}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={state.enteredTitle}
            onChange={onChangeHanlder}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            value={state.enteredAmount}
            min={0.01}
            step={0.01}
            max={9999.99}
            onChange={onChangeHanlder}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            value={state.enteredDate}
            min="2018-01-01"
            max="2021-12-31"
            onChange={onChangeHanlder}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button name="cancel" onClick={onClickCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
