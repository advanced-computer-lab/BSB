import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';
import {useState,useEffect} from 'react';
import axios from 'axios';
//import DeleteIcon from '@mui/icons-material/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteFlight from './DeleteFlight';
//import AddFlightForm from './AddFlightForm';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import * as React from 'react';
//import Table from '@mui/material/Table';

import { styled } from '@mui/material/styles';
//import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//import Table from '@mui/material/Table';

//import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';
import AddFlightForm  from './AddFlightForm';
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
function App() {
  const[flightlist,setFlightlist]=useState([]);
  //const[clicked,setClicked]=useState(false);
  
  useEffect(() => {
    axios.get("http://localhost:8000/showFlights").then(res=>{
      console.log("xxxx");
      setFlightlist(res.data);
})

//.catch(err => {console.log(err)});
  })

  //axios.get('mongodb+srv://Sprint1:123@cluster0.mypjh.mongodb.net/Flights?retryWrites=true&w=majority' ).then(res=>(setFlightlist(res.data)));
 
    return (
      <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">From</StyledTableCell>
            <StyledTableCell align="center">To</StyledTableCell>
            <StyledTableCell align="center">Flight Date&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Cabin&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Seats &nbsp;</StyledTableCell>
            <StyledTableCell align="center"> &nbsp;</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableRow> </TableRow>
       
       
        
      {flightlist.map(u => {return <TableRow key={u._id}><StyledTableCell align="center">{u.From}
      </StyledTableCell><StyledTableCell align="center">{u.To}</StyledTableCell><StyledTableCell align="center">{u.FlightDate}</StyledTableCell><StyledTableCell align="center">{u.Cabin}</StyledTableCell >
      <StyledTableCell align="center">{u.SeatsAvailableonFlight}</StyledTableCell>  <StyledTableCell align="center"l><Button variant="outline-secondary">Show Map</Button>
      </StyledTableCell><StyledTableCell align="center"> <Button variant="outline-primary">Update</Button></StyledTableCell><StyledTableCell align="center"> 
       <Popup trigger={<Button variant="outline-danger"data-target="#myModal"data-toggle="modal"data-backdrop="static"data-keyboard="false">Delete</Button>} position="right center">
    <div>Are you sure you want to delete?(if no click anywhere)</div>
    <DeleteFlight idd={u._id}></DeleteFlight>
  </Popup></StyledTableCell>
      </TableRow>})}
       </Table>
   </TableContainer>
   
    <AddFlightForm />
    <UpdateFlight/>
    
     
    
  </div>  );
  
}

export default App;
