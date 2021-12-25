import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@mui/material/Button';
import CardActions from "@material-ui/core/CardActions";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import meetings from './images/meetings.jpg'

function Meet() {
    const navigate = useNavigate(); 
    return (
        <div
            id='intro-example'
            className='p-5 text-center bg-image'
            style={{
               marginTop:-200,
                background: `url(https://www.aa.com/content/images/customer-service/programs-products/group-meeting-travel-banner.jpg)`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 500, width: window.screen.width
            }}
        > <div>
                <Typography style={{ fontSize: 35, fontWeight: "bold", marginTop: 150, color: '#5c0931', marginLeft: 60 }}

                    align="left"
                    gutterBottom
                >
                    Meetings, Incentives, Conferences and Exhibitions
                </Typography>

                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 250, color: ' #5c0931' , marginLeft:30}}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#" onClick={()=>navigate("/Search")}>Home</Link> >         Meetings, Incentives, Conferences and Exhibitions


                </Typography>
              
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />

                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931',marginLeft:70 }}

                    align="left"
                    gutterBottom
                >
                    Meetings, Incentives, Conferences and Exhibitions

                </Typography>

                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931' ,marginLeft:70}}

                    align="left"
                    gutterBottom
                >
                    The one-stop solution for event organisers, international associations, and travel agents.
                </Typography>

                <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931' ,marginLeft:70}}

                    align="left"
                    gutterBottom
                >
                    Extend attractive fares to your VIP speakers, exhibitors, and delegates,
                    travelling to your events in Doha and anywhere in our network, and benefit from a host of features!
                </Typography>
                <br />
                <br />
                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                                For organisers - Meetings & incentives                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 30 }}>
                                Are you planning a meeting, or incentive trip, for 20 to 300 passengers travelling in groups?
                            </Typography>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 30 }}>

                                Corporate event managers, or appointed travel management companies, submit your request and benefit from a host of benefits.                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 800, marginTop: -235 }}
                        component="img"
                        width="700"
                        height="310"

                        sx={{ width: 400 }}
                        image="https://images.squarespace-cdn.com/content/v1/561f1fbee4b06184804259a9/1612290324442-WV7F1PSX0F2ZNPM5ME4M/meet+and+greet.png?format=1000w"
                        alt="Memberchips"
                    />
                </Card>

                <br />
                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                                For organisers - Conferences & exhibitions

                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Are you planning a large conference or exhibition of more than 300 international attendees travelling individually?                            </Typography>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>

                                Whether you are traveling for business or leisure, with family or solo, The Airport Hotel covers all your needs. Your convenience is top priority.
                                When transferring or departing, you can check in and out, regardless of your flight schedule. Rooms can be booked for a minimum of five hours.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 800, marginTop: -290 }}
                        component="img"
                        width="700"
                        height="350"

                        sx={{ width: 400 }}
                        image="https://d39l2hkdp2esp1.cloudfront.net/img/photo/138896/138896_00_2x.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />
                <br />
                <br />


                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                                For attendees
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Are you attending a Conference or Event supported by Us?
                            </Typography>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>

                                Use the promo code provided to you by the event organiser and enjoy up to 10% discount* on BSB Airways market fares to attend the supported event,
                                and selected oneworld alliance add-on flights.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 800, marginTop: -290 }}
                        component="img"
                        width="700"
                        height="350"

                        sx={{ width: 400 }}
                        image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_951514270_400405.jpg"
                        alt="Memberchips"
                    />
                </Card>



                <br />
                <br />
                <br />












            </div>
        </div>
    )
}

export default Meet;