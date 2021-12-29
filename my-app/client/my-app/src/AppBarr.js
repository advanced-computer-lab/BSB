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
import logo from './images/logo.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AirportHotel from './AirportHotel';
import LoginPage from './LoginPage';
import { useLocation, useNavigate } from 'react-router'







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
function AppBarr() {
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
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
    return (
        <div>
            <AppBar position="fixed" style={{ width: window.screen.width, backgroundColor: '#e0dfdf',opacity:0.95 }} color='transparent'    >

                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            component="img"
                            sx={{
                                height: 66,
                                marginLeft:5
                            }}
                            alt="Your logo."
                            src={logo}
                            onClick={()=>navigate('/Search')}
                        />
                        <Stack direction="row" spacing={6} style={{ marginLeft: 200 }}>
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
                                                navigate("/BaggageAllowance")




                                            }}>
                                                <LuggageIcon />
                                                Baggage Allowance
                                            </Button>
                                            <br />
                                            <br />


                                            <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                                navigate("/UpgradeJourmey")




                                            }}>
                                                <UpgradeIcon />
                                                Upgrade your journey
                                            </Button>
                                            <br />
                                            <br />

                                            <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                                navigate("/SpecialServices")




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
                                            navigate("/AirportHotel")




                                        }}>
                                            <HotelIcon />
                                            About airport hotel


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/Transacc")




                                        }}>
                                            <TransferWithinAStationIcon />
                                            Transit Accomodation


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/Lounges")




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
                                                    navigate("/Dining")




                                                }}>
                                                    Dining
                                                </Button>
                                                <br />
                                                <br />
                                                <WifiIcon style={{ marginLeft: 20 }} />
                                                <Button variant="outlined" style={{ height: 30, marginTop: -5 }} style={{ color: '#808294' }} onClick={() => {
                                                    navigate("/Wifi")




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
                                                    onClick={() => navigate('/Meet')}
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
                                                navigate("/TravelInsurance")




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



                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={()=>navigate('/TravelRequirments')}>
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
                                            navigate("/SafeTravel")




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
                                                navigate("/PrivilegeClub")




                                            }}>
                                                <HubIcon />
                                                About privlege club
                                            </Button>
                                            <br />
                                            <br />


                                            <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                                navigate("/FamilyProgramme")




                                            }}>
                                                <PeopleIcon />
                                                Family programs
                                            </Button>
                                            <br />
                                            <br />

                                            <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                                navigate("/StudentPrograms")




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
                                            navigate("/Earn")




                                        }}>
                                            Earn miles and points


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/Buygifts")




                                        }}>
                                            Buy, gift & transfer


                                        </Button>
                                        <br />
                                        <br />


                                        <Button variant="outlined" style={{ color: '#808294' }} onClick={() => {
                                            navigate("/Buypoints")




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
                                    navigate("/Help")
                                }}
                            >
                                Help
                            </Button>

                            <Box style={{ marginLeft: 420 }} >
                                <Button variant="outlined" onClick={() => {
                                    navigate("/Login")
                                }}>
                                    <AccountCircleIcon />
                                    Login  | Sign up
                                </Button>
                            </Box>
                        </Stack>










                    </Toolbar>
                </Container>
            </AppBar>

        </div>
    )
}

export default AppBarr;
