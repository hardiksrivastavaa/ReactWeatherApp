import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getCityWeather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let weather = {
        city: city,
        temp: jsonResponse.main.temp,
        mintemp: jsonResponse.main.temp_min,
        maxtemp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return weather;
    } catch (error) {
      throw error;
    }
  };

  let handleCityChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      let weather = await getCityWeather();
      updateInfo(weather);
      setError(false);
      setCity("");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      {error && (
        <Alert
          severity="error"
          style={{ marginBottom: 20, border: "1px solid" }}
        >
          Given Place is not Exists in Our API
        </Alert>
      )}
      <form id="search-box" onSubmit={handleSubmit}>
        <TextField
          id="city"
          className="city-input"
          label="Search City"
          variant="outlined"
          value={city}
          onChange={handleCityChange}
          required
        />
        <Button variant="contained" size="large" type="submit">
          Search
        </Button>
      </form>
    </>
  );
}
