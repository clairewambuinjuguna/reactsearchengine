import React, { useState } from 'react'
import WeatherIcon from './WeatherIcon'
import "./WeatherForecast.css"
import axios from 'axios';

function WeatherForecast(props) {
  const[loaded,setLoaded]=useState(false)
  const[forecastData,setForecastData]=useState(null)

  const handleResponse=(response)=>{
    setForecastData(response.data.daily)
    setLoaded(true);
  }
 
if(loaded){
  return( 
  <div className="weatherforecast">
     <div className="row">
       <div className="col">
         <div className="WeatherForecast-day">{forecastData[0].dt}</div>
         <WeatherIcon code="01d" />
         <div className="WeatherForecast-temperatures">
           <span className="Max-temp">{forecastData[0].temp.max}</span>
           <span className="Min-temp">{forecastData[0].temp.min}</span>
         </div>
       </div>
     </div>
   </div>
  );
 
}else{
 let longitude = props.coordinates.lon;
 let latitude = props.coordinates.lat;
 let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
 let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
 axios.get(apiURL).then(handleResponse);
 return null;
}
 
}

export default WeatherForecast
