import React from "react";
import FormattedDate from "./FormattedDate";


function Weatherinfo(props){
  return (
    <div className="weather-info">
      <h1>{props.data.city}</h1>
     <div className="row mt-3">
      <div className="col-6">
       <ul>
        <li> <FormattedDate time= {props.data.time} /> </li>
        <li className="text-capitalize">{props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind speed: {props.data.wind} km/h</li>
      </ul>
       </div>

       <div className="col-6">
        <img src={props.data.iconUrl} alt="weather-icon" />
       <span className="temperature">{Math.round(props.data.temperature)} </span>
       <span className="unit" > ˚C</span>
       </div>
     </div>
    </div>
  );
}
export default Weatherinfo;