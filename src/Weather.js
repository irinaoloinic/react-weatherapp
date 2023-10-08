import React from "react";
import "./Weather.css";

function Weather(){
  return(
    <div className="Weather"> 
    
    <form>
      <div className="row">
       <div className="col-9">
        <input type="search" placeholder="Enter a city.." className="form-control"/>
       </div>
       <div className="col-3">
      <input type="submit" value="Search" className="btn btn-primary"/>
      </div>
      </div>
    </form>

    <h1>Barcelona</h1>
     <div className="row">
      <div className="col-6">
       <ul>
        <li>Last updated: Monday 13:17</li>
        <li>Clear sky</li>
        <li>Humidity: 77%</li>
        <li>Wind speed: 3km/h</li>
      </ul>
       </div>

       <div className="col-6">
        <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" alt="weather-icon" />
         6˚C 
       </div>

     </div>
  </div>
  )
}
export default Weather;
