import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
 console.log(props.code)
  const codeMapping = { 
"01d": "sunny",
"01n": "clear-night",
"02d": "partlycloudy",
"02n": "partlycloudy",
"03d": "partlycloudy",
"03n": "partlycloudy",
"04d": "partlycloudy",
"04n": "partlycloudy",
"09d": "rainy",
"09n": "rainy",
"10d": "pouring",
"10n": "pouring",
"11d": "lightning-rainy",
"11n": "lightning-rainy",
"13d": "snowy",
"13n": "snowy",
"50d": "fog",
"50n": "fog",
 }

  return (
    <WeatherSvg state={codeMapping[props.code]} width={64} height={64}/>
  )
}