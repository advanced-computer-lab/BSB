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




function Summary(props) {
  const [info, setInfo] = useState([{}]);
  const [flight1, setFlight1] = useState({ flightDate: "", from: "", to: "", arr: "", dep: "", passA: "", ChildA: "", price: "", cabin: "", seat: [], total: "" });
  const [flight2, setFlight2] = useState({ flightDate: "", from: "", to: "", arr: "", dep: "", passA: "", ChildA: "", price: "", cabin: "", seat: [], total: "" });
  const [clicked, setClicked] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [confirmedclicked, setConfirmedClicked] = useState(false);
  const handleClickSB = () => {
    setOpenSnackBar(true);
  }

  const handleCloseSB = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  }
  useEffect(() => {

    axios.post('http://localhost:8000/ViewTicketSummary',
      { _id: "61aa1afb3b59fcb8e4a6557a" }).then(res => {
        setInfo(res.data);

        setFlight1({ flightDate: res.data[0].DepartId.FlightDate, from: res.data[0].DepartId.From, to: res.data[0].DepartId.To, arr: res.data[0].DepartId.ArrivalTime, dep: res.data[0].DepartId.DepartureTime, passA: res.data[0].DepartId.DepartPassengersAdult, ChildA: res.data[0].DepartId.DepartPassengersChild, price: res.data[0].DepartPrice, cabin: res.data[0].DepartCabin, seat: res.data[0].DepartSeats, total: res.data[0].Total })
        setFlight2({ flightDate: res.data[0].ReturnId.FlightDate, from: res.data[0].ReturnId.From, to: res.data[0].ReturnId.To, arr: res.data[0].ReturnId.ArrivalTime, dep: res.data[0].ReturnId.DepartureTime, passA: res.data[0].DepartId.ReturnPassengersAdult, ChildA: res.data[0].DepartId.ReturnPassengersChild, price: res.data[0].ReturnPrice, cabin: res.data[0].ReturnCabin, seat: res.data[0].ReturnSeats, total: res.data[0].Total })

        console.log(flight1.from);
      })

  }


  )
  return (
    
    <div style={{ marginTop: 150 }}>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{
          background: `url(${flight})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: window.screen.height, width: window.screen.width
        }}

      >
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
              width: 1500,
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
                    {flight1.from} <ImArrowRight2 />  {flight1.to}
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
                    Flight Date :  {flight1.flightDate}
                  </Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    color="textPrimary"
                    gutterBottom
                  >
                    Departure At:  {flight1.dep}
                  </Typography>

                  <Typography
                    align="left"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    color="textPrimary"
                    gutterBottom
                  >
                    Arrival At:   {flight1.arr}
                  </Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    color="textPrimary"
                    gutterBottom
                  >
                    Class: {flight1.cabin}
                  </Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    color="textPrimary"
                    gutterBottom
                  >
                    Seat: {flight1.seat}
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
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    EGP  {flight1.price}
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
                    {flight2.from} <ImArrowRight2 />   {flight2.to}
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
                    Flight Date :   {flight2.flightDate}
                  </Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    color="textPrimary"
                    gutterBottom
                  >
                    Departure At:    {flight2.dep}
                  </Typography>

                  <Typography
                    align="left"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    color="textPrimary"
                    gutterBottom
                  >
                    Arrival At:    {flight2.arr}
                  </Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    color="textPrimary"
                    gutterBottom
                  >
                    Class:      {flight2.cabin}
                  </Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    color="textPrimary"
                    gutterBottom
                  >
                    Seat:     {flight2.seat}
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
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    EGP  {flight2.price}
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

          <Card
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
                Total Price  : {flight2.total}
              </Typography>
            </CardContent>
          </Card>


          <Stack spacing={2} sx={{ width: '20' }}>
            <div style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginleft: -30
            }}>
              <Button variant="contained" color="primary" onClick={setConfirmedClicked(true)} >  Confirm </Button>
              {/* <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSB} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleCloseSB} severity="success" sx={{ width: '100%' }}>
                  Flight confirmed successfully
                </Alert>


              </Snackbar> */}

            </div>
          </Stack>
        </div>


      </div></div>
  )
}
export default Summary;