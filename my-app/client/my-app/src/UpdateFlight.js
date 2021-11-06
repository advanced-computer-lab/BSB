import React from 'react'
//import * as React from 'react';
import Table from 'react-bootstrap/Table';
import {useState,useEffect} from 'react';
import axios from 'axios';
//import DeleteIcon from '@mui/icons-material/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteFlight from './DeleteFlight';
//import AddFlightForm from './AddFlightForm';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//import * as React from 'react';
//import Table from '@mui/material/Table';
import { Button } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
//import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
function UpdateFlight(props) {
    const[clicked,setClicked]=useState(false);
    const[flightlist,setFlightlist]=useState([]);
  //const[clicked,setClicked]=useState(false);
  const[from,setFrom]=useState("");
  const[to,setTo]=useState("");
  const[cabin,setCabin]=useState("");
  const[seat,setSeat]=useState("");
  const[date,setDate]=useState("");
  useEffect(() => {
    axios.get("http://localhost:8000/showFlights").then(res=>{
      console.log("xxxx");
      setFlightlist(res.data);
})

//.catch(err => {console.log(err)});
  })
    if(clicked){
   // const[upclicked,setupClicked]=useState(false);
   return( <div>{flightlist.map( u => {return <TableRow key={u._id}><StyledTableCell align="center"><input type="text" id="from" name="from" defaultValue={u.from}  onChange={event =>setFrom(event.target.value)}/>
   </StyledTableCell><StyledTableCell align="center"> <input type="text" id="to" name="to" defaultValue={u.to} onChange={event => setTo(event.target.value)}/></StyledTableCell><StyledTableCell align="center"> <input type="text" id="date" name="date" onChange={event => setDate(event.target.value)} defaultValue={u.FlightDate}/></StyledTableCell><StyledTableCell align="center"><input type="text" id="date" name="date" onChange={event => setCabin(event.target.value)} defaultValue={u.Cabin}/></StyledTableCell >
   <StyledTableCell align="center"><input type="text" id="from" name="from" defaultValue={u.SeatsAvailableonFlight}  onChange={event =>setSeat(event.target.value)}/></StyledTableCell>  <StyledTableCell align="center"l><Button variant="outline-secondary">Show Map</Button>
   </StyledTableCell><StyledTableCell align="center"> <button variant="outline-primary" onClick={(event) => axios.post('http://localhost:8000/updateFlights', {
          From:from,
          To: to,
          FlightDate: date,
          Cabin: cabin,
          SeatsAvailableonFlight:seat
      })
      .then(function (response) {
        console.log("xxx");
      })}>Update</button> </StyledTableCell><StyledTableCell align="center"> 
    <Popup trigger={<Button variant="outline-danger"data-target="#myModal"data-toggle="modal"data-backdrop="static"data-keyboard="false">Delete</Button>} position="right center">
 <div>Are you sure you want to delete?(if no click anywhere)</div>
 <DeleteFlight idd={u._id}></DeleteFlight>
</Popup></StyledTableCell>
   </TableRow>})  }   
   </div>)}
   
    return(<div>
        {flightlist.map(u => {return <TableRow key={u._id}><StyledTableCell align="center">{u.From}
      </StyledTableCell><StyledTableCell align="center">{u.To}</StyledTableCell><StyledTableCell align="center">{u.FlightDate}</StyledTableCell><StyledTableCell align="center">{u.Cabin}</StyledTableCell >
      <StyledTableCell align="center">{u.SeatsAvailableonFlight}</StyledTableCell>  <StyledTableCell align="center"l><Button variant="outline-secondary">Show Map</Button>
      </StyledTableCell><StyledTableCell align="center"> <Button variant="outline-primary" onClick={(event) => setClicked(true)}>Update</Button></StyledTableCell><StyledTableCell align="center"> 
       <Popup trigger={<Button variant="outline-danger"data-target="#myModal"data-toggle="modal"data-backdrop="static"data-keyboard="false">Delete</Button>} position="right center">
    <div>Are you sure you want to delete?(if no click anywhere)</div>
    <DeleteFlight idd={u._id}></DeleteFlight>
  </Popup></StyledTableCell>
      </TableRow>})}</div>
    );
}

export default UpdateFlight;


