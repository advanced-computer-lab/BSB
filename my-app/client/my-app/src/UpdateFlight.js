import React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import { Button } from 'react-bootstrap';
import axios from 'axios';

function UpdateFlight(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [from, setFrom] = useState(props.from);
  const [to, setTo] = useState(props.to);

  const [date, setDate] = useState(props.date);
  const [arr, setArr] = useState(props.arr);
  const [dep, setDep] = useState(props.dep);
  const [tdep, setTdep] = useState(props.tdep);
  const [tarr, setTarr] = useState(props.tarr);
  const [ec, setEc] = useState(props.ec);
  const [bs, setBs] = useState(props.bs);
  const [first, setFirst] = useState(props.first);






  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      axios.post('http://localhost:8000/updateFlights', {
        _id: props.idd,
        From: from,
        To: to,
        FlightDate: date,

        ArrivalTime: arr,
        DepartureTime: dep,
        TerminalDeparture: tdep,
        TerminalArrival: tarr,
        NuofAvailableEconomySeats: ec,
        NuofAvailableBuisnessSeats: bs,
        NuofAvailableFirstSeats: first
      })
        .then(function (response) {
          console.log("xxx");
        })
      setShow(false);
      setClicked(false);
    }

    //.catch(err => {console.log(err)});
  })
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}> Update</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Flight Number:{props.flightNum}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div border="solid">




          <form >

            From: {props.from}
            <br />

            <input type="text" id="from" name="from" defaultValue={props.from} onChange={event => setFrom(event.target.value)} />
            <br />
            To:
            <br />
            <input type="text" id="to" name="to" defaultValue={props.to} onChange={event => setTo(event.target.value)} />
            <br />
            Date:
            <br />
            <input type="date" id="date" name="date" defaultValue={props.date} onChange={event => setDate(event.target.value)} />
            <br />

            ArrivalTime:
            <br />
            <input type="text" id="cabin" name="cabin" defaultValue={props.arr} onChange={event => setArr(event.target.value)} />

            <br />
            Departure Time:
            <br />
            <input type="text" id="seat" name="seat" defaultValue={props.dep} onChange={event => setDep(event.target.value)} />
            <br />
            Departure Terminal:
            <br />
            <input type="number" id="cabin" name="cabin" defaultValue={props.tdep} onChange={event => setTdep(event.target.value)} />

            <br />
            Arrival Teraminal:
            <br />
            <input type="number" id="cabin" name="cabin" defaultValue={props.tarr} onChange={event => setTarr(event.target.value)} />

            <br />
            Number of economy seats:
            <br />
            <input type="number" id="cabin" name="cabin" defaultValue={props.ec} onChange={event => setEc(event.target.value)} />

            <br />
            Number of Buisness seats:
            <br />
            <input type="number" id="cabin" name="cabin" defaultValue={props.bs} onChange={event => setBs(event.target.value)} />

            <br />
            Number of First seats:
            <br />
            <input type="number" id="cabin" name="cabin" defaultValue={props.first} onChange={event => setFirst(event.target.value)} />

            <br />

            <br />

          </form>
        </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => setClicked(true)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateFlight
