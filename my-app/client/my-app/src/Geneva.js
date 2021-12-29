import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import geneva from './images/geneva.jpg'
import { useNavigate } from "react-router-dom";
function Geneva() {
    const navigate=useNavigate();
    return (

        <div
            id='intro-example'
            className='p-5 text-center bg-image'
            style={{
                marginTop: -200,

                background: `url(${geneva})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 500, width: window.screen.width
            }}
        >
            <div>
                <Typography style={{ fontSize: 45, fontFamily: 'Verdana', marginTop: 150, color: '#5c0931', marginLeft: 100 , fontWeight:'bold'}}

                    align="left"
                    gutterBottom
                >

                    Geneva


                </Typography>

                <Typography style={{ fontSize: 20, fontFamily: 'Verdana', fontWeight: "bold", marginTop: 250, marginLeft: 120, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#" onClick={()=>navigate('/Search')}>Home</Link> > Geneva

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
         

      
                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 , marginTop:-40}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>  It’s a great city to explore
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                A tour of Geneva is unique and fascinating as you’ll feel like you’ve travelled through several different countries,
                                rather than one city. Things are all business in the Place des Nations, the seat of the United Nations Office in Geneva
                                and the gateway to International Geneva. In the vibrant and diverse district of Pâquis you can sample global food and a
                                little further out of town the bohemian neighbourhood of Carouge feels more like a slice of Italy than Switzerland.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"

                        sx={{ width: 400 }}
                        image="https://previews.123rf.com/images/erix2005/erix20051703/erix2005170301042/76901441-geneva-switzerland-august-30-2016-people-at-place-longemalle-square-in-geneva-city-center-switzerlan.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />
                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>  Skiing is all around
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                With Geneva as your base, you can visit some of the best ski slopes in the Alps, less than 2 hours away.
                                A bonus is that many of the resorts are across the border in neighbouring France, so they are cheaper than the resorts
                                you’ll find in Switzerland.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        
                        sx={{ width: 400 }}
                        image="https://www.peakretreats.co.uk/media/2576/les-houches-ski-3.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />
                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>  It’s a great place to shop
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Shopping in Geneva is a great way to break your bank account, or at least exercise it. Prices range from expensive to extortionate,
                                but it all depends on what you are looking for. On the high-end street of Rue du Rhône and Rue du Marché,
                                some of the biggest brand names in clothing, jewellery and watches compete with one another for your attention
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        width="900"
                        sx={{ width: 900 }}
                        image="https://www.zaharaholidays.com/public/thumbs/package-gallery/269/Geneva-City-Break-3_450_750.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />
            </div>
        </div>
    )
}
export default Geneva;