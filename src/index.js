import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  document.getElementById("time").textContent = timeString;
}

setInterval(updateTime, 1000);

function updateDate() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  document.getElementById("date").textContent = dateString;
}

setInterval(updateDate, 1000);


