import React from 'react'
import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';



function SearchBody() {
  const [flights,setFlights]= useState({from : "", to:"", date: "",arr: "",dep: "",tdep:"",tarr:"",ec: "",bs:"",first:"",flightNum: ""})
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
 useEffect(() => {
  if(!searchClicked) {
    return false;
 }
    if(searchClicked)
    {
      setFlights({from:from,to:to,date:date,arr:arr,dep:dep,tdep:tdep,tarr:tarr,ec:ec,bs:bs,first:first,flightNum:flightNum,})
      if(flights.from===""){
        delete flights.from;

      }
      if(flights.to===""){
        delete flights.to;
        
      }
      if(flights.date===""){
        delete flights.date;
        
      }
      if(flights.arr==""){
        delete flights.arr;
        
      }
      if(flights.dep===""){
        delete flights.dep;
        
      }
      if(flights.tarr===""){
        delete flights.tarr;
        
      }
      if(flights.tdep===""){
        delete flights.tdep;
        
      }
      if(flights.ec===""){
        delete flights.ec;
        
      }
      if(flights.bs===""){
        delete flights.bs;
        
      }if(flights.first===""){
        delete flights.first;
        
      }
      if(flights.flightNum===""){
        delete flights.flightNum;
        
      }
     
      axios.post('http://localhost:8000/searchFlights', {
      
        FlightNu:flights.flightNum, 
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
    <div>

    {
      searchRes?  <SearchResults flightlist={flightlist}/> :<div>
        
        
     <form >
    Flight Number:
            <br />

            <input type="text" id="from" name="FlightNo" onChange={event => setFlightNum( event.target.value)} />
            <br />
            Date of Arrival:
            <br />

            <input type="text" id="from" name="dateA" onChange={event => setDate(event.target.value)} />
            <br />
            
     From:
            <br />

            <input type="text" id="from" name="from" onChange={event => setFrom(event.target.value)} />
            <br />

            To:
            <br />

            <input type="text" id="from" name="to" onChange={event => setTo(event.target.value)} />
            <br />
            Arrival Terminal:
            <br />

            <input type="text" id="from" name="Arrival" onChange={event => setTarr(event.target.value)} />
            <br />
            Departure Terminal:
            <br />

            <input type="text" id="from" name="Departure"onChange={event => setTdep(event.target.value)} />
            <br />
            Arrival Time:
            <br />

            <input type="text" id="from" name="ArrivalT" onChange={event => setArr(event.target.value)} />
            <br />
            Departure Time:
            <br />

            <input type="text" id="from" name="DepartureT" onChange={event => setDep( event.target.value)} />
            <br />
            Number of  Economy Seats:
            <br />

            <input type="text" id="from" name="noE" onChange={event => setEc(event.target.value)}/>
            <br />
            Number of  Business Seats:
            <br />

            <input type="text" id="from" name="noB" onChange={event => setBs( event.target.value)}/>
            <br />
            Number of  First Class Seats:
            <br />

            <input type="text" id="from" name="noF" onChange={event => setFirst(event.target.value)} />
            <br />

            <button type="button"  onClick={event =>setSearchClicked(true)}>Search</button>

          
     </form>

    </div>
    
  }
  </div>
  )
}

export default SearchBody