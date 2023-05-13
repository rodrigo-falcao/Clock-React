import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppClock from './AppClock';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppClock />
  </React.StrictMode>
);

reportWebVitals();
