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
            {searchClicked ? <DepartureList /> :
                <div>


                    <div style={{ position: 'relative', marginLeft: -850, marginTop: 20 }}>
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
                            <div>
                                <h1 style={{ position: 'relative', marginTop: 50 }}>Book your flight now</h1>

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




                                <FormControl sx={{ m: 1, minWidth: 261, marginLeft: -34 }}>
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

                                <Button variant="secondary" style={{ position: 'center', marginLeft: 270, marginTop: -90 }} onClick={(event) => setSearchClicked(true)}>
                                    Search
                                </Button>
                                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, marginLeft: 200, marginTop: -60 }}>
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
                                                    <Button variant="secondary" style={{ position: 'center', marginLeft: 10, marginTop: -15 }} onClick={(event) => setSearchClicked(true)}>
                                                        Explore
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 300, flexGrow: 1, marginLeft: 200, marginTop: 10 }}>
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
                        </Box>





                    </div>
                </div>
            }
        </div>


    )
}

export default User
