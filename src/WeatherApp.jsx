import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Raebareli",
    feelsLike: 36.75,
    humidity: 26,
    maxtemp: 37.05,
    mintemp: 37.05,
    temp: 37.05,
    weather: "haze",
  });

  let updateInfo = (weather) => {
    setWeatherInfo(weather);
  };

  return (
    <div id="app-container">
      <h1>React Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <WeatherInfo info={weatherInfo} />
    </div>
  );
}
