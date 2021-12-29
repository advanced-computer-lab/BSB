import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
function NewYork() {
    const navigate=useNavigate();
    return (

        <div
            id='intro-example'
            className='p-5 text-center bg-image'
            style={{
                marginTop: -200,

                background: `url(https://res.cloudinary.com/simpleview/image/upload/v1622206643/clients/newyorkstate/2000_x_797_web_hero_skyline_2_6b921811-cd45-42fd-990a-ba60c7fba1f0.jpg)`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 600, width: window.screen.width
            }}
        >
            <div>
                <Typography style={{ fontSize: 45, fontFamily: 'Verdana', marginTop: 250, color: 'white', marginLeft: 100, fontWeight: 'bold' }}

                    align="left"
                    gutterBottom
                >

                    New York


                </Typography>
                <Typography style={{ fontSize: 20, fontFamily: 'Verdana', fontWeight: "bold", marginTop: 250, marginLeft: 120, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#" onClick={ navigate('/Search')}>Home</Link> > New York

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />

                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}> About New York City
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                            New York is divided into many Boroughs or Districts. When we speak about New York City what most people probably visualise is Manhattan. Well, Manhattan itself is divided into Downtown (the southern tip, includes Wall Street and the Financial District), Midtown (includes Empire State Building, Rockefeller Center etc) and Uptown (includes Central Park and many museums). Manhattan is actually an Island.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"

                        sx={{ width: 400 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/1/1c/Halve_Maen_approaching_Manhattan_28_June_2009.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />
                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>  Central Park
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                            Step off the crowded sidewalks of 59th Street into Central Park and you’ll hardly realize what lies before you: 693 acres of man-made gardens, meadows, forests, and rolling hillsides. If you ambled down every one of Central Park’s pathways, you would walk 58 miles. Along the way, you pass fountains, monuments, sculptures, bridges, and arches, plus 21 playgrounds, a winter ice-skating rink, a zoo, and even a castle. But you’d hardly notice the four major crosstown thoroughfares, which cleverly disappear into foliage-covered tunnels.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        width="900"
                        sx={{ width: 400 }}
                        image="https://assets.centralparknyc.org/media/images/_1650x767_crop_center-center_none/Stories-from-Before-the-Creation-of-Central-Park.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />
                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}> Coney Island
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                            Coney Island has a reputation as a circus-worthy tourist trap, which is exactly what it is. But you may be surprised by the old-timey charms of this beachfront American town. You’ll definitely be impressed by the food and drinks—Totonno's Pizza, Gargiulo's and Coney Island Brewery in particular. Locals and tourists hang out on the beach, eat ice cream cones on the promenade, and stand in line for the famed Cyclone roller coaster. The beach and boardwalk along with spots like Nathan’s are open year-round. The amusement park itself is seasonal.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"

                        sx={{ width: 400 }}
                        image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/wonder-wheel-at-night-paul-coco.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br /></div>
        </div>
    )
}
export default NewYork;