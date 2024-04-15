import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      date:"Wednesday 07:00";
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                alt={weatherData.description}
                autoFocus="on"
              />
            </div>
            <div className="col-auto">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
            src={weatherData.icon}
            //   src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt={weatherData.description}
              className="float-left"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "047e82a3493503fd3349718fd1e42b74";
    let city = "Nairobi";
    if (weatherData.city) {
      city = weatherData.city;
    }
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
    return "Loading..";
  }
}

export default Weather;
