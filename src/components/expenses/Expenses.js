import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./expensesFilter/ExpensesFilter";
import { useState } from "react/cjs/react.development";
import { getYearString } from "../../formatters/DateFormatters";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(getYearString(new Date()));
  const onSelectedYearHandler = (newSelectedYear) => {
    setSelectedYear((prevSelectedYear) => {
      console.log(
        "in Expenses.js prevSelectedYear: and currentSelectedYear: and newSelectedYear: ",
        prevSelectedYear,
        selectedYear,
        newSelectedYear
      );
      return newSelectedYear;
    });
  };

  const filteredExpenses = props.items.filter((expense) => {
    return getYearString(expense.date) === selectedYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onSelectYear={onSelectedYearHandler}
      />
      {console.log("in Expenses.js selectedYear: ", selectedYear)}
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
