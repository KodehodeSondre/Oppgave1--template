import React from "react";
import Dish from "./Dish";
import "./App.css";

const Menu = ({ dishes }) => {
  const categories = dishes.reduce((acc, dish) => {
    if (!acc[dish.kategori]) acc[dish.kategori] = [];
    acc[dish.kategori].push(dish);
    return acc;
  }, {});

  return (
    <div className="menu">
      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="menu-category">
          <h2 className="category-title">{category}</h2>
          {items.map((dish) => (
            <Dish
              key={dish.id}
              tittel={dish.tittel}
              pris={dish.pris}
              ingredienser={dish.ingredienser}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
