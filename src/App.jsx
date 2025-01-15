import React from "react";
import Menu from "./Menu.jsx";
import Slideshow from "./Slideshow.jsx";
import "./App.css";

const meny = [
  {
    id: 1,
    tittel: "Spaghetti Bolognese",
    pris: "159 kr",
    ingredienser: "Spaghetti, kjøttsaus, parmesan",
    kategori: "Hovedrett",
  },
  {
    id: 2,
    tittel: "Kremet Kyllingsuppe",
    pris: "129 kr",
    ingredienser: "Kylling, fløte, gulrøtter, selleri",
    kategori: "Forrett",
  },
  {
    id: 3,
    tittel: "Margarita Pizza",
    pris: "169 kr",
    ingredienser: "Tomatsaus, mozzarella, basilikum",
    kategori: "Hovedrett",
  },
  {
    id: 4,
    tittel: "Sushi Mix",
    pris: "229 kr",
    ingredienser: "Laks, tunfisk, reker, ris",
    kategori: "Hovedrett",
  },
  {
    id: 5,
    tittel: "Cæsarsalat",
    pris: "139 kr",
    ingredienser: "Romanosalat, kylling, parmesan, dressing",
    kategori: "Forrett",
  },
  {
    id: 6,
    tittel: "Brownie med Is",
    pris: "89 kr",
    ingredienser: "Brownie, vaniljeis, sjokoladesaus",
    kategori: "Dessert",
  },
  {
    id: 7,
    tittel: "Taco Tallerken",
    pris: "199 kr",
    ingredienser: "Kjøttdeig, mais, ost, guacamole",
    kategori: "Hovedrett",
  },
  {
    id: 8,
    tittel: "Pannekaker med Syltetøy",
    pris: "99 kr",
    ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
    kategori: "Dessert",
  },
  {
    id: 9,
    tittel: "Reker med Sitron",
    pris: "149 kr",
    ingredienser: "Reker, sitron, dill, brød",
    kategori: "Forrett",
  },
  {
    id: 10,
    tittel: "Entrecôte med Grønnsaker",
    pris: "289 kr",
    ingredienser: "Entrecôte, asparges, poteter, peppersaus",
    kategori: "Hovedrett",
  },
];



const App = () => {
  const images = [
    "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg",
    "https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg",
    "https://images.pexels.com/photos/2530586/pexels-photo-2530586.jpeg",
  ];
  
  return (
    <div className="app-container">
      <Slideshow images={images} />
      <h1 className="app-title">Restaurant Menu</h1>
      <Menu dishes={meny} />
      <img url="./src/assets/image1.jpg"></img>
    </div>
  );
};

export default App;
