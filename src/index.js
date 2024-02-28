import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Weather from "./Weather";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Weather />
      <p>This project was coded by Adele McKenna and is open-sourced on <a href="https://github.com/space-ventura/weather-react" target="_blank" rel="noreferrer">Github</a></p>
  </React.StrictMode>
);
