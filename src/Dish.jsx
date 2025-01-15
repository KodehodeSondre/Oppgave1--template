import React from "react";
import "./App.css";

const Dish = ({ tittel, pris, ingredienser }) => {
  return (
    <div className="dish">
      <h2 className="dish-title">{tittel}</h2>
      <p className="dish-price">{pris}</p>
      <p>{ingredienser}</p>
    </div>
  );
};

export default Dish;
