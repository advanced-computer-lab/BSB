import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlightCard from './FlightCard';
import { useState, useEffect } from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CardBody from '@mui/material/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dateFormat from 'dateformat';
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import { Snackbar, Alert } from '@mui/material'
//import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AirlineSeatLegroomNormalIcon from '@mui/icons-material/AirlineSeatLegroomNormal';
export default function Reservation(props) {

    const DepDay = dateFormat(props.departure.FlightDate, "dd");
    const location = useLocation();
    const { id } = location.state;
    const RetDay = dateFormat(props.returnFlight.FlightDate, "dd");
    const [details, setDetails] = useState("");
    //const[clicked, setClicked] = useState(false);
    const [openD, setOpenD] = useState(false);
    const [openS, setOpenS] = useState(false);
    const [openDR, setOpenDR] = useState(false);
    const [openSR, setOpenSR] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const navigate = useNavigate();
    const handleClickOpenS = () => {
        setOpenS(true);
    };
    const handleClickOpenD = () => {
        setOpenD(true);
    };
    const handleCloseD = () => {
        setOpenD(false);
    };
    const handleCloseS = () => {
        setOpenS(false);
    };
    const handleClickOpenDR = () => {
        setOpenDR(true);
    };
    const handleCloseDR = () => {
        setOpenDR(false);
    };
    const handleClickOpenSR = () => {
        setOpenSR(true);
    };
    const handleCloseSR = () => {
        setOpenSR(false);
    };
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    //dialog 2
    const [openDialog2, setOpenDialog2] = React.useState(false);

    const handleClickOpenDialog2 = () => {
        setOpenDialog2(true);
    };

    const handleCloseDialog2 = () => {
        setOpenDialog2(false);
    };

    const child = 1;
    const adult = 2
    function setDets(flight, cabin, adult, child) {
        axios.post('http://localhost:8000/getFlightDetails', {
            _id: flight._id,
            cabin: cabin,
            childPass: child,
            adultPass: adult
        })
            .then(function (response) {
                console.log("xxx");

                console.log(response._id);
                console.log(response);
                setDetails(response.data[0]);
                console.log(details);
            });
    }
    function getD(dt) {
        const date = new Date(dt);
        const d = date.getDay();
        if (d == 0) { return "SUN" }
        else if (d == 1) { return "MON" }
        else if (d == 2) { return "TUE" }
        else if (d == 3) { return "WED" }
        else if (d == 4) { return "THU" }
        else if (d == 5) { return "FRI" }
        else if (d == 6) { return "SAT" }
        return "FRI"
    }
    function getM(dt) {
        const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const d = new Date(dt);
        let name = month[d.getMonth()];
        return name
    }
    function mail() {
        axios.post('http://localhost:8000/email', {
            reservationId: props._id,
        })
            .then(function (response) {
                console.log("xxx");
                console.log("mail sent");
            });
    }


    function cancelRes() {
        axios.post('http://localhost:8000/cancelReservation', {
            reservationId: props._id,
        })
            .then(function (response) {
                console.log("xxx");
                console.log("mail sent");
                handleCloseDialog()
            });

    }
    return (
        <div>

            <Card style={{ backgroundColor: ' #cccccc', paddingTop: 10, paddingLeft: 50, paddingRight: 50, borderColor: "blue", borderRadius: 10, width: 1400 }}>
                <Grid container spacing={2}>
                    <Grid item xs={1} ><Box style={{ paddingLeft: 70, paddingTop: 10 }}>
                        <FlightTakeoffIcon style={{ transform: "scale(2)", color: "#5c0931" }} />
                    </Box>
                    </Grid>
                    <Grid item xs={1} >
                    </Grid>
                    <Grid item xs={10} >
                        <Typography variant="h4" color="#5c0931" style={{ paddingTop: 5, fontFamily: 'Verdana', fontWeight: 'bold' }} >
                            Flight Details
                        </Typography>
                    </Grid>
                    <Grid item xs={1} >
                        <Box variant="outlined" alignitems="center" sx={{ minWidth: 200, mt: -2, color: 'white', borderColor: 'white', borderRadius: 5, backgroundColor: ' #5c0931', paddingLeft: 9, paddingTop: 3 }} style={{ height: 190 }}>
                            <Typography variant="h6" color="white" style={{ paddingTop: 10 }} style={{ fontFamily: 'Verdana' }} >
                                {getD(props.departure.FlightDate)}
                            </Typography>
                            <Typography variant="h4" color="white" style={{ fontFamily: 'Verdana' }}>
                                {DepDay}
                            </Typography>
                            <Typography variant="body1" color="white" style={{ fontFamily: 'Verdana' }}>
                                {getM(props.departure.FlightDate)}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={10}>
                        <Box variant="outlined" alignitems="center" sx={{ minWidth: 1100, color: 'white', pr: '20px', mb: 2, borderColor: 'white', borderRadius: 5, backgroundColor: ' #5c0931' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4} style={{ paddingLeft: 50 }}>
                                    <card alignitems="center" variant="outlined" >
                                        <CardContent>
                                            <Typography variant="h4" color="white" style={{ fontFamily: 'Verdana' }}>
                                                {props.departure.From} {<ArrowForwardIcon />} {props.departure.To}
                                            </Typography>
                                            <Typography variant="body1" display="inline" color="white" style={{ fontFamily: 'Verdana' }} >
                                                {props.departure.DepartureTime}
                                            </Typography>
                                            <Typography variant="body1" display="inline" color="white" style={{ paddingLeft: 40 }} style={{ fontFamily: 'Verdana' }}>
                                                {props.departure.ArrivalTime}
                                            </Typography>
                                        </CardContent>
                                    </card>
                                    <card alignitems="center" variant="outlined" >
                                        <CardContent alignitems="center" >
                                            <Button onClick={() => { handleClickOpenD(); setDets(props.departure, props.DepartCabin, props.DepartPassengersAdult, props.DepartPassengersChild) }}
                                                startIcon={<InfoIcon />} style={{ transform: 'scale(0.8)', marginLeft: -30, marginTop: -50, color: "white", borderColor: "white" }}>View Flight Details</Button>
                                            <Dialog
                                                open={openD}
                                                onClose={handleCloseD}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                                style={{ fontFamily: 'Verdana' }}
                                            >
                                                <DialogTitle id="alert-dialog-title" style={{ color: '#5c0931', fontFamily: 'Verdana', fontWeight: 'bold' }}>
                                                    {"Flight Details"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Flight Date:  {dateFormat(details.FlightDate, "dd/mm/yyyy")}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Flight Number:  {details.FlightNu}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Departure time:  {details.DepartureTime}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Arrival time:  {details.ArrivalTime}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Trip Duration:  {details.TripDuration} Hrs
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Cabin Class:  {details.cabin}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Baggage Allowance:  {details.baggageAllowance}
                                                        </Typography>
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleCloseD} autoFocus style={{ fontFamily: 'Verdana', color: '#ffffff', backgroundColor: '#5c0931' }}>
                                                        Close
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </CardContent></card>
                                </Grid>
                                <Grid item xs={3}>
                                    <card alignitems="center" variant="outlined" >
                                        <CardContent>
                                            <Typography variant="h5" color="white" style={{ fontFamily: 'Verdana' }}>
                                                {props.departure.FlightNu}
                                            </Typography>
                                            <Typography variant="body1" color="white" style={{ fontFamily: 'Verdana' }}>
                                                {props.departure.TripDuration} Hrs
                                            </Typography>
                                        </CardContent></card>
                                    <card alignitems="center" variant="outlined" >
                                        <CardContent alignitems="center" >
                                            <Button onClick={() => { handleClickOpenS() }}
                                                startIcon={<InfoIcon />} style={{ transform: 'scale(0.8)', marginLeft: -30, marginTop: -30, color: "white", borderColor: "white" }}>View Seats</Button>
                                            <Dialog
                                                open={openS}
                                                onClose={handleCloseS}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title" style={{ color: '#5c0931', fontFamily: 'Verdana', fontWeight: 'bold' }} >
                                                    {"Departure Flight Seats"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description" >
                                                        {props.DepartSeats.map(u => {
                                                            return <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ color: '#5c0931', fontFamily: 'Verdana' }}>
                                                                Seat Number:  {u}
                                                            </Typography>
                                                        })}
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleCloseS} autoFocus style={{ fontFamily: 'Verdana', color: '#ffffff', backgroundColor: '#5c0931' }}>
                                                        Close
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </CardContent></card>
                                </Grid>
                                <Grid item xs={2}>
                                    <card sx={{ mb: '20px', ml: "-20px" }}>
                                        <CardContent >
                                            <Typography variant="h5" color=' white' textAlign="center" marginLeft="-50px" style={{ fontFamily: 'Verdana', marginTop: 40 }}>
                                                $ {props.DepartPrice}
                                            </Typography>

                                            {/* <Typography variant="h5" marginLeft="-50px" textAlign="center" color=' white'>
                                                Total for
                                            </Typography>
                                            <Typography variant="h5" marginLeft="-50px" textAlign="center" color=' white' >
                                                passengers: {props.DepartPriceTotal}$
                                            </Typography> */}
                                        </CardContent>

                                    </card>
                                </Grid>
                                <Grid item xs={3} style={{ paddingLeft: 50 }}>
                                    <Button startIcon={<EditIcon />} style={{ marginTop: 10, backgroundColor: "white", color: "#5c0931", borderColor: "gold", fontSize: 10 }} variant='outlined' onClick={() => navigate("/SearchEdit", { state: { reservation: props.res, dep: true, price: props.DepartPrice, tprice: props.DepartPriceTotal, total: props.ReturnPriceTotal + props.DepartPriceTotal, id: id } })}>Change Departure Flight</Button>
                                    <Button onClick={() => {
                                        navigate("/EditSeats", {
                                            state: {
                                                flight: props.departure, seats: props.DepartSeats, cab: props.DepartCabin, dep: true, adult: props.DepartPassengersAdult, child: props.DepartPassengersChild, reservation: props._id, id: id

                                            }
                                        })
                                    }} startIcon={<AirlineSeatLegroomNormalIcon />} style={{ marginTop: 20, backgroundColor: "white", color: "#5c0931", fontSize: 10 }} variant='outlined'>Change Departure Seats</Button>
                                    <Button startIcon={<DeleteIcon />} style={{ marginTop: 10, backgroundColor: "white", color: "#5c0931", borderColor: "gold", fontSize: 10, width: 205 }} variant='outlined' onClick={handleClickOpenDialog2}>Cancel reservation</Button>

                                    <Dialog
                                        open={openDialog2}
                                        onClose={handleCloseDialog2}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Use Google's location service?"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Are you sure you want to cancel your  flight?
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleCloseDialog2}>Disagree</Button>
                                            <Button onClick={() => { cancelRes() }} autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>
                            </Grid>

                        </Box>
                    </Grid>
                    <Grid item xs={1} >
                        <Box variant="outlined" alignitems="center" sx={{ minWidth: 200, mt: -2, color: 'white', borderColor: 'white', borderRadius: 5, backgroundColor: ' #5c0931', paddingLeft: 9, paddingTop: 3 }} style={{ height: 190 }}>
                            <Typography variant="h6" color="white" style={{ paddingTop: 10, fontFamily: 'Verdana' }} >
                                {getD(props.returnFlight.FlightDate)}
                            </Typography>
                            <Typography variant="h4" color="white" style={{ fontFamily: 'Verdana' }}>
                                {RetDay}
                            </Typography>
                            <Typography variant="body1" color="white" style={{ fontFamily: 'Verdana' }}>
                                {getM(props.returnFlight.FlightDate)}
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={10}>
                        <Box variant="outlined" alignitems="center" sx={{ minWidth: 1100, color: 'white', pr: '20px', borderColor: 'white', borderRadius: 5, backgroundColor: ' #5c0931' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4} style={{ paddingLeft: 50 }}>
                                    <card alignitems="center" variant="outlined" >
                                        <CardContent>
                                            <Typography variant="h4" color="white" style={{ fontFamily: 'Verdana' }} >
                                                {props.returnFlight.From} {<ArrowForwardIcon />} {props.returnFlight.To}
                                            </Typography>
                                            <Typography variant="body1" display="inline" color="white" style={{ fontFamily: 'Verdana' }}>
                                                {props.returnFlight.DepartureTime}
                                            </Typography>
                                            <Typography variant="body1" display="inline" color="white" style={{ paddingLeft: 40 }} style={{ fontFamily: 'Verdana' }}>
                                                {props.returnFlight.ArrivalTime}
                                            </Typography>
                                        </CardContent>
                                    </card>
                                    <card alignitems="center" variant="outlined" >
                                        <CardContent alignitems="center" >
                                            <Button onClick={() => { handleClickOpenDR(); setDets(props.returnFlight, props.ReturnCabin, props.ReturnPassengersAdult, props.ReturnPassengersChild) }}
                                                startIcon={<InfoIcon />} style={{ transform: 'scale(0.8)', marginLeft: -30, marginTop: -50, color: "white", borderColor: "white" }}>View Flight Details</Button>
                                            <Dialog
                                                open={openDR}
                                                onClose={handleCloseDR}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title" style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931' }}>
                                                    {"Flight Details"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Flight Date:  {dateFormat(details.FlightDate, "dd/mm/yyyy")}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Flight Number:  {details.FlightNu}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Departure time:  {details.DepartureTime}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }} >
                                                            Arrival time:  {details.ArrivalTime}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Trip Duration:  {details.TripDuration} Hrs
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Cabin Class:  {details.cabin}
                                                        </Typography>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                            Baggage Allowance:  {details.baggageAllowance}
                                                        </Typography>
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleCloseDR} autoFocus style={{ fontFamily: 'Verdana', backgroundColor: '#5c0931', color: 'white' }}>
                                                        Close
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </CardContent></card>
                                </Grid>
                                <Grid item xs={3}>
                                    <card alignitems="center" variant="outlined" >
                                        <CardContent>
                                            <Typography variant="h5" color="white" style={{ fontFamily: 'Verdana' }} >
                                                {props.returnFlight.FlightNu}
                                            </Typography>
                                            <Typography variant="body1" color="white" style={{ fontFamily: 'Verdana' }}>
                                                {props.returnFlight.TripDuration} Hrs
                                            </Typography>
                                        </CardContent></card>
                                    <card alignitems="center" variant="outlined" >
                                        <CardContent alignitems="center" >
                                            <Button onClick={() => { handleClickOpenSR() }}
                                                startIcon={<InfoIcon />} style={{ transform: 'scale(0.8)', marginLeft: -30, marginTop: -30, color: "white", borderColor: "white" }}>View Seats</Button>
                                            <Dialog
                                                open={openSR}
                                                onClose={handleCloseSR}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title" style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                    {"Return Flight Seats"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        {props.returnSeats.map((u) => {
                                                            return <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Verdana', color: '#5c0931' }}>
                                                                Seat Number:  {u}
                                                            </Typography>
                                                        })}
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleCloseSR} autoFocus style={{ fontFamily: 'Verdana', backgroundColor: '#5c0931', color: 'white' }}>
                                                        Close
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </CardContent></card>
                                </Grid>
                                <Grid item xs={2}>
                                    <card sx={{ mb: '20px', ml: "-20px" }}>
                                        <CardContent >
                                            <Typography variant="h5" textAlign="center" marginLeft="-50px" style={{ fontFamily: 'Verdana', color: 'white', marginTop: 40 }}>
                                                $ {props.ReturnPrice}
                                            </Typography>

                                        </CardContent>

                                    </card>
                                </Grid>
                                <Grid item xs={3} style={{ paddingLeft: 50 }}>
                                    <Button onClick={() => { navigate("/SearchEdit", { state: { reservation: props.res, dep: false, price: props.ReturnPrice, tprice: props.ReturnPriceTotal, total: props.ReturnPriceTotal + props.DepartPriceTotal, id: id } }) }} startIcon={<EditIcon />} style={{ marginTop: 10, backgroundColor: "white", color: "#5c0931", borderColor: "gold", fontSize: 10, width: 205 }} variant='outlined'>Change Return Flight</Button>
                                    <Button onClick={() => { navigate("/EditSeats", { state: { flight: props.returnFlight, seats: props.returnSeats, cab: props.ReturnCabin, dep: false, adult: props.ReturnPassengersAdult, child: props.ReturnPassengersChild, reservation: props._id, id: id } }) }} startIcon={<AirlineSeatLegroomNormalIcon />} style={{ marginTop: 20, backgroundColor: "white", color: "#5c0931", fontSize: 10, width: 205 }} variant='outlined'>Change Return Seats</Button>
                                    <Button startIcon={<DeleteIcon />} style={{ marginTop: 10, backgroundColor: "white", color: "#5c0931", borderColor: "gold", fontSize: 10, width: 205 }} variant='outlined' onClick={handleClickOpenDialog}>Cancel reservation</Button>
                                    <Dialog
                                        open={openDialog}
                                        onClose={handleCloseDialog}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Cancel Reservation"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Are you sure you want to cancel your  flight?
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleCloseDialog}>Disagree</Button>
                                            <Button onClick={() => { cancelRes() }} autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </Dialog>


                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Button startIcon={<EmailIcon />} variant="outlined" style={{ color: "white", backgroundColor: "#5c0931", marginTop: 30, marginBottom: 30 }} onClick={() => { mail(); handleClick() }}>
                    Send itinerary by Email
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Email sent!
                    </Alert>
                </Snackbar>
                <Typography variant="h4" color="#5c0931" style={{ marginLeft: 850, marginTop: -60, fontFamily: 'Vernada' }} >
                    Total reservation cost: {props.DepartPriceTotal + props.ReturnPriceTotal}$
                </Typography>

            </Card>
        </div>
    );
}
