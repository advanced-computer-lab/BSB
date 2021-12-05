import React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ViewDetails from './ViewDetails';
//mport Booknow from './Booknow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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




function DepartureList(props) {
    const [flightNum, setFlightNum] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [flightlist, setFlightlist] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/searchDepartureFlights").then(res => {
            console.log("xxxx");
            setFlightlist(res.data);
        })


    })
    return (

        < div >
        <Layout/>
            <Typography gutterBottom component="div">
                Please select a departure flight
            </Typography>
            <div style={{marginTop:-100,width:500}}>
            <TableContainer component={Paper} style={{width:500,marginLeft:400,marginTop:-100}}>
                <Table sx={{ minWidth: 300 }} aria-label="customized table" >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Flight Number</StyledTableCell>
                            <StyledTableCell align="center">From</StyledTableCell>
                            
                            <StyledTableCell align="center">To</StyledTableCell>
                            <StyledTableCell align="center">Departure Date</StyledTableCell>
                            <StyledTableCell align="center">Departure Terminal</StyledTableCell>
                            <StyledTableCell align="center">Arrival Terminal </StyledTableCell>
                            <StyledTableCell align="center">Departure Time </StyledTableCell>
                            <StyledTableCell align="center">Arrival Time </StyledTableCell>
                            <StyledTableCell align="center">Trip Duration </StyledTableCell>
                            <StyledTableCell align="center">Cabin Type </StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>

                            <StyledTableCell align="center">&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">&nbsp;</StyledTableCell>



                            <StyledTableCell align="center"> &nbsp;</StyledTableCell>
                            <StyledTableCell align="center"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableRow> </TableRow>
                    
                    
                    {props.flightlist.map(u => {
                        return <TableRow key={u._id}>
                            <StyledTableCell align="center">{u.FlightNu}</StyledTableCell>
                            <StyledTableCell align="center">{u.From} </StyledTableCell>
                            <StyledTableCell align="center">{u.To}</StyledTableCell>
                            <StyledTableCell align="center">{u.FlightDate}</StyledTableCell>
                            <StyledTableCell align="center">{u.TerminalDeparture}</StyledTableCell>
                            <StyledTableCell align="center">{u.TerminalArrival}</StyledTableCell>
                             <StyledTableCell align="center">{u.DepartureTime}</StyledTableCell>
                            <StyledTableCell align="center">{u.ArrivalTime}</StyledTableCell>
                            <StyledTableCell align="center">{u.TripDuration}</StyledTableCell>
                            <StyledTableCell align="center">{u.EcoPrice}</StyledTableCell>
                            {/* <StyledTableCell align="center">{u.BusPrice}</StyledTableCell> */}

                            {/* <StyledTableCell align="center">{u.FPrice}</StyledTableCell> */}
                        </TableRow>
                    })}
                    
                </Table>
            </TableContainer>
            </div>


            
        </div>
    )
}


export default DepartureList;