import React, { useState } from "react";
import "./Weather.css"
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
 const [city, setCity] = useState(props.defaultCity);
  function handleResponse (response) {
console.log(response.data)
setWeatherData ({
ready: true,
temperature: response.data.main.temp,
humidity: response.data.main.humidity, 
wind: response.data.wind.speed,
city: response.data.name,
icon: response.data.weather[0].icon,
description: response.data.weather[0].description,
date: new Date(response.data.dt * 1000),
});
}

function search() {
const apiKey="1dbf926d3b4417bf379db7043bec1047";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
search(city);
}

function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
  return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
          <input type="search" placeholder="Enter a City..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
      </div>
      <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
      </div>
       </div>
        </form>
        <WeatherInfo data={weatherData}/>
       
        </div>
        )
} else {
search();
return "Loading...";
}


  
  
}
