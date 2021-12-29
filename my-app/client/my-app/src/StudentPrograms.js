import React from 'react'
import lounges from './images/lounges.jpg'
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';

import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container } from '@material-ui/core';
import { Link } from '@material-ui/core';
import privilegeclub from './images/privilegeclub.jpg'
import family from './images/family.jpg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: ' #5c0931',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



function StudentPrograms() {

    const navigate = useNavigate();
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

    const handbaggage = [{ url: 'https://www.iloveqatar.net/public/images/local/hand-baggage-qatar-travel.jpg', title: ' Hand Baggage', width: '70%' }]

    //compliment your journey
    const imagesUpgrade = [
        {
            url: 'https://livingword.co.uk/wp-content/uploads/2019/07/Screenshot-2019-07-04-at-15.18.41-1024x576.png',
            title: 'Widen your journey',
            width: '30%',
        },

        {
            url: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/brand/qsuite/h1-qsuite-businessman.jpg',
            title: 'Upgrade seats',
            width: '30%',
        },

        {
            url: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/miscellaneous/baggages/h1-extra-baggage.jpg',
            title: 'Extra Baggage',
            width: '30%',
        },
    ];

    //choose code text field
    const [country, setCountriesChosen] = useState("");

    const handleChangeCountry = (event) => {
        setCountriesChosen(event.target.value);
    };

    //choose title 
    const [title, setTitle] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    //date of birth
    const [dob, setDOB] = React.useState(null);

    //home country
    const [homeCountry, setHomeCountry] = React.useState();
    const handleChangeHomeCountry = (event) => {
        setHomeCountry(event.target.value);
    };
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

    //terms and conditions
    const [expanded, setExpanded] = React.useState(false);

    const handleChangeAcc = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div style={{
            width: window.screen.width,


        }} >
            <AppBarr />
            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url('https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/privilege-club/campaigns/student-get-student/H1-friends-on-bicycles.jpg')`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 550, width: window.screen.width,
                    marginTop: -140,

                }}


            >
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#FFFFFF', marginTop: 150, marginLeft: -950, fontSize: 35 }} >Students programs</h3>

                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 325, marginLeft: 50, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#" onClick={() => navigate("/Search")}>Home</Link> > Student Programs

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: 50 }} >As a student, we are here for you as you travel for your studies, return to school, or visit friends and family during the holidays. Our exclusive programme, Student Club, is dedicated to offering you unparalleled opportunities, savings and more so you can aim for the skies throughout your educational journey.

                </Typography>
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: 50 }} >
                    Join Student Club, powered by BSB Airways Privilege Club, developed specifically with you in mind.

                </Typography>
                <br />

                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>
                                Companion Pass now available for Student Club members

                            </Typography>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Invite up to three friends or family members to become your Student Companions. Plan your trips together and enjoy special fares on flights and one complimentary date change.

                            </Typography>
                            <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                Simply log in to your profile and select Student Companions
                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


                        </Box>
                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        sx={{ width: 400 }}
                        image="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/miscellaneous/people/couple/h1-couple-camera.jpg"
                        alt="Memberchips"
                    />
                </Card>
                <br />
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <br />
                <br />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -30, marginLeft: -1000, fontSize: 20, fontWeight: 'bold' }} >
                    Save your money

                </Typography>
                <ConfirmationNumberIcon style={{ fontSize: 150, fontWeight: "bold", marginLeft: -1050, color: ' #5c0931', width: 400, marginTop: 0 }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -90, marginLeft: 250 }} >
                    Join to receive your first promo code and get 10% off your first booking. When you fly, you will receive a second promo code for 15% off and once you travel on your second trip, you will receive your promo code to save 20% off a third booking.*

                </Typography>
                <br />
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <br />
                <br />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -30, marginLeft: -850, fontSize: 20, fontWeight: 'bold' }} >
                    Additional baggage allowance

                </Typography>
                <LuggageIcon style={{ fontSize: 150, fontWeight: "bold", marginLeft: -1050, color: ' #5c0931', width: 400, marginTop: 0 }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -90, marginLeft: 250 }} >
                    Carry more with you. As a Burgundy Student Club member, you can take an additional 10 kgs or one more piece of baggage on flights depending on your route.

                </Typography>
                <br />
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <br />
                <br />
                <WifiIcon style={{ fontSize: 150, fontWeight: "bold", marginLeft: -1050, color: ' #5c0931', width: 400, marginTop: 0 }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -90, marginLeft: 250 }} >
                    Book on bsbairways.com or our mobile app and get complimentary high-speed Super Wi-Fi to stay connected on board with the fastest high-speed broadband in the skies.

                </Typography>
                <br />
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <br />
                <br />
                <PeopleOutlineIcon style={{ fontSize: 150, fontWeight: "bold", marginLeft: -1050, color: ' #5c0931', width: 400, marginTop: 0 }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -90, marginLeft: 250 }} >
                    Earn up to an additional 50,000 Qmiles when you Invite your fellow students to join Student Club before 31 December 2021. Simply log into your membership account and share the invite link from your dashboard.

                </Typography>
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>


        </div>
    )
}

export default StudentPrograms
