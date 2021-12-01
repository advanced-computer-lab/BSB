const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chosenFlightSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
     DepartFlightNu: {
        type: String,
        required: false
      },
     DepartPassengersAdult:{
        type: Number,
        required: false
     },
     DepartPassengersChild:{
        type: Number,
        required: false
     },
      DepartCabin:{
        type:String,
        required:false
      },
      DepartSeats:{
        type:Object,
        required:false
      },
      DepartPrice:{
        type: Number,
        required: false
      },
      DepartPriceTotal:{
        type: Number,
        required: false
      },
      ReturnFlightNu: {
        type: String,
        required: false
      },
     ReturnPassengersAdult:{
        type: Number,
        required: false
     },
     ReturnPassengersChild:{
        type: Number,
        required: false
     },
      ReturnCabin:{
        type:String,
        required:false
      },
      ReturnSeats:{
        type:Object,
        required:false
      },
      ReturnPrice:{
        type: Number,
        required: false
      },
      ReturnPriceTotal:{
        type: Number,
        required: false
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

const chosenFlights = mongoose.model('chosenFlights', chosenFlightSchema);
module.exports = chosenFlights;