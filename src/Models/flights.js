const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
    From: {
        type: String,
        required: true,
    },
    To: {
        type: String,
        required: true,
    },
    FlightDate: {
        type: Date,
        required: true,
    },
    Cabin: {
        type: String,
        required: true,
    },
    SeatsAvailableonFlight: {
        type: Number,
        required: true,
    },
},
    { timestamps: true });

const flight = mongoose.model('flights', flightSchema);
module.exports = flight;
