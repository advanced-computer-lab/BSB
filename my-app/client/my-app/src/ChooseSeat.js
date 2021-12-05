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

import axios from 'axios';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// const [economySeats, setEconomySeats] = useState("");
// const [businessSeats, setBusinessSeats] = useState("");
// const [firstClasSeats, setFirstClassSeats] = useState("");

//[A1,A2,A3,A4]
//[CB1,CB1,CB3,CB4]
//if(a1.isRees==true)
///





function ChooseSeat(props) {
    const [cabinSeats, setCabinSeats] = useState([]);
    var temp = [];




    axios.post('http://localhost:8000/flightSeating', {
        _id: "6185ad7b250c46b0fd2322ea"

    })
        .then(function (response) {
            var resEco = [response.data.economy];
            var tempEco =
                resEco.map(u => {
                    axios.post('http://localhost:8000/checkSeat', {
                        _id: "6185ad7b250c46b0fd2322ea",
                        seat: u



                    }).then(function (rsp) {
                        if (rsp.data = 'reserved') {


                            <Checkbox id={u} {...label} disabled='true' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

                        }
                        else {
                            <Checkbox id={u} {...label} disabled='false' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

                        }
                    })
                    temp.push(tempEco);
                    console.log(tempEco)



                })

            // var resBus = [response.data.business];
            // var tempBus =
            //     resBus.map(u => {
            //         axios.post('http://localhost:8000/checkSeat', {
            //             _id: "6185ad7b250c46b0fd2322ea",
            //             seat:u



            //         }).then(function (rsp) {
            //             if (rsp.data = 'reserved') {
            //                 <Checkbox id={u} {...label} disabled='true' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

            //             }
            //             else {
            //                 <Checkbox id={u} {...label} disabled='false' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

            //             }
            //         })
            //         temp.push(tempBus);



            //     })
            // var resFirst = [response.data.first];
            // var tempFirst =
            //     resFirst.map(u => {
            //         axios.post('http://localhost:8000/checkSeat', {
            //             _id: "6185ad7b250c46b0fd2322ea",
            //             seat:u



            //         }).then(function (rsp) {
            //             if (rsp.data = 'reserved') {
            //                 <Checkbox id={u} {...label} disabled='true' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

            //             }
            //             else {
            //                 <Checkbox id={u} {...label} disabled='false' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

            //             }
            //         })
            //         temp.push(tempFirst);



            //     })
            setCabinSeats(temp);





            console.log("xxx");
        })








    return (<div>
        {props.logout ? <App /> : (props.edit ? <EditProfile logout={props.logout} /> :
            <div>
                <Layout />
                {axios.post('http://localhost:8000/flightSeating', {
                    _id: "6185ad7b250c46b0fd2322ea"

                })
                    .then(function (response) {
                        var resEco = [response.data.economy];
                        var tempEco =
                            resEco.map(u => {
                                axios.post('http://localhost:8000/checkSeat', {
                                    _id: "6185ad7b250c46b0fd2322ea",
                                    seat: u



                                }).then(function (rsp) {
                                    if (rsp.data = 'reserved') {
                                        return(
                                            <Checkbox id={u} {...label} disabled='true' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />


                                        )



                                    }
                                    return (
                                        <Checkbox id={u} {...label} disabled='false' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />)

                                    
                                })
                                temp.push(tempEco);
                                //console.log(temp)



                            })

                        // var resBus = [response.data.business];
                        // var tempBus =
                        //     resBus.map(u => {
                        //         axios.post('http://localhost:8000/checkSeat', {
                        //             _id: "6185ad7b250c46b0fd2322ea",
                        //             seat:u



                        //         }).then(function (rsp) {
                        //             if (rsp.data = 'reserved') {
                        //                 <Checkbox id={u} {...label} disabled='true' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

                        //             }
                        //             else {
                        //                 <Checkbox id={u} {...label} disabled='false' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

                        //             }
                        //         })
                        //         temp.push(tempBus);



                        //     })
                        // var resFirst = [response.data.first];
                        // var tempFirst =
                        //     resFirst.map(u => {
                        //         axios.post('http://localhost:8000/checkSeat', {
                        //             _id: "6185ad7b250c46b0fd2322ea",
                        //             seat:u



                        //         }).then(function (rsp) {
                        //             if (rsp.data = 'reserved') {
                        //                 <Checkbox id={u} {...label} disabled='true' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

                        //             }
                        //             else {
                        //                 <Checkbox id={u} {...label} disabled='false' style={{ marginRight: 50, marginTop: 20, marginLeft: 95 }} />

                        //             }
                        //         })
                        //         temp.push(tempFirst);



                        //     })
                        setCabinSeats(temp);





                        console.log("xxx");
                    })
                }


            </div>
        )}
    </div>

    )
}

export default ChooseSeat
