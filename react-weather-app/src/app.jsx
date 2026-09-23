import { useState } from "react";
function App() {
      const [city, setCity] = useState(" ");
      const [weather, setWeather] = useState(null);
      async function searchWeather() {
  console.log(city);
  const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
);
  
const data = await response.json();
setWeather(data);
}
return (
  <div>
    <h1>Weather App</h1>
<input
  placeholder="Enter city"
  value={city}
  onChange={(e) => setCity(e.target.value)}
