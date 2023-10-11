import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";

function Weather(props){
const [weatherData, setweatherData] = useState({ready:false});
const [city, setCity]= useState(props.defaultCity);
  

  function handleResponse(response){
    console.log(response.data);
    setweatherData({
      ready:true,
      temperature:response.data.temperature.current,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      time: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      
  
  })
}
function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
  setCity(event.target.value);
}

function search(){
  const apiKey="37f6a94ba46fa4c11df96b5390cdt21o";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}
if (weatherData.ready){
return(
    <div className="Weather"> 
    
    <form onSubmit={handleSubmit} >
      <div className="row">
       <div className="col-9">
        <input type="search" placeholder="Enter a city.."  className="form-control" autoFocus="on" onChange={handleCityChange} />
       </div>
       <div className="col-3">
      <input type="submit" value="Search" className="btn btn-primary w-100"/>
      </div>
      </div>
    </form>
    <Weatherinfo data={weatherData} />
<WeatherForecast />

    
  </div>
  );
} else{
  search();
  return "Loading...";
 } 
}
export default Weather;
