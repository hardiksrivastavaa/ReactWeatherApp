import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function WeatherInfo({ info }) {
  const cold =
    "https://imgs.search.brave.com/cL96GtWO3mW2kk7Dd8UHffQUdqRINsQJu0vJy4K5_9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZS11cC13/b21hbi1zdGFuZGlu/Zy1zbm93LWNvdmVy/ZWQtdHJlZS13aW50/ZXJfMTA0ODk0NC0x/MDExNDY0Ni5qcGc_/c2VtdD1haXNfaHli/cmlk";

  const hot =
    "https://imgs.search.brave.com/IYlKdFTOwJQCk0Qukh6z0gmGNQuhfS7r5zxbnquEg1c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/NTg5NTkwOC9waG90/by9hc2lhbi13b21h/bi1kcnlpbmctc3dl/YXQtaW4tYS13YXJt/LXN1bW1lci1kYXku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXMyaTFLdlFCbmRQ/LVAxbHhQbmVTTEJZ/LWhDdDN5NzN4RHh6/d1dFNVBRdkk9";

  const rain =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Card
      sx={{ maxWidth: 500 }}
      style={{ fontFamily: "Poppins", borderRadius: 10, border: "1px solid" }}
    >
      <CardMedia
        component="img"
        alt="weather"
        height="300"
        image={info.humidity > 80 ? rain : info.temp > 15 ? hot : cold}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <p id="city-info">
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </p>

          <p id="weather-details">
            Temperature: {info.temp}&deg;C <br />
            Minimum Temperature: {info.mintemp}&deg;C
            <br />
            Maximum Temperature: {info.maxtemp}&deg;C
            <br />
            Humidity: {info.humidity}%<br />
            Current weather: <strong>{info.weather}</strong>, feels like{" "}
            {info.feelsLike}&deg;C
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
