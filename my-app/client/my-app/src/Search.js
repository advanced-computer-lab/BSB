import React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Table from 'react-bootstrap/Table';
import SearchResults from './SearchResults';


function Search(props) {
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
    const [bs, setBs] = useState("");
    const [first, setFirst] = useState("");
    const [flightNum, setFlightNum] = useState("");
    const [searchflightlist, setFlightlist] = useState([]);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
      if (clicked) {
        axios.post('http://localhost:8000/searchFlights', {
          FlightNu: flightNum,
          From: from,
          To: to,
          FlightDate: date,
          ArrivalTime: arr,
          DepartureTime: dep,
          TerminalDeparture: tdep,
          TerminalArrival: tarr,
          NuofAvailableEconomySeats: ec,
          NuofAvailableBuisnessSeats: bs,
          NuofAvailableFirstSeats: first
        })
          .then(function (response) {
            console.log("xxx");
            setFlightlist(response.data)
          })
        setShow(false);
        setClicked(false);
        
      }
    });
    return (
        <>
      <Button variant="outline-primary" onClick={handleShow}> Search Flights</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body> <div border="solid">




          <form >
            Flight Number:

            <br />

            <input type="text" id="from" name="from" onChange={event => setFlightNum(event.target.value)} />
            <br />



            <br />
            From:
            <br />

            <input type="text" id="from" name="from" onChange={event => setFrom(event.target.value)} />
            <br />
            To:
            <br />
            <input type="text" id="to" name="to" onChange={event => setTo(event.target.value)} />
            <br />
            Date:
            <br />
            <input type="date" id="date" name="date" onChange={event => setDate(event.target.value)} />
            <br />

            ArrivalTime:
            <br />
            <input type="text" id="cabin" name="cabin" onChange={event => setArr(event.target.value)} />

            <br />
            Departure Time:
            <br />
            <input type="text" id="seat" name="seat" onChange={event => setDep(event.target.value)} />
            <br />
            Departure Terminal:
            <br />
            <input type="number" id="cabin" name="cabin" onChange={event => setTdep(event.target.value)} />

            <br />
            Arrival Teraminal:
            <br />
            <input type="number" id="cabin" name="cabin" onChange={event => setTarr(event.target.value)} />

            <br />
            Number of economy seats:
            <br />
            <input type="number" id="cabin" name="cabin" onChange={event => setEc(event.target.value)} />

            <br />
            Number of Buisness seats:
            <br />
            <input type="number" id="cabin" name="cabin" onChange={event => setBs(event.target.value)} />

            <br />
            Number of First seats:
            <br />
            <input type="number" id="cabin" name="cabin"
              onChange={event => setFirst(event.target.value)} />

            <br />

            <br />
           
          </form>
        </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => setClicked(true)}>
            Search <Modal> 
                <SearchResults>
                    
                </SearchResults>
            </Modal>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Search
