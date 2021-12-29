import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import dining from './images/dining.png'
import { useNavigate } from 'react-router-dom';
function Dining() {
    const navigate = useNavigate();
    return (
        <div
            id='intro-example'
            className='p-5 text-center bg-image'
            style={{
                marginTop: -220,

                background: `url(${dining})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 500, width: window.screen.width, marginTop: -290
            }}
        >
            <Typography style={{ fontSize: 35,fontWeight:'bold', fontFamily: 'Verdana', marginTop: 170, color: ' #FFFFFF', marginLeft: 70 }}

                align="left"
                gutterBottom
            >



                On board dining </Typography>
            <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 250, marginLeft: 50, color: ' #5c0931' }}

                align="left"
                gutterBottom
            >
                <Link style={{ color: 'inherit' }} href="#" onClick={()=> navigate("/Search")}>Home</Link> > Dining

            </Typography>
            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 0, color: ' #5c0931' }} />

            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 100 }}
                align="left"
                gutterBottom>

                The new age of airline dining revolves around you. Relish sumptuous cuisine designed by the best chefs in the world and         </Typography>

            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 100 }}
                align="left"
                gutterBottom>

                savour expertly served exclusive vintages.
            </Typography>
            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 100 }}
                align="left"
                gutterBottom>
                An on-demand à la carte menu lets you enjoy mouth-watering dishes whenever you like.        </Typography><br />

            <Typography style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: ' #5c0931', marginTop: 30, marginLeft: -700, fontSize: 25 }} >


                Your culinary journey begins on board </Typography>


            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: -120 }}>

                Begin your culinary journey with a selection of light delicacies,
                refined to reward your senses.  Our appetising starters are served with a range

            </Typography>
            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: -960 }}>

                of distinct and palatable flavours.

            </Typography>

            <br /><br />
            <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 350, marginLeft: 110, backgroundColor: '#5c0931', opacity: 0.85 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                        <Typography component="div" style={{ fontFamily: 'Verdana', color: 'white', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>


                            A world of flavour at your fingertips
                        </Typography>
                        <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' white', width: 200 }} />
                        <Typography component="div" style={{ fontFamily: 'Verdana', color: 'white', marginTop: 10, fontSize: 15, marginLeft: 55 }}>
                            Enjoy a safer,
                            more sustainable and contactless experience with our delectable dining menus,
                            now offering digital access to a world of flavour on board.

                        </Typography>
                        <br />
                        <Typography component="div" style={{ fontFamily: 'Verdana', color: 'white', marginTop: 10, fontSize: 15, marginLeft: 55 }}>


                            Get a taste of what awaits you in our unparalleled Economy Class,
                            with digital menus available before your flight and throughout your journey above the clouds.

                        </Typography>
                        <br />
                        <Typography component="div" style={{ fontFamily: 'Verdana', color: 'white', marginTop: 10, fontSize: 15, marginLeft: 55 }}>

                            On-board the flight, simply connect through your trip card via our on-board Wi-Fi portal.

                        </Typography>



                    </CardContent>

                </Box>
                <CardMedia
                    style={{ marginLeft: 10 }}
                    component="img"
                    width="1000"
                    sx={{ width: 400 }}
                    image="https://img1.10bestmedia.com/Images/Photos/384214/Air-New-Zealand_54_990x660.jpg"
                    alt="Memberchips"
                />
            </Card>
            <br />
            <br />
            <br />
            <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 350, marginLeft: 110, backgroundColor: '#5c0931', opacity: 0.85 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                        <Typography component="div" style={{ fontFamily: 'Verdana', color: 'white', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>


                            Gourmet vegan menu                            </Typography>
                        <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' white', width: 200 }} />
                        <Typography component="div" style={{ fontFamily: 'Verdana', color: 'white', marginTop: 10, fontSize: 15, marginLeft: 40 }}>
                            Designed with sustainability and taste at its heart,
                            our first range of delicious, plant-based vegan dishes is now available à la carte to our Business Class passengers on all flights.

                        </Typography>


                    </CardContent>

                </Box>
                <CardMedia
                    style={{ marginLeft: 10 }}
                    component="img"
                    // width="900"
                    sx={{ width: 400 }}
                    image="https://i.pinimg.com/originals/cc/18/b8/cc18b852517e22ddf7965570fd7991df.jpg"
                    alt="Memberchips"
                />
            </Card>


            <br />
            <br />


            <div>








            </div></div>
    )
}



export default Dining;