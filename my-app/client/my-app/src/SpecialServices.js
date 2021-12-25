import React from 'react'
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import booktrip from "./images/booktrip.jpg"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import LuggageIcon from '@mui/icons-material/Luggage';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import HotelIcon from '@mui/icons-material/Hotel';
import CarRentalIcon from '@mui/icons-material/CarRental';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import HubIcon from '@mui/icons-material/Hub';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import FlightIcon from '@mui/icons-material/Flight';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import WifiIcon from '@mui/icons-material/Wifi';
import Wifi from '@mui/icons-material/Wifi';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import lounge from './images/lounge.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AppBarr from './AppBarr';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function SpecialServices() {
    //privilege button
    const [priClicked, setPriClicked] = React.useState(null);
    const openPri = Boolean(priClicked);
    const handleClickPri = (event) => {
        setPriClicked(event.currentTarget);
    };
    const handleClosePri = () => {
        setPriClicked(null);
    };
    //book button
    const [bookClicked, setBookClicked] = useState(null);
    const openBClicked = Boolean(bookClicked);
    const handleClickBook = (event) => {
        setBookClicked(event.currentTarget);
    };
    const handleCloseBook = () => {
        setBookClicked(null);
    };

    //experience button
    const [experienceClicked, setExperienceClicked] = useState(null);
    const openEClicked = Boolean(experienceClicked);
    const handleClickExperience = (event) => {
        setExperienceClicked(event.currentTarget);
    };
    const handleCloseExperience = () => {
        setExperienceClicked(null);
    };

    const [loginClicked, setLoginClicked] = useState(false);

    const handleLoginClicked = (event) => {
        setLoginClicked(true);
    };

    const [helpButton, setHelpButton] = useState(false);

    const handleHelpClicked = (event) => {
        setHelpButton(true);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const images = [{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyC8qitchp3CTc0tRNk5VHwTmXw7Gt7zzqMA&usqp=CAU', title: 'On Board', width: '50%' }]

    const meet = [{ url: 'https://pearlassist.com/media/catalog/product/cache/16cbb02c6aa0557438510836af2c5f3b/m/a/maas-arrival-bw_9.jpg', title: 'Meet', width: '50%' }]

    const group = [{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fzOl3e33qv7675TVc3MMySxSiIXwzNvUxQ&usqp=CAU', title: 'Group travel', width: '60%' }]

    const corporate = [{ url: 'https://fifocapital.co.nz/wp-content/uploads/2020/10/Corporate-travel-best-practices.jpg', title: 'Corporate travel', width: '70%' }]
    const baggage = [{ url: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/miscellaneous/baggages/h1-extra-baggage.jpg', title: 'Extra baggage', width: '70%' }]
    const baggageimage = [
        {
            url: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/miscellaneous/baggages/h1-extra-baggage-ar.jpg',
            title: 'Add extra baggage',
            width: '50%',
        },];

    const imagesUpgrade = [
        {
            url: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/brand/meal/h1-onboard-meal2.jpg',
            title: 'Meal preference',
            width: '30%',
        },

        {
            url: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/brand/kids/h1-crew-serving-kids.jpg',
            title: 'Unaccompanied minors',
            width: '30%',
        },

        {
            url: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/brand/hia/hia-wheel-chair-service-h.jpg',
            title: 'Mobility assistance',
            width: '30%',
        },
    ];

    //accodrian
    const [expanded, setExpanded] = React.useState(false);

    const handleChangeAcc = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
           <AppBarr/>
            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url(${lounge})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 400, width: window.screen.width,
                    marginTop: -285,

                }}


            >
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 90, marginLeft: -1070 }} >Special services</h3>

                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 250, marginLeft: -300 }} >We  strives to cater for our customers with the best possible service.</h3>

                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: -200 }} >Sit back, relax and enjoy a fully lie-flat bed, award-winning service, delectable cuisine on-demand and extensive entertainment options.
                    <br />
                    In order to serve you better, we request that you contact us and advise us of your specific needs at the time of booking,
                    <br /> and at least 48 hours prior to your flight.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', width: 1100, marginTop: 5, marginLeft: 30 }}>
                    {imagesUpgrade.map((image) => (
                        <ImageButton
                            disabled
                            focusRipple
                            key={image.title}
                            style={{
                                width: image.width,
                            }}
                        >
                            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                            <ImageBackdrop className="MuiImageBackdrop-root" />
                            <Image>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    sx={{
                                        position: 'relative',
                                        p: 4,
                                        pt: 2,
                                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    }}
                                >
                                    {image.title}
                                    <ImageMarked className="MuiImageMarked-root" />
                                </Typography>
                            </Image>
                        </ImageButton>
                    ))}
                </Box>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAcc('panel1')} style={{ marginTop: 20, width: 1200, marginLeft: 150 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, color: '#808294', marginLeft: -13, fontWeight: 'bold' }}>
                            Meal descriptions
                        </Typography>


                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: 30 }}>
                            <ArrowForwardIcon style={{ marginLeft: -30 }} /> Baby Meal (BBML) - Pre-packaged baby food for infants up to two years. This is a standard meal provided for infants onboard and does not need to be requested at booking.
                            <br />
                            
                            <br />
                            <br />
                            <ArrowForwardIcon style={{ marginLeft: -25 }} />Children's Meal (CHML) - This may be a non-vegetarian meal that is suitable for young travellers. It may contain: Pancakes, pasta, chicken , chips, sweets, fruit, etc. For vegetarian choices, please request Veg CHML.
                            <br />
                            
                            <br />
                            <br />
                            <ArrowForwardIcon style={{ marginLeft: -30 }} /> Vegetarian Meal - Vegan (VGML) - This is a strictly vegetarian meal that is completely free of animal products, including honey, eggs, & dairy products. This is a standard meal provided for infants onboard and does not need to be requested at booking.
                            <br />
                            


                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAcc('panel2')} style={{ marginTop: 20, width: 1200, marginLeft: 150 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, color: '#808294', marginLeft: -10, fontWeight: 'bold' }}>Children travelling alone</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: -50 }}>
                            If you’re planning for your child to travel alone, we’re here to make sure they enjoy their trip and that they are well taken care of

                            <br />


                            <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: -855 }}>
                                throughout their journey.
                            </Typography>
                            <br />
                            <br />
                            <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: 10 }}>
                                When you book our unaccompanied minor service, your child will be received at the originating airport,
                                taken care of during transit

                                <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: 50 }}>
                                    and  while on board the aircraft.He or she will be handed over to the person designated by the parents/guardians upon arrival at the final destination.
                                </Typography>
                                <hr style={{ marginLeft: 30 }} />

                                <Typography style={{ fontFamily: 'Verdana', variant: 'h4', fontWeight: 'bold', color: '#5c0931', marginLeft: -1030 }}>
                                    Cost
                                </Typography>
                                <br />
                                <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: 10 }}>
                                    To avail the unaccompanied minor service, an adult fare needs to be purchased for the child. Please contact us  to book  the service.

                                </Typography>
                                <hr style={{ marginLeft: 30 }} />
                                <Typography style={{ fontFamily: 'Verdana', variant: 'h4', fontWeight: 'bold', color: '#5c0931', marginLeft: -990 }}>
                                    Eligibility
                                </Typography>
                                <br />
                                <ArrowForwardIcon style={{ marginLeft: 30 }} />The child must be between the ages of 5 and 15 years (up to but not including the 16th birthday). Children under 5 years cannot be accepted
                                <br />
                                <ArrowForwardIcon style={{ marginLeft: -645 }} />The parents must be members of the Privelge club



                            </Typography>
                            <br />
                            <br />
                            {/* <ArrowForwardIcon style={{ marginLeft: -450 }} /> */}
                            <br />
                            <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: -80 }}>

                            </Typography>
                            <br />
                            <br />
                            {/* <ArrowForwardIcon style={{ marginLeft: 10 }} />  */}
                            <br />
                            <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: -390 }}>

                            </Typography>


                        </Typography>
                    </AccordionDetails>
                </Accordion>
<br/>
<br/>
<br/>



            </div>
        </div>
    )
}

export default SpecialServices
