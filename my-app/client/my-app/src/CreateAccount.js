
import React from 'react'
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

const countries = [
    {
        value: 'EGP',
        label: '+20',
    },
    {
        value: 'ES',
        label: '+34',
    },
    {
        value: 'US',
        label: '+1',
    },

    {
        value: 'UK',
        label: '+44',
    },
    {
        value: 'TUR',
        label: '+90',
    },

    {
        value: 'CH',
        label: '+41',
    },

];
const titles = [
    {
        value: 'MISS',
        label: 'Ms',
    },
    {
        value: 'MISTRESS',
        label: 'Mrs',
    },
    {
        value: 'MISTER',
        label: 'Mr',
    },


];


const homecountry = [
    {
        value: 'Egypt',
        label: 'EG',
    },
    {
        value: 'Spain',
        label: 'ESP',
    },
    {
        value: 'United State of America',
        label: 'USA',
    },
    {
        value: 'UnIted Kingdom',
        label: 'UK',
    },
    {
        value: 'Switzerland',
        label: 'CH',
    },
    {
        value: 'Netherlands',
        label: 'NE',
    },
    {
        value: 'Belgium',
        label: 'BE',
    },
    {
        value: 'Saudi Arabia',
        label: 'KSA',
    },
    {
        value: 'Australia',
        label: 'AU',
    },
    {
        value: 'Brazil',
        label: 'BR',
    },
    {
        value: 'Canada',
        label: 'CA',
    },
    {
        value: 'Germany',
        label: 'DE',
    },
    {
        value: 'Italy',
        label: 'IT',
    },
    {
        value: 'Turkey',
        label: 'TUR',
    },
];

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function CreateAccount() {


    const navigate = useNavigate();

    const images = [{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyC8qitchp3CTc0tRNk5VHwTmXw7Gt7zzqMA&usqp=CAU', title: 'On Board', width: '50%' }]

    const meet = [{ url: 'https://pearlassist.com/media/catalog/product/cache/16cbb02c6aa0557438510836af2c5f3b/m/a/maas-arrival-bw_9.jpg', title: 'Meet', width: '50%' }]

    const group = [{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fzOl3e33qv7675TVc3MMySxSiIXwzNvUxQ&usqp=CAU', title: 'Group travel', width: '60%' }]

    const corporate = [{ url: 'https://fifocapital.co.nz/wp-content/uploads/2020/10/Corporate-travel-best-practices.jpg', title: 'Corporate travel', width: '70%' }]
    const baggage = [{ url: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/miscellaneous/baggages/h1-extra-baggage.jpg', title: 'Extra baggage', width: '70%' }]

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

    //snackbar

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    // details

    const [createAccountClicked, setCreatAccountClicked] = useState("");



    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passport, setPassport] = useState("");
    const [error, setError] = useState("");





    //.catch(err => {console.log(err)});


    return (
        <div style={{ width: window.screen.size }}>
            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url('https://www.puredestinations.co.uk/wp-content/uploads/2016/06/header-Qatar-Airways-introduces-Dreamliner-aircraft-to-Birmingham-International-Airport--1600x500.jpg')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 600, width: window.screen.width,
                    marginTop: -90,

                }}


            >
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 130, marginLeft: -950, fontSize: 35 }} >Welcome Abroad</h3>
                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 270, marginLeft: 50, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} color='#5c0931' href="#" onClick={() => navigate("/Search")}>Home</Link> > Sign up

                </Typography>
                <hr />
                <h4 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginLeft: -40, marginTop: -20 }} >Enter your credentials </h4>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931', marginLeft: 0 }} />
                <Paper style={{
                    width: 1200, height: 950, color: '#e6e5e5'
                    , marginTop: 0, marginLeft: 100, opacity: 0.8
                }}>

                    <Stack spacing={3} style={{ marginLeft: 100 }}>


                        <TextField
                            required
                            id="outlined-required"
                            onChange={event => setEmail(event.target.value)}
                            style={{ width: 890, marginLeft: 80, marginTop: 40 }}
                            label="Enter your email "
                            defaultValue=""
                        />
                        <Stack direction="row" spacing={4}>
                            <TextField
                                required
                                type='password'
                                id="outlined-required"
                                onChange={event => setPassword(event.target.value)}
                                style={{ width: 400, marginLeft: 80, marginTop: 40 }}
                                label="Enter your password "
                                defaultValue=""
                            />
                            <TextField
                                required
                                id="outlined-required"
                                style={{ width: 400, marginLeft: 60, marginTop: 40 }}
                                label="Enter your mobile number"
                                defaultValue=""
                            />

                            {/* <FormControl sx={{ m: 1, width: '25ch' }} style={{ marginLeft: 80, width: 400 }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Enter your password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={(event) => { handleChange('password'); setPassword(event.target.value) }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl> */}

                            {/* <FormControl sx={{ m: 1, width: '25ch' }} style={{ marginLeft: 80, width: 400, marginTop: 7 }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Re-type your password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={(event) => { handleChange('password'); setPassword(event.target.value) }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl> */}
                            <br />
                        </Stack>
                        <Stack direction="row" spacing={4}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Choose your country code"
                                value={country}
                                onChange={handleChangeCountry}
                                helperText="Please select your country"
                                style={{ width: 400, marginLeft: 80 }}
                            >
                                {countries.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}  ({option.label})
                                    </MenuItem>
                                ))}
                            </TextField>


                        </Stack>




                    </Stack>
                    <hr />
                    <Stack style={{ marginLeft: 100 }}>
                        <h4 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginLeft: -40 }} >Personal details </h4>
                        <Stack style={{ marginTop: 30 }}>

                            <Stack direction="row" spacing={2} style={{ marginTop: 20 }}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    onChange={event => setFirstName(event.target.value)}
                                    style={{ width: 243, marginLeft: 80, marginTop: 20 }}
                                    label="First name (as per passport)"
                                    defaultValue=""
                                />
                                <TextField

                                    id="outlined-required"

                                    style={{ width: 243, marginLeft: 80, marginTop: 15 }}
                                    label="Middle name (optional)"
                                    defaultValue=""
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    onChange={event => setLasttName(event.target.value)}
                                    style={{ width: 243, marginLeft: 80, marginTop: 15 }}
                                    label="Last name (as per passport)"
                                    defaultValue=""
                                />


                            </Stack>
                            <br />
                            <Stack spacing={2} style={{ marginTop: 20 }}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Choose your title"
                                    value={title}
                                    onChange={handleChangeTitle}
                                    style={{ width: 400, marginLeft: 80 }}
                                >
                                    {titles.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    required
                                    id="outlined-required"
                                    onChange={event => setPassport(event.target.value)}
                                    style={{ width: 400, marginLeft: 550, marginTop: -55 }}
                                    label="Passport number"
                                    defaultValue=""
                                />

                            </Stack>
                            <Stack direction="row" spacing={2} style={{ marginTop: 25, marginLeft: 80 }}>


                                <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DatePicker
                                        label="Date of birth"
                                        value={dob}
                                        onChange={(newValue) => {
                                            setDOB(newValue);
                                        }}


                                        renderInput={(params) => <TextField {...params} style={{ width: 400 }} />}
                                    />
                                </LocalizationProvider>

                                <FormControl component="fieldset" style={{ marginLeft: 80 }}>
                                    <FormLabel component="legend" style={{ marginLeft: -60, fontWeight: 'bold' }}>Gender</FormLabel>
                                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                        <FormControlLabel value="female" control={<Radio style={{ color: '#808294' }} />} label="Female" style={{ color: '#5c0931' }} />
                                        <FormControlLabel value="male" control={<Radio style={{ color: '#808294' }} />} label="Male" style={{ color: '#5c0931' }} />


                                    </RadioGroup>
                                </FormControl>
                                <br />
                                <br />
                                <br />

                            </Stack>

                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Choose your home country"
                                value={homeCountry}
                                onChange={handleChangeHomeCountry}
                                style={{ width: 400, marginLeft: 80, marginTop: 15 }}

                            >
                                {homecountry.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <FormGroup style={{ marginLeft: 70, marginTop: 30 }}>
                                <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="I agree to the Terms and Conditions of the Airways and accept the Privacy Policy." style={{ color: '#5c0931' }} />

                            </FormGroup>
                            <p style={{ color: 'red' }}>
                                {error}
                            </p>
                            <p style={{ color: '#5D6A78',marginTop:-15,fontWeight:'bold',fontFamily:'Verdana' }}> 
                               Note: Your username is the first part of your email i.e BSB@gmail.com
                                <br/>
                                username: BSB
                            </p>
                        </Stack>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Button variant="contained" style={{ color: 'white', width: 400, marginLeft: 650, marginTop: -5, backgroundColor: '#5c0931' }} onClick={() => {
                                axios.post('http://localhost:8000/usersRegister', {

                                    firstName: firstName,
                                    lastName: lastName,
                                    passport: passport,
                                    email: email,
                                    password: password

                                })
                                    .then(function (response) {
                                        console.log("xxx");
                                        console.log(response.data)
                                        console.log("added succesfully")
                                        handleClick();

                                    }).catch(error => {
                                        console.log(error.response)
                                        //  setError(error.response.data);
                                    })
                            }




                            } >
                                Create your account
                            </Button>

                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" style={{ width: 500 }} style={{ backgroundColor: 'green', color: 'white' }}>
                                    Account created successfully
                                </Alert>
                            </Snackbar>


                        </Stack>


                    </Stack>
                </Paper>
                <br />
                <br />
                <br />
            </div>
        </div >
    )
}

export default CreateAccount
