import React from 'react'
import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';


function SearchBody() {
  const [flights, setFlights] = useState({ from: "", to: "", date: "", arr: "", dep: "", tdep: "", tarr: "", ec: "", bs: "", first: "", flightNum: "" })
  const [flightlist, setFlightlist] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const [arr, setArr] = useState("");
  const [dep, setDep] = useState("");
  const [tdep, setTdep] = useState("");
  const [tarr, setTarr] = useState("");
  const [ec, setEc] = useState("");
  const [ecPrice, setEcPrice] = useState("");
  const [bs, setBs] = useState("");
  const [bsPrice, setBsPrice] = useState("");
  const [first, setFirst] = useState("");
  const [firstPrice, setFirstPrice] = useState("");
  const [flightNum, setFlightNum] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchRes, setSearchRes] = useState(false);
  const [tripDuration, setTripDuration] = useState("");
  useEffect(() => {
    if (!searchClicked) {
      return false;
    }
    if (searchClicked) {
      setFlights({ from: from, to: to, date: date, arr: arr, dep: dep, tdep: tdep, tarr: tarr, ec: ec, bs: bs, first: first, flightNum: flightNum, bsPrice: bsPrice, ecPrice: ecPrice, firstPrice: firstPrice, tripDuration: tripDuration })
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
      if (flights.ecPrice === "") {
        delete flights.ecPrice;

      }
      if (flights.bsPrice === "") {
        delete flights.bsPrice;

      }
      if (flights.firstPrice === "") {
        delete flights.firstPrice;

      }
      if (flights.tripDuration === "") {
        delete flights.tripDuration;

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
        NuofAvailableFirstSeats: flights.first,
        EcoPrice: flights.ecPrice,
        BusPrice: flights.bsPrice,
        FPrice: flights.firstPrice,
        TripDuration: flights.tripDuration


      })
        .then(function (response) {
          console.log("xxx");
          setFlightlist(response.data);
          setSearchClicked(false)
          setSearchRes(true);
        }

        )
      //  return()=>{setSearchClicked(false)};
    }


    //.catch(err => {console.log(err)});
  });
  //useEffect(() => {search()});
  return (
    <div>

      {
        searchRes ? <SearchResults flightlist={flightlist} /> : <div>


          <form >
            <h1>Search flight</h1>
            <br />
            <TextField
            required
            id="outlined-size-small"

            size="small"
            label="Flight Number"
            defaultValue=""
            
              onChange={event => setFlightNum(event.target.value)}

            />





            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Date"
              defaultValue=""
              style={{marginLeft:100}}
              onChange={event => setDate(event.target.value)}
            />
            <br />
            <br />
            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Departure Airport"
              defaultValue=""
              onChange={event => setFrom(event.target.value)}
            />


            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Arrival Airport"
              defaultValue=""
              style={{marginLeft:100}}
              onChange={event => setTo(event.target.value)}
            />

            <br />
            <br />
            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Arrival Terminal"
              defaultValue=""
              onChange={event => setTarr(event.target.value)}
            />


            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Departure Terminal"
              defaultValue=""
              style={{marginLeft:100}}
              onChange={event => setTdep(event.target.value)}
            />


            <br />
            <br />
            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Arrival time"
              defaultValue=""
              onChange={event => setArr(event.target.value)}
            />


            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Departure time"
              defaultValue=""
              style={{marginLeft:100}}
              onChange={event => setDep(event.target.value)}
            />

            <br />
            <br />
            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Economy Seats"
              defaultValue=""
              onChange={event => setEc(event.target.value)}
            />


            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Economy Seats Price"
              defaultValue=""
              style={{marginLeft:100}}
              onChange={event => setEcPrice(event.target.value)}
            />

            <br />

            <br />
            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Business Seats"
              defaultValue=""
              onChange={event => setBs(event.target.value)}
            />



            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Business Seats Price"
              defaultValue=""
              style={{marginLeft:100}}
              onChange={event => setBsPrice(event.target.value)}
            />

            <br />

            <br />
            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="First Class Seats"
              defaultValue=""
              onChange={event => setFirst(event.target.value)}
            />



            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="First Class Seats Price"
              defaultValue=""
              style={{marginLeft:100}}
              onChange={event => setFirstPrice(event.target.value)}
            />

            <br />
            <br />
            <TextField

              required
              id="outlined-size-small"

              size="small"
              label="Trip Duration"
              defaultValue=""
              onChange={event => setTripDuration(event.target.value)}
            />


            <Button  variant="primary" onClick={event => setSearchClicked(true)} style={{marginLeft:230}}>Search</Button>


          </form>

        </div>

      }
    </div>
  )
}

export default SearchBody