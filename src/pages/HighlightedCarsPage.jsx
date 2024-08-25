import React from "react";
import HighlightedCars from "../components/HighlightedCars";
import carData from "../data/cars.json";

const HighlightedCarsPage = () => {
  return (
    <div>
      <h1>Highlighted Cars</h1>
      <HighlightedCars cars={carData} />
    </div>
  );
};

export default HighlightedCarsPage;
