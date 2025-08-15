import { type ReactNode } from "react";
import { v4 } from "uuid";

import { type Car } from "./types";
import "./styles.css";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carCards: ReactNode = cars.map((car: Car) => {
    return (
      <div key={v4()} className="car_card">
        <p className="card_info">Brand: {car.brand}</p>
        <p className="card_info">Price: {car.price}</p>
        <p className="card_info">
          Fuel Type: {car.isDiesel ? "Diesel" : "Petrol"}
        </p>
      </div>
    );
  });

  return <div className="homework_06_page_wrapper">{carCards}</div>;
}

export default Homework_06;
