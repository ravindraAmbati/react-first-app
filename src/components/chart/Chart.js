import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props &&
        props.dataPoints &&
        props.dataPoints.map((dataPoint) => {
          console.log("in Chart.js dataPoint: ", dataPoint);
          return <ChartBar
            key={dataPoint.key}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={dataPoint.maxValue}
          />;
        })}
    </div>
  );
};

export default Chart;
