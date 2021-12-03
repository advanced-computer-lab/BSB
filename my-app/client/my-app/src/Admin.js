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
import { Button, Card } from 'react-bootstrap';
import AddFlightForm from './AddFlightForm';
import UpdateFlight from './UpdateFlight';
import Search from './Search';
import SearchBody from './SearchBody';
import ShowMap from './ShowMap';
import Logout from './Logout';
import App from './App';


import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import FlightIcon from '@mui/icons-material/Flight';
import { Stack } from 'react-bootstrap';
import Top from './Top';
import Layout from './Layout';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 6,
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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Admin() {
  const [flightlist, setFlightlist] = useState([]);
  const [logoutClicked, setLogoutClicked] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/showFlights").then(res => {
      console.log("xxxx");
      setFlightlist(res.data);
    })


  })
  const [openList, setOpenList] = useState(true);

  const handleClickList = () => {
    setOpenList(!openList);
  };



  return (

    <div>
     

    
     
      <Box>


        {searchClicked ? <SearchBody /> :
          <div style={{
            position: 'center',
            width: 1000,
            height: 500,
            right: 900,
            top: 250
          }} backgroundColor="white">



            <TableContainer component={Paper} style={{
              padding: 0,
              margin: 0,
              width: 800,
              height: 500,
              marginLeft:-200

            }} >
              <Table stickyHeader sx={{
                width: 500,
                height: 300
              }}
                aria-label="customized table" size="small"
              >
                <TableHead position="fixed" >
                  <TableRow>
                    <StyledTableCell align="center" size="small">Flight Number</StyledTableCell>
                    <StyledTableCell align="center" size="small">Departure Airport</StyledTableCell>
                    <StyledTableCell align="center">Arrival Airport</StyledTableCell>
                    <StyledTableCell align="center">Flight Date&nbsp; </StyledTableCell>
                    <StyledTableCell align="center">Departure Time</StyledTableCell>
                    <StyledTableCell align="center">Arrival time&nbsp; </StyledTableCell>
                    <StyledTableCell align="center">Trip Duration&nbsp; </StyledTableCell>

                    <StyledTableCell align="center">Departure Terminal</StyledTableCell>
                    <StyledTableCell align="center">Arrival Terminal</StyledTableCell>
                    <StyledTableCell align="center">Economy seats </StyledTableCell>
                    <StyledTableCell align="center">Economy seats price</StyledTableCell>
                    <StyledTableCell align="center">Business seats &nbsp; </StyledTableCell>
                    <StyledTableCell align="center">Business seats price &nbsp; </StyledTableCell>
                    <StyledTableCell align="center">First seats </StyledTableCell>
                    <StyledTableCell align="center">First seats price </StyledTableCell>
                    <StyledTableCell align="center">&nbsp; </StyledTableCell>
                    <StyledTableCell align="center">&nbsp; </StyledTableCell>
                    <StyledTableCell align="center">&nbsp; </StyledTableCell>
                    <StyledTableCell align="center">&nbsp; </StyledTableCell>
                    <StyledTableCell align="center">&nbsp; </StyledTableCell>
                    <StyledTableCell align="center">&nbsp; </StyledTableCell>




                    <StyledTableCell align="center"> &nbsp; </StyledTableCell>
                    
                  </TableRow>
                </TableHead>
                <TableRow> </TableRow>



                {flightlist.map(u => {
                  return <TableRow key={u._id}>
                    <StyledTableCell align="center" size="small">{u.FlightNu}</StyledTableCell>
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
                    <StyledTableCell align="center" size='small'><ShowMap></ShowMap> </StyledTableCell>

                    <StyledTableCell align="center"> <UpdateFlight idd={u._id} from={u.From} to={u.To}
                      flightNum={u.FlightNu}
                      date={u.FlightDate}
                      arr={u.ArrivalTime}
                      dep={u.DepartureTime}
                      tdep={u.TerminalDeparture}
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
            <Paper sx={{ p: 2, margin: 'auto', maxWidth: 300, flexGrow: 1, marginLeft: 90, marginTop: -60 }}>
              <Grid container spacing={2} sx={{ height: 200 }}>

                <Grid item xs={12} sm container >
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>

                    </Grid>
                    <Grid item>
                      <Stack spacing={2} sx={{ width: '100%' }}>
                        <AddFlightForm />
                        <hr />
                        <ListItemButton onClick={(event) => setSearchClicked(true)}>
                          <ListItemIcon>
                            <SearchIcon />
                          </ListItemIcon>
                          <ListItemText primary="Search Flights" />
                        </ListItemButton>



                      </Stack>



                    </Grid>
                  </Grid>
                  <Grid item>

                  </Grid>
                </Grid>
              </Grid>
            </Paper>

















          </div>
        }
      </Box>
    </div >);

}

export default Admin;