import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Weather />
      <footer>This project was coded by Adele McKenna and is open-sourced on{" "}
        <a
          href="https://github.com/space-ventura/weather-reactGithub"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a></footer>
  </React.StrictMode>
);
