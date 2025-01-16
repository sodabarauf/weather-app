import React, { useState } from "react";
import FinalInputCard from "../components/inputCard/FinalInputCard";
import FinalOutput from "../components/outputCard/FinalOutput";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    const API_KEY = "c4b469446da64a62a7455412241903";
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching the weather data: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <FinalInputCard onSearch={handleSearch} />
      <FinalOutput weatherData={weatherData} />
    </div>
  );
};

export default WeatherApp;
