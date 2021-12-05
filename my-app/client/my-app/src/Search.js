import React from 'react'
import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DepartureList from './DepartureList';
import Layout from './Layout';

function Search() {
  const [flights, setFlights] = useState({ From: "", To: "", departureDate: "", cabin: "", adults: "", child: "" })
  const [retflights, setRetFlights] = useState({ From: "", To: "", departureDate: "", cabin: "", adults: "", child: "", })
  const [flightlist, setFlightlist] = useState([]);
  const [retflightlist, setretFlightlist] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [retdate, setretDate] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchRes, setSearchRes] = useState(false);
  const [cabin, setCabin] = useState("");
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");

  useEffect(() => {
    if (!searchClicked) {
      return false;
    }
    if (searchClicked) {
      setFlights({ From: from, To: to, departureDate: date, cabin: cabin, adults: adult, child: child })
      if (flights.from === "") {
        delete flights.from;

      }
      if (flights.to === "") {
        delete flights.to;

      }
      if (flights.departureDate === "") {
        delete flights.date;

      }
      if (flights.cabin == "") {
        delete flights.cabin;

      }
      if (flights.adults === "") {
        delete flights.adults;

      }
      if (flights.child === "") {
        delete flights.child;

      }

      axios.post('http://localhost:8000/searchDepartureFlights', {

        From: flights.From, To: flights.To, departureDate: flights.departureDate, cabin: flights.cabin, adults: flights.adults, child: flights.child

      })
        .then(function (response) {
          console.log("xxx");

          setFlightlist(response.data);
          console.log(flightlist);
          setSearchClicked(false)
          setSearchRes(true);
        }

        )
      //  return()=>{setSearchClicked(false)};
    }


    //.catch(err => {console.log(err)});
  });
  useEffect(() => {
    if (!searchClicked) {
      return false;
    }
    if (searchClicked) {
      setRetFlights({ From: to, To: from, departureDate: retdate, cabin: cabin, adults: adult, child: child })
      if (retflights.from === "") {
        delete retflights.from;

      }
      if (retflights.to === "") {
        delete retflights.to;

      }
      if (retflights.departureDate === "") {
        delete retflights.departuredate;

      }
      if (retflights.cabin == "") {
        delete retflights.cabin;

      }
      if (retflights.adults === "") {
        delete retflights.adults;

      }
      if (retflights.child === "") {
        delete retflights.child;

      }

      axios.post('http://localhost:8000/searchDepartureFlights', {

        From: retflights.From, To: retflights.To, departureDate: retflights.departureDate, cabin: retflights.cabin, adults: retflights.adults, child: retflights.child

      })
        .then(function (response) {
          console.log("xxx");
          console.log(response.data);
          console.log(retflights);
          setretFlightlist(response.data);
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

      
      
        
        < div style={{marginTop:-700, marginLeft:100}}>


          <form >
            
            <br />
            <TextField
            required
            id="outlined-error"

            style={{marginRight:20}}
            label="From"
            defaultValue=""
            
              onChange={event => setFrom(event.target.value)}

            />



            <TextField

              required
              id="outlined-error"
              label="Arrival Airport"
              defaultValue=""
              onChange={event => setTo(event.target.value)}





            />
            <br />
            <br />
            <TextField

              required
              id="outlined-error"
              label="Depature Date"
              style={{marginRight:20}}
              defaultValue=""
              onChange={event => setDate(event.target.value)}





            />


            <TextField

              required
              id="outlined-error"
              label="Arrival Date"
              defaultValue=""
              onChange={event => setretDate(event.target.value)}





            />


            <br />
            <br />
            <TextField

              required
              id="outlined-error"
              label=" Number of Adults"
              style={{marginRight:20}}
              defaultValue=""
              onChange={event => setAdult(event.target.value)}





            />


            <TextField

              required
              id="outlined-error"
              label="Number of Children"
              defaultValue=""
              onChange={event => setChild(event.target.value)}





            />
            <br />
            <br />
            <FormControl component="fieldset"  style={{marginLeft:15}}>
              <FormLabel component="legend">Cabin</FormLabel>
              <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={event => setCabin(event.target.value)}>
                <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
                <FormControlLabel value="Business" control={<Radio />} label="Business" />
                <FormControlLabel value="First" control={<Radio />} label="First" />
                
              </RadioGroup>
            </FormControl>
            <br />

            <Button variant="contained" onClick={event => setSearchClicked(true)} style={{ marginLeft: 340,marginTop:-40 }}>Search</Button>

          </form>
          <DepartureList  style={{marginLeft:100}}flightlist={flightlist} ></DepartureList>
          <DepartureList flightlist={retflightlist} ></DepartureList>
        </div>

      

     
    </div >
  )
}

export default Search