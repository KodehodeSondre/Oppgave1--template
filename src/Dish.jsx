import React from "react";
import "./App.css";

const Dish = ({ tittel, pris, ingredienser, kategori }) => {
    const getCategoryColor = (category) => {
      switch (category) {
        case "Forrett":
          return "green";
        case "Hovedrett":
          return "red";
        case "Dessert":
          return "yellow";
        default:
          return "black";
      }
    };
  
    return (
      <div className="dish">
        <h2 className="dish-title" style={{ color: getCategoryColor(kategori) }}>{tittel}</h2>
        <p className="dish-price">{pris}</p>
        <p>{ingredienser}</p>
        <p className="dish-category" style={{backgroundColor: getCategoryColor(kategori)}}>{kategori}</p>
      </div>
    );
  };
  
  export default Dish;