import React from 'react'
import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';
import Layout from './Layout';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import SearchResultsu from './SearchResultsu';
import { FormControl } from 'react-bootstrap';
import { Radio, RadioGroup } from '@mui/material';
import { FormControlLabel, FormLabel } from '@material-ui/core';
import flight from "./images/flight.png"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function SearchBody(props) {
    const [flights, setFlights] = useState({ from: "", to: "", date: "", arr: "", dep: "", tdep: "", tarr: "", ec: "", bs: "", first: "", flightNum: "" })
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
    const [searchClicked, setSearchClicked] = useState(false);
    const [searchRes, setSearchRes] = useState(false);

    //buttom navigation
    const [bottomvalue, setBottomValue] = useState('recents');

    const handleChangeBNav = (event, newValue) => {
        setBottomValue(newValue);
    };






    useEffect(() => {
        if (!searchClicked) {
            return false;
        }
        if (searchClicked) {
            setFlights({ from: from, to: to, date: date, arr: arr, dep: dep, tdep: tdep, tarr: tarr, ec: ec, bs: bs, first: first, flightNum: flightNum, })
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
                    setSearchClicked(false)
                    setSearchRes(true);
                }

                )
            //  return()=>{setSearchClicked(false)};
        }


        //.catch(err => {console.log(err)});
    });
    //useEffect(() => {search()});
    return (
        <div style={{ marginTop: 70 }}>
            <div
                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url(${flight})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: window.screen.height, width: window.screen.width
                }}

            >


                {
                    searchRes ? <SearchResultsu flightlist={flightlist} type="Departure" /> : (props.back ? props.component : <div>

                        <div style={{ marginRight: 20 }}>
                            <h1 style={{ marginTop: 80, marginLeft: -10, color: "#112D4E", fontWeight: 'bold' }}>  Search your <br />Departure Flight</h1>

                            <form style={{ marginLeft: -400 }}>
                                <br />



                                <TextField style={{ marginTop: 100, marginLeft: 450, fontWeight: 'bold' }}

                                    required
                                    id="outlined-error"
                                    fontWeight="bold"

                                    label="Date"
                                    defaultValue=""
                                    onChange={event => setDate(event.target.value)}

                                />

                                <br />



                                <TextField


                                    style={{ marginTop: 30, marginLeft: 450 }}

                                    required
                                    id="outlined-error"
                                    label="Depature Airport"
                                    defaultValue=""
                                    onChange={event => setFrom(event.target.value)}
                                />



                                <br />
                                <br />
                                <TextField
                                    style={{ marginLeft: 450 }}
                                    required
                                    id="outlined-required"
                                    label="Arrival Airport"
                                    defaultValue=""
                                    onChange={event => setTo(event.target.value)}

                                />


                                <br />
                                <p style={{ color: 'black' }}>
                                    {/* <FormControl component="fieldset" style={{ marginLeft: 15 }}>
                                <FormLabel component="legend">Cabin</FormLabel>
                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={event => setCabin(event.target.value)}>
                                    <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
                                    <FormControlLabel value="Business" control={<Radio />} label="Business" />
                                    <FormControlLabel value="First" control={<Radio />} label="First" />

                                </RadioGroup>
                            </FormControl> */}
                                </p>


                                <br />



                                <br />

                                <Button variant="contained" style={{ position: 'center', marginLeft: 450, marginTop: -90 }} onClick={(event) => setSearchClicked(true)}>
                                    Search
                                </Button>
                                {/* <BottomNavigation sx={{ width: 1550, marginTop: 55, marginLeft: 4 }} value={bottomvalue} onChange={handleChangeBNav}>
                                    <BottomNavigationAction
                                        label="Recents"
                                        value="recents"
                                        icon={<RestoreIcon />}
                                    />
                                    <BottomNavigationAction
                                        label="Favorites"
                                        value="favorites"
                                        icon={<FavoriteIcon />}
                                    />
                                    <BottomNavigationAction
                                        label="Nearby"
                                        value="nearby"
                                        icon={<LocationOnIcon />}
                                    />
                                    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                                </BottomNavigation> */}

                            </form>


                        </div>
                    </div>

                    )}
            </div>
        </div>
    )
}

export default SearchBody