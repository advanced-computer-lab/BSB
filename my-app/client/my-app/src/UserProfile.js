import React from 'react'

//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';
import Layout from './Layout';

import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import SearchResultsu from './SearchResultsu';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AddLocationTwoToneIcon from '@mui/icons-material/AddLocationTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import DateRangePicker from '@mui/lab/DateRangePicker';
//import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ReturnFlight from './ReturnFlight';
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/Select';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import search from './images/search.jpg'
import cappadocia from './images/cappadocia.jpg'
import { ButtonGroup } from '@material-ui/core';
import { useNavigate } from 'react-router';
import homepage from './images/homepage.jpg'
import { Card } from 'react-bootstrap';
import homepagee from './images/homepagee.jpg'
import { useTheme } from '@mui/material/styles';

import MobileStepper from '@mui/material/MobileStepper';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea, CardActions } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import LuggageIcon from '@mui/icons-material/Luggage';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import HotelIcon from '@mui/icons-material/Hotel';
import CarRentalIcon from '@mui/icons-material/CarRental';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import HubIcon from '@mui/icons-material/Hub';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import WifiIcon from '@mui/icons-material/Wifi';
import { Container } from '@material-ui/core';
import logo from './images/logo.png'
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import FlightIcon from '@mui/icons-material/Flight';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import IconButton from '@mui/material/IconButton';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import LockIcon from '@mui/icons-material/Lock';
import { useLocation } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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



const imagesAni = [
    {
        label: 'Barcelona,Spain',
        imgPath:
            'https://img.static-af.com/images/meta/IDname/CITY-BCN-1?aspect_ratio=1:1&max_width=1280',
    },
    {
        label: 'New York City,United States',
        imgPath:
            'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1800&h=900&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F19%2Fnew-york-city-evening-NYCTG0221.jpg',
    },
    {
        label: 'Alps, Switzerland',
        imgPath:
            'https://media.istockphoto.com/photos/zermatt-village-with-view-of-matterhorn-in-the-swiss-alps-picture-id486574518?k=20&m=486574518&s=612x612&w=0&h=3gIw814QVWhm1qxgVt72E_c89XfZ2Gw-h22x74L8RVQ=',
    },
    {
        label: 'Lake Como, Italy',
        imgPath:
            'https://inspirations.blacktomato.com/wp-content/uploads/2019/11/Lake-Como-shoreline.jpg',
    },
];





const safetravel = [{
    url: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/campaigns/global/safety-measures/h1-crew-new-ppe.jpg',
    title: 'Safe travel',
    width: '25%',
},
]
const travelReq = [{
    url: 'https://i.pinimg.com/originals/db/d7/65/dbd7657550f6c3e8d23b6f869ca3b94a.jpg',
    title: 'Travel requirments ',
    width: '25%',
},]
const whereWeTravel = [{
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/QR_Destinations_2021Jan.png/800px-QR_Destinations_2021Jan.png',
    title: 'Where we travel',
    width: '25%',
},]

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



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function UserProfile(props) {
    const navigate = useNavigate();

    const location = useLocation();
    const id1 = location.state;
    console.log(id1);

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
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };




    const [flights, setFlights] = useState({ from: "", to: "", date: "", arr: "", dep: "", tdep: "", tarr: "", ec: "", bs: "", first: "", flightNum: "", retDate: "", searchRes: false })
    const [flightlist, setFlightlist] = useState([]);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [value, setValue] = useState([null, null]);
    const [dates, setdates] = useState([null, null]);
    const moment = require('moment')

    const [date, setDate] = useState("");
    const [retDate, setretDate] = useState("");
    const [arr, setArr] = useState("");
    const [dep, setDep] = useState("");
    const [tdep, setTdep] = useState("");
    const [tarr, setTarr] = useState("");
    const [ec, setEc] = useState("");
    const [bs, setBs] = useState("");
    const [first, setFirst] = useState("");
    const [flightNum, setFlightNum] = useState("");
    const [searchClicked, setSearchClicked] = useState(false);
    const [searchRes, setSearchRes] = useState(false);
    const [flightlistRet, setFlightlistRet] = useState({});
    const [ret, setRet] = useState(false);
    const { retflights, render } = ReturnFlight({ from: from, to: to, searchClicked: ret });
    // do not forget to bind getData in constructor
    const [cabin, setCabin] = useState("Economy");
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    useEffect(() => {
        axios.get("http://localhost:8000/showFlights").then(res => {
            console.log(res.data);
            // setFlightlist(res.data); 
            const temp = res.data.map((u) => u.From)
            let uniqueChars = temp.filter((c, index) => {
                return temp.indexOf(c) === index;
            });
            setFlightlist(uniqueChars);

            // res.data.map((u) => {{setFlightlist(flightlist=>[...flightlist,u.From]);}})
            //setFlightlist(  flightlist.filter((u,index) =>{return  flightlist.indexOf(u) === index}))
            console.log(flightlist);
        })


    }, [])
    //snack bar
    const [openSnack, setOpenSnack] = useState(false);

    const handleClickSnack = () => {
        setOpenSnack(true);
    };

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };

    //user profile
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    console.log(id1);

    return (
        <div >
            <AppBar position="fixed" style={{ width: window.screen.width, backgroundColor: '#e0dfdf', opacity: 0.99 }} color='transparent'    >

                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            component="img"
                            sx={{
                                height: 66,
                                marginLeft: 5
                            }}
                            alt="Your logo."
                            src={logo}
                            onClick={() => navigate('/Search', { state: { id: id1 } })}
                        />
                        <Stack direction="row" spacing={6} style={{ marginLeft: 200, outline: "none" }}>
                            <Button
                                variant="outlined"
                                id="basic-button"
                                aria-controls="basic-menu"

                                aria-haspopup="true"
                                aria-expanded={openEClicked ? 'true' : undefined}
                                onClick={handleClickExperience}
                            // style={{ marginLeft: 500, marginRight: 70 }}
                            >

                                Experience
                            </Button>
                            <Menu
                                id="basic-menu"
                                size='medium'
                                anchorEl={experienceClicked}
                                open={openEClicked}
                                onClose={handleCloseExperience}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Stack direction="row" spacing={5} style={{ width: window.screen.width, marginLeft: 70 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 500,
                                                height: 300,
                                            },
                                        }}
                                    // style={{marginLeft: 20}}
                                    >

                                        <Box style={{ width: 300, height: 300 }}>
                                            <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>Before you fly</h6>
                                            <br />




                                            <Button style={{ color: '#808294' }} variant="outlined" onClick={() => {
                                                navigate("/BaggageAllowance", { state: id1 })




                                            }}>
                                                <LuggageIcon />
                                                Baggage Allowance
                                            </Button>
                                            <br />
                                            <br />


                                            <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                                navigate("/UpgradeJourmey", { state: id1 })




                                            }}>
                                                <UpgradeIcon />
                                                Upgrade your journey
                                            </Button>
                                            <br />
                                            <br />

                                            <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                                navigate("/SpecialServices", { state: id1 })




                                            }}>
                                                <RoomServiceIcon />
                                                Special Services
                                            </Button>

                                        </Box>
                                        <br />
                                        <br />
                                        {/* <MenuItem onClick={handleClose}>
                <UpgradeIcon />Upgrade your journey</MenuItem> */}
                                        {/* <MenuItem onClick={handleClose}>
                <RoomServiceIcon />
                Special services</MenuItem> */}

                                    </Box>
                                    <Box style={{ width: 300, height: 300 }}>
                                        <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>At the airport</h6>
                                        <br />



                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/AirportHotel", { state: id1 })




                                        }}>
                                            <HotelIcon />
                                            About airport hotel


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/Transacc", { state: id1 })




                                        }}>
                                            <TransferWithinAStationIcon />
                                            Transit Accomodation


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/Lounges", { state: id1 })




                                        }}>
                                            <NightShelterIcon />
                                            Lounges


                                        </Button>



                                    </Box>
                                    <Box>
                                        <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>On board services</h6>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} style={{ width: 300, height: 300, marginTop: 40 }}>

                                            {images.map((image) => (
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
                                                            style={{ color: '#808294' }}
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

                                            <tr >
                                                <LocalDiningIcon style={{ marginLeft: 20 }} />
                                                <Button variant="outlined" style={{ height: 30, marginTop: -5 }} style={{ color: '#808294' }} onClick={() => {
                                                    navigate("/Dining", { state: id1 })




                                                }}>
                                                    Dining
                                                </Button>
                                                <br />
                                                <br />
                                                <WifiIcon style={{ marginLeft: 20 }} />
                                                <Button variant="outlined" style={{ height: 30, marginTop: -5 }} style={{ color: '#808294' }} onClick={() => {
                                                    navigate("/Wifi", { state: id1 })




                                                }}>
                                                    Super Wifi
                                                </Button>
                                                <br />

                                            </tr>


                                        </Box>


                                    </Box>
                                    <Box>
                                        <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>Our Services</h6>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} style={{ width: 300, height: 300, marginTop: 40 }}>

                                            {meet.map((image) => (
                                                <ImageButton
                                                    focusRipple
                                                    key={image.title}
                                                    style={{
                                                        width: image.width,
                                                    }}
                                                    onClick={() => navigate('/Meet', { state: id1 })}
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
                                                            Meet and Assist
                                                            <ImageMarked className="MuiImageMarked-root" />
                                                        </Typography>
                                                    </Image>
                                                </ImageButton>
                                            ))}



                                        </Box>


                                    </Box>



                                </Stack>
                            </Menu>

                            <Button
                                variant="outlined"
                                id="secondary"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={openBClicked ? 'true' : undefined}
                                onClick={handleClickBook}
                            // style={{ marginRight: 70 }}
                            >
                                Book
                            </Button>
                            <Menu
                                id="basic-menu"
                                size='medium'
                                anchorEl={bookClicked}
                                open={openBClicked}
                                onClose={handleCloseBook}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Stack direction="row" spacing={5} style={{ width: window.screen.width, marginLeft: 100 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 500,
                                                height: 300,
                                            },
                                        }}
                                    // style={{marginLeft: 20}}
                                    >

                                        <Box style={{ width: 300, height: 300 }}>
                                            <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>Plan your trip</h6>
                                            <br />




                                            <Button style={{ color: '#808294' }} variant="outlined">
                                                <FlightIcon />
                                                Flight Schedule
                                            </Button>
                                            <br />
                                            <br />


                                            <Button variant="outlined" style={{ color: '#808294' }}>
                                                <CarRentalIcon />
                                                Car Rental
                                            </Button>
                                            <br />
                                            <br />

                                            <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                                navigate("/TravelInsurance", { state: id1 })




                                            }}>
                                                <LoyaltyIcon />
                                                Travel Insurance
                                            </Button>

                                        </Box>
                                        <br />
                                        <br />
                                        {/* <MenuItem onClick={handleClose}>
                <UpgradeIcon />Upgrade your journey</MenuItem> */}
                                        {/* <MenuItem onClick={handleClose}>
                <RoomServiceIcon />
                Special services</MenuItem> */}

                                    </Box>
                                    <Box style={{ width: 300, height: 300 }}>
                                        <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>Travel Information</h6>
                                        <br />



                                        <Button variant="outlined" style={{ color: '#808294' }}>
                                            Travel requirements


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }}>
                                            Flexible travel options


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/SafeTravel", { state: id1 })




                                        }}>
                                            Safe travel


                                        </Button>



                                    </Box>
                                    <Box>
                                        <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>Group travel</h6>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} style={{ width: 300, height: 300, marginTop: 40 }}>

                                            {group.map((image) => (
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
                                                            Book your group trip
                                                            <ImageMarked className="MuiImageMarked-root" />
                                                        </Typography>
                                                    </Image>
                                                </ImageButton>
                                            ))}



                                        </Box>
                                    </Box>
                                    <Box>
                                        <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>Corporate travel</h6>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} style={{ width: 300, height: 300, marginTop: 40 }}>

                                            {corporate.map((image) => (
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
                                                            Book your corporate trip
                                                            <ImageMarked className="MuiImageMarked-root" />
                                                        </Typography>
                                                    </Image>
                                                </ImageButton>
                                            ))}



                                        </Box>
                                    </Box>

                                </Stack>
                            </Menu>

                            <Button
                                variant="outlined"
                                id="secondary"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={openPri ? 'true' : undefined}
                                onClick={handleClickPri}
                            >
                                Privilege Club
                            </Button>
                            <Menu
                                id="basic-menu"
                                size='medium'
                                anchorEl={priClicked}
                                open={openPri}
                                onClose={handleClosePri}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Stack direction="row" spacing={5} style={{ width: window.screen.width, marginLeft: 100 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 500,
                                                height: 300,
                                            },
                                        }}
                                    // style={{marginLeft: 20}}
                                    >

                                        <Box style={{ width: 300, height: 300 }}>
                                            <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>Plan your trip</h6>
                                            <br />




                                            <Button style={{ color: '#808294' }} variant="outlined" onClick={() => {
                                                navigate("/PrivilegeClub", { state: id1 })




                                            }}>
                                                <HubIcon />
                                                About privlege club
                                            </Button>
                                            <br />
                                            <br />


                                            <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                                navigate("/FamilyProgramme", { state: id1 })




                                            }}>
                                                <PeopleIcon />
                                                Family programs
                                            </Button>
                                            <br />
                                            <br />

                                            <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                                navigate("/StudentPrograms", { state: id1 })




                                            }}>
                                                <SchoolIcon />
                                                Student programs
                                            </Button>


                                        </Box>
                                        <br />
                                        <br />
                                        {/* <MenuItem onClick={handleClose}>
                <UpgradeIcon />Upgrade your journey</MenuItem> */}
                                        {/* <MenuItem onClick={handleClose}>
                <RoomServiceIcon />
                Special services</MenuItem> */}

                                    </Box>
                                    <Box style={{ width: 300, height: 300 }}>
                                        <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>Earn</h6>
                                        <br />



                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/Earn", { state: id1 })




                                        }}>
                                            Earn miles and points


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/Buygifts", { state: id1 })




                                        }}>
                                            Buy, gift & transfer


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/Buypoints", { state: id1 })




                                        }}>
                                            Buy points


                                        </Button>



                                    </Box>
                                    <Box>
                                        <h6 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>Extra Baggage</h6>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} style={{ width: 400, height: 300, marginTop: 40 }}>

                                            {baggage.map((image) => (
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
                                                            Add extra luggage
                                                            <ImageMarked className="MuiImageMarked-root" />
                                                        </Typography>
                                                    </Image>
                                                </ImageButton>
                                            ))}



                                        </Box>
                                    </Box>


                                </Stack>
                            </Menu>

                            <Button
                                variant="outlined"
                                id="secondary"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={openPri ? 'true' : undefined}
                                onClick={() => {
                                    navigate("/Help", { state: id1 })
                                }}
                            >
                                Help
                            </Button>

                            <Box sx={{ flexGrow: 0 }} style={{ marginLeft: 500 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar>U</Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}

                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <div

                                        id='intro-example'
                                        className='p-5 text-center bg-image'
                                        style={{
                                            backgroundSize: "contain", backgroundRepeat: "repeat", height: 5, width: 400, backgroundColor: " #5c0931",
                                            marginTop: -10, marginLeft: 0, opacity: 0.9

                                        }}


                                    >
                                        <Typography style={{ fontFamily: 'Verdana', fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: -20 }} >
                                            Welcome to your profile
                                        </Typography>
                                    </div>

                                    <Typography style={{ fontFamily: 'Verdana', fontSize: 16, fontWeight: 'bold', color: '#5c0931', marginTop: 20, marginLeft: 30 }}>
                                        <CardTravelIcon style={{ color: '#808294' }} /> 0 miles
                                    </Typography>
                                    <Typography style={{ fontFamily: 'Verdana', fontSize: 16, fontWeight: 'bold', color: '#5c0931', marginTop: -25, marginLeft: 200 }}>
                                        <LoyaltyIcon style={{ color: '#808294' }} /> 0 points
                                    </Typography>

                                    <Button style={{ fontFamily: 'Verdana', fontSize: 8, fontWeight: 'bold', color: 'white', marginTop: 40, backgroundColor: ' #808294', opacity: 0.85, marginLeft: 30, width: 150 }} onClick={() => {
                                        navigate("/EditProfile", { state: id1 })
                                    }} >
                                        <FaceRetouchingNaturalIcon style={{ marginRight: 10 }} /> Edit Profile
                                    </Button>
                                    <Button style={{ fontFamily: 'Verdana', fontSize: 8, fontWeight: 'bold', color: 'white', marginTop: 40, backgroundColor: ' #808294', opacity: 0.85, marginLeft: 30 }} onClick={() => {
                                        navigate("/ChangePassword", { state: id1 })
                                    }} >
                                        <LockIcon style={{ marginRight: 10 }} /> Change password
                                    </Button>
                                    <br />
                                    <Button style={{ fontFamily: 'Verdana', fontSize: 8, fontWeight: 'bold', color: 'white', marginTop: 25, backgroundColor: ' #808294', opacity: 0.85, marginLeft: 30, width: 150 }} onClick={(event) => {
                                        navigate("/ReservedFlights", { state: id1 })
                                    }}>
                                        <BookOnlineIcon style={{ marginRight: 10 }}
                                        /> My reservations
                                    </Button>
                                    <Button style={{ fontFamily: 'Verdana', fontSize: 8, fontWeight: 'bold', color: 'white', marginTop: 25, backgroundColor: ' #808294', opacity: 0.85, marginLeft: 30, width: 150 }} onClick={() => {
                                        navigate("/Search", { state: id1 })
                                    }}>
                                        <LogoutIcon style={{ marginRight: 10 }} /> Logout
                                    </Button>
                                    {/* <MenuItem  onClick={handleCloseNavMenu} style={{width:200}}>
                                            <Typography textAlign="center">Edit profile</Typography>
                                        </MenuItem>
                                        <br/>
                                        <MenuItem  onClick={handleCloseNavMenu} style={{width:100}}>
                                            <Typography textAlign="center">View Reservations</Typography>
                                        </MenuItem> */}
                                </Menu>
                            </Box>
                        </Stack>










                    </Toolbar>
                </Container>
            </AppBar>


            {flights.searchRes ? <SearchResultsu flights={flights} date={retDate} type="Departure" /> : <div>

                <div style={{ marginTop: 0, marginLeft: 500, marginRight: 20 }}>
                    <div

                        id='intro-example'
                        className='p-5 text-center bg-image'
                        style={{
                            background: `url(https://www.luxair.lu/sites/default/files/styles/slide_images/public/2020-05/BERLIN.jpg?itok=Ah9EsEkM)`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 500, width: window.screen.width,
                            marginTop: 2100, marginLeft: -450

                        }}


                    >
                    </div>
                    <Paper elevation={6} style={{ width: 1200, height: 325, marginLeft: -300, backgroundColor: '#FFFFFF', opacity: 0.95, marginTop: -200 }}>
                        <div

                            id='intro-example'
                            className='p-5 text-center bg-image'
                            style={{
                                backgroundSize: "contain", backgroundRepeat: "repeat", height: 5, width: 1200, backgroundColor: " #5c0931",
                                marginTop: 20, marginLeft: 0

                            }}


                        >
                            <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#ffffff', fontSize: 30, marginLeft: -20, marginTop: -20 }} >Search your flight </h3>
                        </div>
                        <form>
                            <TextField
                                label="From"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch' }}

                                onChange={event => setFrom(event.target.value)}
                                style={{ width: 200, marginLeft: 30, marginTop: 60, marginRight: -10 }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end"> <AddLocationTwoToneIcon /></InputAdornment>,
                                }}
                            />
                            <CompareArrowsIcon style={{ color: "black", marginTop: 70, marginLeft: 20, marginRight: 20 }} />

                            <TextField
                                label="To"

                                sx={{ m: 1, width: '25ch' }}
                                style={{ width: 200, marginTop: 60, marginLeft: -10 }}
                                onChange={event => setTo(event.target.value)}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end"> <AddLocationTwoToneIcon /></InputAdornment>,
                                }}
                            />
                            <Button aria-describedby={id1} variant="outlined" onClick={handleClick} sx={{ m: 1, minWidth: 300 }} style={{ width: 200, height: 60, marginLeft: 519, marginTop: -107, fontSize: 12 }}>
                                {Number(adult) + Number(child)}passenger(s),{cabin}<ArrowDropDownIcon />
                            </Button>
                            <Popover
                                id={id1}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',

                                }}>
                                <div
                                    style={{
                                        width: '400px',
                                        height: '350px'
                                    }}
                                >
                                    <table>
                                        <tr>
                                            <Typography style={{ color: '#5c0931', fontweight: 'bold', fontSize: 20, marginLeft: 15, marginTop: 10 }}>
                                                Passengers
                                            </Typography>


                                            <td>
                                                {/* <TextField
                                                        label=""
                                                        type="number"
                                                        id="outlined-start-adornment"
                                                        sx={{ m: 1, width: '10ch', height: '3ch',border:'none' }}
                                                        style={{ marginBottom: 10, width: 50,height:35 , border:'none'}}
                                                        onChange={event => setAdult(event.target.value)}
                                                    />  */}
                                                <Stack direction='row' spacing={1} >
                                                    <Typography style={{ color: '#808294', fontweight: 'bold', fontSize: 16, marginLeft: -305, marginTop: 55 }}>
                                                        Adult(12+ years)
                                                    </Typography>
                                                    <Button style={{ width: 5, marginLeft: 25, backgroundColor: '#5c0931', color: 'white', height: 35, marginTop: 50 }} onClick={() => setAdult(adult + 1)}>+</Button>
                                                    <Input type=" number" style={{ width: 15, marginLeft: 15, position: 'center' }} />
                                                    <Button style={{ width: 5, marginLeft: 10, backgroundColor: '#5c0931', color: 'white', height: 35, marginTop: 50 }}>-</Button>
                                                </Stack>
                                            </td>
                                        </tr>


                                        <Stack direction='row' spacing={1} >
                                            <Typography style={{ color: '#808294', fontweight: 'bold', fontSize: 16, marginLeft: 30, marginTop: 50 }}>
                                                Child
                                            </Typography>
                                            <Button style={{ width: 5, marginLeft: 100, backgroundColor: '#5c0931', color: 'white', height: 35, marginTop: 50 }} onClick={() => setChild(child + 1)}>+</Button>
                                            <Input type=" number" style={{ width: 15, marginLeft: 15, position: 'center' }} />
                                            <Button style={{ width: 5, marginLeft: 10, backgroundColor: '#5c0931', color: 'white', height: 35, marginTop: 50 }}>-</Button>
                                        </Stack>
                                        <td>
                                            {/* <TextField
                                                    label=""
                                                    type="number"
                                                    id="outlined-start-adornment"
                                                    sx={{ m: 1, width: '10ch', height: '3ch', marginTop: 3, marginBottom: 3 }}
                                                    onChange={event => setChild(event.target.value)}
                                                /> */}
                                        </td>
                                        <br />

                                        <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                                        < Divider sx={{ m: 1, width: '200%', marginTop: 3, marginBottom: 3 }} />
                                        <tr>
                                            <Typography style={{ color: '#808294', fontweight: 'bold', fontSize: 16, marginLeft: 30 }}>
                                                Cabin class:
                                            </Typography>
                                            <td>
                                                <FormControl sx={{ m: 1, minWidth: 180 }} style={{ marginLeft: -150 }}>
                                                    <InputLabel id="demo-simple-select-required-label"></InputLabel>
                                                    <NativeSelect
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        style={{ width: 200 }}
                                                        value={cabin}
                                                        label="cabin"
                                                        onChange={event => setCabin(event.target.value)}
                                                    >
                                                        <MenuItem value="Economy">Economy </MenuItem>
                                                        <MenuItem value="Business">Business  </MenuItem>
                                                        <MenuItem value="First">First  </MenuItem>


                                                    </NativeSelect>
                                                </FormControl>
                                            </td>
                                        </tr>
                                    </table>

                                </div>
                            </Popover>


                            <br />
                            <div style={{ marginLeft: 750, marginRight: 20, width: 200, marginTop: -88 }}>

                                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                                    <DatePicker
                                        label="Departure date"
                                        mask="_//_"
                                        value={date}
                                        style={{ width: 50, marginTop: 30 }}
                                        onChange={(newValue) => {
                                            setDate(moment(new Date(newValue).toUTCString()).format("YYYY-MM-DDT22:00:00.000") + "Z");
                                        }}
                                        renderInput={(params) => <TextField {...params} />}

                                    />
                                </LocalizationProvider>
                            </div>
                            <div style={{ width: 200, marginLeft: 980, marginTop: -57 }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Return date"
                                        mask="_//_"

                                        id="outlined-start-adornment"
                                        sx={{ m: 1, width: '25ch' }}
                                        value={retDate}
                                        onChange={(newValue) => {
                                            setretDate(moment(new Date(newValue).toUTCString()).format("YYYY-MM-DDT22:00:00.000") + "Z");//new Date(new Date(newValue).toUTCString()).toISOString()
                                        }}// moment(new Date(newValue).toUTCString()).format("YYYY-MM-DDT00:00:00.000") + "Z"
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                            <Button variant="contained" style={{ position: 'center', marginLeft: 500, marginTop: 40, backgroundColor: '#5c0931', color: 'white', width: 200, height: 45 }} onClick={(event) => {

                                navigate("/SearchRes", { state: { flights: { from: from, to: to, date: date, arr: arr, dep: dep, tdep: tdep, tarr: tarr, ec: ec, bs: bs, first: first, flightNum: flightNum, retDate: "", searchRes: true }, cabin: cabin, adultPass: adult, childPass: child, id: id1 } });
                            }}>
                                Search
                            </Button>


                        </form>
                    </Paper>
                    {/* <h1 style={{marginLeft:90,color:"black"}}>  Search your flight:  <CompareArrowsIcon/><br/>Departure Flight</h1> */}

                </div>
                <br />
                <br />
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', fontSize: 30, marginLeft: 200 }} >Travel safely with us </h3>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 200, color: ' #5c0931', width: 1100 }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: 200 }} >
                    As one of the largest and most experienced global airlines throughout the COVID-19 crisis, you can rely on us to take you on your next journey safely.



                </Typography>
                <br />
                <br />


                <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', marginLeft: 25 }}>
                    {safetravel.map((image) => (
                        <ImageButton
                            focusRipple
                            key={image.title}
                            style={{
                                width: image.width,
                            }}
                            onClick={() => navigate("/SafeTravel")}

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

                <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', marginLeft: 80, marginTop: -25 }}>
                    {travelReq.map((image) => (
                        <ImageButton
                            focusRipple
                            key={image.title}
                            style={{
                                width: image.width,
                            }}
                            onClick={() => navigate("/TravelRequirments")}
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

                <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', marginLeft: 135, marginTop: -25 }}>
                    {whereWeTravel.map((image) => (
                        <ImageButton
                            focusRipple
                            key={image.title}
                            style={{
                                width: image.width,
                            }}
                            onClick={() => navigate("/WhereWeTravel")}
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






                <br />
                <br />
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', fontSize: 30, marginLeft: 200 }} >Find the best picks </h3>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 200, color: ' #5c0931', width: 1100 }} />
                <br />
                <br />

                <Stack direction="row" spacing={6}>

                    <Box sx={{ maxWidth: 400, flexGrow: 1, marginLeft: 25 }}>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: '#e0dfdf',
                            }}
                        >
                            <Typography>{imagesAni[activeStep].label}</Typography>
                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {imagesAni.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 255,
                                                display: 'block',
                                                maxWidth: 400,
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            style={{ backgroundColor: '#0dfdf' }}
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="NYC"
                            height="140"
                            image="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1800&h=900&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F19%2Fnew-york-city-evening-NYCTG0221.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: ' #5c0931', fontWeight: 'bold' }}>
                                New York City
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: ' #5c0931' }}>
                                From the heart of the city that never sleeps, we guarantee you one of the best trips that you will ever get to try!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white', marginLeft: 250 }}>Share</Button>
                            <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white' }}>Learn More</Button>
                        </CardActions>
                    </Card>
                </Stack>
                <br />
                <br />
                <Stack spacing={1} directon="row">
                    <Card sx={{ maxWidth: 345 }} style={{ width: 500, marginLeft: 200, height: 300 }}>
                        <CardMedia
                            component="img"
                            alt="Geneva"
                            height="140"
                            image="https://gulfbusiness.com/wp-content/uploads/2021/10/GettyImages-1302501094.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: ' #5c0931', fontWeight: 'bold' }}>
                                Geneva, Switzerland
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: ' #5c0931' }}>
                                One of the most astonishing cities in the world, and a city you will never regret visiting
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white', marginLeft: 130, marginTop: -20 }}>Share</Button>
                            <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white', marginTop: -20 }}>Learn More</Button>
                        </CardActions>
                    </Card>
                    <td />
                    <Card sx={{ maxWidth: 345 }} style={{ width: 650, marginLeft: 730, height: 300, marginTop: -307 }}>
                        <CardMedia
                            component="img"
                            alt="Geneva"
                            height="140"
                            image="https://www.themigrantyogi.com/wp-content/uploads/2019/12/Porto-4.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: ' #5c0931', fontWeight: 'bold' }}>
                                Porto, Portugal
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: ' #5c0931' }}>
                                “If there is one portion of Europe which was made by the sea more than another, Portugal is that slice, that portion, that belt. Portugal was made by the Atlantic.”
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white', marginLeft: 220, marginTop: -20 }}>Share</Button>
                            <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white', marginTop: -20 }}>Learn More</Button>
                        </CardActions>
                    </Card>

                </Stack>
                <br />
                <br />
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', fontSize: 30, marginLeft: 200 }} >Complement your journey</h3>
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: 200 }} >
                    Upgrade or save up to 20% when you purchase extra baggage, lounge access or meet and assist services online to make your journey even more memorable.



                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 275, color: ' #5c0931', width: 1100 }} />

                <br />
                <br />
                <br />

                <Stack spacing={3} direction="row">
                    <Card sx={{ maxWidth: 345 }} style={{ width: 350, marginLeft: 200, height: 300, marginTop: 0 }}>
                        <CardMedia
                            component="img"
                            alt="Lounges"
                            height="140"
                            image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/21/14/airport-lounge.jpg?width=982&height=726&auto=webp&quality=75"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: ' #5c0931', fontWeight: 'bold' }}>
                                Lounges
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: ' #5c0931' }}>
                                Enjoy your transit at any of our luxurious lounges worldwide
                            </Typography>

                        </CardContent>
                        <CardActions>

                            <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white', marginTop: -10, marginLeft: 100 }}>Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} style={{ width: 350, marginLeft: 90, height: 300, marginTop: 0 }}>
                        <CardMedia
                            component="img"
                            alt="Upgrade"
                            height="140"
                            image="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/brand/aircraft-interior/dine-on-demand/h1-western-dine-on-demand-premium.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: ' #5c0931', fontWeight: 'bold' }}>
                                Upgrade to premium
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: ' #5c0931' }}>
                                Upgrade your journey to enjoy our various available services
                            </Typography>

                        </CardContent>
                        <CardActions>

                            <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white', marginTop: -10, marginLeft: 100 }} onClick={() => {
                                navigate("/UpgradeJourmey")




                            }}>Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} style={{ width: 350, marginLeft: 90, height: 300, marginTop: 0 }}>
                        <CardMedia
                            component="img"
                            alt="Meet and assist"
                            height="140"
                            image="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/brand/almaha-services/h1-almaha-greeting.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: ' #5c0931', fontWeight: 'bold' }}>
                                Meet and Assist
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: ' #5c0931' }}>
                                Enjoy our meet and assist service, press on the button below to learn more and book your service
                            </Typography>

                        </CardContent>
                        <CardActions>

                            <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white', marginTop: -10, marginLeft: 100 }} onClick={() => navigate("/Meet")}>Learn More</Button>
                        </CardActions>
                    </Card>

                </Stack>
                <br />
                <br />
                <br />

                <Card sx={{ maxWidth: 345 }} style={{ width: 800, marginLeft: 400, height: 250, backgroundColor: '#e0dfdf' }} elevation={4}>
                    <CardActionArea>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" variant="h5" component="div" style={{ color: ' #5c0931', fontWeight: 'bold', marginLeft: 70, fontSize: 30 }}>
                                Never miss an update
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ fontSize: 15 }}>
                                Enter your email to get all the latest updates,offers and trips. Stay tuned!
                            </Typography>
                            <TextField id="outlined-basic" label="Enter your email" variant="outlined" style={{ marginTop: 30, marginLeft: 80, width: 300 }} />

                            <Stack spacing={2} sx={{ width: '100%' }}>
                                <Button size="medium" style={{ backgroundColor: '#5c0931', color: 'white', marginTop: 20, marginLeft: 130, width: 200 }} onClick={handleClickSnack}>Submit</Button>
                                <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                                    <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                                        Email submitted successfully!
                                    </Alert>
                                </Snackbar>


                            </Stack>


                        </CardContent>
                    </CardActionArea>
                </Card>

                <br />
                <br />
                <br />


            </div >

            }  )


        </div >
    )
}

export default UserProfile