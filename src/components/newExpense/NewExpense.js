import react from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const onSaveExpenseHandler = (enteredExpenseData) => {
    console.log("in NewExpense.js enteredExpenseData: ", enteredExpenseData);
    const expenseData = {
      id: Math.random().toLocaleString(),
      ...enteredExpenseData,
    };
    console.log("in NewExpense.js expenseData: ", expenseData);
    props.onAddNewExpense(expenseData);
  };
  const showExpenseFormHandler = (event) => {
    if ("addNewExpense" === event.target.name) {
      setShowExpenseForm(true);
    }
  };
  const showAddNewExpenseButtonHandler = (showButton) => {
    setShowExpenseForm(!showButton);
  };
  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button name="addNewExpense" onClick={showExpenseFormHandler}>
          Add New Expense
        </button>
      )}
      {showExpenseForm && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} isShowAddNewExpenseButton={showAddNewExpenseButtonHandler}/>
      )}
    </div>
  );
};

export default NewExpense;
