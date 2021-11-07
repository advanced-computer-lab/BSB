import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import DeleteIcon from '@mui/icons-material/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteFlight from './DeleteFlight';
import SearchFlight from './SearchFlight';
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

import { MDBCol, MDBIcon } from "mdbreact";


import Icon from '@mui/material/Icon';
import { Button } from 'react-bootstrap';
import AddFlightForm from './AddFlightForm';
import UpdateFlight from './UpdateFlight';
import Search from './Search';
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


function App() {
  const [flightlist, setFlightlist] = useState([]);
  /*const [fromArr, setFrom] = useState([]);
  const [toArr, setTo] = useState([]);
  const [dateArr, setDate] = useState([]);
  const [arrArr, setArr] = useState([]);
  const [depArr, setDep] = useState([])
  const [tdepArr, setTdep] = useState([])
  const [tarrArr, setTarr] = useState([])
  const [ecArr, setEc] = useState([])
  const [bsArr, setBs] = useState([])
  const [firstArr, setFirst] = useState([])
  const [flightNumArr, setFlightNum] = useState([])
  const [unique, setUnique] = useState([])*/
  useEffect(() => {
    axios.get("http://localhost:8000/showFlights").then(res => {
      console.log("xxxx");
      setFlightlist(res.data);
    })

    //.catch(err => {console.log(err)});
  })

 /* useEffect(() => {
    setFrom([...new Set(flightlist.map(item => item.From))]);

  })
  useEffect(() => {
    setTo([...new Set(flightlist.map(item => item.To))])
  })
  useEffect(() => {
    setDate([...new Set(flightlist.map(item => item.FlightDate))])
  })
  useEffect(() => {
    setArr([...new Set(flightlist.map(item => item.ArrivalTime))])
  })
  useEffect(() => {
    setDep([...new Set(flightlist.map(item => item.DepartureTime))])
  })
  useEffect(() => {
    setTdep([...new Set(flightlist.map(item => item.TerminalDeparture))])
  })
  useEffect(() => {
    setTarr([...new Set(flightlist.map(item => item.TerminalArrival))])
  })
  useEffect(() => {
    setEc([...new Set(flightlist.map(item => item.NuofAvailableEconomySeats))])
  })
  useEffect(() => {
    setBs([...new Set(flightlist.map(item => item.NuofAvailableBuisnessSeats))])
  })
  useEffect(() => {
    setFirst([...new Set(flightlist.map(item => item.NuofAvailableFirstSeats))])
  })
  useEffect(() => {
    setFlightNum([...new Set(flightlist.map(item => item.FlightNu))])
  }) */

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Flight Number</StyledTableCell>
              <StyledTableCell align="center">From</StyledTableCell>
              <StyledTableCell align="center">To</StyledTableCell>
              <StyledTableCell align="center">Flight Date&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Arrival time&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Departure Time</StyledTableCell>
              <StyledTableCell align="center">Departure Terminal</StyledTableCell>
              <StyledTableCell align="center">Arrival Terminal</StyledTableCell>
              <StyledTableCell align="center">Economy seats available</StyledTableCell>
              <StyledTableCell align="center">Business seats available&nbsp;</StyledTableCell>
              <StyledTableCell align="center">First seats available</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
              <StyledTableCell align="center"> <AddFlightForm />&nbsp;</StyledTableCell>
              <StyledTableCell align="center"> <Search/>&nbsp;</StyledTableCell>


              <StyledTableCell align="center"> &nbsp;</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableRow> </TableRow>



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
                tdep={u.TerminalDeparture}y
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
        </Table>
      </TableContainer>
     





    </div>);

}

export default App;
