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
import App from './App';
import EditProfile from './EditProfile';
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
function ViewResFlights(props) {
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
    const [depFlights, setDepFlight] = useState([{
        flightnumber:"",
        adults: "", children: "", cabin: "",
        depprice: "", tripduration: "", deptime: "", arrterminal: "", from: "", to: "", date: ""
    }])

    const [returnFlight, setReturnFlight] = useState({
        adultsreturn: "", childrenreturn: "", cabinreturn: "",
        returnprice: "", returndepterminal: "", returnarrterminal: "",
        returntripduration: "", returndeptime: "", returnarrterminal: "", returnfrom: "", returnto: "", returndate: ""
    })



    const handleClickOpenPopUp = () => {
        setOpen(true);
    };

    const handleClosePopUp = () => {
        setOpen(false);
    };


    useEffect(() => {
        axios.get("http://localhost:8000/viewMyReservedFlights",
            {

            }).then(res => {



                console.log("xxxx");
                //console.log(res.data[1].ChosenFlight.DepartId.FlightNu)
                for (var i = 1; i < (res.data).length; i++) {
                    var x = {
                        // flightnumber:res.data[i].ChosenFlight.DepartId.FlightNu,

                        adults: res.data[i].ChosenFlight.DepartId.DepartPassengersAdults, children: res.data[i].ChosenFlight.DepartId.DepartPassengersChildren,
                        cabin: res.data[i].ChosenFlight.DepartCabin,
                        deptime: res.data[i].ChosenFlight.DepartId.DepartureTime, arrtime: res.data[i].ChosenFlight.DepartId.ArrivalTime,
                        from: res.data[i].ChosenFlight.DepartId.From, to: res.data[i].ChosenFlight.DepartId.To,
                        date: res.data[i].ChosenFlight.DepartId.FlightDate

                    }
                    var y = {
                        flightnumber:res.data[i].ChosenFlight.ReturnId.FlightNu,
                        adults: res.data[i].ChosenFlight.ReturnId.DepartPassengersAdults, children: res.data[i].ChosenFlight.ReturnId.DepartPassengersChildren,
                        cabin: res.data[i].ChosenFlight.ReturnCabin,
                        deptime: res.data[i].ChosenFlight.ReturnId.DepartureTime, arrtime: res.data[i].ChosenFlight.ReturnId.ArrivalTime,
                        from: res.data[i].ChosenFlight.ReturnId.From, to: res.data[i].ChosenFlight.ReturnId.To,
                        date: res.data[i].ChosenFlight.ReturnId.FlightDate
                    }
                    setDepFlight(depFlights.push(x))
                    setDepFlight(depFlights.push(y))
                    console.log(depFlights);
                }
                


      })
    })
        
        return (
            <div style={{ marginTop: -250 }}>
                {props.logout ? <App /> : (props.edit ? <EditProfile logout={props.logout} /> : (props.back ? props.component :

                    < div >
                        <Layout />

                        <TableContainer component={Paper} style={{ marginTop: -600, width: 1000, marginLeft: 250 }}>
                            <Table sx={{ minWidth: 300 }} aria-label="customized table" size='m'>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">Flight Number</StyledTableCell>
                                        <StyledTableCell align="center">Flight Date</StyledTableCell>

                                        <StyledTableCell align="center">Departure Airport</StyledTableCell>
                                        <StyledTableCell align="center">Arrival Airport</StyledTableCell>
                                        <StyledTableCell align="center">Departure Time</StyledTableCell>
                                        <StyledTableCell align="center">Arrival Time</StyledTableCell>
                                        
                                        <StyledTableCell align="center">Number of Adults</StyledTableCell>
                                        <StyledTableCell align="center">Number of Children</StyledTableCell>
                                        <StyledTableCell align="center">Cabin Type</StyledTableCell>
                                       
                                        <StyledTableCell align="center">&nbsp;</StyledTableCell>
                                        <StyledTableCell align="center">&nbsp;</StyledTableCell>

                                        <StyledTableCell align="center"></StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableRow> </TableRow>

                                {depFlights.map(u => {
                                    return <TableRow>
                                        <StyledTableCell align="center">{u.flightnumber}</StyledTableCell>
                                        <StyledTableCell align="center">{u.date}</StyledTableCell>
                                        <StyledTableCell align="center">{u.from} </StyledTableCell>
                                        <StyledTableCell align="center">{u.to}</StyledTableCell>
                                        <StyledTableCell align="center">{u.deptime}</StyledTableCell>
                                        <StyledTableCell align="center">{u.arrtime}</StyledTableCell>
                                        <StyledTableCell align="center">{u.adults}</StyledTableCell>
                                        <StyledTableCell align="center">{u.children}</StyledTableCell>
                                        <StyledTableCell align="center">{u.cabin}</StyledTableCell>
  


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
                ))}
            </div>
        )
    }

export default ViewResFlights
