import React from 'react'
import WeatherIcon from './WeatherIcon'
import "./WeatherForecast.css"

function WeatherForecast() {
  return (
    <div className="weatherforecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <WeatherIcon code="01d" />
          <div className="WeatherForecast-temperatures">
            <span className="Max-temp">19</span>
            <span className='Min-temp'>10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast
