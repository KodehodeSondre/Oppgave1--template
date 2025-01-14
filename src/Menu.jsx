import React from "react";
import Dish from "./Dish.jsx";
import "./App.css";

const Menu = ({ dishes }) => {
  return (
    <div className="menu">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          tittel={dish.tittel}
          pris={dish.pris}
          ingredienser={dish.ingredienser}
          kategori={dish.kategori}
        />
      ))}
    </div>
  );
};

export default Menu;
