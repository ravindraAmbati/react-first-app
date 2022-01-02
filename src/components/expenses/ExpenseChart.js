import Chart from "../chart/Chart";

const ExpenseChart = (props) => {
  const expenseDataPoints = [
    {
      key: "Jan",
      value: 0,
      label: "Jan",
      maxValue: 0,
    },
    {
      key: "Feb",
      value: 0,
      label: "Feb",
      maxValue: 0,
    },
    {
      key: "Mar",
      value: 0,
      label: "Mar",
      maxValue: 0,
    },
    {
      key: "Apr",
      value: 0,
      label: "Apr",
      maxValue: 0,
    },
    {
      key: "May",
      value: 0,
      label: "May",
      maxValue: 0,
    },
    {
      key: "Jun",
      value: 0,
      label: "Jun",
      maxValue: 0,
    },
    {
      key: "Jul",
      value: 0,
      label: "Jul",
      maxValue: 0,
    },
    {
      key: "Aug",
      value: 0,
      label: "Aug",
      maxValue: 0,
    },
    {
      key: "Sep",
      value: 0,
      label: "Sep",
      maxValue: 0,
    },
    {
      key: "Oct",
      value: 0,
      label: "Oct",
      maxValue: 0,
    },
    {
      key: "Nov",
      value: 0,
      label: "Nov",
      maxValue: 0,
    },
    {
      key: "Dec",
      value: 0,
      label: "Dec",
      maxValue: 0,
    },
  ];
  if (props && props.expenses && props.expenses.length > 0) {
    let totalExpenseAmount = 0;
    props.expenses.map((expense) => {
      let expenseMonth = expense.date.getMonth();
      expenseDataPoints[expenseMonth].value += expense.amount;
      totalExpenseAmount += expense.amount;
    });
    expenseDataPoints.map((dataPoint, index) => {
      expenseDataPoints[index].maxValue = totalExpenseAmount;
      console.log("in ExpenseChart.js dataPoint: index: ", dataPoint, index);
    });
  }
  return <Chart dataPoints={expenseDataPoints} />;
};

export default ExpenseChart;
