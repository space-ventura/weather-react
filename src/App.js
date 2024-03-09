import React from "react";
import Weather from "./Weather"
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
         <Weather />
      <footer>This project was coded by Adele McKenna and is open-sourced on{" "}
        <a
          href="https://github.com/space-ventura/weather-reactGithub"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a></footer>
   </div>
    </div>
  );
}

