import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast() {

function handleResponse(response) {
console.log(response.data);
}

const apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
let longitude="-75.16379000";
let latitude="39.95233000";
let apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
 axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
        <div className="WeatherForecast-day">  Thu </div>
          <WeatherIcon code="01d" size={36}/>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span> 
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  )
}