const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservedSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  reservationId: {
    type: String,
    required: true,
    unique: true
  },
  DepartFlightNu: {
    type: String,
    required: true
  },
  DepartPassengersAdult: {
    type: Number,
    required: true
  },
  DepartPassengersChild: {
    type: Number,
    required: true
  },
  DepartCabin: {
    type: String,
    required: true
  },
  DepartSeats: {
    type: Object,
    required: true
  },
  DepartureDate: {
    type: Date,
    required: true
  },
  DepartureAirport: {
    type: String,
    required: true
  },
  ReturnFlightNu: {
    type: String,
    required: true
  },
  ReturnPassengersAdult: {
    type: Number,
    required: true
  },
  ReturnPassengersChild: {
    type: Number,
    required: true
  },
  ReturnCabin: {
    type: String,
    required: true
  },
  ReturnSeats: {
    type: Object,
    required: true
  },
  ReturnDate: {
    type: Date,
    required: true
  },
  ReturnAirport: {
    type: String,
    required: true
  },
  Total: {
    type: Number,
    required: true
  }
},
  { timestamps: false });

const reserved = mongoose.model('reservedFlights', reservedSchema);
module.exports = reserved;