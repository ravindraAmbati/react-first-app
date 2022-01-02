import { NO_EXPENSES_FOUND_MESSAGE } from "../../ApplicationConstants";
import { getParaMessage } from "../../formatters/MessageFormatters";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
  if (props.filteredExpenses && props.filteredExpenses.length === 0) {
    return getParaMessage(NO_EXPENSES_FOUND_MESSAGE);
  } else if (props.filteredExpenses && props.filteredExpenses.length > 0) {
    return (
      <ul className="expenses-list">
        {console.log(
          "in ExpenseList.js props.filteredExpenses: ",
          props.filteredExpenses
        )}
        {props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
};
export default ExpenseList;
