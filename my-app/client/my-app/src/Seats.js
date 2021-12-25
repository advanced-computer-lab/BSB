import React from 'react'
//import { useLocation } from 'react-router'
import plane from './images/planeOutline.jpeg'
import { Image } from 'react-bootstrap'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router'
import { Snackbar, Alert } from '@mui/material'
//import ReturnSeats from './ReturnSeats'

export default function Seats() {
    const location = useLocation()
    const { depFlight, retFlight, cab, adult, child } = location.state

    const [eco, setEco] = useState([]);
    const [bus, setBus] = useState([]);
    const [fst, setFst] = useState([]);
    const [chosen, setChosen] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
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
     console.log(depFlight._id)
     console.log(cab)
    useEffect(() => {
        axios.post('http://localhost:8000/flightSeatsInfo', {
            _id: depFlight._id,
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
            <h1 style={{ color: ' #5c0931', marginLeft: 500, marginTop: "330px",marginTop:100 }}>Choose your departure flight seats</h1>;
            <div style={{

                background: `url(${plane})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: window.screen.height, width: window.screen.width
            }}>
                <div style={{ paddingTop: "200px", marginLeft: "330px", width: "450px" }}>
                    {eco.map(u => {
                        return <Button id={u.seat} onClick={(e) => { addSeat(u.seat); clickE(e, u.seat) }} disabled={u.res} variant="outlined" size="small" style={{ opacity: u.res ? 0.5 : 1, display: " inline-block", transform: "scale(0.7)", color: "white", backgroundColor: "blue" }}>{u.seat}</Button>
                    })}
                </div>
                <div style={{ marginLeft: "780px", width: "320px", marginTop: "-200px" }}>
                    {bus.map(u => {
                        return <Button id={u.seat} onClick={(e) => { addSeat(u.seat); clickB(e, u.seat) }} disabled={u.res} variant="outlined" size="small" style={{ opacity: u.res ? 0.5 : 1, display: " inline-block", transform: "scale(0.7)", color: "white", backgroundColor: "#5c0931" }}>{u.seat}</Button>
                    })}
                </div>
                <div style={{ width: "200px", marginLeft: "1100px", marginTop: "-185px" }}>
                    {fst.map(u => {
                        return <Button id={u.seat} onClick={(e) => { addSeat(u.seat); clickF(e, u.seat) }} disabled={u.res} variant="outlined" size="small" style={{ opacity: u.res ? 0.5 : 1, display: " inline-block", transform: "scale(0.7)", color: "#5c0931", backgroundColor: "gold" }}>{u.seat}</Button>
                    })}
                </div>

            </div>
            <Button variant="outlined" style={{ color: "white", backgroundColor: "#5c0931", marginLeft: "1200px", marginTop: "-800px" }} onClick={() => {
                if (chosen.length == (adult + child)) {
                    navigate("/returnSeats", { state: { depFlight: depFlight, retFlight: retFlight, cab: cab, adult: adult, child: child, departureSeats: chosen } });
                    console.log(chosen);
                }
                else {
                    handleClick();
                }
            }}>Return flight seats</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    You must choose seats equal to selected number of passengers!
                </Alert>
            </Snackbar>
        </div>
    )
}


