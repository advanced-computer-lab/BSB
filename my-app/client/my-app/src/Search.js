import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import DeleteIcon from '@mui/icons-material/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteFlight from './DeleteFlight';
//mport SearchFlight from './SearchFlight';
//import AddFlightForm from './AddFlightForm';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@mui/material/styles';

import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpdateButton from './UpdateButton'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import { MDBCol, MDBIcon } from "mdbreact";


import Icon from '@mui/material/Icon';
import { Button } from 'react-bootstrap';
import AddFlightForm from './AddFlightForm';
import UpdateFlight from './UpdateFlight';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
const [flightlist,setFlightlist]=useState([]);




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
    <>
      <Button variant="outline-primary" onClick={handleShow}> Search</Button>

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
            Search
          </Button>
          {flightlist.map(u => {
            return <TableRow key={u._id}>
              <StyledTableCell align="center">{u.FlightNu}</StyledTableCell>
              <StyledTableCell align="center">{u.From} </StyledTableCell>
              <StyledTableCell align="center">{u.To}</StyledTableCell>
              <StyledTableCell align="center">{u.FlightDate}</StyledTableCell>
              <StyledTableCell align="center">{u.ArrivalTime}</StyledTableCell>
              <StyledTableCell align="center">{u.DepartureTime}</StyledTableCell>
              <StyledTableCell align="center">{u.TerminalDeparture}</StyledTableCell>
              <StyledTableCell align="center">{u.TerminalArrival}</StyledTableCell>
              <StyledTableCell align="center">{u.NuofAvailableEconomySeats}</StyledTableCell>
              <StyledTableCell align="center">{u.NuofAvailableBuisnessSeats}</StyledTableCell>
              <StyledTableCell align="center">{u.NuofAvailableFirstSeats}</StyledTableCell>
              <StyledTableCell align="center" l><Button variant="outline-secondary">Show Map</Button> </StyledTableCell>
              <StyledTableCell align="center"> <UpdateFlight idd={u._id} from={u.From} to={u.To}
                flightNum={u.FlightNu}
                date={u.FlightDate}
                arr={u.ArrivalTime}
                dep={u.DepartureTime}
                tdep={u.TerminalDeparture}
                tarr={u.TerminalArrival}
                ec={u.NuofAvailableEconomySeats}
                bs={u.NuofAvailableBuisnessSeats}
                first={u.NuofAvailableFirstSeats}
              /></StyledTableCell>
              <StyledTableCell align="center">
                <Popup trigger={<Button variant="outline-danger" data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false">Delete</Button>} position="right center">
                  <div>Are you sure you want to delete?(if no click anywhere)</div>
                  <DeleteFlight idd={u._id}></DeleteFlight>
                </Popup>
              </StyledTableCell>
            </TableRow>
          })}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Search



