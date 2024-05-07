import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay(props) {
  function maxTemperature(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`
  }
  function minTemperature(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`
  }
  function day(){
    let date = new Date(props.data.dt *1000);
    let day=date.getDay();
    let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="WeatherForecast-temperatures">
        <span className="Max-temp">{maxTemperature()}</span>
        <span className="Min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
