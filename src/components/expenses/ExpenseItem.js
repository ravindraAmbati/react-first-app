import "./ExpenseItem.css";
import { INR } from "../../formatters/CurrencyFormatters";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{INR(props.amount).format()}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
