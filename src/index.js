import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import "./index.css";
import {ContextProvider} from './contexts/ContextProvider';

const root = ReactDOM.unstable_createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App /> 
  </ContextProvider>
); 