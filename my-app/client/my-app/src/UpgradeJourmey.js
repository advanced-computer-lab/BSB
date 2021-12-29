import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import flight from "./images/flight.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BSBlogo from './images/BSBlogo.png'
import Typography from '@mui/material/Typography';
import booktrip from "./images/booktrip.jpg"
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';

import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import DepartureList from './DepartureList';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import App from './App';
import EditProfile from './EditProfile';
import ViewResFlights from './ViewResFlights';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Language from '@mui/icons-material/Language';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Anchor from '@restart/ui/esm/Anchor';
import LuggageIcon from '@mui/icons-material/Luggage';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import HotelIcon from '@mui/icons-material/Hotel';
import CarRentalIcon from '@mui/icons-material/CarRental';
import GroupsIcon from '@mui/icons-material/Groups';
import Groups from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import SchoolIcon from '@mui/icons-material/School';
import HubIcon from '@mui/icons-material/Hub';
import ChooseSeat from './ChooseSeat';
import Layout from './Layout'
import Search from './Search'
import SearchBody from './SearchBody';
import Searchu from './Searchu'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Help from './Help';
import { fontWeight } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import FlightIcon from '@mui/icons-material/Flight';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import WifiIcon from '@mui/icons-material/Wifi';
import Wifi from '@mui/icons-material/Wifi';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormLabel } from '@material-ui/core';
import { Checkbox } from '@mui/material';
import { FormGroup } from 'react-bootstrap';
import { Link } from '@mui/material';
import upgrade from './images/upgrade.jpg'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from '@mui/material';
import { Zoom } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AppBarr from './AppBarr';
import { useLocation, useNavigate } from 'react-router'
import upgradejourney from './images/upgradejourney.jpg'
import up from './images/up.jpg'

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




const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;


function UpgradeJourmey() {
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
        <div>
            <AppBarr />
            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url(${up})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 500, width: window.screen.width,
                    marginTop: -190,

                }}


            >
                 <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 150, marginLeft: -900 }} >Upgrade your journey</h3>
                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 300, marginLeft: 50, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} onClick={() => navigate("/Search")} href="#">Home</Link> > Upgrade Journey

                </Typography>
                <hr style={{ fontSize: 15, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                

                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 50, marginLeft: -850 }} >Experience luxury at it's finest</h3>


                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: -200 }} >Sit back, relax and enjoy a fully lie-flat bed, award-winning service, delectable cuisine on-demand and extensive entertainment options.
                    <br />
                    Upgrade your journey from better to best and enjoy the best trip on board
                </Typography>

                <Typography style={{ fontFamily: 'Verdana', fontWeight: 'bold', variant: 'h4', color: '#5c0931', marginTop: 20, marginLeft: -1100 }} >
                    <br />
                    Compliment your journey
                </Typography>
                <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: 30, marginTop: 10 }}>
                    Book our additional services that will make your trip even more rewarding.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', width: 1100, marginTop: 5, marginLeft: 30 }}>
                    {imagesUpgrade.map((image) => (
                        <ImageButton
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
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 50, marginLeft: -950 }} >Terms and conditions</h3>
<br/>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAcc('panel1')} style={{ width: 1400, marginLeft: 20, border: '' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, color: '#808294', marginLeft: -10, fontWeight: 'bold' }}>
                            Upgrade online
                        </Typography>
                        <hr />

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: 30 }}>
                            <ArrowForwardIcon style={{ marginLeft: -645 }} /> You must be at least 21 years of age and able to enter into binding contracts.
                            <br /> You shall be deemed to have the authority to act on behalf of and to bind the person or persons named or included on the offer to these terms and conditions.
                            <br />
                            <br />
                            <ArrowForwardIcon style={{ marginLeft: -630 }} /> The upgrade offer is only applicable to the specific flight mentioned in the offer.
                            <br />
                            <br />
                            <ArrowForwardIcon style={{ marginLeft: -640 }} /> The quoted offer amount for an upgrade includes all applicable taxes and fees.
                            <br />

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <br />
                <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAcc('panel2')} style={{ width: 1400, marginLeft: 20, border: '' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, color: '#808294', marginLeft: -7, fontWeight: 'bold' }}>Upgrade at the airport</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontFamily: 'Verdana', variant: 'h4', color: '#5c0931', marginLeft: 30 }}>
                            <ArrowForwardIcon style={{ marginLeft: -100 }} />Upgrades will only be available between two (2) hours to sixty (60) minutes prior to flight departure, depending on your country of departure.
                            <br />
                            Please check with the airport staff during check-in to confirm upgrade availability for your flight.
                            <br />
                            <br />
                            <ArrowForwardIcon style={{ marginLeft: -820 }} /> The upgrade amount is inclusive of all taxes and fees.
                            <br />
                            <br />
                            <ArrowForwardIcon style={{ marginLeft: -640 }} /> All menu meal options in Business and First Class are subject to availability.
                            <br />

                        </Typography>
                    </AccordionDetails>
                </Accordion>
<br/>
<br/>





            </div>


        </div>
    )
}


export default UpgradeJourmey
