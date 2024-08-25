import React, { useState, useEffect } from 'react';
import PieChartComponent from './PieChart';
import BarChartComponent from './BarChart';
import './HighlightedCars.css';

const HighlightedCars = ({ cars }) => {
  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem('highlightedCars')) || [];
    setHighlighted(storedCars);
  }, []);

  const highlightCar = (car) => {
    if (!highlighted.some(c => c.model === car.model)) {
      const updatedCars = [...highlighted, car];
      setHighlighted(updatedCars);
      localStorage.setItem('highlightedCars', JSON.stringify(updatedCars));
    }
  };

  const removeCar = (car) => {
    const updatedCars = highlighted.filter((c) => c.model !== car.model);
    setHighlighted(updatedCars);
    localStorage.setItem('highlightedCars', JSON.stringify(updatedCars));
  };

  return (
    <div className="highlighted-cars-container">
      <div className="cars-list">
        <h2>Highlighted Cars</h2>
        <ul className="highlighted-cars-list">
          {highlighted.length > 0 ? (
            highlighted.map((car) => (
              <li className="car-item" key={car.model}>
                <span className="car-details">
                  {car.brand} / {car.model} - {car.value} Baht
                </span>
                <button onClick={() => removeCar(car)}>Remove</button>
              </li>
            ))
          ) : (
            <p>No cars highlighted yet</p>
          )}
        </ul>

        <h2>All Cars</h2>
        <ul className="all-cars-list">
          {cars.map((car) => (
            <li className="car-item" key={car.model}>
              <span className="car-details">
                {car.brand} / {car.model} - {car.value} Baht
              </span>
              <button onClick={() => highlightCar(car)}>Highlight</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="charts-container">
        {highlighted.length > 0 && (
          <>
            <div className="chart pie-chart">
              <PieChartComponent data={highlighted} />
            </div>
            <div className="chart bar-chart">
              <BarChartComponent data={highlighted} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HighlightedCars;
