import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import miles from './images/miles.jpg'
import { useNavigate } from 'react-router-dom';
function Earn() {
    const navigate = useNavigate();
    return (

        <div
            id='intro-example'
            className='p-5 text-center bg-image'
            style={{
                marginTop: -400,
            

                background: `url(${miles})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 600, width: window.screen.width
            }}
        >
            <div>

                <Typography style={{ fontSize: 35, fontFamily: 'Verdana', marginTop: 250, color: 'white', marginLeft: 70,fontWeight:'bold' }}

                    align="left"
                    gutterBottom
                >


                    Earn miles with us


                </Typography>
                <Typography style={{ fontSize: 20, fontFamily: 'Verdana', fontWeight: "bold", marginTop: 200, marginLeft: 100, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931', marginLeft: 25 }} href="#" onClick={()=> navigate("/Search")}>Home</Link> > Earn

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 0, color: ' #5c0931' }} />
                <Typography style={{ fontSize: 30, fontFamily: 'Verdana', marginTop: 30, color: ' #5c0931', marginLeft: 170,fontWeight:'bold' }}

                    align="left"
                    gutterBottom
                >

                    How to earn miles


                </Typography>

                <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 190 }}
                    align="left"
                    gutterBottom>

                    Miles are the reward miles you earn when you or your nominated family members travel with BSB Airways, oneworld airlines, or our

                </Typography>
                <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 190 }}
                    align="left"
                    gutterBottom>

                    airline partners. You can also earn miles by using any of our more than 100 global partners.
                </Typography>
                <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 190 }}
                    align="left"
                    gutterBottom>

                    miles are taking you further than ever before. Every time you spend or earn your miles balance will be valid for a further 36 months.        </Typography>
                <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 190 }}
                    align="left"
                    gutterBottom>

                    Keeping your balance active has never been easier, with all the ways you can earn and redeem miles in the air, and on the ground.
                </Typography>
                <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 190 }}
                    align="left"
                    gutterBottom>

                    out your miles balance now and see how long you have to keep them active.
                </Typography>

                <br />
                <br />

                <Card sx={{ display: 'flex' }}  sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 40, fontSize: 18, fontWeight: 'bold' }}>


                                Earn miles with Hotel & Car Rewards
                            </Typography>
                            <hr style={{ fontSize: 15, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 18, marginLeft: 5 }}>
                                You can earn miles  with every car rental at over 20,000 locations or each hotel stay in more than 350,000
                                hotels worldwide when you pay in cash, with our Hotel & Car Rewards.

                            </Typography>



                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        width="900"
                        sx={{ width: 900 }}
                        image="https://www.cannadish.net/wp-content/uploads/2020/05/weed-room-service-scaled-e1589492623693.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />

                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 40, fontSize: 18, fontWeight: 'bold' }}>
                                Earn miles with our partners
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 18, marginLeft: 5 }}>
                                With our diverse group of partners, you can earn additional miles to get you closer to that complimentary flight.

                            </Typography>



                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        width="900"
                        sx={{ width: 900 }}
                        image="https://media.istockphoto.com/photos/middle-age-couple-in-jewelry-store-picture-id1154434608?k=20&m=1154434608&s=612x612&w=0&h=x0xnGWJBiQdrXyKCEfH5Yooc41uPNEyxIBk3FTt17gI="
                        alt="Memberchips"
                    />
                </Card>

                <br />




                <br />




            </div></div>
    )
}

export default Earn;