import React from "react";

function Weather({ country, weather }) {
  if (!weather) {
    return <div>Loading weather...</div>;
  }

  return (
    <div>
      <h1>Weather in {country.capital}</h1>
      <p>Temperature: {weather.current.temp}°C</p>
      <p>Weather: {weather.current.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}.png`}
        alt={weather.current.weather[0].description}
      />
    </div>
  );
}

export default Weather;
