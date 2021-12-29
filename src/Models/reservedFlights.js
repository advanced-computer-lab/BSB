const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservedSchema = new Schema({
  ChosenFlight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chosenFlights"
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "existingUsers",
    unique: false
  }
},
  { timestamps: false });

const reserved = mongoose.model('reservedFlights', reservedSchema);
module.exports = reserved;