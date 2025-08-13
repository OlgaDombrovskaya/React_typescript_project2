import { useState } from "react";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_05() {
  let [orders, setOrders] = useState([]);
  const buttonNames = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-Cream",
  ];

  //   ["Burder", "Salad"]
  const orderList = orders.map((orderItem) => {
    return (
      <li
        onClick={() => {
          setOrders((prevValue) => {
            return [...prevValue].filter((item) => {
              return orderItem.id !== item.id;
            });
          });
        }}
        key={v4()}
        className="order_item"
      >
        {orderItem.name}
      </li>
    );
  });

  /* 1 соособ: с созданием константы */
  const buttons = buttonNames.map((orderButton) => {
    return (
      <div key={v4()} className="button_control">
        <Button
          name={orderButton}
          onClick={() => {
            setOrders((prevValue) => {
              return [...prevValue, { id: v4(), name: orderButton }];
            });
          }}
        />
      </div>
    );
  });

  return (
    <div className="lesson_05_page_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">
          {/* 1 соособ: с созданием константы */}
          {buttons}
          {/* 2 соособ: без создания константы */}
          {/* {buttonNames.map((orderButton) => (
            <div key={v4()} className="button_control">
              <Button
                name={orderButton}
                onClick={() => {
                  setOrders((prevValue) => {
                    return [...prevValue, orderButton];
                  });
                }}
              />
            </div>
          ))} */}
        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{orderList}</ol>
      </div>
    </div>
  );
}

export default Lesson_05;
