import React from "react";

const CarTable = ({ cars, highlightCar }) => {
  return (
    <div>
      <h2>Highlighted Cars</h2>
      <div className="highlighted-cars">
        {cars.filter((car) => car.isHighlighted).length === 0 ? (
          <p>No cars highlighted yet</p>
        ) : (
          cars
            .filter((car) => car.isHighlighted)
            .map((car) => (
              <div key={car.id}>
                <span>
                  {car.make} / {car.model} - {car.price} Baht{" "}
                </span>
                <button onClick={() => highlightCar(car.id)}>Remove</button>
              </div>
            ))
        )}
      </div>

      <h2>All Cars</h2>
      <div className="all-cars">
        {cars.map((car) => (
          <div key={car.id} style={{ marginBottom: "10px" }}>
            <span>
              {car.make} / {car.model} - {car.price} Baht{" "}
            </span>
            <button
              onClick={() => highlightCar(car.id)}
              style={{ marginLeft: "10px" }}
            >
              {car.isHighlighted ? "Remove" : "Highlight"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarTable;
