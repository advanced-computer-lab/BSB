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
function Porto() {
    const navigate=useNavigate();
    return (

        <div
            id='intro-example'
            className='p-5 text-center bg-image'
            style={{
                marginTop: -200,

                background: `url(https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221133511/iStock-472119842.jpg)`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 600, width: window.screen.width
            }}
        >
            <div>
                <Typography style={{ fontSize: 45, fontFamily: 'Verdana', marginTop: 250, color: 'white', marginLeft: 100, fontWeight: 'bold' }}

                    align="left"
                    gutterBottom
                >

                    Porto


                </Typography>
                <Typography style={{ fontSize: 20, fontFamily: 'Verdana', fontWeight: "bold", marginTop: 250, marginLeft: 120, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#" onClick={() => navigate('/Search')}>Home</Link> > Porto

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />

                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>  It’s Historic Monuments
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Porto has the particularity of providing a connexion among Past, Present and Future.
                                Walk through the beautiful streets of its historic centre, considered a UNESCO World Heritage,
                                and fall in love with the beauty of epic monuments,
                                like São bento Station, the Clerics Tower, the Cathedral, the Church of S. Francisco, and much more.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"

                        sx={{ width: 400 }}
                        image="https://www.planetware.com/photos-large/P/portugal-oporto-se-cathedral.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />
                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>  It’s narrow alleys
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Walk through the narrow alleys of this city and feel the traditional atmosphere of Porto. The small streets of Porto
                                remain faithful to its origins. They have very typical houses: small,
                                colourful and with hanging clothes on the balconies. Stroll through these narrow streets and go to Ribeira.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        width="900"
                        sx={{ width: 400 }}
                        image="https://st2.depositphotos.com/1035350/6570/i/950/depositphotos_65706447-stock-photo-alleyway-in-porto-portugal.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />
                <br />
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>  The precious Douro River
                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                The history of Port Wine is closely linked to Douro River. For decades, the traditional Rabelos Boats crossed its waters to transport the Port Wine from the Wineries to the Port Wine Cellars in Vila Nova de Gaia. And then, it was sent to the world.
                                Enjoy a remarkable and wonderful Douro Cruise, through the six bridges of Porto and Gaia.
                            </Typography>


                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"

                        sx={{ width: 400 }}
                        image="https://www.ecotoursportugal.com/content/uploads/maingallery/crops/5985_default_1619195920.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br /></div>
        </div>
    )
}
export default Porto;