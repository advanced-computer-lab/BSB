const express = require('express'),
    app = express();
app.use(express.json());
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(8000, process.env.IP, () => {
    console.log('Server successfully started!');
});
const cors = require('cors');

app.use(cors());

mongoose = require('mongoose');
const flight = require('./Models/flights.js')
require('dotenv').config(); // configures dotenv
app.use(express.json());
// MongoDB connection with ATLAS and Mongoose
// connects to the value within the .env file
const uri = process.env.MONGO_URI;
// connects mongoose to the uri and sets some mongoose keys to true to combat mongoose's deprecation warnings
mongoose.connect(uri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
// make sure that MongoDB connected successfully
connection.once('open', () => {
    console.log("MongoDB connected!!");
});

app.get("/addFlight", (req, res) => {
    const flight1 = new flight({
        From: "LAX",
        To: "JFK",
        FlightDate: 12 - 1 - 2022,
        Cabin: "Economy",
        SeatsAvailableonFlight: 20
    })
    const flight2 = new flight({
        From: "LAX",
        To: "JFK",
        FlightDate: 12 - 1 - 2022,
        Cabin: "Business",
        SeatsAvailableonFlight: 10
    })
    flight1.save();
    flight2.save();
    res.send("Flight successfully added!")
})
// app.get("/home", (req,res)=>{
//     User.find({Job : "Avenger"}).exec(function(err,leads){
//       res.send(leads)
//     });
//   })

app.get("/showFlights" , (req, res) => {                                               ``
    flight.find({}).exec(function(err, data){
        res.send(data)
    })
    
});
app.post("/deleteFlights", (req, res) => {
    flight.deleteOne({ _id : req.body._id}).exec(function (err, leads) {
           res.status(201).send(leads);
       });
   });
   app.post("/updateFlights", (req, res) => {
    flight.updateOne({ _id: req.body._id },{From:req.body.From, To:req.body.To, FlightDate: req.body.FlightDate, Cabin:req.body.Cabin,
        SeatsAvailableonFlight: req.body.SeatsAvailableonFlight
      }).exec(function (err, leads) {
           res.status(201).send(leads);
       });
});

app.post("/addFlight", (req, res) => {
    //console.log("also")
    // const newFlight = new flight;
    //newFlight.flightController();
    //newFlight.save().then((result) => {
    //res.send(result)
    //})
    //  .catch((err) => {
    //    console.log(err)
    //})
    const newFlight = new flight({
        'From': req.body.From,
        'To': req.body.To,
        'FlightDate': req.body.FlightDate,
        'Cabin': req.body.Cabin,
        'SeatsAvailableonFlight': req.body.SeatsAvailableonFlight



    })

    // // const schema = Joi.object({
    // //     From: Joi.string().min(3).required(),
    // //     To: Joi.string().min(3).required(),

    // // })
    // // Flight.push(newFlight)
    // console.log('alo?')
    newFlight.save().then((result) => {
        res.send(result)
    })
        .catch((err) => {
            console.log(err)
        })
    // res.status(201).send("successfully added")
})