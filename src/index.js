import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import "./index.css";

const root = ReactDOM.unstable_createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);