import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
    
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim() !== "") {
      let apiKey = "047e82a3493503fd3349718fd1e42b74";
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`;
      axios.get(apiURL).then(handleResponse);
    }
  }

  if (ready) {
    return (
      
      <div className="Weather">
       
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                autoFocus={true}
              />
            </div>
            <div className="col-auto">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li><FormattedDate date={weatherData.date}/></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
            />
            <WeatherTemperature celsius={weatherData.temperature}/>
            
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
