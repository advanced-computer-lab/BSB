import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import flight from "./images/flight.png"
import { FaPlaneDeparture } from "react-icons/fa"
import { FaPlaneArrival } from "react-icons/fa"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { ImArrowRight2 } from "react-icons/im";
import { GiCommercialAirplane } from 'react-icons/gi';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

function Flightitinerary() {
    return (
        <div>
            <div style={{}}>
                <div
                    id='intro-example'
                    className='p-5 text-center bg-image'
                    style={{
                        background: `url(${flight})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: window.screen.height, width: window.screen.width
                    }}

                >
                    <Card style={{
                        width: 1400,
                        height: 1600,
                        backgroundColor: "white"
                    }}>
                        <CardContent>

                            <Typography
                                style={{ fontSize: 30, fontWeight: "bold" }}
                                color="textPrimary"
                                align="left"
                                gutterBottom
                            >
                                FLIGHT ITINERARY
                            </Typography>



                            <Typography
                                style={{ fontSize: 20, fontWeight: "bold" }}
                                color="textSecondary"
                                align="left"
                                gutterBottom
                            >
                                Trip to MRS
                            </Typography>



                            <hr />
                            <Typography
                                align="left"
                                style={{ fontSize: 20, fontWeight: 'bold' }}
                                variant="h4" component="h2">
                                BOOKING NUMBER : 99625
                            </Typography>

                            <hr />
                            <Typography
                                align="left"
                                style={{ fontSize: 27 }}
                                color="textPrimary"
                                gutterBottom
                            >
                                <FaPlaneDeparture /> departure flight
                            </Typography>
                            <Typography
                                align="left"
                                style={{ fontSize: 27 }}
                                color="textPrimary"
                                gutterBottom
                            >
                                Departure: 21 MAR 2022
                            </Typography>


                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Card
                                        style={{
                                            width: 800,
                                            height: 70,
                                            backgroundColor: "#EBECF0"
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                style={{ fontSize: 30, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                LHR < ImArrowRight2 /> MRS
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card
                                        style={{
                                            width: 400,
                                            height: 108,
                                            backgroundColor: "#EBECF0"
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                style={{ fontSize: 20, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="center"
                                                gutterBottom
                                            >
                                                price :
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 40, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="center"
                                                gutterBottom
                                            >
                                                5500 EGP
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card
                                        style={{
                                            width: 300,
                                            height: 400,
                                            backgroundColor: "#EBECF0"
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                style={{ fontSize: 35, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                BSB Airways
                                            </Typography>

                                            <Typography
                                                style={{ fontSize: 25, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                BA455
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Duration:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                1 hour 55 min
                                            </Typography>


                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Class:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Economy
                                            </Typography>

                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Seat:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                A12
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Status:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                confirmed
                                            </Typography>



                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={8}>
                                    <Card
                                        style={{
                                            width: 350,
                                            height: 400,
                                            backgroundColor: "#EBECF0"
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Arriving At:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 25, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                12:55 PM
                                            </Typography>

                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                TERMINAL 3 </Typography>
                                            <br />
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Departuring At:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 25, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                11:00 AM
                                            </Typography>

                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                TERMINAL 2 </Typography>


                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <hr />
                        <div style={{ marginLeft: 15 }}>
                            <Typography
                                align="left"
                                style={{ fontSize: 27 }}
                                color="textPrimary"
                                gutterBottom
                            >
                                <FaPlaneArrival /> return flight
                            </Typography>
                            <Typography
                                align="left"
                                style={{ fontSize: 27 }}
                                color="textPrimary"
                                gutterBottom
                            >
                                Return: 21 JUN 2022
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Card
                                        style={{
                                            width: 800,
                                            height: 70,
                                            backgroundColor: "#EBECF0"
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                style={{ fontSize: 30, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                LHR < ImArrowRight2 /> MRS
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card
                                        style={{
                                            width: 400,
                                            height: 108,
                                            backgroundColor: "#EBECF0"
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                style={{ fontSize: 20, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="center"
                                                gutterBottom
                                            >
                                                price :
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 40, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="center"
                                                gutterBottom
                                            >
                                                5500 EGP
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card
                                        style={{
                                            width: 300,
                                            height: 400,
                                            backgroundColor: "#EBECF0"
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                style={{ fontSize: 35, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                BSB Airways
                                            </Typography>

                                            <Typography
                                                style={{ fontSize: 25, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                BA455
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Duration:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                1 hour 55 min
                                            </Typography>


                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Class:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Economy
                                            </Typography>

                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Seat:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                A12
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Status:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                confirmed
                                            </Typography>



                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={8}>
                                    <Card
                                        style={{
                                            width: 350,
                                            height: 400,
                                            backgroundColor: "#EBECF0"
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Arriving At:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 25, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                12:55 PM
                                            </Typography>

                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                TERMINAL 3 </Typography>
                                            <br />
                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                Departuring At:
                                            </Typography>
                                            <Typography
                                                style={{ fontSize: 25, fontWeight: "bold" }}
                                                color="textPrimary"
                                                align="left"
                                                gutterBottom
                                            >
                                                11:00 AM
                                            </Typography>

                                            <Typography
                                                style={{ fontSize: 16, fontWeight: "bold" }}
                                                color="textSecondary"
                                                align="left"
                                                gutterBottom
                                            >
                                                TERMINAL 2 </Typography>


                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                        <hr />

                    </Card>




                </div></div> </div>
    )
}

export default Flightitinerary;