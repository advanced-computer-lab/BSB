import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@mui/material/Button';
import CardActions from "@material-ui/core/CardActions";
import axios from 'axios';

import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ImLocation2 } from 'react-icons/im';
import help from './images/help.jpg'
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Stack } from "react-bootstrap";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Help() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const type = [
        {
            value: 'co',
            label: 'Complain',
        },
        {
            value: 'ca',
            label: 'Complement',
        }
    ];
    const classtype = [
        {
            value: 'ec',
            label: 'Economy',
        },
        {
            value: 'bu',
            label: 'Buisness',
        },
        {
            value: 'fi',
            label: 'First',
        }
    ];


    const mu = [
        {
            value: 'ai',
            label: 'Airport',
        },
        {
            value: 'bs',
            label: 'Baggage Service',
        },
        {
            value: 'ob',
            label: 'OnBoard',
        },
        {
            value: 'fd',
            label: 'Flight Delay',
        },
        {
            value: 'rt',
            label: 'Reservation&Ticketing',
        },
        {
            value: 'ot',
            label: 'Others',
        }
    ];

    const [types, settypes] = React.useState('co');

    const handleChange1 = (event) => {
        settypes(event.target.value);
    };

    const [mus, setmus] = React.useState('ec');

    const handleChange2 = (event) => {
        setmus(event.target.value);
    };

    const [classtypes, setclasstypes] = React.useState('ai');

    const handleChange3 = (event) => {
        setclasstypes(event.target.value);
    };


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
    return (
        <div style={{ width: window.screen.width }}>
            <div
                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    marginTop: -300,
                    background: `url(${help})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 400, width: window.screen.width
                }}
            >
                <div>

                    <Typography style={{ fontSize: 40, fontWeight: "bold", marginTop: 100, color: ' #5c0931', marginLeft: 140 }}

                        align="left"
                        gutterBottom
                    >
                        How can we help?

                    </Typography>

                    <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 230, color: ' #5c0931', marginLeft: 70 }}

                        align="left"
                        gutterBottom
                    >
                        <Link style={{ color: '#5c0931' }} href="#" onClick={() => navigate("/Search")}>Home</Link> > Help

                    </Typography>
                    <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />

                    <Box sx={{ width: 800, typography: 'body1' }}>
                        <TabContext style={{ color: '#5c0931', marginLeft: 100 }} value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList style={{ color: '#5c0931', marginLeft: 100 }} onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab style={{ fontSize: 20, fontWeight: "bold", color: '#5c0931' }} label="Feedback" value="1" />
                                    <Tab style={{ fontSize: 20, fontWeight: "bold", color: '#5c0931' }} label="Contact Us" value="2" />
                                    <Tab style={{ fontSize: 20, fontWeight: "bold", color: '#5c0931' }} label="Find Us " value="3" />
                                </TabList>
                            </Box>
                            <TabPanel style={{ color: '#5c0931' }} value="1">
                                <Card
                                    style={{
                                        width: 1200,
                                        marginLeft: 120,
                                        height: 500,
                                        backgroundColor: "#EBECF0", opacity: 0.9
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            style={{ fontWeight: "bold", color: ' #5c0931' }}
                                            //color="textPrimary"
                                            align="left"
                                            variant="h6"
                                            component="h2"
                                            gutterBottom
                                        >


                                            Please select from the list of topics in the drop-down menu below and fill out the form to make a complaint.

                                            <Box
                                                component="form"
                                                sx={{
                                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <br />
                                                <div>
                                                    <TextField
                                                        id="outlined-select-currency"
                                                        select
                                                        label="Feedback type"
                                                        value={types}
                                                        onChange={handleChange1}
                                                    // helperText="Please select your currency"
                                                    >
                                                        {type.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
                                                    {/* style={{marginLeft:300,marginTop:-60}} */}

                                                    <TextField
                                                        id="outlined-select-currency"
                                                        select
                                                        label="Related to"
                                                        value={mus}
                                                        onChange={handleChange2}
                                                    // helperText="Please select your currency"
                                                    >
                                                        {mu.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>

                                                    <TextField
                                                        id="outlined-select-currency"
                                                        select
                                                        label="Booking Class"
                                                        value={classtypes}
                                                        onChange={handleChange3}
                                                    // helperText="Please select your currency"
                                                    >
                                                        {classtype.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>

                                                    <TextField style={{ marginLeft: -875, marginTop: 100 }} id="outlined-basic" label="First name" variant="outlined" />
                                                    <TextField style={{ marginLeft: 7, marginTop: 100 }} id="outlined-basic" label="Last name" variant="outlined" />
                                                    <TextField style={{ marginLeft: 10, marginTop: 100 }} id="outlined-basic" label="Email address" variant="outlined" />
                                                    <TextField style={{ marginLeft: -875, marginTop: 200 }} id="outlined-basic" label="Country" variant="outlined" />
                                                    <TextField style={{ marginLeft: 10, marginTop: 200 }} id="outlined-basic" label="Destination" variant="outlined" />

                                                    <TextField style={{ marginLeft: -580, marginTop: 300 }} id="outlined-basic" label="Flight Number" variant="outlined" />
                                                    <TextField style={{ marginTop: 300 }} id="outlined-basic" label="Booking Number" variant="outlined" />

                                                </div>
                                                <div>

                                                    <TextField style={{ marginTop: -370, marginLeft: 900, width: 200, height: 100 }}
                                                        id="filled-multiline-static"
                                                        label="Details*"

                                                        multiline
                                                        rows={13}
                                                        //defaultValue="Details*"
                                                        variant="filled"
                                                    />


                                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                                        <Button style={{ background: '#5c0931', fontSize: 15, marginTop: -30, marginLeft: 400, width: 200, color: 'white' }} variant="secondary" onClick={handleClick}>Submit</Button>
                                                        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                                                            <Alert severity="success" style={{ backgroundColor: 'green' }}>This is a success message!</Alert>
                                                        </Snackbar>


                                                    </Stack>

                                                </div>
                                            </Box>
                                        </Typography>
                                    </CardContent>
                                </Card></TabPanel>
                            <TabPanel style={{ color: '#5c0931' }} value="2">
                                <Card
                                    style={{ width: 1200, height: 200, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                                    <CardContent>
                                        <Typography style={{ fontSize: 40, marginTop: 25, marginRight: 100, color: ' #5c0931' }}

                                            align="left"
                                            gutterBottom
                                        >

                                            Denmark

                                        </Typography>
                                        <Typography style={{ marginfontSize: 30, marginTop: 25, marginRight: 100, color: ' #5c0931' }}

                                            align="left"
                                            gutterBottom
                                        >

                                            Contact center number  : +45 32725806
                                            <br />
                                            Hours of Operation  : Monday – Saturday 08:00 – 18:00, Sunday 09:00 – 17:00 CET

                                        </Typography>
                                    </CardContent>
                                </Card>
                                <br />
                                <Card
                                    style={{ width: 1200, height: 200, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                                    <CardContent>
                                        <Typography style={{ fontSize: 40, marginTop: 20, marginRight: 100, color: ' #5c0931' }}

                                            align="left"
                                            gutterBottom
                                        >

                                            Spain

                                        </Typography>

                                        <Typography style={{ marginfontSize: 30, marginTop: 25, marginRight: 100, color: ' #5c0931' }}

                                            align="left"
                                            gutterBottom
                                        >

                                            Contact center number : 900807681
                                            <br />
                                            Hours of Operation : Monday-Friday from 9:00h to 18:00h
                                        </Typography></CardContent></Card>
                                <br />
                                <Card
                                    style={{ width: 1200, height: 200, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                                    <CardContent>
                                        <Typography style={{ fontSize: 40, marginTop: 20, marginRight: 100, color: ' #5c0931' }}

                                            align="left"
                                            gutterBottom
                                        >
                                            Switzerland

                                        </Typography>
                                        <Typography style={{ marginfontSize: 40, marginTop: 25, marginRight: 100, color: ' #5c0931' }}

                                            align="left"
                                            gutterBottom
                                        >

                                            Contact center number : +41 31 537 23 21
                                            <br />
                                            Hours of Operation : Monday - Friday 08:00 - 18:00
                                        </Typography></CardContent></Card>
                            </TabPanel>

                            <TabPanel style={{ color: '#5c0931' }} value="3">
                                <Card
                                    style={{ width: 1200, height: 200, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                                    <CardContent>
                                        <Typography style={{ fontSize: 30, marginTop: 0, marginRight: 100, color: ' #5c0931' }}

                                            align="left"
                                            gutterBottom
                                        >

                                            <ImLocation2 /> Airport office


                                        </Typography>
                                        <Typography style={{ fontSize: 15, marginTop: 10, marginRight: 100, color: ' #5c0931' }}

                                            align="left"
                                            gutterBottom
                                        >



                                            Cairo Airport –Terminal 2 - Departure Hall

                                            Cairo, Egypt



                                        </Typography>
                                        <br />
                                        <Typography style={{ fontSize: 15, marginTop: 10, marginRight: 100, color: ' #5c0931' }}

                                            align="left"
                                            gutterBottom
                                        >


                                            Working hours : Tuesday to Saturday :1030-1830, Sunday and Monday: Closed


                                        </Typography>
                                    </CardContent></Card> </TabPanel>
                        </TabContext>
                    </Box>
                    <br/>
                    <br/>

                </div></div>
        </div>
    )
}


export default Help;