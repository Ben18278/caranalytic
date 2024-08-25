import React from 'react';
import { Link } from 'react-router-dom';
import PieChartComponent from '../components/PieChart';
import BarChartComponent from '../components/BarChart';
import carData from '../data/cars.json';
import './Dashboard.css';

const Dashboard = () => {
  const getModelsForBrand = (brand) => {
    return carData.filter(car => car.brand === brand).map(car => car.model);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="brand-names">
        {['Honda', 'Toyota', 'Ford', 'Nissan'].map((brand) => (
          <div key={brand} className="brand-info">
            <span className="brand-name">{brand}</span>
            <div className="models-list">
              {getModelsForBrand(brand).map((model, index) => (
                <span key={index} className="model-name">{model}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="charts-container">
        <div className="chart pie-chart">
          <PieChartComponent data={carData} />
        </div>
        <div className="chart bar-chart">
          <BarChartComponent data={carData} />
        </div>
      </div>
      
      <Link to="/highlighted">
        <button className="highlighted-cars-button">Next Page</button>
      </Link>
    </div>
  );
};

export default Dashboard;
