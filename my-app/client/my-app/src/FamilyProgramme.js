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
import AppBarr from './AppBarr';
import familyPrograms from './images/familyPrograms.jpg'
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


function createData(x, y, z, w, q) {
    return { x, y, z, w, q };
}

const rows = [
    createData('Accrual on flights (% of base Qmiles)', '100%', '100%', '100%', '100%'),
    createData('Accrual on non-air partner transactions', '100%', '100%', '100%', '100%'),
    createData('Nominees', 9, "", "", ""),
    createData('Minimum age to enrol', "2 years", "", "", ""),
    createData('Relatives allowed', "Spouse, children older than two years, parents and parents of spouse.", "", "", ""),
];
function FamilyProgramme() {
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
                    background: `url(${familyPrograms})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 600, width: window.screen.width,
                    marginTop: -90,

                }}


            >
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 130, marginLeft: -950, fontSize: 35 }} >Family programs</h3>
                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 380, marginLeft: 50, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#" onClick={()=>navigate("/Search")}> Home</Link> > Family Programs

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: 50 }} >Sit back, relax and enjoy a fully lie-flat bed, award-winning service, delectable cuisine on-demand and extensive entertainment options.
                    Get the most out of your Privilege Club membership when you share your benefits with your family. Our Family Programme offers main members the option of pooling Qmiles earned by nominated family members into their accounts for quicker awards.

                </Typography>
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: 50 }} >
                    Our Family Programme main members across all tiers can nominate up to nine close family members, choosing from their spouse, children older than two years, parents and the parents of their spouse The higher your membership level, the more Qmiles your family members will earn.
                </Typography>

                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: 50 }} >
                    Silver, Gold or Platinum members have the option to receive individual membership cards for their family members. Burgundy members will be able to print, save or email the digital cards of their family members.  They can then start earning Qmiles whenever they fly with BSB Airways or any oneworld member airline, or when they use the services of our other airline or non-airline partners. All Qmiles earned by family members are credited to the main member’s account. Family members’ flight activities do not earn Qpoints.
                </Typography>


                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: -1000, fontWeight: 'bold', fontSize: 30 }} >
                    Qmiles earn chart
                </Typography>
                <br />
                <br />
                <TableContainer component={Paper} style={{ width: 1000, marginLeft: 250 }}>
                    <Table sx={{ minWidth: 300 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell  >Description</StyledTableCell>
                                <StyledTableCell align="center">Burgundy</StyledTableCell>
                                <StyledTableCell align="center">Silver</StyledTableCell>
                                <StyledTableCell align="center">Gold</StyledTableCell>
                                <StyledTableCell align="center">Platinum</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.x}>
                                    <StyledTableCell component="th" scope="row" style={{ color: '#5c0931' }}>
                                        {row.x}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" style={{ color: '#5c0931' }}>{row.y}</StyledTableCell>
                                    <StyledTableCell align="center" style={{ color: '#5c0931' }}>{row.z}</StyledTableCell>
                                    <StyledTableCell align="center" style={{ color: '#5c0931' }}>{row.w}</StyledTableCell>
                                    <StyledTableCell align="center" style={{ color: '#5c0931' }}>{row.q}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />
                <br />

            </div>

        </div>
    )
}

export default FamilyProgramme
