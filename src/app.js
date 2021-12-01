const express = require('express'),
    app = express();
app.use(express.json());
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8000, process.env.IP, () => {
    console.log('Server successfully started!');
});
const cors = require('cors');

app.use(cors());

mongoose = require('mongoose');
const flight = require('./Models/flights.js')
const chosenFlights = require('./Models/chosenFlights.js')
const seats = require('./Models/seats.js')
const reserved = require('./Models/reservedFlights.js')
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
let dt = fs.readFileSync('./constantData.json');
let constantData = JSON.parse(dt);
let st = fs.readFileSync('./seats.json');
let seatsData = JSON.parse(st);
//console.log(data);

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

app.get("/showFlights", (req, res) => {
    ``
    flight.find({}).exec(function (err, data) {
        res.send(data)
    })

});
app.post("/deleteFlights", (req, res) => {
    flight.deleteOne({ _id: req.body._id }).exec(function (err, leads) {
        res.status(201).send(leads);
    });
});
app.post("/updateFlights", (req, res) => {
    flight.updateOne({ _id: req.body._id }, req.body).exec(function (err, leads) {
        res.status(201).send(leads);
    });
});

app.post("/addFlight", (req, res) => {
    const newFlight = new flight({
        'From': req.body.From,
        'To': req.body.To,
        'FlightDate': req.body.FlightDate,
        'NuofAvailableFirstSeats': req.body.NuofAvailableFirstSeats,
        'NuofAvailableBuisnessSeats':
            req.body.NuofAvailableBuisnessSeats,
        'NuofAvailableEconomySeats': req.body.NuofAvailableEconomySeats,
        'TerminalDeparture': req.body.TerminalDeparture,
        'TerminalArrival': req.body.TerminalArrival,
        'FlightNu': req.body.FlightNu,
        'ArrivalTime': req.body.ArrivalTime,
        'DepartureTime': req.body.DepartureTime,
        'ecoSeatsLeft': 56, "busSeatsLeft": 12, "fstSeatsLeft": 4

    })
    newFlight.save().then((result) => {
        res.send(result)
    })
        .catch((err) => {
            console.log(err)
        })

})

app.post("/searchFlights", async (req, res) => {

    const criteria = req.body;
    console.log(req.body);
    try {
        const query = await flight.find(criteria);
        console.log(query);
        console.log("xxxx111");
        res.json(query);

    } catch (err) {
        res.json({ message: err });
    }

});
var search = function (element) {
    seats.find({ FlightNu: element })
    console.log(data);
    //console.log(squery);//print 6, should be 3
    let cond = data.length == 0;//if flight has no reserved seats yet
    if (c == "Economy") {
        c2 = (data[0].reservedEcoSeats.length == 56) || ((56 - data[0].reservedEcoSeats.length) < total)//not enough pass
    }
    else if (c == "Business") {
        c2 = (data[0].reservedBusSeats.length == 12) || ((12 - data[0].reservedBusSeats.length) < total)
    }
    else {
        c2 = (data[0].reservedFstSeats.length == 4) || ((4 - data[0].reservedFstSeats.length) < total);
    }
    console.log(cond);//print 7, should be 4
    console.log(!c2);//print 8, should be 5
    return (cond || (!c2));//law true, keeps the value, false removes the value
}

//{"FlightNu":"AC543", "From": "LHR","To": "CDG", "cabin":"Economy","adults":2,"child":1}
// app.post("/searchDepartureFlights", async (req, res) => {
//     const criteria = { From: req.body.From, To: req.body.To, FlightDate: req.body.departureDate, DepartBool: true };
//     let c = req.body.cabin;
//     let total = req.body.adults + req.body.child;
//     var myPromise(){

//     }
// })
app.post("/searchDepartureFlights", async (req, res) => {
    const criteria = { From: req.body.From, To: req.body.To, FlightDate: req.body.departureDate, DepartBool: true };
    let c = req.body.cabin;
    let total = req.body.adults + req.body.child;
    try {
        const fquery = await flight.find(criteria);//result set is query
        //sends each one as an object in an array
        console.log(fquery);//print 1
        let r = [];
        for (var i = 0; i < fquery.length; i++) {
            let f = fquery[i].FlightNu;
            console.log(f);//print 2
            const squery = await seats.find({ FlightNu: f });
            console.log(squery);
            //console.log(squery);//print 6, should be 3
            let cond = squery.length == 0;//if flight has no reserved seats yet
            if (c == "Economy") {
                c2 = (squery[0].reservedEcoSeats.length == 56) || ((56 - squery[0].reservedEcoSeats.length) < total)//not enough pass
            }
            else if (c == "Business") {
                c2 = (squery[0].reservedBusSeats.length == 12) || ((12 - squery[0].reservedBusSeats.length) < total)
            }
            else {
                c2 = (squery[0].reservedFstSeats.length == 4) || ((4 - squery[0].reservedFstSeats.length) < total);
            }
            console.log(cond);//print 7, should be 4
            console.log(!c2);//print 8, should be 5
            if (cond || (!c2)) {
                r.push(fquery[i]);
            }
        }
         console.log(fquery);//print 3, should be 6
        console.log("xxxx111");//print 4, should be 7
        console.log(r);//print 5, should be 8
        // console.log(fc);//print 5, should be 8
        res.json(r);
    } catch (err) {
        res.json({ message: err });
    }
});

app.post("/searchReturnFlights", async (req, res) => {

    const criteria = req.body;
    console.log(req.body);
    const d = { ReturnBool: true };
    const finalResult = Object.assign(criteria, d);
    console.log(finalResult);
    try {
        const query = await flight.find(finalResult);//result set is query
        console.log(query);
        console.log("xxxx111");
        res.json(query);

    } catch (err) {
        res.json({ message: err });
    }

});
app.post("/AddDepartureFlight", (req, res) => {

    const newFlight = new chosenFlights({
        'userId': req.body.userID,
        'DepartFlightNu': req.body.FlightNu,
        "DepartPassengersAdult": req.body.adultPass,
        'DepartPassengersChild': req.body.childPass,
        'DepartCabin': req.body.cabin,
        'DepartSeats': req.body.seats
    })
    newFlight.save().then((result) => {
        res.send(result)
    })
        .catch((err) => {
            console.log(err)
        })

    setDepartPrice(req.body.cabin, req.body.FlightNu, req.body.userID, req.body.adultPass, req.body.childPass);
});

function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}

app.post("/getAvailableCabinSeats", (req, res) => {//gets available seats left on specific flight,given a specific cabin
    let c = req.body.cabin;
    seats.find({ FlightNu: req.body.FlightNu }).lean().exec(function (err, data) {
        if (c == "Economy") {
            st = seatsData.Economy;
            rs = data[0].reservedEcoSeats;
        }
        else if (c == "First") {
            st = seatsData.First;
            rs = data[0].reservedFstSeats;
        }
        else {
            st = seatsData.Business;
            rs = data[0].reservedBusSeats;
        }
        console.log(st)
        for (var i = 0; i < rs.length; i++) {
            remove(st, fs.rs[i]);
        }
        // return st; 
        res.send(st);

        //aseats = data[0].reservedSeats;
        //availableSeats = checkSeats(aseats, c);

    })

})
app.get("/showReservedSeats", (req, res) => {//shows all the seat reservation database => each flight and its reserved seats
    seats.find({}).exec(function (err, data) {
        res.send(data);
    })
});
app.post("/showFlightReservedSeats", (req, res) => {//shows the reserved seats of a specific flight (all cabin types)
    seats.find({ FlightNu: req.body.FlightNu }).exec(function (err, data) {
        res.send(data);
    })
})
app.post("/reserveSeats", (req, res) => {//reserves seats, doesn't make sure it's already in the data
    c = req.body.cabin;

    seats.find({ FlightNu: req.body.FlightNu }).lean().exec(function (err, data) {
        if (data.length != 0) {
            a = data[0].reservedSeats;
            rSeats = a.concat(req.body.seats);
            seats.updateOne({ FlightNu: req.body.FlightNu }, { reservedSeats: rSeats }).exec(function (err, leads) {
                console.log("updated");
                res.status(201).send(leads);
            });
        }
        else {
            const sts = new seats({
                "FlightNu": req.body.FlightNu,
                "reservedSeats": req.body.seats
            })
            sts.save().then((result) => {
                res.send(result)
            })
                .catch((err) => {
                    console.log(err)
                })

        }
        if (c == "Economy") {
            flight.find({ FlightNu: req.body.FlightNu }).lean().exec(function (err, data1) {
                l = data1[0].ecoSeatsLeft;
                lc = req.body.seats.length;
                flight.updateOne({ FlightNu: req.body.FlightNu }, { ecoSeatsLeft: l - lc }).exec(function (err, leads) {
                    console.log("ok")
                })
            })

            if (data[0].reservedEcoSeats != null && data[0].reservedEcoSeats.length != 0) {
                b = data[0].reservedEcoSeats; b.concat(req.body.seats);
            } else {
                b = req.body.seats;
            }

            seats.updateOne({ FlightNu: req.body.FlightNu }, { reservedEcoSeats: b }).exec(function (err, leads) {
                console.log("updated");
                //res.status(201).send(leads);
            });
        }
        else if (c == "First") {
            flight.find({ FlightNu: req.body.FlightNu }).lean().exec(function (err, data1) {
                l = data1[0].fstSeatsLeft;
                lc = req.body.seats.length;
                flight.updateOne({ FlightNu: req.body.FlightNu }, { fstSeatsLeft: l - lc }).exec(function (err, leads) {
                    console.log("ok")
                })
            })
            if (data[0].reservedFstSeats != null && data[0].reservedFstSeats.length != 0) {
                b = data[0].reservedFstSeats;
                b.concat(req.body.seats);
            } else {
                b = req.body.seats;
            }
            seats.updateOne({ FlightNu: req.body.FlightNu }, { reservedFstSeats: b }).exec(function (err, leads) {
                console.log("updated");
                //res.status(201).send(leads);
            });
        }
        else {
            light.find({ FlightNu: req.body.FlightNu }).lean().exec(function (err, data1) {
                l = data1[0].busSeatsLeft;
                lc = req.body.seats.length;
                flight.updateOne({ FlightNu: req.body.FlightNu }, { busSeatsLeft: l - lc }).exec(function (err, leads) {
                    console.log("ok")
                })
            })
            if (data[0].reservedBusSeats != null && data[0].reservedBusSeats.length != 0) {
                b = data[0].reservedBusSeats; b.concat(req.body.seats);
            } else {
                b = req.body.seats;
            }

            seats.updateOne({ FlightNu: req.body.FlightNu }, { reservedBusSeats: b }).exec(function (err, leads) {
                console.log("updated");
                //res.status(201).send(leads);
            });
        }
    })

})
app.post("/getPrice", (req, res) => {//gets price of specific flight, given specific cabin
    const cabin = req.body.cabin;
    var query = getPrice(req.body.FlightNu);
    query.exec(function (err, data) {
        if (err)
            return console.log(err);
        if (cabin == "Economy") {
            price = data[0].EcoPrice;
        }
        else if (cabin == "First") {
            price = data[0].FPrice;
        }
        else {

            price = data[0].BusPrice;
        }
        res.send({ price });
    });
})
function getPrice(FlightNu) {
    var query = flight.find({ FlightNu: FlightNu }).lean();
    return query;
}

function setDepartPrice(cabin, FlightNu, userID, adults, child) { //updates the database of the prices of the chosen Departure flight
    var query = getPrice(FlightNu);
    query.exec(function (err, data) {
        if (err)
            return console.log(err);
        if (cabin == "Economy") {
            price = data[0].EcoPrice;
        }
        else if (cabin == "First") {
            price = data[0].FPrice;
        }
        else {
            price = data[0].BusPrice;
        }
        //res.send({price});
        let totalAdults = adults * price;
        console.log(constantData.childPriceRatio);
        let children = (price * constantData.childPriceRatio) * child
        let total = totalAdults + children;
        console.log(price);//price per 1 adult ticket
        console.log(total);//price per all passengers
        chosenFlights.updateOne({ 'userId': userID }, { DepartPrice: price, DepartPriceTotal: total }).exec(function (err, leads) {
            console.log("updated one");
            //res.status(201).send(leads);
        });

    });
}
function setReturnPrice(cabin, FlightNu, userID, adults, child) {//updates the database of the prices of the chosen Return flight
    var query = getPrice(FlightNu);
    query.exec(function (err, data) {
        if (err)
            return console.log(err);
        if (cabin == "Economy") {
            price = data[0].EcoPrice;
        }
        else if (cabin == "First") {
            price = data[0].FPrice;
        }
        else {
            price = data[0].BusPrice;
        }
        let totalAdults = adults * price;
        console.log(constantData.childPriceRatio);
        let children = (price * constantData.childPriceRatio) * child
        let total = totalAdults + children;
        console.log(price);
        console.log(total);
        //res.send({price});
        chosenFlights.find({ 'userId': userID }).lean().exec(function (err, dataR) {
            if (err)
                return console.log(err);
            st = dataR[0].DepartPrice;
            subtotal = st + price;
            gt = dataR[0].DepartPriceTotal;
            gross = gt + total;
            chosenFlights.updateOne({ 'userId': userID }, { ReturnPrice: price, ReturnPriceTotal: total, SubTotal: subtotal, Total: gross }).exec(function (err, leads) {
                console.log("updated");
                //res.status(201).send(leads);
            });
        });
    });
}


app.post("/AddReturnFlight", (req, res) => {//places chosen return flight into db
    chosenFlights.updateOne({ userId: req.body.userID }, req.body).exec(function (err, leads) {
        res.status(201).send(leads);
    });
    setReturnPrice(req.body.ReturnCabin, req.body.ReturnFlightNu, req.body.userID, req.body.ReturnPassengersAdult, req.body.ReturnPassengersChild);

});

app.post("/getChosenFlights", (req, res) => { //prints chosenflights database
    chosenFlights.find({ userId: req.body.userID }).exec(function (err, data) {
        res.send(data)
    })
});


app.post("/getFlightDetails", (req, res) => {//flightNumber, Departure,arrival Time, Trip Duration, Cabin class,baggage allowance
    flight.find({ FlightNu: req.body.FlightNu }).lean().exec(function (err, data) {
        let c = data3[0].DepartCabin;
        if (c == "First") {
            baggage = constantData.bagallowanceFst;
        }
        else if (c == "Business") {
            baggage = constantData.bagallowanceBus;
        }
        else {
            baggage = constantData.bagallowanceEco;
        }
        let tresult = {
            FlightNu: data[0].FlightNu,
            FlightDate: data[0].FlightDate,
            DepartureTime: data[0].DepartureTime,
            ArrivalTime: data[0].ArrivalTime,
            BaggageAllowance: baggage,
            TotalPriceAdult: data3[0].SubTotal,
            TotalPricePassengers: data3[0].Total

        };
        res.send(tresult);
    })
});

//view flight details before reserving it
app.post("/ViewTicketSummary", (req, res) => { //summary of chosen flights
    //flightnumberdeparture, flightnumberreturn
    flight.find({ FlightNu: req.body.FlightNuDepart }).lean().exec(function (err, data) {
        flight.find({ FlightNu: req.body.FlightNuReturn }).lean().exec(function (err, data2) {
            chosenFlights.find({ userId: req.body.userID }).lean().exec(function (err, data3) {
                //res.send(data,data2)
                //dates and times, price of each, chosenCabin, chosenSeat, priceOfEntireTicket
                let c = data3[0].DepartCabin;
                if (c == "First") {
                    baggage = constantData.bagallowanceFst;
                }
                else if (c == "Business") {
                    baggage = constantData.bagallowanceBus;
                }
                else {
                    baggage = constantData.bagallowanceEco;
                }
                let tresult = {
                    DepartureFlightDate: data[0].FlightDate,
                    DepartureFrom: data[0].From,
                    DepartureTo: data[0].To,
                    DepartureTimeDeparture: data[0].DepartureTime,
                    DepartureArrivalTime: data[0].ArrivalTime,
                    DepartureTicketPrice: data3[0].DepartPrice,
                    DepartureCabin: data3[0].DepartCabin,
                    DepartureSeats: data3[0].DepartSeats,
                    ReturnFlightDate: data2[0].FlightDate,
                    DepartureFrom: data2[0].From,
                    DepartureTo: data2[0].To,
                    ReturnTimeDeparture: data2[0].DepartureTime,
                    ReturnArrivalTime: data2[0].ArrivalTime,
                    ReturnTicketPrice: data3[0].ReturnPrice,
                    CabinReturn: data3[0].ReturnCabin,
                    ReturnSeats: data3[0].ReturnSeats,
                    BaggageAllowance: baggage,
                    TotalPriceAdult: data3[0].SubTotal,
                    TotalPricePassengers: data3[0].Total

                };
                res.send(tresult);

            })
        })
    })
});
app.get('/reservedFlights', (req, res) => {
    reserved.find({ userID: req.body.userID }).exec(function (err, data) {
        res.send(data)
    })
});
