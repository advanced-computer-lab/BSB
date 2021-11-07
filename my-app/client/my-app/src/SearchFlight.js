//imports
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

function SearchFlight(props) {
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
        })
      setShow(false);
      setClicked(false);
    }
  });

  return (
    <div>
      <Table border='transparent'>

        <tr>
          <td>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.from}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
          </td>y
          <td>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.to}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="To" />}
            />
          </td>
        </tr>





        <tr>
          <td>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.date}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Date" />}
            />
          </td>
          <td>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.first}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="First Class Seats" />}
            />
          </td>
        </tr>

        <tr>
          <td>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.economy}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Economy Class Seats" />}
            />
          </td>
          <td>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.business}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Business Class Seats" />}
            />
          </td>
        </tr>


        <tr>
          <td>


            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.arrival}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Arrival Time" />}
            />
          </td>
          <td>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.departure}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Departure Time" />}
            />
          </td>
        </tr>


        <tr>
          <td>


            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.arrivalTerminal}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Arrival Terminal" />}
            />
          </td>
          <td>


            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.departureTerminal}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Departure Terminal" />}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={props.flightNumber}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Flight Number" />}
            />

          </td>
          <td>
            <Button variant="outline-primary" onClick={handleShow}>
              Search
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Flights</Modal.Title>
                </Modal.Header>
                <Modal.Body> <div border="solid">
                  <SearchResults>

                  </SearchResults>




                </div>
                </Modal.Body>
              </Modal>
            </Button>
          </td>
        </tr>

      </Table>

    </div>
  );
}

export default SearchFlight;
