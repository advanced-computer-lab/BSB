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
function TravelReq() {
    return (
        <div
            id='intro-example'
            className='p-5 text-center bg-image'
            style={{
                marginTop:-290,
                background: `url(${travelreq})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 600, width: window.screen.width
            }}
        >

            <div>

                <Typography style={{ fontSize: 40, fontWeight: "bold", marginTop: 250, color: 'white', marginLeft: 400 }}

                    align="left"
                    gutterBottom
                >
                    Travel requirements
                </Typography>

                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 0, color: 'white', marginLeft: 400 }}

                    align="left"
                    gutterBottom
                >
                    Here's everything you need to know         </Typography>


                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 100, marginLeft: 100, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#">Home</Link> > Edit your profile

                </Typography>
                <hr />
                <Typography style={{ fontSize: 15, marginTop: 15, color: ' #5c0931', marginLeft: 190 }}

                    align="left"
                    gutterBottom
                >
                    Many countries around the world have specific regulations in place for arriving and departing passengers in order to limit the spread of COVID-19.
                </Typography>

                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 190 }}

                    align="left"
                    gutterBottom
                >
                    Please read the travel requirements and visa details before booking your trip and ensure you have the required documents at the time of travel.  </Typography>

                <br />
                <br />
                <Typography style={{ fontSize: 20, marginTop: 0, color: ' #5c0931', marginLeft: 190 }}

                    align="left"
                    gutterBottom
                >
                    Visa requirements
                </Typography>

                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 190 }}

                    align="left"
                    gutterBottom
                >


                    Before booking your flight with BSB Airways, we recommend that you check the latest information on country/region travel restrictions as well as visa and passport requirements.
                </Typography>



                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 190 }}

                    align="left"
                    gutterBottom
                >

                    Note: In case that government regulation requires you to present a negative COVID-19 test result on departure and/or arrival,
                    BSB Airways will verify this information at check-in
                </Typography>


                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 190 }}

                    align="left"
                    gutterBottom
                >
                    and retain a copy of the test result.

                    Please have additional copies of the test result available with you for submission.
                    Additionally, passengers are required to complete,
                </Typography>


                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 190 }}

                    align="left"
                    gutterBottom
                >

                    sign and submit a consent form at the check-in counters along with their negative COVID-19 test result.
                </Typography>


                <br />
                <br />




                <Card sx={{ display: 'flex' }} style={{ width: 800, height: 500, marginLeft: 450, backgroundColor: '#5c0931', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: 'white', marginTop: 30, fontSize: 20, fontWeight: 'bold', marginLeft: -60 }}>
                                Plan your next trip                                                      </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 250, color: 'white', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: 'white', marginTop: 30, fontSize: 15, marginLeft: -20 }}>
                                Discover the remarkable destinations we fly to and stay updated on the latest travel requirements.                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        width="900"
                        sx={{ width: 900 }}
                        image="https://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Lifestyle/Shopping/465994127_480x270.jpg"
                        alt="Memberchips"
                    />
                </Card>




                <br />
                <br />
                <br />











                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 190 }}

                    align="left"
                    gutterBottom
                >

                    This information is provided by BSB Airways as a courtesy, and although updated regularly, we recommend you to frequently check back due to the rapid changes in travel conditions,
                </Typography>


                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931', marginLeft: 190 }}

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