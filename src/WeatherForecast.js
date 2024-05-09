import React, { useState ,useEffect} from 'react'
import "./WeatherForecast.css"
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

function WeatherForecast(props) {
  const[loaded,setLoaded]=useState(false)
  const[forecastData,setForecastData]=useState(null)
  useEffect(()=>{
setLoaded(false)
  },[props.coordinates])

console.log(forecastData);
  const handleResponse=(response)=>{
    setForecastData(response.data.daily)
    setLoaded(true);
  }
 
if(loaded){
  return( 
  <div className="weatherforecast">
     <div className="row">
       
        {forecastData.map(function(dailyforecast,index){
          if(index<5){ 
            return(
            <div className="col" key={index}>
              <WeatherForecastDay data={dailyforecast} />
            </div>)
          }else{
            return null;
          }
        })}
         
      
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
