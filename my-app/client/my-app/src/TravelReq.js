import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@mui/material/Button';
import CardActions from "@material-ui/core/CardActions";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import travelreq from './images/travelreq.jpg'
import travel from './images/travel.jpg'
import { useNavigate } from 'react-router-dom';

function TravelReq() {
    const navigate = useNavigate();
    return (
        <div
            id='intro-example'
            className='p-5 text-center bg-image'
            style={{
                marginTop: -290,
                background: `url(${travel})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 600, width: window.screen.width
            }}
        >

            <div>

                <Typography style={{ fontSize: 40, fontWeight: "bold", marginTop: 250, color: '#5c0931', marginLeft: 70 }}

                    align="left"
                    gutterBottom
                >
                    Travel requirements
                </Typography>

                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: -20, color: '#ffffff', marginLeft: 80 }}

                    align="left"
                    gutterBottom
                >
                    Here's everything you need to know         </Typography>


                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 180, marginLeft: 100, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#" onClick={() => navigate("/Search")}>Home</Link> > Travel requirements

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931', marginLeft: 0 }} />
                <Typography style={{ fontSize: 15, marginTop: 15, color: ' #5c0931', marginLeft: 150 }}

                    align="left"
                    gutterBottom
                >
                    Many countries around the world have specific regulations in place for arriving and departing passengers in order to limit the spread of COVID-19.
                </Typography>

                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 150 }}

                    align="left"
                    gutterBottom
                >
                    Please read the travel requirements and visa details before booking your trip and ensure you have the required documents at the time of travel.  </Typography>

                <br />
                <br />
                <Typography style={{ fontSize: 25, marginTop: 0, color: ' #5c0931', marginLeft: 150, fontWeight: 'bold' }}

                    align="left"
                    gutterBottom
                >
                    Visa requirements
                </Typography>

                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 150 }}

                    align="left"
                    gutterBottom
                >


                    Before booking your flight with BSB Airways, we recommend that you check the latest information on country/region travel restrictions as well as visa and passport requirements.
                </Typography>



                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 150 }}

                    align="left"
                    gutterBottom
                >

                    Note: In case that government regulation requires you to present a negative COVID-19 test result on departure and/or arrival,
                    BSB Airways will verify this information at check-in
                </Typography>


                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 150 }}

                    align="left"
                    gutterBottom
                >
                    and retain a copy of the test result.

                    Please have additional copies of the test result available with you for submission.
                    Additionally, passengers are required to complete,
                </Typography>


                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 150 }}

                    align="left"
                    gutterBottom
                >

                    sign and submit a consent form at the check-in counters along with their negative COVID-19 test result.
                </Typography>


                <br />
                <br />




                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 600 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>
                                Plan your next trip
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 180, color: '#5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15,fontWeight:'bold' ,marginLeft:0}}>
                                Discover the remarkable destinations we fly to and stay updated on the latest travel requirements.                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 700, marginTop: -200 }}
                        component="img"
                        width="400"
                        sx={{ width: 555 }}
                        image="https://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Lifestyle/Shopping/465994127_480x270.jpg"
                        alt="Memberchips"
                    />
                </Card>



                <br />
                <br />
                <br />











                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 150 }}

                    align="left"
                    gutterBottom
                >

                    This information is provided by BSB Airways as a courtesy, and although updated regularly, we recommend you to frequently check back due to the rapid changes in travel conditions,
                </Typography>


                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 150 }}

                    align="left"
                    gutterBottom
                >

                    and that you verify travel and entry requirements through independent inquiries before your trip.  </Typography>

                <br />
                <br />
                <br />

            </div>

        </div>

    )
}
export default TravelReq;