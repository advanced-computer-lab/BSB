import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { FaPlaneDeparture } from "react-icons/fa"
import { FaPlaneArrival } from "react-icons/fa"
import { IconContext } from "react-icons"
import flight from "./images/flight.png"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ImArrowRight2 } from "react-icons/im";
// import {ImArrowRight} from "react-icons/Im"
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import Alert from "@mui/material/Alert";

import Flightitinerary from "./Flightitinerary";


function Summary(props) {
   const [info, setInfo] = useState([{}]);
  // const [flight1, setFlight1] = useState({ flightDate: "", from: "", to: "", arr: "", dep: "", passA: "", ChildA: "", price: "", cabin: "", seat: [], total: "" });
  // const [flight2, setFlight2] = useState({ flightDate: "", from: "", to: "", arr: "", dep: "", passA: "", ChildA: "", price: "", cabin: "", seat: [], total: "" });
  const [clicked, setClicked] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const handleClickSB = () => {
    setOpenSnackBar(true);
  }

  const handleCloseSB = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  }
  
  console.log(props.flightA)
  return (<div>
    {confirmed? <Flightitinerary flightA={props.flightA} flightB={props.flightB} cabin={props.cabin} seatsA={props.seatsA} seatsB={props.seatsB} /> : <div style={{ marginTop: 200 }}>
      {/* <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{
          background: `url(${flight})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: window.screen.height, width: window.screen.width
        }}

      > */}
      <div>


        {/* <Card
        style={{
          width: 1500,
          height: 70,
          backgroundColor: "#EBECF0"
        }}
      >
        <CardContent> */}
        <Typography
          style={{ fontSize: 30, fontWeight: "bold" }}
          color="textPrimary"
          align="left"
          gutterBottom
        >
          YOUR BOOKING
        </Typography>

        {/* </CardContent>
      </Card> */}
        <hr />
        <br />
        <Card
          style={{
            width: 1270,
            height: 70,
            backgroundColor: "#EBECF0", opacity: 0.7
          }}
        >
          <CardContent>
            <Typography
              style={{ fontWeight: "bold" }}
              color="textPrimary"
              align="left"
              variant="h4"
              component="h2"
              gutterBottom
            >
              BSB Airways
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Card
              style={{
                width: 600,
                height: 370,
                backgroundColor: "#EBECF0",
                opacity: 0.7
              }}

            >
              <CardContent>
                <Typography
                  style={{ fontSize: 30 }}
                  color="textPrimary"
                  gutterBottom
                >
                  <FaPlaneDeparture />
                </Typography>

                <Typography
                  align="center"
                  style={{ fontWeight: "bold" }}
                  variant="h4"
                  component="h2"
                >
                  {props.flightA.From} <ImArrowRight2 /> {props.flightA.To}
                </Typography>
                <Typography
                  align="center"
                  style={{ fontSize: 16 }}
                  color="textSecondary"
                  gutterBottom
                >
                  Departure Flight
                </Typography>

                {/* <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography> */}
                {/* <Typography variant="body2" component="p">
            Direct
          </Typography> */}
                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Flight Date : {props.flightA.FlightDate}
                </Typography>
                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Departure At: {props.flightA.DepartureTime}
                </Typography>

                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Arrival At:   {props.flightA.ArrivalTime}
                </Typography>
                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Class: {props.cabin}
                </Typography>
                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Seat: {props.seatsA}
                </Typography>
                {/* <Typography
            style={{ fontSize: 22 }}
            align="center"
            style2={{ fontWeight: 'bold' }}
            color="textPrimary"
            gutterBottom
          > 
            Total
            

          </Typography> */}

                <Typography
                  style={{ fontSize: 20, fontWeight: "bold", marginTop: -20 }}
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  $  {props.cabin === "Economy" ? <p> {(props.flightA.EcoPrice * props.seatsA.length)}</p> : null}
                  {props.cabin === "First" ? <p> {(props.flightA.FPrice * props.seatsA.length)}</p> : null}
                  {props.cabin === "Business" ? <p> {(props.flightA.BusPrice * props.seatsA.length)}</p> : null}

                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Stay Safe.....</Button> */}
              </CardActions>
            </Card>
          </Grid>
          <br /> <br /><br /><br />
          <Grid item xs={8}>
            <Card
              style={{
                width: 600,
                height: 370,
                backgroundColor: "#EBECF0",
                opacity: 0.7
              }}
            >
              <CardContent>
                <Typography
                  style={{ fontSize: 30 }}
                  color="textPrimary"
                  gutterBottom
                >
                  <FaPlaneArrival />
                </Typography>

                <Typography
                  align="center"
                  style={{ fontWeight: "bold" }}
                  variant="h4"
                  component="h2"
                >
                  {props.flightA.To} <ImArrowRight2 />   {props.flightA.From}
                </Typography>
                <Typography
                  align="center"
                  style={{ fontSize: 16 }}
                  color="textSecondary"
                  gutterBottom
                >
                  Return Flight
                </Typography>

                {/* <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography> */}
                {/* <Typography variant="body2" component="p">
            Direct
          </Typography> */}
                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Flight Date :  {props.flightB.FlightDate}
                </Typography>
                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Departure At:   {props.flightB.DepartureTime}
                </Typography>

                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Arrival At:    {props.flightB.ArrivalTime}
                </Typography>
                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Class:     {props.cabin}
                </Typography>
                <Typography
                  align="left"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  color="textPrimary"
                  gutterBottom
                >
                  Seat:     {props.seatsB}
                </Typography>
                {/* <Typography
            style={{ fontSize: 22 }}
            align="center"
            style2={{ fontWeight: 'bold' }}
            color="textPrimary"
            gutterBottom
          > 
            Total
            

          </Typography> */}

                <Typography
                  style={{ fontSize: 20, fontWeight: "bold", marginTop: -20 }}
                  align="center"
                  color="textPrimary"
                  gutterBottom


                >
                  $   {props.cabin === "Economy" ? <p> {(props.flightB.EcoPrice * props.seatsA.length)}</p> : null}
                  {props.cabin === "First" ? <p> {(props.flightB.FPrice * props.seatsA.length)}</p> : null}
                  {props.cabin === "Business" ? <p> {(props.flightB.BusPrice * props.seatsA.length)}</p> : null}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Stay Safe.....</Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <br />
        <br />
        <br />

        {/* <Card
          style={{

            width: 330,
            height: 65,
            backgroundColor: "#EBECF0",
            opacity: 0.7
          }}
        >
          <CardContent>
            <Typography
              align="left"
              style={{ fontSize: 20, fontWeight: "bold" }}
              color="textPrimary"
              gutterBottom
            >
              Total Price  : $ {(props.flightA.price * props.seatsA.length) + (props.flightB.price * props.seatsB.length)}
            </Typography>
          </CardContent>
        </Card> */}


        <Stack spacing={2} sx={{ width: '20' }}>
          <div style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginleft: -30
          }}>
            <Button variant="contained" color="primary" onClick={(event) => {  setConfirmed(true) }} style={{ marginLeft: -50 }} >  Confirm </Button>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSB} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
              <Alert onClose={handleCloseSB} severity="success" sx={{ width: '100%' }}>
                Flight confirmed successfully
              </Alert>


            </Snackbar>

          </div>
        </Stack>
      </div>


    </div>}
  </div>

  )
}
export default Summary;