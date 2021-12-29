import ResultCard from './ResultCard'
import * as React from 'react'
import Container from '@mui/material/Container';
import { spacing } from '@mui/system';
import { Card } from '@mui/material';
import { useState, useEffect } from 'react';
import ViewDetails from './ViewDetails';
import Chosen from './Chosen';
import axios from 'axios'
import { Box, Fade, Backdrop, Typography, Modal } from '@mui/material';
import { Link, BrowserRouter, useNavigate, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import ChosenSummary from './ChosenSummary'
import Button from '@mui/material/Button';
import flightpic from './images/flightpic.jpg'


function findArrayElementByTitle(array, id) {
  return array.find((element) => {
    return element._id === id;
  })
}
export default function SearchRes() {

  const [clickedRes, setClickedRes] = useState(false);
  const [departure, setDeparture] = useState("");
  const [book, setBook] = useState(false);
  const [returnFlight, setReturn] = useState("");
  // const [cabin, setCabin] = useState("Business");
  // const [adultPass, setAdult] = useState(2);
  // const [childPass, setChild] = useState(1);

  const navigate = useNavigate();
  const location = useLocation()
  const [flightlist, setFlightlist] = useState([]);
  const [flightlist2, setFlightlist2] = useState([]);
  //departurelist, returnlist ,cabin ,adultPass,childPass} = location.state
  const { flights, cabin, adultPass, childPass ,id} = location.state;
  console.log(flights)
  useEffect(() => {

    if (flights.from === "") {
      delete flights.from;

    }
    if (flights.to === "") {
      delete flights.to;

    }
    if (flights.date === "") {
      delete flights.date;

    }
    if (flights.arr == "") {
      delete flights.arr;

    }
    if (flights.dep === "") {
      delete flights.dep;

    }
    if (flights.tarr === "") {
      delete flights.tarr;

    }
    if (flights.tdep === "") {
      delete flights.tdep;

    }
    if (flights.ec === "") {
      delete flights.ec;

    }
    if (flights.bs === "") {
      delete flights.bs;

    } if (flights.first === "") {
      delete flights.first;

    }
    if (flights.flightNum === "") {
      delete flights.flightNum;

    }

    axios.post('http://localhost:8000/searchFlights', {

      FlightNu: flights.flightNum,
      From: flights.from,
      To: flights.to,
      FlightDate: flights.date,

      ArrivalTime: flights.arr,
      DepartureTime: flights.dep,
      TerminalDeparture: flights.tdep,
      TerminalArrival: flights.tarr,
      NuofAvailableEconomySeats: flights.ec,
      NuofAvailableBuisnessSeats: flights.bs,
      NuofAvailableFirstSeats: flights.first

    })
      .then(function (response) {
        console.log("xxx");


        setFlightlist(response.data);

      }

      )
  }, []);
  useEffect(() => {



    if (flights.from === "") {
      delete flights.from;

    }
    if (flights.to === "") {
      delete flights.to;

    }
    if (flights.retDate === "") {
      delete flights.retDate;

    }
    if (flights.arr == "") {
      delete flights.arr;

    }
    if (flights.dep === "") {
      delete flights.dep;

    }
    if (flights.tarr === "") {
      delete flights.tarr;

    }
    if (flights.tdep === "") {
      delete flights.tdep;

    }
    if (flights.ec === "") {
      delete flights.ec;

    }
    if (flights.bs === "") {
      delete flights.bs;

    } if (flights.first === "") {
      delete flights.first;

    }
    if (flights.flightNum === "") {
      delete flights.flightNum;

    }

    axios.post('http://localhost:8000/searchFlights', {

      FlightNu: flights.flightNum,
      From: flights.to,
      To: flights.from,
      FlightDate: flights.retDate,

      ArrivalTime: flights.arr,
      DepartureTime: flights.dep,
      TerminalDeparture: flights.tdep,
      TerminalArrival: flights.tarr,
      NuofAvailableEconomySeats: flights.ec,
      NuofAvailableBuisnessSeats: flights.bs,
      NuofAvailableFirstSeats: flights.first

    })
      .then(function (response) {
        console.log("xxx");

        setFlightlist2(response.data);

      }

      )

  }, []);

  return (
    <div >
      <div

        id='intro-example'
        className='p-5 text-center bg-image'
        style={{
          background: `url('https://www.puredestinations.co.uk/wp-content/uploads/2016/06/header-Qatar-Airways-introduces-Dreamliner-aircraft-to-Birmingham-International-Airport--1600x500.jpg')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 600, width: window.screen.width,
          marginTop: 150,

        }}


      >
        <h1 style={{ color: ' #5c0931', marginLeft: -900,marginTop:200,fontWeight:'bold' }}> Welcome on board</h1>
      </div>


      {(clickedRes && book) ? <>

        <div>


          <h1 style={{ color: ' #5c0931', marginLeft: 500, marginTop: -70 }}>Your Chosen Departure Flight</h1>;

          <Chosen
            Price={cabin == "Economy" ? departure.EcoPrice : cabin == "Business" ? departure.BusPrice : departure.FPrice}
            totalPrice={cabin == "Economy" ? departure.EcoPrice * adultPass + departure.EcoPrice * childPass * 0.5 : cabin == "Business" ? departure.BusPrice * adultPass + departure.BusPrice * childPass * 0.5 : departure.FPrice * adultPass + departure.FPrice * childPass * 0.5}
            child={childPass}
            adult={adultPass}
            cabin={cabin}
            flightID={departure._id}
            DepartureTime={departure.DepartureTime}
            ArrivalTime={departure.ArrivalTime}
            FlightNu={departure.FlightNu}
            From={departure.From}
            To={departure.To}
            TripDuration={departure.TripDuration}
            click={setClickedRes}
            flight={setDeparture}
          />
          <h1 style={{ color: ' #5c0931', marginLeft: 500, marginTop: 100 }}>Your Chosen Return Flight</h1>;

          <Chosen style={{ color: 'black' }}
            Price={cabin == "Economy" ? returnFlight.EcoPrice : cabin == "Business" ? returnFlight.BusPrice : returnFlight.FPrice}
            totalPrice={cabin == "Economy" ? returnFlight.EcoPrice * adultPass + returnFlight.EcoPrice * childPass * 0.5 : cabin == "Business" ? returnFlight.BusPrice * adultPass + returnFlight.BusPrice * childPass * 0.5 : returnFlight.FPrice * adultPass + returnFlight.FPrice * childPass * 0.5}
            cabin={cabin}
            child={childPass}
            adult={adultPass}
            flightID={returnFlight._id}
            DepartureTime={returnFlight.DepartureTime}
            ArrivalTime={returnFlight.ArrivalTime}
            FlightNu={returnFlight.FlightNu}
            From={returnFlight.From}
            To={returnFlight.To}
            TripDuration={returnFlight.TripDuration}
            click={setBook}
            flight={setReturn}
          />

          <Button variant="outlined" style={{ color: "white", backgroundColor: "#5c0931",marginLeft:700 }} onClick={() => {
            navigate("/Seats", { state: { depFlight: departure, retFlight: returnFlight, cab: cabin, adult: adultPass, child: childPass ,id:id} });
          }}>Choose your seats</Button>
        </div><br /></>
        : clickedRes ? <>  <div>


          <h2 style={{ color: ' #5c0931', marginLeft: 500, marginTop: -100 }}>Your Chosen Departure Flight </h2>;
          <div style={{ marginLeft: 200 }}>
            <Chosen style={{ color: 'black' }}
              Price={cabin == "Economy" ? departure.EcoPrice : cabin == "Business" ? departure.BusPrice : departure.FPrice}
              totalPrice={cabin == "Economy" ? departure.EcoPrice * adultPass + departure.EcoPrice * childPass * 0.5 : cabin == "Business" ? departure.BusPrice * adultPass + departure.BusPrice * childPass * 0.5 : departure.FPrice * adultPass + departure.FPrice * childPass * 0.5}
              cabin={cabin}
              child={childPass}
              adult={adultPass}
              flightID={departure._id}
              DepartureTime={departure.DepartureTime}
              ArrivalTime={departure.ArrivalTime}
              FlightNu={departure.FlightNu}
              From={departure.From}
              To={departure.To}
              TripDuration={departure.TripDuration}
              click={setClickedRes}
              flight={setDeparture}
            />
          </div>
          <h2 style={{ color: ' #5c0931', marginLeft: 500 }}>Choose your Return flight</h2>;

          {flightlist2.map(u => {
            return <div style={{ marginLeft: 200 }}>
              <ResultCard
                Price={cabin == "Economy" ? u.EcoPrice : cabin == "Business" ? u.BusPrice : u.FPrice}
                totalPrice={cabin == "Economy" ? u.EcoPrice * adultPass + u.EcoPrice * childPass * 0.5 : cabin == "Business" ? u.BusPrice * adultPass + u.BusPrice * childPass * 0.5 : departure.FPrice * adultPass + departure.FPrice * childPass * 0.5}
                cabin={cabin}
                child={childPass}
                adult={adultPass}
                flightID={u}
                DepartureTime={u.DepartureTime}
                ArrivalTime={u.ArrivalTime}
                FlightNu={u.FlightNu}
                From={u.From}
                To={u.To}
                TripDuration={u.TripDuration}
                click={setBook}
                flight={setReturn}
              /></div>
          })}

        </div><br /></> :


          <div>

            <h2 style={{ color: ' #5c0931', marginLeft: 500, marginTop: -100, fontWeight: 'bold' }}>Choose your departure flight</h2> <br />
            <br />;
            <div style={{ width: 1200, height: 400, marginLeft: 200, marginTop: 0 }}>

              {flightlist.map((u) => {
                return <div>
                  <ResultCard Price={cabin == "Economy" ? u.EcoPrice : cabin == "Business" ? u.BusPrice : u.FPrice}
                  totalPrice={cabin == "Economy" ? u.EcoPrice * adultPass + u.EcoPrice * childPass * 0.5 : cabin == "Business" ? u.BusPrice * adultPass + u.BusPrice * childPass * 0.5 : u.FPrice * adultPass + u.FPrice * childPass * 0.5}
                  cabin={cabin}
                  child={childPass}
                  adult={adultPass}
                  flightID={u}
                  DepartureTime={u.DepartureTime}
                  ArrivalTime={u.ArrivalTime}
                  FlightNu={u.FlightNu}
                  From={u.From}
                  To={u.To}
                  TripDuration={u.TripDuration}
                  click={setClickedRes}
                  flight={setDeparture}
                /></div>
              })}

            </div>
          </div>
      }

    </div>
  )
}
