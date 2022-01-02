import "./ChartBar.css";

const ChartBar = (props) => {
  console.log("in ChartBar.js props: ", props);
  let barFillHeight = "0%";
  if (
    props &&
    props.value &&
    props.value > 0 &&
    props.maxValue &&
    props.maxValue > 0
  ) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  console.log("in ChartBar.js props: ", props);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        >{console.log("in ChartBar.js barFillHeight: ", barFillHeight)}</div>
      </div>
      <div className="chart-bar__label ">{props.label}</div>
    </div>
  );
};

export default ChartBar;
