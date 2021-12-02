import React from 'react'
import CancelFlight from './CancelFlight';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Popup from 'reactjs-popup';
import { Button } from '@material-ui/core';
import { Paper } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
function ViewResFlights() {
    const [flightNum, setFlightNum] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [arr, setArr] = useState("");
    const [dep, setDep] = useState("");
    const [tdep, setTdep] = useState("");
    const [tarr, setTarr] = useState("");
    const [tripDuration, setTripDuration] = useState("");
    const [flightlist, setFlightlist] = useState([]);
    const [openPopUp, setOpen] = useState(false);

    const handleClickOpenPopUp = () => {
        setOpen(true);
    };

    const handleClosePopUp = () => {
        setOpen(false);
    };


    useEffect(() => {
        axios.get("http://localhost:8000/viewDepartureFlights").then(res => {
            console.log("xxxx");
            setFlightlist(res.data);
        })


    })
    return (
        < div >

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table" size='m'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Flight Number</StyledTableCell>
                            <StyledTableCell align="center">Flight Date</StyledTableCell>

                            <StyledTableCell align="center">Departure Airport</StyledTableCell>
                            <StyledTableCell align="center">Arrival Airport</StyledTableCell>

                            <StyledTableCell align="center">Departure Terminal</StyledTableCell>
                            <StyledTableCell align="center">Arrival Terminal</StyledTableCell>
                            <StyledTableCell align="center">Departure Time</StyledTableCell>
                            <StyledTableCell align="center">Arrival Time</StyledTableCell>
                            <StyledTableCell align="center">Trip Duration</StyledTableCell>
                            <StyledTableCell align="center">Number of tickets</StyledTableCell>
                            <StyledTableCell align="center">Cabin Type</StyledTableCell>
                            <StyledTableCell align="center">&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">&nbsp;</StyledTableCell>

                            <StyledTableCell align="center"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableRow> </TableRow>

                    {flightlist.map(u => {
                        return <TableRow key={u._id}>
                            <StyledTableCell align="center">{u.FlightNu}</StyledTableCell>
                            <StyledTableCell align="center">{u.FlightDate}</StyledTableCell>
                            <StyledTableCell align="center">{u.From} </StyledTableCell>
                            <StyledTableCell align="center">{u.To}</StyledTableCell>
                            <StyledTableCell align="center">{u.TerminalDeparture}</StyledTableCell>
                            <StyledTableCell align="center">{u.TerminalArrival}</StyledTableCell>
                            <StyledTableCell align="center">{u.ArrivalTime}</StyledTableCell>
                            <StyledTableCell align="center">{u.DepartureTime}</StyledTableCell>
                            <StyledTableCell align="center">{u.TripDuration}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button variant="outlined" onClick={handleClickOpenPopUp}>
                                    Cancel flight
                                </Button>
                                <Dialog
                                    open={openPopUp}
                                    
                                    onClose={handleClosePopUp}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Are you sure you want to cancel your ticket?"}
                                    </DialogTitle>

                                    <DialogActions>
                                        <Button onClick={handleClosePopUp}>Cancel</Button>
                                        <Button onClick={handleClosePopUp} autoFocus>
                                            Confirm
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                            </StyledTableCell>



                        </TableRow>
                    })}
                </Table>
            </TableContainer>



        </div>
    )
}

export default ViewResFlights
