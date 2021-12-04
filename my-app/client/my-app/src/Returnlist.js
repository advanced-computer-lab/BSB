import React from 'react'
import { useState, useEffect } from 'react';
import  { Component } from 'react';
import ReactDOM from "react-dom";
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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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


function Returnlist() {

    const [flightNum, setFlightNum] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [dep, setDep] = useState("");
    const [arr, setArr] = useState("");
    const [tripdur, settripdur] = useState("");
    const [price, setprice] = useState("");
    const [flightlist, setFlightlist] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8000/showFlights").then(res => {
          console.log("xxxx");
          setFlightlist(res.data);
      })


  })

    return (
     
         < div>
           <Typography gutterBottom component="div">
        Please select a return flight
           </Typography>
         <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table" size='m'>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Flight Number</StyledTableCell>
              <StyledTableCell align="center">Departure Airport</StyledTableCell>
              <StyledTableCell align="center">Arrival Airport</StyledTableCell>
              <StyledTableCell align="center">Arrival Time</StyledTableCell>
              <StyledTableCell align="center">Departure Time</StyledTableCell>
              <StyledTableCell align="center">Trip duration</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
              


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
              <StyledTableCell align="center">{u.ArrivalTime}</StyledTableCell>
              <StyledTableCell align="center">{u.DepartureTime}</StyledTableCell>
              <StyledTableCell align="center">{u.Tripduration}</StyledTableCell>
              <StyledTableCell align="center">{u.Price}</StyledTableCell>
              <StyledTableCell align="center" ><ViewDetails></ViewDetails> </StyledTableCell>
              

</TableRow>
                    })}
                </Table>
            </TableContainer>


            
        </div>
    )
}



export default Returnlist;