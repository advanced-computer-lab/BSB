import React from 'react'

import { useState, useEffect } from 'react';

import Modal from 'react-bootstrap/Modal'

import ModalDialog from 'react-bootstrap/ModalDialog'

import ModalHeader from 'react-bootstrap/ModalHeader'

import ModalBody from 'react-bootstrap/ModalBody'

import ModalFooter from 'react-bootstrap/ModalFooter'

import { Button } from 'react-bootstrap';

import axios from 'axios';

import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import TableContainer from '@mui/material/TableContainer';

import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

import ViewDetails from './ViewDetails';

//mport Booknow from './Booknow';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import ChooseSeat from './ChooseSeat';







const StyledTableCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.head}`]: {

        backgroundColor: theme.palette.common.black,

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









function DepartureList(props) {

    const [flightNum, setFlightNum] = useState("");

    const [from, setFrom] = useState("");

    const [to, setTo] = useState("");

    const [flightlist, setFlightlist] = useState([]);
    const [booknowClicked, setBookNowClicked] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {

        axios.get("http://localhost:8000/searchDepartureFlights").then(res => {

            console.log("xxxx");

            setFlightlist(res.data);

        })





    })

    return (



        < div >

            <Typography gutterBottom component="div">

                {props.flightType}

            </Typography>

            <TableContainer component={Paper} style={{ width: 500 }}>

                <Table sx={{ minWidth: 500 }} aria-label="customized table" size='m'>

                    <TableHead>

                        <TableRow>

                            <StyledTableCell align="center">Flight Number</StyledTableCell>

                            <StyledTableCell align="center">From</StyledTableCell>

                            <StyledTableCell align="center">To</StyledTableCell>

                            <StyledTableCell align="center">Price</StyledTableCell>

                            <StyledTableCell align="center">&nbsp;</StyledTableCell>

                            <StyledTableCell align="center">&nbsp;</StyledTableCell>







                            <StyledTableCell align="center"> &nbsp;</StyledTableCell>

                            <StyledTableCell align="center"></StyledTableCell>

                        </TableRow>

                    </TableHead>

                    <TableRow> </TableRow>



                    {props.flightlist.map(u => {

                        return <TableRow key={u._id}>

                            <StyledTableCell align="center" style={{ color: 'black' }}>{u.FlightNu}</StyledTableCell>

                            <StyledTableCell align="center" style={{ color: 'black' }}  >{u.From} </StyledTableCell>

                            <StyledTableCell align="center" style={{ color: 'black' }}   >{u.To}</StyledTableCell>

                            <StyledTableCell align="center" style={{ color: 'black' }} >${u.price}</StyledTableCell>





                            <StyledTableCell align="center" style={{ color: 'black' }} ><ViewDetails from={u.From} to={u.To} fnumber={u.FlightNu} arr={u.ArrivalTime} dep={u.DepartureTime}></ViewDetails> </StyledTableCell>


                            <StyledTableCell align="center" ><Button variant='contained' style={{ color: 'black' }} onClick={handleShow}>BOOK NOW</Button></StyledTableCell>

                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>

                                    <Modal.Title style={{ color: 'black' }}>Flight Number:{props.flightNum}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ChooseSeat />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>

                                </Modal.Footer>
                            </Modal>
                            {/* <StyledTableCell align="center" ><Booknow></Booknow> </StyledTableCell>

                            <StyledTableCell align="center">

                                <Popup trigger={<Button variant="outline-danger" data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false">Delete</Button>} position="right center">

                                    <div>Are you sure you want to Book this flight?(if no click anywhere)</div>

                                    <Booknow idd={u._id}></Booknow>

                                </Popup>

                            </StyledTableCell> */}



                        </TableRow>

                    })}

                </Table>

            </TableContainer>







        </div>

    )

}





export default DepartureList;