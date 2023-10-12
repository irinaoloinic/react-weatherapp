import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";




function Weatherinfo(props){
  return (
    <div className="weather-info">
      <h1>{props.data.city}</h1>
     <div className="row mt-3">
      <div className="col-6">
       
       <ul >
        <li> <FormattedDate time= {props.data.time} /> </li>
        <li className="text-capitalize">{props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind speed: {props.data.wind} km/h</li>
      </ul>
       </div>

       <div className="col-6 d-flex ">
         <div >
        <WeatherIcon code={props.data.icon} size={52} />
        </div>

        <div >
           <WeatherTemperature celcius={props.data.temperature} />
        </div>
        </div>

       </div>
     </div>
   
  );
}
export default Weatherinfo;