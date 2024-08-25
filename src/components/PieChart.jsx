import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = ({ data }) => {
  const brandSummary = data.reduce((acc, car) => {
    if (!acc[car.brand]) {
      acc[car.brand] = 0;
    }
    acc[car.brand] += car.value;
    return acc;
  }, {});

  const chartData = Object.keys(brandSummary).map((brand, index) => ({
    name: brand,
    value: brandSummary[brand],
    color: COLORS[index % COLORS.length]
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
