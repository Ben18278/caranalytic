import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const BarChartComponent = ({ data }) => {
  // Create an array where each element represents a brand with its models and values
  const chartData = data.reduce((acc, car) => {
    const brandIndex = acc.findIndex(item => item.brand === car.brand);

    if (brandIndex !== -1) {
      // If brand already exists in acc, add the model and value
      acc[brandIndex][car.model] = car.value;
    } else {
      // If brand does not exist, create a new entry
      acc.push({ brand: car.brand, [car.model]: car.value });
    }

    return acc;
  }, []);

  // Dynamically generate bars for each model
  const models = Array.from(new Set(data.map(car => car.model))); // Unique models from data

  return (
    <BarChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="brand" />
      <YAxis />
      <Tooltip />
      <Legend />
      {models.map(model => (
        <Bar key={model} dataKey={model} fill="#8884d8" />
      ))}
    </BarChart>
  );
};

export default BarChartComponent;
