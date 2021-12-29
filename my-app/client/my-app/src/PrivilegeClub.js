import React from 'react'
import lounges from './images/lounges.jpg'
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
import { Container } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';

import { CardActionArea } from '@mui/material';
import { Link } from '@material-ui/core';
import privilegeclub from './images/privilegeclub.jpg'
import AppBarr from './AppBarr';
import { useNavigate } from 'react-router-dom';


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






function PrivilegeClub() {
    const navigate = useNavigate();
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
    return (
        <div style={{
            width: window.screen.width,


        }} >
            <AppBarr />

            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url(${privilegeclub})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 570, width: window.screen.width,
                    marginTop: -120,

                }}


            >
                <h3 style={{ fontSize: 40, fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 170, marginLeft: -950 }} >Privilege Club</h3>

                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 320, marginLeft: 50, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#" onClick={()=>navigate("/Search")}>Home</Link> > Lounges

                </Typography>
                <hr style={{ color: ' #5c0931' }} />
                <br />
                <br />
                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 100, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>
                                Membership tiers

                            </Typography>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Privilege Club offers four membership tiers – Burgundy, Silver, Gold and Platinum – each with their own exclusive benefits.

                            </Typography>
                            <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Moving up the membership tiers is easy, Qpoints earned within any 12-month period are evaluated daily to determine your eligibility for a tier upgrade. The higher your membership tier, the more benefits you will enjoy.
                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


                        </Box>
                    </Box>
                    <CardMedia
                        style={{ marginLeft: 100 }}
                        component="img"
                        sx={{ width: 400 }}
                        image="https://cdn.phenompeople.com/CareerConnectResources/QAAIGLOBAL/images/CabinCrewCabinServices-1584101477547.jpg"
                        alt="Memberchips"
                    />
                </Card>
                <br />
                <br />
                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 100, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800, marginLeft: 400 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>
                                Earn miles

                            </Typography>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Qmiles are the reward miles earned when you or your nominated family members travel on Qatar Airways or any oneworld® member airlines. Qmiles can also be earned by booking with our partner airlines and spending with our global non-airline partners.

                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


                        </Box>
                    </Box>
                    <CardMedia
                        style={{ marginLeft: -1250 }}
                        component="img"
                        sx={{ width: 470 }}
                        image="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/privilege-club/partner-images/h1-en-rwandair.jpg"
                        alt="Memberchips"
                    />
                </Card>

                <br />
                <br />
                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 100, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>
                                Spend your points

                            </Typography>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Joining Privilege Club offers you endless ways to spend your Qmiles. You can use your Qmiles on flights to destinations served by the Airways, oneworld® alliance airline partners and other partner airlines.

                            </Typography>
                            <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                You can also spend your Qmiles on cabin upgrades, extra baggage allowance, and even use them as an alternative payment option at  Duty Free at the airport
                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


                        </Box>
                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        sx={{ width: 400 }}
                        image="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/privilege-club/miscellaneous/rebrand/h1-lady-man-pay.jpg"
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

export default PrivilegeClub;
