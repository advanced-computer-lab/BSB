import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Flightitinerary from './Flightitinerary'
import reportWebVitals from './reportWebVitals';
import ChooseSeat from './ChooseSeat';
import Summary from './Summary';
import DepartureList from './DepartureList'
import Searchu from './Searchu';
import User from './User';
import Help from './Help';
import LoginPage from './LoginPage';
import CreateAccount from './CreateAccount';
import BaggageAllowance from './BaggageAllowance';
import UpgradeJourmey from './UpgradeJourmey';
import SpecialServices from './SpecialServices';
import TravelInsurance from './TravelInsurance';
import Lounges from './Lounges';
import PrivilegeClub from './PrivilegeClub';
import FamilyProgramme from './FamilyProgramme';
import StudentPrograms from './StudentPrograms';
import AirportHotel from './AirportHotel';
import FlexibleTravelOptions from './FlexibleTravelOptions';
import Admin from './Admin';
import Transacc from './Transacc';
import HomePage from './HomePage';
import LandingPage from './LandingPage'
//import Flightitinerary from './Flightitinerary'
ReactDOM.render(
  <React.StrictMode>
    < HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
