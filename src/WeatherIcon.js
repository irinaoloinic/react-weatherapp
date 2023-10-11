import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

function WeatherIcon(props){
  console.log(props.icon);
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day" :"CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "shower-rain-day": "RAIN", 
    "rain-day": "RAIN", 
    "thunderstorm-day": "RAIN",
    "snow-day": "SNOW", 
    "mist-day": "WIND"

  }
  return(
    <ReactAnimatedWeather 
    icon={codeMapping[props.code]}
    color="#272142"
    size={52}
    animate={true} 
    />
  )

}
export default WeatherIcon;