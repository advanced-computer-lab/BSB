import React from 'react'
import {useState,useEffect} from 'react';
//import {useState,useEffect} from 'react';
import axios from 'axios'
function AddFlightForm(props) {
    const[clicked,setClicked]=useState(false);
    const[from,setFrom]=useState("");
    const[to,setTo]=useState("");
    const[cabin,setCabin]=useState("");
    const[seat,setSeat]=useState("");
    const[date,setDate]=useState("");
    if (clicked){
    return (
        <div border="solid">
           

        
    
         <form onSubmit={(event) => axios.post('http://localhost:8000/addFlight', {
          From:from,
          To: to,
          FlightDate: date,
          Cabin: cabin,
          SeatsAvailableonFlight:seat
      })
      .then(function (response) {
        console.log("xxx");
      })}>
               
           From:
           <br/>
           
            <input type="text" id="from" name="from"   onChange={event =>setFrom(event.target.value)}/>
            <br/>
           To:
           <br/>
            <input type="text" id="to" name="to" onChange={event => setTo(event.target.value)}/>
            <br/>
        Date:
        <br/>
        <input type="text" id="date" name="date" onChange={event => setDate(event.target.value)}/>
        <br/>
           
        Cabin:
        <br/>
        <input type="text" id="cabin" name="cabin" onChange={event => setCabin(event.target.value)}/>
          
        <br/>
       seats available:
       <br/>
        <input type="text" id="seat" name="seat" onChange={event => setSeat(event.target.value)}/>
        <br/>
        <br/>
        <input type="submit" value="+ADD"/> 
           </form>
        </div>
    )}
    return  <button onClick={(event) => setClicked(true)}>Add Flight</button>
}

export default AddFlightForm
