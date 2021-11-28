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
    const [search, setSearchButton] = useState(false);
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




    return (

        <div style={{ position: 'relative', marginLeft: -850, marginTop: 100 }}>
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

                    <TextField

                        required
                        id="outlined-error"
                        label="Depature Airport"
                        defaultValue=""





                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Arrival Airport"
                        defaultValue=""
                    />
                    <br />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Departure Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Return Date"
                            value={arrValue}
                            onChange={(newValue) => {
                                setArrValue(newValue);
                            }}
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
                            onChange={handleChange}
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
                            onChange={handleChangeArr}
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
                            onChange={handleChangeAd}
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
                            onChange={handleChangeCh}
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
                            onChange={handleChangeCabin}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>Economy</MenuItem>
                            <MenuItem value={2}>Business Class</MenuItem>
                            <MenuItem value={3}>First Class</MenuItem>

                        </Select>

                    </FormControl>
                    <br />

                    <Button variant="secondary" style={{ position: 'center', marginLeft: 270, marginTop: -90 }} onClick={(event) => setSearchButton(true)}>
                        Search
                    </Button>



                    <Card className={classes.root} sx={{
                        p: 1,
                        borderRadius: 2,
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                        marginLeft: 200,
                        marginTop: -53
                    }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="C:\Users\reema\OneDrive\Desktop\BSB\my-app\client\my-app\src\images\tripupdates.jpeg"
                            alt="trips"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color='#005792'>
                                Enter your email to get the recent updates
                            </Typography>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />

                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="secondary" style={{ position: 'center', marginLeft: 120, }} >Submit</Button>


                        </CardActions>
                    </Card>














                </div>
            </Box>





        </div>
    )
}

export default User
