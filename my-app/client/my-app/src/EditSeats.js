import React from 'react'
//import { useLocation } from 'react-router'
import plane from './images/planeOutline.png'
import { Image } from 'react-bootstrap'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { Snackbar, Alert } from '@mui/material'
import ReservedFlights from './ReservedFlights'
export default function EditSeats() {
    const id = "6185ad7b250c46b0fd2322ea";
    const cabinClass = "Economy";
    const [eco, setEco] = useState([]);
    const [bus, setBus] = useState([]);
    const [fst, setFst] = useState([]);
    const location = useLocation()
    const { flight, seats, cab, reservation, dep, adult, child } = location.state
    const [chosen, setChosen] = useState(seats);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    function addSeat(u) {
        if(chosen.includes(u)){
            removeSeat(u);
        }
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
    function updateSeating() {
        axios.post('http://localhost:8000/editSeating', {
            oldseats:seats,
            newSeats:chosen,
            FlightID:flight._id,
            cabin:cab
        }).then(function (response) {
            console.log(" seats db ok");
        })
        console.log(reservation);
        if (dep) {
            axios.post('http://localhost:8000/editReservation', {
                _id: reservation,
                DepartSeats: chosen
            }).then(function (response) {
                console.log("ok");
            })
    
    }
    else{
        axios.post('http://localhost:8000/editReservation', {
            _id: reservation,
            returnSeats: chosen
        }).then(function (response) {
            console.log("ok");
        })
    }
    }
    
    useEffect(() => {
        axios.post('http://localhost:8000/flightSeatsInfo', {
            _id: flight._id,
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
            <h1 style={{ color: ' #5c0931', marginLeft: 500, marginTop: "330px" }}>Choose your new seats</h1>;
            <div style={{
                background: `url(${plane})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: window.screen.height, width: window.screen.width
            }}>

                <div style={{ paddingTop: "200px", marginLeft: "330px", width: "450px" }}>
                    {eco.map(u => {
                        return <Button onClick={(e) => {  clickE(e, u.seat) }} disabled={ seats.includes(u.seat)?false: u.res} variant="outlined" size="small" style={{ display: " inline-block", transform: "scale(0.7)", color:seats.includes(u.seat)? "#5c0931":"white", backgroundColor: seats.includes(u.seat)? "white":"blue" }}>{u.seat}</Button>
                    })}
                </div>
                <div style={{ marginLeft: "780px", width: "320px", marginTop: "-200px" }}>
                    {bus.map(u => {
                        return <Button onClick={(e) => {clickB(e, u.seat) }} disabled={ seats.includes(u.seat)?false: u.res}variant="outlined" size="small" style={{ display: " inline-block", transform: "scale(0.7)", color: seats.includes(u.seat)? "#5c0931":"white", backgroundColor:seats.includes(u.seat)?"white": "#5c0931" }}>{u.seat}</Button>
                    })}
                </div>
                <div style={{ width: "200px", marginLeft: "1100px", marginTop: "-185px" }}>
                    {fst.map(u => {
                        return <Button onClick={(e) => {clickF(e, u.seat) }} disabled={ seats.includes(u.seat)?false: u.res}variant="outlined" size="small" style={{ display: " inline-block", transform: "scale(0.7)", color: "#5c0931", backgroundColor: seats.includes(u.seat)? "white":"gold" }}>{u.seat}</Button>
                    })}
                </div>

            </div>
            <Button variant="outlined" style={{ color: "white", backgroundColor: "#5c0931", marginLeft: "1200px", marginTop: "-800px" }} onClick={() => {
                if (chosen.length == (adult + child)) {
                    updateSeating();
                    navigate("/reserved");
                }
                else {
                    handleClick();
                }
            }}>Confirm</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    You must choose seats equal to selected number of passengers!
                </Alert>
            </Snackbar>
        </div>
    )
}


