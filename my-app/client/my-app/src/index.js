import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Flightitinerary from './Flightitinerary'
import reportWebVitals from './reportWebVitals';
import ChooseSeat from './ChooseSeat';
import Summary from './Summary';
import DepartureList from './DepartureList'
import Searchu from './Searchu';
import User from './User';

//import Flightitinerary from './Flightitinerary'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
