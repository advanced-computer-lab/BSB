import React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';

import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});




function AddFlightForm(props) {
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
  const [bsPrice,setBsPrice ] = useState("");
  const [first, setFirst] = useState("");
  const [firstPrice,setFirstPrice ] = useState("");




  const [flightNum, setFlightNum] = useState("");

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleClickSnackBar = () => {
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };



  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      axios.post('http://localhost:8000/addFlight', {
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
        NuofAvailableFirstSeats: first,
        EcoPrice:ecPrice,
        BusPrice:bsPrice,
        FPrice:firstPrice
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
      <MenuItem onClick={handleShow} variant='primary'>
        Add Flight
      </MenuItem>


      <Modal show={show} onHide={handleClose} animation={false} style={{ height: 700, marginTop: '70' }}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new flight</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div border="solid">




          <form >
            <TextField

              required
              id="outlined-size-small"
             
              size="small"
             
              label="Flight Number"
              defaultValue=""
              onChange={event => setFlightNum(event.target.value)}

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


            <br />

            <br />
            <TextField

              required
              id="outlined-size-small"
             
              size="small"
              label="Arrival Airport"
              defaultValue=""
              onChange={event => setTo(event.target.value)}
            />
            <br />

            <br />
            <TextField

              required
              id="outlined-size-small"
             
              size="small"
              label="Date"
              defaultValue=""
              onChange={event => setDate(event.target.value)}
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



            <br />
            <br />
            <TextField

              required
              id="outlined-size-small"
             
              size="small"
              label="Departure time"
              defaultValue=""
              onChange={event => setDep(event.target.value)}
            />


            <br />

            <br />
            <TextField

              required
              id="outlined-size-small"
             
              size="small"
              label="Departure Terminal"
              defaultValue=""
              onChange={event => setTdep(event.target.value)}
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
            

            <br />


            <br />

          </form>
        </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" onClick={(event) => setClicked(true)}>
            ADD
          </Button>
          

         
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddFlightForm