import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    // The max() expects listed values, but we have an array with objects, so we transform them to only an array of numbers
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    // Equals the biggest value/cost/amount, the Expenses have
    // Since dataPointValues is still an array we use the ... operator, that solves this issue
    const totalMaximum = Math.max(...dataPointValues);


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
