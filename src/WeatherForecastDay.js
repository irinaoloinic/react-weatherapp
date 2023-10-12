import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay(props){
  function maxTemperature(){
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}˚`
   
  }
function minTemperature(){
  let temperature = Math.round(props.data.temperature.minimum);
  return `${temperature}˚`
}
 function day(){
  let date = new Date(props.data.temperature.day * 1000 );
  let day = date.getDay();

   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  
  return days[day];
 }

  return  (
    <div>
      <div className="WeatherForecast-day" >{day()}</div>
       <WeatherIcon code={props.data.condition.icon} size={34} />
         <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-min"> {maxTemperature()}</span>
        <span className="WeatherForecast-temperature-max"> {minTemperature()}</span>
    </div>
</div>
  );
}
export default WeatherForecastDay;