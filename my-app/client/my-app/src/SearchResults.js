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
    
    

    const [clicked, setClicked] = useState(false);
    return (
        <div>
            <h1>Search Results</h1>

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
                        <StyledTableCell align="center">&nbsp;</StyledTableCell>
                        <StyledTableCell align="center"> <AddFlightForm />&nbsp;</StyledTableCell>
                        <StyledTableCell align="center"> &nbsp;</StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableRow> </TableRow>



               
            </Table>
        </TableContainer>
        </div>
    )
}

export default SearchResults
