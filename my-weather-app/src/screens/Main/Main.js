import React from "react";

import ClothesContainer from "../../components/Clothes/ClothesContainer";
import WeatherContainer from "../../components/Weather/WeatherContainer";

import "./Main.css";

const Main = () => {
  return (
    <div className="current-container">
      <ClothesContainer />
      <WeatherContainer />
    </div>
  );
};

export default Main;
