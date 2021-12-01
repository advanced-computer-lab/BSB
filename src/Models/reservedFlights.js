const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservedSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
     DepartFlightNu: {
        type: String,
        required: true
      },
     DepartPassengersAdult:{
        type: Number,
        required: true
     },
     DepartPassengersChild:{
        type: Number,
        required: true
     },
      DepartCabin:{
        type:String,
        required:true
      },
      DepartSeats:{
        type:Object,
        required:true
      },
      ReturnFlightNu: {
        type: String,
        required: true
      },
     ReturnPassengersAdult:{
        type: Number,
        required: true
     },
     ReturnPassengersChild:{
        type: Number,
        required: true
     },
      ReturnCabin:{
        type:String,
        required:true
      },
      ReturnSeats:{
        type:Object,
        required:true
      },
      SubTotal:{
          type:Number,
          required:true
      },
      Total:{
        type:Number,
        required:true
      }

},
    { timestamps: false });

const reserved = mongoose.model('reservedFlights', reservedSchema);
module.exports = reserved;