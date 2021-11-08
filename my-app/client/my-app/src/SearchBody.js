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
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
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


function SearchBody(props) {
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
    const [flightlist, setFlightlist] = useState([]);
    const [clicked, setClicked] = useState(false);
   // const [viewOutputs, setViewOutputs] = useState(false);
    useEffect(() => {
    
            console.log("searc1h");
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
              console.log("search");
              setFlightlist(response.data)
            })
          
          setClicked(false);
          //setViewOutputs(!props.viewOutputs);
    
        
      });

   {
    
       
           return (
               <div>
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
                Arrival Terminal:
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
                <>
          <Button variant="outline-primary" onClick={handleShow}> Search  </Button>

          <Modal show={show} onHide={handleClose} animation={false} size='xl'>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            
            <Modal.Body> 
                
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
              
             


              <StyledTableCell align="center"> &nbsp;</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
              <TableContainer>
                  <Table>
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
              
              <StyledTableCell align="center" > </StyledTableCell>

              
              <StyledTableCell align="center">
                
              </StyledTableCell>
            </TableRow>
          })}
                  </Table>

              </TableContainer>
            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
        </>

              </form>

               </div>

           )

       }
       
   }


export default SearchBody
