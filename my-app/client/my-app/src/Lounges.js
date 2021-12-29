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

import { CardActionArea } from '@mui/material';
import { Link } from '@material-ui/core';
import AppBarr from './AppBarr';
import loungess from './images/loungess.jpg'
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










function Lounges() {
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
        <div>
            <AppBarr/>
            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url(${loungess})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 450, width: window.screen.width,
                    marginTop: -285,

                }}


            >
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#FFFFFF', marginTop: 150, marginLeft: -1120 , fontSize:40}} >Our lounges</h3>

                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 220, marginLeft: 50, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#" onClick={()=> navigate("/Search")}>Home</Link> > Lounges

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 30, marginLeft: -20 }} >We  offer a range of  luxurious lounges worldwide</h3>
                <Stack direction='row' spacing={5}>

                    <Card sx={{ maxWidth: 345 }} style={{ marginLeft: 70, marginTop: 40 }} disabled>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://cdn.loungereview.com/wp-content/uploads/2017/01/CDG-qatar-airways-premium-lounge-cdg-pr-010.jpg?strip=all&lossy=1&quality=90&ssl=1"
                                alt="Charles de Gaulle"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: 15, fontWeight: "bold", color: ' #5c0931' }}>
                                    Charles De Guel lounge
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: '#808294' }}>
                                    Relax in an Arabic-inspired private majlis with postmodern furnishings in the heart of Charles de Gaulle airport.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} style={{ marginLeft: 130, marginTop: 40 }} disabled>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.insider.com/5e4dd60704389502a7714d52?width=1000&format=jpeg&auto=webp"
                                alt="Barcelona"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: 15, fontWeight: "bold", color: ' #5c0931' }}>
                                    Spain premium lounge
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: '#808294' }}>
                                    Transform your time at Josep Tarradellas Barcelona-El Prat Airport into a marvellous experience at the Oryx Lounge.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} style={{ marginLeft: 130, marginTop: 40 }} disabled>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.italiabsolutely.com/media/k2/items/cache/ee760d1c1474fde7f8f71a96b2452e29_XL.jpg"
                                alt="Italy"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: 15, fontWeight: "bold", color: ' #5c0931' }}>
                                    Italy exclusive lounge
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: '#808294' }}>
                                    Our exclusive lounge is designed to offer our First and Business Class passengers a luxurious environment to relax and unwind in the utmost comfort.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Stack>
                <br/>
                <br/>
                <br/>

            </div>

        </div>
    )
}

export default Lounges
