import React from 'react'
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import AppBarr from './AppBarr'
import { Card, CardContent, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import { be } from 'date-fns/locale';
import hlounge from './images/hlounge.jpg'
function AirportHotel() {
    return (
        <div>
            <AppBarr />
            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url(${hlounge})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 570, width: window.screen.width,
                    marginTop: -120,

                }}


            >
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#FFFFFF', marginTop: 220, marginLeft: -800, fontSize: 35 }} >Elevating the airport experience</h3>
                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 300, marginLeft: 50, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#">Home</Link> > Airport hotel

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: -900, fontSize: 25 }} >Welcome to BSB Airport Hotel

                </Typography>
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: 50, fontSize: 17 }} >Whether you’re travelling for business or leisure, with family or solo, you will find that BSB Airport Hotel has everything you need to recharge your battery. When transferring or departing, you can check in and out of the hotel at your convenience, regardless of your flight schedule. Rooms can be booked for a minimum of *five hours.

                </Typography>
                <br />
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>
                                Elegantly designed and fully equipped rooms

                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 270, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -5, fontSize: 15, marginLeft: 5 }}>
                                For your convenience, the hotel offers the following amenities: 42-inch flat-screen TV, complimentary Wi-Fi, in-room safe, iron, ironing board and complimentary tea, coffee and mineral water. Guests in the executive, deluxe rooms and suites can enjoy additional amenities, such as an espresso machine. Hairdryers, dental kits, shaving kits and sewing kits are available upon request.

                            </Typography>
                            <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 15, fontSize: 15, marginLeft: 5 }}>
                                For reservations or more information, please call +974 4010 8100 or email reservations@bsbairporthotel.com.
                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


                        </Box>
                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        sx={{ width: 400 }}
                        image="https://cdn.businesstraveller.com/wp-content/uploads/fly-images/913028/hamad_airport_hotel8-916x503.jpg"
                        alt="Memberchips"
                    />
                </Card>
                <br />
                <br />
                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 1200 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold', marginLeft: 300 }}>
                                Wellbeing and fitness

                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 635, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 10, fontSize: 15, marginLeft: 400 }}>
                                As a guest at BSB Airport Hotel, you can enjoy unlimited use of the 25-metre temperature-controlled indoor swimming pool, hydrotherapy tubs, shower rooms and a fully-serviced gym equipped with cardiovascular machines. Squash courts and spa treatments are also available, for an additional charge.

                            </Typography>
                            <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 15, fontSize: 15, marginLeft: 400 }}>
                                Non-hotel guests can have access to the hotel’s facilities, for a fee. For reservations or more information, please call +974 4010 8204 or email spareception@bsbairporthotel.com.
                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


                        </Box>
                    </Box>
                    <CardMedia
                        style={{ marginLeft: -1200 }}
                        component="img"
                        sx={{ width: 400 }}
                        image="https://images.trvl-media.com/hotels/12000000/11690000/11684900/11684886/fd6068b2.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium"
                        alt="Memberchips"
                    />
                </Card>
                <br />
                <br />
                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>
                                Retail and dining

                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 285, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -5, fontSize: 15, marginLeft: 5 }}>
                                Browse through 80 retail outlets offering a wide selection of designer labels, high-street fashion brands, electronics, and much more.


                            </Typography>
                            <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 15, fontSize: 15, marginLeft: 5 }}>
                                With more than 30 cafés and restaurants on offer, you will be spoiled for choice. Sample a sumptuous selection of global cuisine under one roof.
                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


                        </Box>
                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        sx={{ width: 400 }}
                        image="https://images.otstatic.com/prod/25939274/1/huge.jpg"
                        alt="Memberchips"
                    />
                </Card>
                <br />
                <br />
            </div>
        </div>
    )
}

export default AirportHotel;
