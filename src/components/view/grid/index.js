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

const Grid = ({ data }) => {
  const fragilityValues = [0, 0.2, 0.4, 0.6, 0.8, 1];

  const fragilityData = data.fragility.map((item, index) => ({
    name: fragilityValues[index] || 0,
    collapse: item.collapse || 0,
    extensive: item.extensive || 0,
    moderate: item.moderate || 0,
    slight: item.slight || 0,
  }));

  const nameValuesSecondData = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5];
  const hazardData =
    data && data.hazard
      ? data.hazard.map((item, index) => ({
          name: nameValuesSecondData[index] || 0,
          amplifiedHazard: item.amplifiedHazard || null,
          hazard: item.hazard || null,
        }))
      : [];
  return (
    <section className="chart">
      <div className="container">
        <div className="row">
          <div>
            <LineChart width={450} height={300} data={fragilityData}>
              <CartesianGrid strokeDasharray="0 1" />
              <XAxis
                dataKey="name"
                type="number"
                scale="pow"
                domain={[0.1, 1]}
              />
              <YAxis type="number" scale="pow" domain={["auto", "auto"]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="collapse"
                stroke="#A3CC4A"
                name="collapse"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="extensive"
                stroke="#2BA90F"
                strokeDasharray="3 2"
                name="extensive"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="moderate"
                stroke="#7A00C4"
                strokeDasharray="3 2"
                name="moderate"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="slight"
                stroke="#C40000"
                name="slight"
                strokeWidth={2}
              />
            </LineChart>
          </div>
          <div>
            <LineChart width={450} height={300} data={hazardData}>
              <CartesianGrid strokeDasharray="0 3" />
              <XAxis
                dataKey="name"
                type="number"
                scale="pow"
                domain={["auto", "auto"]}
              />
              <YAxis type="number" scale="pow" domain={[0, 1]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amplifiedHazard"
                stroke="#068800"
                name="Amplified Hazard"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="hazard"
                stroke="#C40000"
                name="Hazard"
                strokeWidth={2}
              />
            </LineChart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
