import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Reservation from './components/Reservation';
import dateFormat from 'dateformat';
import { useNavigate, useLocation, BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

export default function ReservedFlights() {
    
   
    const [Flights, setFlights] = useState([]);
    const user = "61abb8b7dda93117406ba763"
    let navigate=useNavigate();
    useEffect(() => {
        axios.post('http://localhost:8000/viewUsersReservations', {
            user: user
        }).then(res => {
            console.log(res.data)
            console.log("xxxx");
            setFlights(res.data)
            console.log(res.data);
        })
    },[])
    return (
        <div>
            <h1 style={{ color: ' #5c0931', marginLeft: 550}}>Your Reservations</h1>
                {Flights.map((u) => {
                    return <Reservation
                    res={u}
                    _id={u._id}
                    departure={u.DepartId} returnFlight ={u.ReturnId} cost={u.Total}
                    departureDate ={dateFormat(u.DepartId.FlightDate, "dd/mm/yyyy")}
                    returnDate = {dateFormat(u.ReturnId.FlightDate, "dd/mm/yyyy")}
                    DepartPrice = {u.DepartPrice}
                    DepartPriceTotal={u.DepartPriceTotal}
                    ReturnPrice={u.ReturnPrice}
                    ReturnPriceTotal ={u.ReturnPriceTotal}
                    DepartSeats= {u.DepartSeats} 
                    returnSeats = {u.ReturnSeats} ReturnPassengersChild={u.ReturnPassengersChild} 
                     ReturnPassengersAdult={u.ReturnPassengersAdult} 
                    ReturnCabin={u.ReturnCabin} DepartCabin={u.DepartCabin} 
                    DepartPassengersAdult={u.DepartPassengersAdult}
                    DepartPassengersChild={u.DepartPassengersChild}
                    /> 
                    
                })}
        
        </div>
    )
}
