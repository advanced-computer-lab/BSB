

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
//import { Button } from '@material-ui/core';
import { MDBCol, MDBIcon } from "mdbreact";


import Icon from '@mui/material/Icon';
import { Button } from 'react-bootstrap';
import AddFlightForm from './AddFlightForm';
import UpdateFlight from './UpdateFlight';
import SearchBody from './SearchBody';
import Layout from './Layout';

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




function SearchResults(props) {
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
    const [bs, setBs] = useState("");
    const [first, setFirst] = useState("");
    const [flightNum, setFlightNum] = useState("");

    const [clicked, setClicked] = useState(false);
    return (<div style={{marginTop:-500}}> 
       
        {clicked ? <SearchBody /> :  (props.back ? props.component :
             <div>

            <TableContainer component={Paper} style={{marginTop:-650,width:1300,marginLeft:130,opacity:0.9}}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Flight Number</StyledTableCell>
                            <StyledTableCell align="center">Departure Airport</StyledTableCell>
                            <StyledTableCell align="center">Arrival Airport</StyledTableCell>
                            <StyledTableCell align="center">Flight Date&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Arrival time&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Departure Time</StyledTableCell>
                            <StyledTableCell align="center">Trip Duration&nbsp; </StyledTableCell>
                            <StyledTableCell align="center">Departure Terminal</StyledTableCell>
                            <StyledTableCell align="center">Arrival Terminal</StyledTableCell>
                            <StyledTableCell align="center">Economy seats available</StyledTableCell>
                            <StyledTableCell align="center">Economy seats price</StyledTableCell>
                            <StyledTableCell align="center">Business seats available&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Business seats price &nbsp; </StyledTableCell>
                            <StyledTableCell align="center">First seats available</StyledTableCell>
                            <StyledTableCell align="center">First seats price </StyledTableCell>
                    
                        </TableRow>
                    </TableHead>
                    <TableRow> </TableRow>



                    {props.flightlist.map(u => {
                        return <TableRow key={u._id}>
                            <StyledTableCell align="center">{u.FlightNu}</StyledTableCell>
                            <StyledTableCell align="center">{u.From} </StyledTableCell>
                            <StyledTableCell align="center">{u.To}</StyledTableCell>
                            <StyledTableCell align="center">{u.FlightDate}</StyledTableCell>
                             <StyledTableCell align="center">{u.DepartureTime}</StyledTableCell>
                            <StyledTableCell align="center">{u.ArrivalTime}</StyledTableCell>
                            <StyledTableCell align="center">{u.TripDuration}</StyledTableCell>
                            <StyledTableCell align="center">{u.TerminalDeparture}</StyledTableCell>
                            <StyledTableCell align="center">{u.TerminalArrival}</StyledTableCell>
                            <StyledTableCell align="center">{u.NuofAvailableEconomySeats}</StyledTableCell>
                            <StyledTableCell align="center">{u.EcoPrice}</StyledTableCell>
                            <StyledTableCell align="center">{u.NuofAvailableBuisnessSeats}</StyledTableCell>
                            <StyledTableCell align="center">{u.BusPrice}</StyledTableCell>
                            <StyledTableCell align="center">{u.NuofAvailableFirstSeats}</StyledTableCell>
                            <StyledTableCell align="center">{u.FPrice}</StyledTableCell>
                        </TableRow>
                    })}
                </Table>
            </TableContainer>
          <Button  variant ="primary" onClick={event => setClicked(true)} style={{marginLeft:730,marginTop:100}}>Done</Button>

            </div>)}
    </div>)
}

export default SearchResults
