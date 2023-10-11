import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"


function WeatherForecast(props){
  return (
    <div className="WeatherForecast">
      <div className="row">
        
        <div className="col">
        <div className="WeatherForecast-day" >Thu</div>
      <WeatherIcon code="clear-sky-day" size={36} />
       <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-min">22</span>
        <span className="WeatherForecast-temperature-max">15</span>
        </div> 
        </div>

      </div>
    </div>
  )
}
export default WeatherForecast;