

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
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import { Button } from 'react-bootstrap';
import AddFlightForm from './AddFlightForm';
import UpdateFlight from './UpdateFlight';
import SearchBody from './SearchBody';
import Layout from './Layout';
import { useLocation, useNavigate } from 'react-router'
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { TextField } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Box } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#5c0931',
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
    const navigate = useNavigate();
    const location = useLocation()
    const flights = location.state
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
    // const flights = props.flights
    const [clicked, setClicked] = useState(false);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    useEffect(() => {

        if (flights.from === "") {
            delete flights.from;

        }
        if (flights.to === "") {
            delete flights.to;

        }
        if (flights.date === "") {
            delete flights.date;

        }
        if (flights.arr == "") {
            delete flights.arr;

        }
        if (flights.dep === "") {
            delete flights.dep;

        }
        if (flights.tarr === "") {
            delete flights.tarr;

        }
        if (flights.tdep === "") {
            delete flights.tdep;

        }
        if (flights.ec === "") {
            delete flights.ec;

        }
        if (flights.bs === "") {
            delete flights.bs;

        } if (flights.first === "") {
            delete flights.first;

        }
        if (flights.flightNum === "") {
            delete flights.flightNum;

        }


        axios.post('http://localhost:8000/searchFlights', {

            FlightNu: flights.flightNum,
            From: flights.from,
            To: flights.to,
            FlightDate: flights.date,

            ArrivalTime: flights.arr,
            DepartureTime: flights.dep,
            TerminalDeparture: flights.tdep,
            TerminalArrival: flights.tarr,
            NuofAvailableEconomySeats: flights.ec,
            NuofAvailableBuisnessSeats: flights.bs,
            NuofAvailableFirstSeats: flights.first

        })
            .then(function (response) {
                console.log("xxx");


                setFlightlist(response.data);
                console.log(flightlist);
                //   setSearchClicked(false)
                //   setSearchRes(true);
            }

            )
    }, [])
    return (<div style={{ marginTop: -500 }}>

        {clicked ? <SearchBody /> : (props.back ? props.component :
            <div>
                <div

                    id='intro-example'
                    className='p-5 text-center bg-image'
                    style={{
                        background: `url(https://www.smartertravel.com/wp-content/uploads/2016/11/shutterstock_321121055-1400x500.jpg)`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 500, width: window.screen.width,
                        marginTop: 1000, marginLeft: 20

                    }}


                >
                    <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#FFFFFF', marginTop: 180, marginLeft: -1100, fontSize: 35 }} >Available flights</h3>
                </div>
                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 30, marginLeft: 50, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} onClick={()=> navigate("/Admin")} href="#">Admin</Link> > Flights

                </Typography>

                <hr style={{ fontSize: 15, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />

                <TableContainer component={Paper} style={{
                    padding: 0,
                    margin: 0,
                    width: 920,

                    marginLeft: 70,
                    marginTop: 100,
                    opacity: 0.8

                }} >
                    <Table stickyHeader sx={{
                        width: 500,
                        height: 40
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


                                <StyledTableCell align="center">Departure Terminal</StyledTableCell>
                                <StyledTableCell align="center">Arrival Terminal</StyledTableCell>
                                <StyledTableCell align="center">Seats </StyledTableCell>
                                <StyledTableCell align="center"> Seats price</StyledTableCell>

                                <StyledTableCell align="center">&nbsp; </StyledTableCell>
                                <StyledTableCell align="center">&nbsp; </StyledTableCell>









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


                                <StyledTableCell align="center">{u.TerminalDeparture}</StyledTableCell>
                                <StyledTableCell align="center">{u.TerminalArrival}</StyledTableCell>
                                <StyledTableCell align="center"> E ({u.NuofAvailableEconomySeats}) B({u.NuofAvailableBuisnessSeats}) F({u.NuofAvailableFirstSeats})</StyledTableCell>
                                <StyledTableCell align="center"> E(${u.EcoPrice}) B(${u.BusPrice}) F(${u.FPrice})</StyledTableCell>
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
                                />
                                    <br />

                                    <Popup trigger={<IconButton variant="outline-danger" data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false"><DeleteIcon /></IconButton>} position="right center">
                                        <div>Are you sure you want to delete?(if no click anywhere)</div>
                                        <DeleteFlight idd={u._id}></DeleteFlight>
                                    </Popup>



                                </StyledTableCell>

                            </TableRow>

                        })}
                    </Table>
                </TableContainer>
                <br />
                <br />
                <Typography style={{ color: '#5c0931', fontSize: 20, fontFamily: 'Verdana', fontWeight: 'bold', marginLeft: 1050, marginTop: -350 }}>
                    Travel regulations and conditions
                </Typography>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ width: 400, marginLeft: 1050, marginTop: 40 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ color: '#5c0931', fontSize: 15, fontFamily: 'Verdana', fontWeight: 'bold' }}>
                            Flight regulations
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ color: '#5c0931' }}>

                            <ArrowForwardIcon style={{ fontWeight: 'bold' }} /> Flights should be 75% booked to be confirmed
                            <br />
                            <ArrowForwardIcon /> Flights should reach 80% of the total sales profit
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ width: 400, marginLeft: 1050, marginTop: 10 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ color: '#5c0931', fontSize: 15, fontFamily: 'Verdana', fontWeight: 'bold' }}>
                            Updating flights
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ color: '#5c0931' }}>

                            <ArrowForwardIcon style={{ fontWeight: 'bold' }} /> Flights should not be updated a week before its due date
                            <br />
                            <ArrowForwardIcon /> Flights should only be edited in case of emergencies
                            <br />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ width: 400, marginLeft: 1050, marginTop: 10 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ color: '#5c0931', fontSize: 15, fontFamily: 'Verdana', fontWeight: 'bold' }}>
                            Deleting flights
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ color: '#5c0931' }}>

                            <ArrowForwardIcon style={{ fontWeight: 'bold' }} /> Flights should not be canceled one week before their due date
                            <br />
                            <ArrowForwardIcon /> In case of canceling any flights less than one week before the departure date, customers should be fully funded
                            <br />
                            <ArrowForwardIcon /> In case of canceling any flights more than one week before the departure date, ticket amount should be debited into the customers account as Qmiles
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br />
                <br />
                <Card sx={{ display: 'flex' }} style={{ width: 920, height: 300, marginTop: 50, marginLeft: 70, backgroundColor: '#e0dfdf', opacity: 0.9 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold', marginLeft: 100 }}>
                                Check flight status

                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 110, color: ' #5c0931', width: 200 }} />
                            <TextField

                                style={{ marginTop: 30, marginLeft: 70, width: 300 }}
                                id="outlined-size-small"

                                label="Flight number"
                                defaultValue={props.date}
                                onChange={event => setDate(event.target.value)}
                            />
                            <Button variant="contained" style={{ position: 'center', marginLeft: -230,marginTop:100, width: 150, color: 'white', backgroundColor: ' #5c0931' }}>
                                Submit
                            </Button>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


                        </Box>
                    </Box>
                    <CardMedia
                        style={{ marginLeft: -300 }}
                        component="img"
                        sx={{ width: 500 }}
                        image="https://lh3.googleusercontent.com/proxy/x_22s25vRrE5sptwjNnz0KstxzNUiGXyKPabOqMLRDDFx4BmBgSaT6i27y-CpqPwKkKW-QXJdbdILTP0RjucJxcbN0SL-kM8zNR2jFzeG5hpUsDYrE7W-jb4afG23Yic3OZzUxjst30rmg"
                        alt="Memberchips"
                    />
                </Card>
                <br />
                <br />
                {/* <Button variant="primary" onClick={event => navigate("/Admin")} style={{ marginLeft: 730, marginTop: 100,color:'white',backgroundColor:'#5c0931' }}>Done</Button> */}

            </div>)}
    </div>)
}

export default SearchResults
