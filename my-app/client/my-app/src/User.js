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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));



function User() {
    //departure date
    const [value, setValue] = useState(null);
    //arrival date
    const [arrValue, setArrValue] = useState(null);
    //departure terminal
    const [depTerminal, setdepTerminal] = useState('');
    const handleChange = (event) => {
        setdepTerminal(event.target.value);
    };
    const [open, setOpenDep] = useState(false);
    const handleClose = () => {
        setOpenDep(false);
    };

    const handleOpen = () => {
        setOpenDep(true);
    };


    //arrival terminal
    const [arrTerminal, setarrTerminal] = useState('');
    const handleChangeArr = (event) => {
        setarrTerminal(event.target.value);
    };
    const [openArr, setOpenArr] = useState(false);
    const handleCloseArr = () => {
        setOpenArr(false);
    };

    const handleOpenArr = () => {
        setOpenArr(true);
    };

    //cabin types
    const [cabinTypes, setCabinTypes] = useState('');
    const handleChangeCabin = (event) => {
        setCabinTypes(event.target.value);
    };
    const [openCabin, setOpenCabin] = useState(false);
    const handleCloseCabin = () => {
        setOpenCabin(false);
    };

    const handleOpenCabin = () => {
        setOpenCabin(true);
    };

    //number of adults
    const [noOfAdults, setNoOfAdults] = useState('');
    const handleChangeAd = (event) => {
        setNoOfAdults(event.target.value);
    };
    const [openAd, setOpenAd] = useState(false);
    const handleCloseAd = () => {
        setOpenAd(false);
    };

    const handleOpenAd = () => {
        setOpenAd(true);
    };

    //number of children
    const [noOfChildren, setNoOfChildren] = useState('');
    const handleChangeCh = (event) => {
        setNoOfChildren(event.target.value);
    };
    const [openCh, setOpenCh] = useState(false);
    const handleCloseCh = () => {
        setOpenCh(false);
    };

    const handleOpenCh = () => {
        setOpenCh(true);
    };

    //search button
    const [searchClicked, setSearchClicked] = useState(false);

    //styles
    const useStyles = makeStyles({
        root: { maxWidth: 345, }
        ,
        media: { height: 150, }

    })
    const classes = useStyles();

    //border
    const styles = theme => ({
        notchedOutline: {
            borderWidth: "2px",
            borderColor: "grey"
        }
    });
    const borders = styles();
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    //alert message
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [alertOpen, setOpenAlert] = useState(false);

    const handleClickAlert = () => {
        setOpenAlert(true);
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    //navbar
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    //flight detailsconst [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const [dateDep, setDepDate] = useState("");
    const [dateRet, setRetDate] = useState("");
    const [arr, setArr] = useState("");
    const [dep, setDep] = useState("");
    const [tdep, setTdep] = useState("");
    const [tarr, setTarr] = useState("");
    const [children, setChildren] = useState("");
    const [adults, setAdults] = useState("");

    const [cabin, setCabin] = useState("");
    const [clicked, setClicked] = useState(false);
    const [show, setShow] = useState(false);
    const [logoutClicked, setlogOutClicked] = useState(false);
    const handleLogout = () => {
        setlogOutClicked(true);
        handleCloseNavMenu();
    };
    const [editProfile, setEditProfileClicked] = useState(false);
    const handleEditProfile = () => {
        setEditProfileClicked(true);
        handleCloseNavMenu();
    };
    const [viewResFlights, setResFlights] = useState(false);
    const handleResFlights = () => {
        setResFlights(true);
        handleCloseNavMenu();
    };
    const [homeClicked, setHomeClicked] = useState(false);
    const [exploreClicked, setExploreClicked] = useState(false);
    const [help, setHelpClicked] = useState(false);

    //experience button
    const [experienceClicked, setExperienceClicked] = useState(null);
    const openEClicked = Boolean(experienceClicked);
    const handleClickExperience = (event) => {
        setExperienceClicked(event.currentTarget);
    };
    const handleCloseExperience = () => {
        setExperienceClicked(null);
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

    //privilege button
    const [priClicked, setPriClicked] = React.useState(null);
    const openPri = Boolean(priClicked);
    const handleClickPri = (event) => {
        setPriClicked(event.currentTarget);
    };
    const handleClosePri = () => {
        setPriClicked(null);
    };
    //back button
    const [backButton, setBackButton] = useState(false);










    useEffect(() => {
        if (clicked) {
            axios.post('http://localhost:8000/updateFlights', {

                From: dep,
                To: arr

            })
                .then(function (response) {
                    console.log("xxx");
                })
            setShow(false);
            setClicked(false);
        }


    })









    return (
        <div>
            
            <AppBar position="fixed" style={{ width: window.screen.width }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <h3 style={{ marginLeft: 15 }}>BSB Airways</h3>
                        <Button
                            variant="secondary"
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openEClicked ? 'true' : undefined}
                            onClick={handleClickExperience}
                            style={{ marginLeft: 120, marginRight: 20 }}
                        >

                            Experience
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={experienceClicked}
                            open={openEClicked}
                            onClose={handleCloseExperience}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <LuggageIcon />

                                Baggage allowance</MenuItem>
                            <MenuItem onClick={handleClose}>
                                <UpgradeIcon />Upgrade your journey</MenuItem>
                            <MenuItem onClick={handleClose}>
                                <RoomServiceIcon />
                                Special services</MenuItem>
                        </Menu>

                        <Button
                            variant="secondary"
                            id="secondary"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openBClicked ? 'true' : undefined}
                            onClick={handleClickBook}
                            style={{ marginRight: 20 }}
                        >
                            Book
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={bookClicked}
                            open={openBClicked}
                            onClose={handleCloseBook}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            style={{ marginLeft: 100 }}
                        >
                            <MenuItem onClick={handleClose}>
                                <HotelIcon />
                                Hotels
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <CarRentalIcon />
                                Car Rentals
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <GroupsIcon />
                                Meet and greet</MenuItem>
                        </Menu>
                        <Button
                            variant="secondary"
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
                            anchorEl={priClicked}
                            open={openPri}
                            onClose={handleClosePri}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            style={{ marginLeft: 100 }}
                        >
                            <MenuItem onClick={handleClose}>
                                <HubIcon />
                                About Privilege Club
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <PeopleIcon />
                                Family Programs
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <CardTravelIcon />
                                Cash and Miles</MenuItem>
                            <MenuItem onClick={handleClose}>
                                <SchoolIcon />
                                Student Programs</MenuItem>
                        </Menu>













                        <Box sx={{ flexGrow: 0 }} style={{ marginLeft: 800 }}>
                            <Tooltip title="Open settings">

                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar />
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
                                <MenuItem onClick={handleEditProfile}>
                                    Edit Profile
                                </MenuItem>

                                <MenuItem onClick={handleLogout}>
                                    Logout</MenuItem>
                                <MenuItem onClick={handleResFlights}>
                                    View reserved flights</MenuItem>



                            </Menu>
                        </Box>

                        <Button onClick={(event) => setBackButton(true)} >
                            Back
                        </Button>

                    </Toolbar>
                </Container>
            </AppBar>


            <div>
                
              
                
            {searchClicked ? <ChooseSeat logout={logoutClicked}  edit={editProfile}/> :  (editProfile ? <EditProfile  logout={logoutClicked} back={backButton}  component= {<User/>} /> :(logoutClicked || backButton? <App/>  : (viewResFlights ? <ViewResFlights edit={editProfile}  logout={logoutClicked} back={backButton}  component= {<User/>}/> :
                    <div style={{marginTop:-100}}>
                        <Layout /> 


                        <div style={{ position: 'relative', marginLeft: 500, marginTop: -800}}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                                    color: 'grey'
                                }}
                                noValidate
                                autoComplete="off"
                                position='right'
                            >
                                <div style={{marginLeft:-400, marginTop:-90}}>
                                    <h1 style={{ position: 'relative', marginTop: -50 }}>Book your flight now</h1>
                                    <div>

                                    <TextField

                                        required
                                        id="outlined-error"
                                        label="Depature Airport"
                                        defaultValue=""
                                        onChange={event => setDep(event.target.value)}





                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Arrival Airport"
                                        defaultValue=""
                                        onChange={event => setArr(event.target.value)}

                                    />

                                    <br />
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Departure Date"
                                            value={value}
                                            onChange={[(newValue) => {
                                                setValue(newValue)
                                            }, (event) => { setDepDate(event.target.value) }]
                                            }
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>

                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Return Date"
                                            value={arrValue}
                                            onChange={[(newValue) => {
                                                setValue(newValue)
                                            }, (event) => { setRetDate(event.target.value) }]
                                            }
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>

                                    <br />
                                    <FormControl sx={{ m: 1, minWidth: 261 }}>
                                        <InputLabel id="demo-controlled-open-select-label">Departure Terminal</InputLabel>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            open={open}
                                            onClose={handleClose}
                                            onOpen={handleOpen}
                                            value={depTerminal}
                                            label="Departure Terminal"
                                            onChange={[handleChange, (event) => { setTdep(event.target.value) }]}
                                        >
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 261 }}>
                                        <InputLabel id="demo-controlled-open-select-label">Arrival Terminal</InputLabel>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            open={openArr}
                                            onClose={handleCloseArr}
                                            onOpen={handleOpenArr}
                                            value={arrTerminal}
                                            label="Arrival Terminal"
                                            onChange={[handleChangeArr, (event) => { setTarr(event.target.value) }]}
                                        >
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <br />





                                    <br />
                                    <FormControl sx={{ m: 1, minWidth: 261 }}>
                                        <InputLabel id="demo-controlled-open-select-label">No of Adults</InputLabel>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            open={openAd}
                                            onClose={handleCloseAd}
                                            onOpen={handleOpenAd}
                                            value={noOfAdults}
                                            label="No of Adult seats"
                                            onChange={[handleChangeAd, (event) => { setAdults(event.target.value) }]}
                                        >
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={3}>4</MenuItem>
                                            <MenuItem value={3}>5</MenuItem>

                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 261 }}>
                                        <InputLabel id="demo-controlled-open-select-label">No of Children</InputLabel>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            open={openCh}
                                            onClose={handleCloseCh}
                                            onOpen={handleOpenCh}
                                            value={noOfChildren}
                                            label="No of Children seats"
                                            onChange={[handleChangeCh, (event) => { setChildren(event.target.value) }]}
                                        >
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={3}>4</MenuItem>
                                            <MenuItem value={3}>5</MenuItem>

                                        </Select>
                                    </FormControl>
                                    <br />




                                    <FormControl sx={{ m: 1, minWidth: 261 }}>
                                        <InputLabel id="demo-controlled-open-select-label">Cabin Type</InputLabel>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            open={openCabin}
                                            onClose={handleCloseCabin}
                                            onOpen={handleOpenCabin}
                                            value={cabinTypes}
                                            label="Cabin Types"
                                            onChange={[handleChangeCabin, (event) => { setCabin(event.target.value) }]}
                                        >
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={1}>Economy</MenuItem>
                                            <MenuItem value={2}>Business Class</MenuItem>
                                            <MenuItem value={3}>First Class</MenuItem>

                                        </Select>

                                    </FormControl>
                                    <br />

                                    <Button variant="secondary" style={{ position: 'center', marginLeft: 470, marginTop: -90 }} onClick={(event) => setSearchClicked(true)}>
                                        Search
                                    </Button>
                                    </div>
                                    <div style={{marginLeft:450 , marginTop:70}}>

                                    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, marginTop: -60 }}>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                                    <Img alt="trip" src="https://static.dezeen.com/uploads/2020/11/eixample-barcelona-aerial-view_dezeen_2364_sq.jpg" />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1" component="div" color="#112D4E" fontWeight="bold">
                                                            Barcelona
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom color="#3F72AF">
                                                            A trip you do not want to miss!
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Check all the details now
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="secondary" style={{ position: 'center', marginLeft: 100, marginTop: -15 }} onClick={(event) => setSearchClicked(true)}>
                                                            Explore
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 300, flexGrow: 1, marginTop: 10 }}>
                                        <Grid container spacing={2} sx={{ height: 200 }}>

                                            <Grid item xs={12} sm container >
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1" component="div" color="#112D4E" fontWeight="bold">
                                                            Enter your email to get the latest updates
                                                        </Typography>
                                                        <TextField

                                                            required
                                                            id="outlined-error"
                                                            label="Email"
                                                            defaultValue=""

                                                        />

                                                    </Grid>
                                                    <Grid item>
                                                        <Stack spacing={2} sx={{ width: '100%' }}>
                                                            <Button variant="secondary" style={{ position: 'center', marginLeft: 90, marginTop: -15, width: 80 }} onClick={handleClickAlert}>
                                                                Submit
                                                            </Button>
                                                            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
                                                                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                                                                    Email submitted successfully
                                                                </Alert>
                                                            </Snackbar>


                                                        </Stack>



                                                    </Grid>
                                                </Grid>
                                                <Grid item>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    </div>
















                                </div>
                            </Box>
                            





                        </div>
                        
                    </div>
                )))}
            </div>
        </div>


    )
}

export default User
