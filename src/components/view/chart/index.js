import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: 1, valueA: 10, valueB: 5 },
  { name: 2, valueA: 100, valueB: 50 },
  { name: 3, valueA: 1000, valueB: 500 },
  { name: 4, valueA: 10000, valueB: 5000 },
  { name: 5, valueA: 100000, valueB: 50000 },
];
const Chart = () => {
  return (
    <section className="chart">
      <div className="container">
        <div className="row">
          <div className="col col-12">
          {/* <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" type="number" scale="log" domain={['auto', 'auto']} />
      <YAxis type="number" scale="log" domain={['auto', 'auto']} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="valueA" stroke="#8884d8" name="Line A" />
      <Line type="monotone" dataKey="valueB" stroke="#82ca9d" name="Line B" />
    </LineChart>
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" type="number" scale="log" domain={['auto', 'auto']} />
      <YAxis type="number" scale="log" domain={['auto', 'auto']} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="valueA" stroke="#8884d8" name="Line A" />
      <Line
        type="monotone"
        dataKey="valueB"
        stroke="#82ca9d"
        name="Line B"
        strokeDasharray="3 4" // Customize the pattern for the dotted line
      />
    </LineChart> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
