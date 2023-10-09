import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather(props){
  
  const [weatherData, setweatherData] = useState({ready:false});
  

  function handleResponse(response){
    console.log(response.data);
    setweatherData({
      ready:true,
      temperature:response.data.temperature.current,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      time: response.data.time,
      iconUrl:"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"});
      
  
    }

if (weatherData.ready){
return(
    <div className="Weather"> 
    
    <form>
      <div className="row">
       <div className="col-9">
        <input type="search" placeholder="Enter a city.."  className="form-control" autoFocus="on"/>
       </div>
       <div className="col-3">
      <input type="submit" value="Search" className="btn btn-primary w-100"/>
      </div>
      </div>
    </form>

    <h1>{weatherData.city}</h1>
     <div className="row mt-3">
      <div className="col-6">
       <ul>
        <li>Last updated: {weatherData.time}</li>
        <li className="text-capitalize">{weatherData.description}</li>
        <li>Humidity: {weatherData.humidity}%</li>
        <li>Wind speed: {weatherData.wind} km/h</li>
      </ul>
       </div>

       <div className="col-6">
        <img src={weatherData.iconUrl} alt="weather-icon" />
       <span className="temperature">{Math.round(weatherData.temperature)} </span>
       <span className="unit" > ˚C</span>
       </div>
     </div>
  </div>
  );
} else{
  const apiKey="37f6a94ba46fa4c11df96b5390cdt21o";
  let city="Barcelona";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading...";
 } 
}
export default Weather;
