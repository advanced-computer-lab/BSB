import React from 'react'
import { ModalFooter } from 'react-bootstrap';
import './flightseatmap.css';
import Checkbox from '@mui/material/Checkbox';
import App from './App';
import EditProfile from './EditProfile';
import Layout from './Layout';
import { CssBaseline } from '@mui/material';
import { Container } from '@material-ui/core';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { TableHead } from '@material-ui/core';
import { Paper } from '@mui/material';
import { TableRow } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import axios from 'axios';
import { styled } from '@mui/system';
import { Table } from '@material-ui/core';
import { TableCell } from '@mui/material';
import { tableCellClasses } from '@mui/material';
import { Button } from '@material-ui/core';
import { Stack } from 'react-bootstrap';
import { Snackbar } from '@mui/material';
import { Alert } from 'react-bootstrap';
//import { useState } from 'react';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };





function ChooseSeat(props) {
    const [cabinSeats, setCabinSeats] = useState([]);
    const [temp, setTemp] = useState([]);
    const [mariam, setMariam] = useState([]);
    const [reserved, setReserved] = useState([]);
    const [availableSeatsF, setAvailableSeats] = useState([]);
    const [isReserved, setisReserved] = useState("")
    const [bookClicked, setBookedClicked] = useState(false);
    //economycheckboes

    const [openSnackBar, setOpenSnackBar] = useState(false);

    const handleClickSB = () => {
        setOpenSnackBar(true);
    };

    const handleCloseSB = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);


    }

    //number of adults
    const [noOfAdults, setAduls] = useState({ adults: "" });
    const [noOfChildren, setChildren] = useState({ children: "" });

    // const buttonSubmitted = (event) => {

    // }





    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            // backgroundColor: theme.palette.common.black,
            // color: theme.palette.common.white,

        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 6,
        },
    }));
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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

    // var temp = [];
    var x = { name: "", seatResult: false }



    useEffect(() => {
        axios.post("http://localhost:8000/getEcoAvailableSeats", {
            _id: "6185ad7b250c46b0fd2322ea"
        }).then(res => {
            console.log("xxxx");
            setMariam(res.data);
        })


    }, [])


    // useEffect(() => {
    //     axios.post("http://localhost:8000/reserveSeats", {
    //         _id: "6185ad7b250c46b0fd2322ea",
    //         DepartSeats:[],
    //         cabin
    //     }).then(res => {
    //         console.log("xxxx");

    //     })


    // }, [])









    //    axios.post('http://localhost:8000/ViewTicketSummary',
    //         { _id: "61aa1afb3b59fcb8e4a6557a" }).
    //         then(res => {
    //             setInfo(res.data);

    //             setAduls({ adults: res.data[0].DepartId.DepartPassengersAdult})
    //             setChildren({ children: res.data[0].DepartId.DepartPassengersChild})


    //         })















    return (<div>
        {props.logout ? <App /> : (props.edit ? <EditProfile logout={props.logout} /> :
            <div>
                <Layout />
                {
                    <div>
                        
                        <TableContainer component={Paper} style={{
                            padding: 0,
                            margin: 0,
                            width: 800,
                            height: 500,
                            marginLeft: 100,
                            marginTop: -750

                        }} >
                            <Table stickyHeader sx={{
                                width: 500,
                                height: 300
                            }}
                                aria-label="customized table" size="small"
                            >
                                <TableHead position="fixed" >
                                    <TableRow>
                                        <StyledTableCell align="center" size="small">Seat Number</StyledTableCell>
                                        <StyledTableCell align="center" size="small">Choose Seat</StyledTableCell>
                                        <StyledTableCell align="center" size="small">Book Seat</StyledTableCell>





                                        <StyledTableCell align="center"> &nbsp; </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableRow> </TableRow>




                                {mariam.map(u => {
                                    return <TableRow key={u._id}>
                                        <StyledTableCell align="center" size="small">{u}</StyledTableCell>
                                        <StyledTableCell align="center" size="small" checked={checked}> <Checkbox {...label} onChange={handleChange}> </Checkbox></StyledTableCell>
                                        <StyledTableCell>
                                            <Stack spacing={2} sx={{ width: '20' }}>
                                                <Button variant="contained" onClick={axios.post("http://localhost:8000/reserveSeats", {
                                                    FlightID: props._id,
                                                    seats: u,
                                                    cabin: "Economy"

                                                }).then(res => {
                                                    console.log("xxxx");
                                                    console.log(res.data._id)

                                                })}> Submit</Button>
                                            </Stack>
                                            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSB} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} >
                                                <Alert onClose={handleCloseSB} severity="success" sx={{ width: '100%' }}>
                                                    Seat Reserved Successfully
                                                </Alert>
                                            </Snackbar>

                                        </StyledTableCell>

                                    </TableRow>
                                })}

                            </Table>

                        </TableContainer>


                    </div>

                })



            </div>
        )}
    </div>

    )
}

export default ChooseSeat
