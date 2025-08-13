import "./styles.css";

function Homework_06() {
  interface Car {
    brand: string;
    price: number;
    isDiesel: boolean;
  }
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  return (
    <div className="homework_06_page_wrapper">
      <h1>Cars</h1>
      <div className="cars_wrapper">
        {cars.map((car, index) => (
          <div className="car_card" key={index}>
            <h2>{car.brand}</h2>
            <p>Price: ${car.price}</p>
            <p>Fuel: {car.isDiesel ? "Diesel" : "Petrol"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homework_06;
