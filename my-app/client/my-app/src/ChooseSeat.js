import React from 'react'
import { ModalFooter } from 'react-bootstrap';
import './flightseatmap.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




function ChooseSeat() {
    return (
        <div class="flight-container">



                <div class="row" style={{ width: 600, marginLeft: 500, marginBottom: 20 }}>
                    <Checkbox {...label} />
                    <Checkbox {...label} disabled />
                    <Checkbox {...label} disabled checked />

                </div>
                <div class="row" style={{ width: 600, marginLeft: 400, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat occupied"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row" style={{ width: 600, marginLeft: 300, marginBottom: 20 }}>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>


                <p class="text">
                    you have selected <span id="count">0</span> seats for a total price of $ <span id="total">0</span>

                </p>
            </div>
        
    )
}

export default ChooseSeat
