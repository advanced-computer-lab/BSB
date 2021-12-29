import React from 'react'
//import { useLocation } from 'react-router'
import planeOutline from './images/planeOutline.jpeg'
import { Image } from 'react-bootstrap'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router'
import { Snackbar, Alert } from '@mui/material'
import FlightIcon from '@mui/icons-material/Flight';
import AirplanemodeInactive from '@mui/icons-material/AirplanemodeInactive'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import flightpic from './images/flightpic.jpg'
import { Paper } from '@mui/material'
import { Typography } from '@mui/material'

export default function ReturnSeats() {
    // const id = "6185ad7b250c46b0fd2322ea";
    const cabinClass = "Economy";
    const [eco, setEco] = useState([]);
    const [bus, setBus] = useState([]);
    const [fst, setFst] = useState([]);
    const [chosen, setChosen] = useState([]);
    const location = useLocation()
    const { depFlight, retFlight, cab, adult, child, departureSeats} = location.state
    const id= localStorage.getItem("id");
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    function addSeat(u) {
        setChosen(chosen.concat([u]));
        console.log(chosen);
    }
    function removeSeat(u) {
        setChosen(chosen.filter(function (value, index, arr) {
            return value != u;
        }));
        console.log(chosen);
    }


    function clickE(event, u) {

        console.log(event);
        if (!chosen.includes(u)) {
            event.currentTarget.style.backgroundColor = "white";
            event.currentTarget.style.color = "blue";
            addSeat(u);
        }
        else {
            event.currentTarget.style.backgroundColor = "blue";
            event.currentTarget.style.color = "white";
            removeSeat(u)
        }
    }
    function clickB(event, u) {
        if (!chosen.includes(u)) {
            event.currentTarget.style.backgroundColor = "white";
            event.currentTarget.style.color = "#5c0931";
            addSeat(u);
        }
        else {
            event.currentTarget.style.backgroundColor = "#5c0931";
            event.currentTarget.style.color = "white";
            removeSeat(u);
        }
    }
    function clickF(event, u) {
        if (!chosen.includes(u)) {
            event.currentTarget.style.backgroundColor = "white";
            event.currentTarget.style.color = "gold";
            addSeat(u);
        }
        else {
            event.currentTarget.style.backgroundColor = "#5c0931";
            event.currentTarget.style.color = "gold";
            removeSeat(u);
        }
    }
    useEffect(() => {
        axios.post('http://localhost:8000/flightSeatsInfo', {
            _id: retFlight._id,
            cabin: cab
        })
            .then(function (response) {
                console.log("xxx");

                setEco(response.data.Economy);
                setBus(response.data.Business);
                setFst(response.data.First);

            }

            )
    }, []);

    return (
        <div>

            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url(${planeOutline})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 1500, width: window.screen.width,
                    marginTop: 0,

                }}



            >
                <Paper elevation={4} style={{ backgroundColor: '#e0dfdf', height: 100, width: 700, marginLeft: 400, marginTop: -30 }}>


                    <h1 style={{ color: '#5c0931', marginLeft: 20, fontWeight: 'bold', fontFamily: 'Verdana', fontSize: 35 }}>Choose your return flight seats</h1>

                </Paper>

                <div style={{ marginTop: 150, marginLeft: 200, width: "450px" }}>
                    {eco.map(u => {
                        return <Button onClick={(e) => { addSeat(u.seat); clickE(e, u.seat) }} disabled={u.res} variant="outlined" size="small" style={{ display: " inline-block", transform: "scale(0.7)", color: "white", backgroundColor: "blue" }}>{u.seat}</Button>
                    })}
                </div>
                <div style={{ marginLeft: 670, width: "320px", marginTop: -100 }}>
                    {bus.map(u => {
                        return <Button onClick={(e) => { addSeat(u.seat); clickB(e, u.seat) }} disabled={u.res} variant="outlined" size="small" style={{ display: " inline-block", transform: "scale(0.7)", color: "white", backgroundColor: "#5c0931" }}>{u.seat}</Button>
                    })}
                </div>
                <div style={{ width: "200px", marginLeft: 1000, marginTop: -60 }}>
                    {fst.map(u => {
                        return <Button onClick={(e) => { addSeat(u.seat); clickF(e, u.seat) }} disabled={u.res} variant="outlined" size="small" style={{ display: " inline-block", transform: "scale(0.7)", color: "#5c0931", backgroundColor: "gold" }}>{u.seat}</Button>
                    })}
                </div>
            </div>

            <Paper elevation={4} style={{ backgroundColor: '#e0dfdf', height: 100, width: 200, marginLeft: 1200, marginTop: -1000 }} >

                <Typography style={{ fontFamily: 'Verdana', fontSize: 10, color: '#5c0931', fontWeight: 'bold' }}>
                    First Class
                    <Button variant="outlined" size="small" style={{ display: " inline-block", color: "white", backgroundColor: "gold", width: 5, height: 15, marginLeft: 10 }}></Button>
                </Typography>

                <br />
                <Typography style={{ fontFamily: 'Verdana', fontSize: 10, color: '#5c0931', fontWeight: 'bold' }}>
                    Business class
                    <Button variant="outlined" size="small" style={{ display: " inline-block", color: "white", backgroundColor: "#5c0931", width: 5, height: 15, marginLeft: 10 }}></Button>
                </Typography>

                <br />
                <Typography style={{ fontFamily: 'Verdana', fontSize: 10, color: '#5c0931', fontWeight: 'bold' }}>
                    Economy
                    <Button variant="outlined" size="small" style={{ display: " inline-block", color: "white", backgroundColor: "blue", width: 5, height: 15, marginLeft: 10 }}></Button>

                </Typography>
            </Paper>

            <Button variant="outlined" style={{ color: "white", backgroundColor: "#5c0931", marginLeft: 1200, marginTop: 50 }} onClick={() => {
                if (chosen.length == (adult + child)) {
                    navigate("/Summary", { state: { depFlight: depFlight, retFlight: retFlight, cab: cab, adult: adult, child: child, departureSeats: departureSeats, returnSeats: chosen,id:id} });
                }
                else {
                    handleClick();
                }
            }}>Proceed to payment!</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    You must choose seats equal to selected number of passengers!
                </Alert>
            </Snackbar>
        </div>
    )
}


