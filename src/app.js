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
const existing = require('./Models/existingUser.js');
const reserved = require('./Models/reservedFlights.js');
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
let sc = fs.readFileSync('./seatChart.json');
let seatsChart = JSON.parse(sc);
//console.log(data);

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
        'EcoPrice': req.body.ecoPrice,
          'BusPrice': req.body.busPrice,
          'FPrice':req.body.FPrice,
            'DepartBool': req.body.DepartBool,
          'ReturnBool':req.body.ReturnBool,
          'TripDuration':req.body.TripDuration

    })
    newFlight.save().then((result) => {
        res.send(result)
        assignFlightSeats(req.body.NuofAvailableEconomySeats,req.body.NuofAvailableBuisnessSeats,req.body.NuofAvailableFirstSeats,result._id);
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
                ob = await getSeatNumbers(f);
                if (c == "Economy") {
                    capacity = ob.e;
                    c2 = (squery[0].reservedEcoSeats.length == capacity) || ((capacity - squery[0].reservedEcoSeats.length) < total)//not enough pass
                }
                else if (c == "Business") {
                    capacity = ob.b;
                    c2 = (squery[0].reservedBusSeats.length == capacity) || ((capacity - squery[0].reservedBusSeats.length) < total)
                }
                else {
                    capacity = ob.f;
                    c2 = (squery[0].reservedFstSeats.length == capacity) || ((capacity - squery[0].reservedFstSeats.length) < total);
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
                ob = await getSeatNumbers(f);
                if (c == "Economy") {
                    capacity = ob.e;
                    c2 = (squery[0].reservedEcoSeats.length == capacity) || ((capacity - squery[0].reservedEcoSeats.length) < total)//not enough pass
                }
                else if (c == "Business") {
                    capacity = ob.b;
                    c2 = (squery[0].reservedBusSeats.length == capacity) || ((capacity - squery[0].reservedBusSeats.length) < total)
                }
                else {
                    capacity = ob.f;
                    c2 = (squery[0].reservedFstSeats.length == capacity) || ((capacity - squery[0].reservedFstSeats.length) < total);
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
        'DepartId': req.body.FlightId,
        "DepartPassengersAdult": req.body.adultPass,
        'DepartPassengersChild': req.body.childPass,
        'DepartCabin': req.body.cabin
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
function getFlightSeats(eco, bus, fst){
    const f = seatsChart.FirstSeats.slice(0, fst);
    const b = seatsChart.BusinessSeats.slice(0, bus);
    const e  = seatsChart.EconomySeats.slice(0, eco);
    ob = {economy:e, first:f, business : b};
    return ob;

}
async function getSeatNumbers(flightID){
    const data = await flight.find({_id:flightID});
    fst = data[0].NuofAvailableFirstSeats;
    bus =data[0].NuofAvailableBuisnessSeats;
    eco = data[0].NuofAvailableEconomySeats;
    ob = {f:fst,b:bus,e:eco};
    return ob;
}
function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}
app.post("/getAvailableCabinSeats", async (req, res) => {
    c = await getAvailableCabinSeat(req.body.cabin, req.body.FlightID);
    res.send(c);
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
    console.log(rs); 
    if(rs==undefined){
        res.send([]);
    }
    else{
    res.send(rs);}
})
app.post("/showFlightReservedSeats", async (req, res) => {
    const data = await seats.find({ FlightID: req.body.FlightID });
    let eco = data[0].reservedEcoSeats;
    let bus = data[0].reservedBusSeats;
    let f = data[0].reservedFstSeats;
    if (f == undefined) {
        f = [];
    }
    if (bus == undefined) {
        bus = [];
    }
    if (eco == undefined) {
        eco = []
    }
    ob = { Economy: eco, Business: bus, First: f };
    res.send(ob);
})

app.post("/showFlightAvailableSeatsNumber", async (req, res) => {
    ob = { Economy: (await getAvailableCabinSeat("Economy", req.body.FlightID)).length, Business: (await getAvailableCabinSeat("Business", req.body.FlightID)).length, First: (await getAvailableCabinSeat("First", req.body.FlightID)).length };
    res.send(ob);
})
app.post("/showFlightAvailableSeats", async (req, res) => {
    ob = { Economy: (await getAvailableCabinSeat("Economy", req.body.FlightID)), Business: (await getAvailableCabinSeat("Business", req.body.FlightID)), First: (await getAvailableCabinSeat("First", req.body.FlightID))};
    res.send(ob);
})
async function getAvailableCabinSeat(c, id) {
    const data = await seats.find({ FlightID: id });
    console.log(data);
    s =  await getSeatNumbers(id);
    console.log(s);
    ob = getFlightSeats(s.e,s.b,s.f);
    console.log(ob);
    if (c == "Economy") {
        st = ob.economy;
        rs = data[0].reservedEcoSeats;
        console.log("reserved seats are "+rs);
    }
    else if (c == "First") {
        st = ob.first;
        rs = data[0].reservedFstSeats;
    }
    else {
        st = ob.business;
        rs = data[0].reservedBusSeats;
    }
    console.log(st)
    console.log(rs);
    if (rs == undefined) {
        return st;
    }
    for (var i = 0; i < rs.length; i++) {
        if(st.includes(rs[i])){
        remove(st, rs[i]);
    }
    }
    console.log(st);
    return st;
}
app.post("/flightSeating" , async (req,res)=>{
   const query = await flight.find({_id:req.body._id});
    fst = query[0].NuofAvailableFirstSeats;
    bus =query[0].NuofAvailableBuisnessSeats;
    eco = query[0].NuofAvailableEconomySeats;
    capacity = fst+bus+eco;
    ob = getFlightSeats(eco, bus, fst, req.body_id);
    o = {firstNu:fst, businessNu:bus, economyNu: eco, totalcapacity:capacity}
    re = Object.assign(ob,o);
    res.send(re);
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

app.post("/checkSeat", (req, res) => {
    seats.find({ FlightID: req.body.FlightID }).lean().exec(function (err, data) {
        seat = req.body.seat;
        a = data[0].reservedSeats;
        if (a.includes(seat)) {
            res.send("reserved");
        }
        else {
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
app.get("/sendUserInfo", (req, res) => {
    existing.find({}).exec(function (err, data) {
        res.send(data);
    })
})
app.post("/editProfile", (req, res) => {
    existing.updateOne({ _id: req.body._id }, req.body).exec(function (err, leads) {
        res.status(201).send(leads);
    })
})

app.post("/viewMyReservedFlights", async (req, res) => {

    reserved.find({ User: req.body._id }).populate("User").populate("ChosenFlight").then(async (p) => {
        console.log(p);//p returns array of user's reservations
        for (var i = 0; i < p.length; i++) {
            console.log(p[i]);
            const query = await chosenFlights.find({ _id: p[i].ChosenFlight._id }).populate("DepartId").populate("ReturnId");
            console.log(query);
            p[i].ChosenFlight.DepartId = query[0].DepartId;
            p[i].ChosenFlight.ReturnId = query[0].ReturnId;
        }
        res.send(p);
    })
        .catch(error => console.log(error))
})
app.post("/addReservedFlight", (req, res) => {
    const res1 = new reserved({
        ChosenFlight: req.body.chosenFlightId,
        User: req.body.user
    })
    res1.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })
})
app.post("/cancelReservation", (req, res) => {
    reserved.deleteOne({ _id: req.body.ReservationId }).exec(function (err, leads) {
        res.status(201).send("You have successfully cancelled your reservation");
    });
});

app.post("/ReservedFlightSummary", (req, res) => {
    reserved.find({ _id: req.body._id }).populate("User").populate("ChosenFlight").then(async (p) => {
        console.log(p);//p returns array of user's reservations
        console.log(p[0]);
        const query = await chosenFlights.find({ _id: p[0].ChosenFlight._id }).populate("DepartId").populate("ReturnId");
        console.log(query);
        p[0].ChosenFlight.DepartId = query[0].DepartId;
        p[0].ChosenFlight.ReturnId = query[0].ReturnId;
        let c = p[0].ChosenFlight.DepartCabin;
        departBaggage = getBaggage(c);
        let c2 = p[0].ChosenFlight.ReturnCabin;
        returnBag = getBaggage(c2);
        p[0] = p[0].toJSON();
        p[0].departureBaggage = departBaggage;
        p[0].returnBaggage = returnBag;
        res.send(p);
    })
        .catch(error => console.log(error))
})

//{"seats":["a1","a2","a3","a4","a5","a6","b1","b2","b3","b4","b5","b6","c1","c2","c3","c4","c5","c6","d1","d2","d3","d4","d5","d6","e1","e2","e3","e4","e5","e6","f1","f2","f3","f4","f5","f6","g1","g2","g3","g4","g5","g6","h1","h2","h3","h4","h5","h6","i1","i2","i3","i4","i5","i6","j1","j2","j3","j4","j5","j6","k1","k2","k3","k4","k5","k6","l1","l2","l3","l4","l5","l6","m1","m2","m3","m4","m5","m6","n1","n2","n3","n4","n5","n6","o1","o2","o3","o4","o5","o6","p1","p2","p3","p4","p5","p6"]}

// "FirstSeats": [],
// "BusinessSeats": [],
// "EconomySeats": [],
// "_id": "618cd502e46abcc99dde1ccb",
// "From": "LAX",
// "To": "FGF",
// "FlightDate": "2021-11-10T00:00:00.000Z",
// "NuofAvailableFirstSeats": 10,
// "NuofAvailableBuisnessSeats": 6,
// "NuofAvailableEconomySeats": 12,
// "TerminalDeparture": 2,
// "TerminalArrival": 3,
// "FlightNu": "CC208",
// "ArrivalTime": "3:00 AM",
// "DepartureTime": "12:00 AM",
// "DepartBool": false,
// "ReturnBool": false,
// "TripDuration": "3",
// "BusPrice": 50,
// "EcoPrice": 25,
// "FPrice": 100