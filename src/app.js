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
        'DepartureTime': req.body.DepartureTime

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
            let f = fquery[i]._id;
            console.log(f);//print 2
            const squery = await seats.find({ FlightID: f });
            console.log(squery);
            let cond = squery.length == 0;//if flight has no reserved seats yet
            console.log(cond);
            if (!cond) {
                if (c == "Economy") {
                    c2 = (squery[0].reservedEcoSeats.length == 56) || ((56 - squery[0].reservedEcoSeats.length) < total)//not enough pass
                }
                else if (c == "Business") {
                    c2 = (squery[0].reservedBusSeats.length == 12) || ((12 - squery[0].reservedBusSeats.length) < total)
                }
                else {
                    c2 = (squery[0].reservedFstSeats.length == 4) || ((4 - squery[0].reservedFstSeats.length) < total);
                }
                console.log(c2);
                if (!c2) {
                    r.push(fquery[i]);
                }
            }
            else {
                r.push(fquery[i]);
            }
        }
        console.log(fquery);
        console.log("xxxx111");
        console.log(r);
        let re = [];
        for (var i = 0; i < r.length; i++) {
            x = r[i];
            x = x.toJSON();
            console.log(x);
            if (c == "Economy") {
                p = x.EcoPrice;
            }
            else if (c == "Business") {
                p = x.BusPrice;
            }
            else {
                p = x.FPrice;
            }
            console.log(p);
            delete x.EcoPrice;
            delete x.BusPrice;
            delete x.FPrice;
            console.log(x);
            x.price = p;
            console.log(x);
            re.push(x);
        }
        console.log(re);
        res.json(re);
    } catch (err) {
        res.json({ message: err });
    }
});

app.post("/searchReturnFlights", async (req, res) => {

    const criteria = { From: req.body.From, To: req.body.To, FlightDate: req.body.departureDate, ReturnBool: true };
    let c = req.body.cabin;
    let total = req.body.adults + req.body.child;
    try {
        const fquery = await flight.find(criteria);//result set is query
        //sends each one as an object in an array
        console.log(fquery);//print 1
        let r = [];
        for (var i = 0; i < fquery.length; i++) {
            let f = fquery[i]._id;
            console.log(f);//print 2
            const squery = await seats.find({ FlightID: f });
            console.log(squery);
            let cond = squery.length == 0;//if flight has no reserved seats yet
            console.log(cond);
            if (!cond) {
                if (c == "Economy") {
                    c2 = (squery[0].reservedEcoSeats.length == 56) || ((56 - squery[0].reservedEcoSeats.length) < total)//not enough pass
                }
                else if (c == "Business") {
                    c2 = (squery[0].reservedBusSeats.length == 12) || ((12 - squery[0].reservedBusSeats.length) < total)
                }
                else {
                    c2 = (squery[0].reservedFstSeats.length == 4) || ((4 - squery[0].reservedFstSeats.length) < total);
                }
                console.log(c2);
                if (!c2) {
                    r.push(fquery[i]);
                }
            }
            else {
                r.push(fquery[i]);
            }
        }
        console.log(fquery);
        console.log("xxxx111");
        console.log(r);
        let re = [];
        for (var i = 0; i < r.length; i++) {
            x = r[i];
            x = x.toJSON();
            console.log(x);
            if (c == "Economy") {
                p = x.EcoPrice;
            }
            else if (c == "Business") {
                p = x.BusPrice;
            }
            else {
                p = x.FPrice;
            }
            console.log(p);
            delete x.EcoPrice;
            delete x.BusPrice;
            delete x.FPrice;
            console.log(x);
            x.price = p;
            console.log(x);
            re.push(x);
        }
        console.log(re);
        res.json(re);
    } catch (err) {
        res.json({ message: err });
    }

});
app.post("/AddDepartureFlight", (req, res) => {
    const newFlight = new chosenFlights({
        //'userId': req.body.userID,
        'DepartId': req.body.FlightId,
        "DepartPassengersAdult": req.body.adultPass,
        'DepartPassengersChild': req.body.childPass,
        'DepartCabin': req.body.cabin,
        'DepartSeats': req.body.seats
    })
    newFlight.save().then((result) => {
        console.log(result);
        chosenFlights.find({ _id: result._id }).populate("DepartId").then((p) => {
            console.log(p);
            let c = req.body.cabin;
            let total = req.body.adultPass + req.body.childPass;
            if (c == "Economy") {
                ticket = p[0].DepartId.EcoPrice;
            }
            else if (c == "Business") {
                ticket = p[0].DepartId.BusPrice;
            }
            else {
                ticket = p[0].DepartId.FPrice;
            }
            ticketT = (req.body.adultPass * ticket) + (req.body.childPass * ticket * constantData.childPriceRatio);
            chosenFlights.updateOne({ _id: result._id }, { DepartPrice: ticket, DepartPriceTotal: ticketT }).exec(function (err, q) {
                console.log("prices updated");
            })

        }).catch(error => console.log(error));
        res.send(result)
    })
        .catch((err) => {
            console.log(err)
        })

});
app.post("/AddReturnFlight", async (req, res) => {//places chosen return flight into db
    const cf = await chosenFlights.updateOne({ _id: req.body._id }, {
        'ReturnId': req.body.FlightId,
        "ReturnPassengersAdult": req.body.adultPass,
        'ReturnPassengersChild': req.body.childPass,
        'ReturnCabin': req.body.cabin,
        'ReturnSeats': req.body.seats
    })
    console.log(cf);
    chosenFlights.find({ _id: req.body._id }).populate("ReturnId").populate("DepartId").then(async (p) => {
        console.log(p);
        let c = req.body.cabin;
        let total = req.body.adultPass + req.body.childPass;
        if (c == "Economy") {
            ticket = p[0].ReturnId.EcoPrice;
        }
        else if (c == "Business") {
            ticket = p[0].ReturnId.BusPrice;
        }
        else {
            ticket = p[0].ReturnId.FPrice;
        }
        ticketT = (req.body.adultPass * ticket) + (req.body.childPass * ticket * constantData.childPriceRatio);
        sub = ticket + p[0].DepartPrice;
        total = ticketT + p[0].DepartPriceTotal;
        const q = await chosenFlights.updateOne({ _id: req.body._id }, { ReturnPrice: ticket, ReturnPriceTotal: ticketT, SubTotal: sub, Total: total });
        res.send(p);
    }).catch(error => console.log(error));

});

function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}
app.post("/getAvailableCabinSeats", async (req, res) => {//gets available seats left on specific flight,given a specific cabin
    let c = req.body.cabin;
    const data = await seats.find({ FlightID: req.body.FlightID });
    console.log(data);
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
    console.log(rs);
    for (var i = 0; i < rs.length; i++) {
        remove(st, rs[i]);
    }
    res.send(st);


})
app.post("/showReservedCabinSeats", async (req, res) => {
    let c = req.body.cabin;
    const data = await seats.find({ FlightID: req.body.FlightID });
    console.log(data);
    if (c == "Economy") {
        rs = data[0].reservedEcoSeats;
    }
    else if (c == "First") {
        rs = data[0].reservedFstSeats;
    }
    else {
        rs = data[0].reservedBusSeats;
    }
    console.log(rs)
    // return st; 
    res.send(rs);

})
app.get("/showReservedSeats", (req, res) => {//shows all the seat reservation database => each flight and its reserved seats
    seats.find({}).exec(function (err, data) {
        res.send(data);
    })
});
app.post("/showFlightReservedSeats", (req, res) => {//shows the reserved seats of a specific flight (all cabin types)
    seats.find({ FlightID: req.body.FlightID }).exec(function (err, data) {
        res.send(data);
    })
})

app.post("/checkSeat", (req,res)=>{
    seats.find({ FlightID: req.body.FlightID }).lean().exec(function (err, data) {
        seat = req.body.seat;
        a = data[0].reservedSeats;
        if(a.includes(seat)){
            res.send("reserved");
        }
        else{
            res.send("not reserved");
        }
    })
})
app.post("/reserveSeats", (req, res) => {//reserves seats, doesn't make sure it's already in the data
    c = req.body.cabin;

    seats.find({ FlightID: req.body.FlightID }).lean().exec(function (err, data) {
        if (data.length != 0) {
            a = data[0].reservedSeats;
            rSeats = a.concat(req.body.seats);
            if (c == "Economy") {
                if (data[0].reservedEcoSeats != null && data[0].reservedEcoSeats.length != 0) {
                    b = data[0].reservedEcoSeats;
                    console.log(data[0].reservedEcoSeats)
                    bc = b.concat(req.body.seats);
                    console.log(bc);
                } else {
                    bc = req.body.seats;
                }
                o = { reservedEcoSeats: bc }
            }
            else if (c == "First") {
                if (data[0].reservedFstSeats != null && data[0].reservedFstSeats.length != 0) {
                    b = data[0].reservedFstSeats;
                    bc = b.concat(req.body.seats);
                } else {
                    bc = req.body.seats;
                }
                o = { reservedFstSeats: bc };
            }
            else {
                if (data[0].reservedBusSeats != null && data[0].reservedBusSeats.length != 0) {
                    b = data[0].reservedBusSeats; bc = b.concat(req.body.seats);
                } else {
                    bc = req.body.seats;
                }
                o = { reservedBusSeats: bc };
            }
            ob = { reservedSeats: rSeats };
            let re = Object.assign(ob, o);
            seats.updateOne({ FlightID: req.body.FlightID }, re).exec(function (err, leads) {
                console.log("updated");
                res.status(201).send(leads);
            });
        }
        else {
            const sts = new seats({
                "FlightID": req.body.FlightID,
                "reservedSeats": req.body.seats
            })
            sts.save().then((result) => {
                res.send(result)
            })
                .catch((err) => {
                    console.log(err)
                })

        }
    })

})
app.post("/getPrice", async (req, res) => {//gets price of specific flight, given specific cabin
    const cabin = req.body.cabin;
    const data = await flight.find({ _id: req.body._id });
    console.log(data);
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

})

app.get("/getChosenFlights", (req, res) => { //prints chosenflights database
    chosenFlights.find({}).exec(function (err, data) {
        res.send(data)
    })
});
app.post("/getChosenFlight", (req, res) => { //prints chosenflights database
    chosenFlights.find({ _id: req.body._id }).exec(function (err, data) {
        res.send(data)
    })
});
function calcTotalPrice(price, children, adults) {//cabin price as input per 1 ticket
    a = price * adults;
    b = children * constantData.childPriceRatio * price;
    return a + b;
}

app.post("/getFlightDetails", (req, res) => {//flightNumber, Departure,arrival Time, Trip Duration, Cabin class,baggage allowance
    flight.find({ _id: req.body._id }).lean().exec(function (err, data) {
        c = req.body.cabin;
        if (c == "First") {
            baggage = constantData.bagallowanceFst;
            price = data[0].FPrice;
        }
        else if (c == "Business") {
            baggage = constantData.bagallowanceBus;
            price = data[0].BusPrice;
        }
        else {
            baggage = constantData.bagallowanceEco;
            price = data[0].EcoPrice;
        }
        total = calcTotalPrice(price, req.body.childPass, req.body.adultPass)
        data[0].baggageAllowance = baggage;
        data[0].totalPrice = total;
        data[0].cabin = c;
        data[0].price = price;
        res.send(data);
    })
})
function getBaggage(cabin) {
    if (cabin == "First") {
        Baggage = constantData.bagallowanceFst;
    }
    else if (cabin == "Business") {
        Baggage = constantData.bagallowanceBus;
    }
    else {
        Baggage = constantData.bagallowanceEco;
    }
    return Baggage;
}
app.post("/ViewTicketSummary", (req, res) => { //summary of chosen flights
    chosenFlights.find({ _id: req.body._id }).populate("DepartId").populate("ReturnId").then((p) => {
        let c = p[0].DepartCabin;
        departBaggage = getBaggage(c);
        let c2 = p[0].ReturnCabin;
        returnBag = getBaggage(c2);
        p[0] = p[0].toJSON();
        p[0].departureBaggage = departBaggage;
        p[0].returnBaggage = returnBag;
        res.send(p);
    })

})

