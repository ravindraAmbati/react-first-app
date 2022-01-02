import "./ExpenseDate.css";
import moment from "moment";

const ExpenseDate = (props) => {
  return (
    <div className="expense-date">
      <div className="expense-date__day">{moment(props.date).format("Do")}</div>
      <div className="expense-date__month">
        {moment(props.date).format("MMMM")}
      </div>
      <div className="expense-date__year">
        {moment(props.date).format("YYYY")}
      </div>
    </div>
  );
}

export default ExpenseDate;
