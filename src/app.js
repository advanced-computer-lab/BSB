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
    v = checkFlightDetails(req.body.FlightNu, req.body.From,
        req.body.To, req.body.NuofAvailableFirstSeats, req.body.NuofAvailableBuisnessSeats,
        req.body.NuofAvailableEconomySeats, req.body.TerminalDeparture,
        req.body.TerminalArrival, req.body.ArrivalTime, req.body.DepartureTime, req.body.ecoPrice, req.body.busPrice, req.body.FPrice, req.body.DepartBool,
        req.body.ReturnBool, req.body.TripDuration);
    if (v != "No type errors") {
        res.status(403).send(v);
        return;
    }
    if ((req.body.From != undefined) && req.body.From == req.body.To)
        res.status(403).send("You cannot choose the same departure and arrival airports")
    else if (req.body.FlightDate != undefined && req.body.FlightDate < Date.now())
        res.status(403).send("You cannot add a flight whose date has passed")
    else if ((req.body.TerminalDeparture != undefined && req.body.TerminalDeparture <= 0) || (req.body.TerminalArrival != undefined && req.body.TerminalArrival <= 0)) {
        res.status(403).send("Terminals have to be a positive")
    }
    else if ((req.body.EcoPrice != undefined && req.body.EcoPrice <= 0) || (req.body.BusPrice != undefined && req.body.BusPrice <= 0) || (req.body.FPrice != undefined && req.body.FPrice <= 0)) {
        res.status(403).send("Prices have to be positive values")
    }
    else if (req.body.TripDuration != undefined && req.body.TripDuration <= 0) {
        res.status(403).send("A trip's duration has to be greater than 0 hours")
    }
    else if (req.body.TripDuration != undefined && req.body.DepartureTime != undefined && req.body.FlightDate != undefined && req.body.ArrivalTime != undefined && req.body.TripDuration != (checkTime(req.body.DepartureTime, req.body.ArrivalTime, req.body.FlightDate))) {
        res.status(403).send("A trip's duration has to match the difference between departure and arrival times");
    }
    else {
        flight.updateOne({ _id: req.body._id }, req.body).exec(function (err, leads) {
            res.status(201).send(leads);
        });
    }
});
function checkTime(depart, arrive, date) {
    dep = depart.split(" ");
    arr = arrive.split(" ");
    dap = dep[1];
    if (dap == "PM") {
        var dtime = dep[0].split(':');
        var t = parseInt(dtime[0]);
        if (t < 12 && t > 0) {
            t = t + 12;
        }
        t = t + 2;
        dtime[0] = "" + t;
        dra = dtime.join(":");
    }
    else if (dap == "AM") {
        var dtime = dep[0].split(':');
        var t = parseInt(dtime[0]);
        if (t == 12) {
            t = 0;
        }
        t = t + 2;
        dtime[0] = "" + t;
        dra = dtime.join(":");
    }
    aap = arr[1];
    if (aap == "PM") {
        var atime = arr[0].split(':');
        var t = parseInt(atime[0]);
        if (t < 12 && t > 0) {
            t = t + 12;
        }
        t = t + 2;
        atime[0] = "" + t;
        ara = atime.join(":");
    }
    else if (aap == "AM") {
        var atime = arr[0].split(':');
        var t = parseInt(atime[0]);
        if (t == 12) {
            t = 0;
        }
        t = t + 2;
        atime[0] = "" + t;
        ara = atime.join(":");//time in string modified to match getdatefromhours, 11:12
    }

    if (dap == "PM" && aap == "AM") {
        var time = ara.split(':');
        var x = parseInt(time[0]);
        time[0] = x + 24;
        ara = time.join(":");
    }
    r = convert(dra, ara, date);
    return r;
}
function getDateFromHours(time, date) {
    time = time.split(':');
    time.push('00');
    let now = new Date();
    x = new Date(date)
    return new Date(x.getFullYear(), x.getMonth(), x.getDate(), ...time);
}
function convert(time1, time2, date) {
    date1 = getDateFromHours(time1, date);
    date2 = getDateFromHours(time2, date);
    diff = getD(date1, date2);
    return diff;
}
function getD(date1, date2) {
    var seconds = (date2.getTime() - date1.getTime()) / 1000;
    var hours = seconds / 3600;
    return hours
}
function timeCheck(time) {
    const userKeyRegExp = /^[0-9]{2}\:[0-9]{2}\sA|PM?$/;
    const valid = userKeyRegExp.test(time);
    return valid;
}
function checkFlightDetails(FlightNu, From, To, fstSeats, busSeats, ecoSeats, tdepart, tarrive, arrivalT, departT, ecoPrice, busPrice, Fprice, DepartB, ReturnB, tripD) {
    if (FlightNu != undefined && typeof FlightNu != "string") {
        return ("Flight Number must be a string")
    }
    if (From != undefined && typeof From != "string") {
        return ("Departure Airport must be a string")
    }
    if (To != undefined && typeof To != "string") {
        return ("Arrival Airport must be a string")
    }
    if (fstSeats != undefined && typeof fstSeats != "number") {
        return ("first seats must be a number")
    }
    if (busSeats != undefined && typeof busSeats != "number") {
        return ("business seats must be a number")
    }
    if (ecoSeats != undefined && typeof ecoSeats != "number") {
        return ("economy seats must be a number")
    }
    if (tdepart != undefined && typeof tdepart != "number") {
        return ("departure terminal number must be a number")
    }
    if (tarrive != undefined && typeof tarrive != "number") {
        return ("arrival terminal number must be a number")
    }
    if (arrivalT != undefined && typeof arrivalT != "string") {
        return ("arrival time must be a string")
    }
    if (arrivalT != undefined && !timeCheck(arrivalT)) {
        return ("Arrival time must be in the format (HH:MM AM/PM)")
    }
    if (departT != undefined && typeof departT != "string") {
        return ("departure time must be a string")
    } if (departT != undefined && !timeCheck(departT)) {
        return ("departure time must be in the format (HH:MM AM/PM)")
    }
    if (ecoPrice != undefined && typeof ecoPrice != "number") {
        return ("economy ticket price must be a number")
    }
    if (busPrice != undefined && typeof busPrice != "number") {
        return ("business ticket price must be a number")
    }
    if (DepartB != undefined && typeof DepartB != "boolean") {
        return ("Departure must be a boolean")
    }
    if (ReturnB != Fprice && typeof ReturnB != "boolean") {
        return ("Return must be a boolean")
    }
    if (tripD != undefined && typeof tripD != "string") {
        return ("Trip Duration  must be a string")
    }
    return "No type errors";
}
app.post("/addFlight", async (req, res) => {
    v = checkFlightDetails(req.body.FlightNu, req.body.From,
        req.body.To, req.body.NuofAvailableFirstSeats, req.body.NuofAvailableBuisnessSeats,
        req.body.NuofAvailableEconomySeats, req.body.TerminalDeparture,
        req.body.TerminalArrival, req.body.ArrivalTime, req.body.DepartureTime, req.body.ecoPrice, req.body.busPrice, req.body.FPrice, req.body.DepartBool,
        req.body.ReturnBool, req.body.TripDuration);
    if (v != "No type errors") {
        res.status(403).send(v);
        return;
    }
    const query2 = await flight.find({
        'From': req.body.From,
        'To': req.body.To,
        'FlightDate': req.body.FlightDate,
        'NuofAvailableFirstSeats': req.body.NuofAvailableFirstSeats,
        'NuofAvailableBuisnessSeats':
            req.body.NuofAvailableBuisnessSeats,
        'NuofAvailableEconomySeats': req.body.NuofAvailableEconomySeats,
        'TerminalDeparture': req.body.TerminalDeparture,
        'TerminalArrival': req.body.TerminalArrival,
        'ArrivalTime': req.body.ArrivalTime,
        'DepartureTime': req.body.DepartureTime,
        'EcoPrice': req.body.ecoPrice,
        'BusPrice': req.body.busPrice,
        'FPrice': req.body.FPrice,
        'DepartBool': req.body.DepartBool,
        'ReturnBool': req.body.ReturnBool,
        'TripDuration': req.body.TripDuration

    });
    console.log(query2);
    if (query2.length == 0) {
        exis = false;
    }
    else {
        exis = true;
    }
    const query = await flight.find({ FlightNu: req.body.FlightNu });
    if (query.length == 0)
        var found = false
    else
        found = true
    if (found) {
        res.status(403).send("This flight number already exists")
    }
    else if (exis) {
        res.status(403).send("This flight already exists")
    }
    else if (req.body.From == req.body.To)
        res.status(403).send("You cannot choose the same departure and arrival airports")
    else if (req.body.FlightDate < Date.now())
        res.status(403).send("You cannot add a flight whose date has passed")
    else if (req.body.TerminalDeparture <= 0 || req.body.TerminalArrival <= 0) {
        res.status(403).send("Terminals have to be a positive")
    }
    else if (req.body.EcoPrice <= 0 || req.body.BusPrice <= 0 || req.body.FPrice <= 0) {
        res.status(403).send("Prices have to be positive values")
    }
    else if (req.body.TripDuration <= 0) {
        res.status(403).send("A trip's duration has to be greater than 0 hours")
    }
    else if (req.body.TripDuration != (checkTime(req.body.DepartureTime, req.body.ArrivalTime, req.body.FlightDate))) {
        res.status(403).send("A trip's duration has to match the difference between departure and arrival times");
    }
    else {
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
            'FPrice': req.body.FPrice,
            'DepartBool': req.body.DepartBool,
            'ReturnBool': req.body.ReturnBool,
            'TripDuration': req.body.TripDuration

        })
        newFlight.save().then((result) => {
            res.send(result)
            assignFlightSeats(req.body.NuofAvailableEconomySeats, req.body.NuofAvailableBuisnessSeats, req.body.NuofAvailableFirstSeats, result._id);
        })
            .catch((err) => {
                console.log(err)
            })
    }
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
function getFlightSeats(eco, bus, fst) {
    const f = seatsChart.FirstSeats.slice(0, fst);
    const b = seatsChart.BusinessSeats.slice(0, bus);
    const e = seatsChart.EconomySeats.slice(0, eco);
    ob = { economy: e, first: f, business: b };
    return ob;

}
async function getSeatNumbers(flightID) {
    const data = await flight.find({ _id: flightID });
    if (data.length == 0) {
        console.log("Flight not found");
    }
    else {
        fst = data[0].NuofAvailableFirstSeats;
        bus = data[0].NuofAvailableBuisnessSeats;
        eco = data[0].NuofAvailableEconomySeats;
        ob = { f: fst, b: bus, e: eco };
        return ob;
    }
}
function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}
app.post("/getAvailableCabinSeats", async (req, res) => {
    c = await getAvailableCabinSeat(req.body.cabin, req.body.FlightID);
    if (c == null || c == undefined) {
        res.send("Flight not found");
    }
    else {
        res.send(c);
    }
})
app.post("/getEcoAvailableSeats", async (req, res) => {
    c = await getAvailableCabinSeat("Economy", req.body.FlightID);
    if (c == null || c == undefined) {
        res.send("Flight not found");
    }
    else {
        res.send(c);
    }
})
app.post("/getBusAvailableSeats", async (req, res) => {
    c = await getAvailableCabinSeat("Business", req.body.FlightID);
    if (c == null || c == undefined) {
        res.send("Flight not found");
    }
    else {
        res.send(c);
    }
})
app.post("/getFstAvailableSeats", async (req, res) => {
    c = await getAvailableCabinSeat("First", req.body.FlightID);
    if (c == null || c == undefined) {
        res.send("Flight not found");
    }
    else {
        res.send(c);
    }
})
app.post("/showReservedCabinSeats", async (req, res) => {
    let c = req.body.cabin;
    const data = await seats.find({ FlightID: req.body.FlightID });
    if (data.length == 0) {
        res.send("No seats reserved, or flight not found")
    }
    else {

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
        if (rs == undefined) {
            res.send([]);
        }
        else {
            res.send(rs);
        }
    }
})
app.post("/showFlightReservedSeats", async (req, res) => {
    const data = await seats.find({ FlightID: req.body.FlightID });
    if (data.length == 0) {
        res.send("No seats reserved, or flight not found")
    }
    else {
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
    }
})

app.post("/showFlightAvailableSeatsNumber", async (req, res) => {
    ob = { Economy: (await getAvailableCabinSeat("Economy", req.body.FlightID)).length, Business: (await getAvailableCabinSeat("Business", req.body.FlightID)).length, First: (await getAvailableCabinSeat("First", req.body.FlightID)).length };
    res.send(ob);
})
app.post("/showFlightAvailableSeats", async (req, res) => {
    ob = { Economy: (await getAvailableCabinSeat("Economy", req.body.FlightID)), Business: (await getAvailableCabinSeat("Business", req.body.FlightID)), First: (await getAvailableCabinSeat("First", req.body.FlightID)) };
    res.send(ob);
})
async function getAvailableCabinSeat(c, id) {
    const data = await seats.find({ FlightID: id });
    if (data.length == 0) {
        s = await getSeatNumbers(id);
        console.log(s);
        ob = getFlightSeats(s.e, s.b, s.f);
        console.log(ob);
        if (c == "Economy") {
            st = ob.economy;
        }
        else if (c == "First") {
            st = ob.first;
        }
        else {
            st = ob.business;
        }
        return st;
    }
    else {
        console.log(data);
        s = await getSeatNumbers(id);
        console.log(s);
        ob = getFlightSeats(s.e, s.b, s.f);
        console.log(ob);
        if (c == "Economy") {
            st = ob.economy;
            rs = data[0].reservedEcoSeats;
            console.log("reserved seats are " + rs);
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
            if (st.includes(rs[i])) {
                remove(st, rs[i]);
            }
        }
        console.log(st);
        return st;
    }
}
app.post("/flightSeating", async (req, res) => {
    const query = await flight.find({ _id: req.body._id });
    if (query.length == 0) {
        res.send("flight not found")
    }
    else {
        fst = query[0].NuofAvailableFirstSeats;
        bus = query[0].NuofAvailableBuisnessSeats;
        eco = query[0].NuofAvailableEconomySeats;
        capacity = fst + bus + eco;
        ob = getFlightSeats(eco, bus, fst, req.body_id);
        o = { firstNu: fst, businessNu: bus, economyNu: eco, totalcapacity: capacity }
        re = Object.assign(ob, o);
        res.send(re.economy[0]);
    }
});
app.post("/flightSeatingEco", async (req, res) => {
    const query = await flight.find({ _id: req.body._id });
    if (query.length == 0) {
        res.send("flight not found")
    }
    else {
        fst = query[0].NuofAvailableFirstSeats;
        bus = query[0].NuofAvailableBuisnessSeats;
        eco = query[0].NuofAvailableEconomySeats;
        ob = getFlightSeats(eco, bus, fst, req.body_id);
        res.send(ob.economy);
    }
})
app.post("/flightSeatingBus", async (req, res) => {
    const query = await flight.find({ _id: req.body._id });
    if (query.length == 0) {
        res.send("flight not found")
    }
    else {
        fst = query[0].NuofAvailableFirstSeats;
        bus = query[0].NuofAvailableBuisnessSeats;
        eco = query[0].NuofAvailableEconomySeats;
        ob = getFlightSeats(eco, bus, fst, req.body_id);
        res.send(ob.business);
    }
})
app.post("/flightSeatingFst", async (req, res) => {
    const query = await flight.find({ _id: req.body._id });
    if (query.length == 0) {
        res.send("flight not found")
    }
    else {
        fst = query[0].NuofAvailableFirstSeats;
        bus = query[0].NuofAvailableBuisnessSeats;
        eco = query[0].NuofAvailableEconomySeats;
        ob = getFlightSeats(eco, bus, fst, req.body_id);
        res.send(ob.first);
    }
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
app.post("/checkSeat", async (req, res) => {
    const data = await seats.find({ FlightID: req.body.FlightID });
    seat = req.body.seat;
    if (data.length == 0) {
        res.send("not reserved");
    }
    else {
        a = data[0].reservedSeats;
        if (a.includes(seat)) {
            res.send("reserved");
        }
        else {
            res.send("not reserved");
        }
    }
})
//61abc8483adf3477c707345a
app.post("/c", async (req, res) => {//reserves seats, doesn't make sure it's already in the data
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

            if (c == "Economy") {
                ob = {
                    "FlightID": req.body.FlightID,
                    "reservedSeats": req.body.seats,
                    "reservedEcoSeats": req.body.seats
                }
            }
            else if (c == "Business") {
                ob = {
                    "FlightID": req.body.FlightID,
                    "reservedSeats": req.body.seats,
                    "reservedBusSeats": req.body.seats
                }
            }
            else {
                ob = {
                    "FlightID": req.body.FlightID,
                    "reservedSeats": req.body.seats,
                    "reservedFstSeats": req.body.seats
                }
            }
            const sts = new seats(ob)
            sts.save().then((result) => {

                res.send(result)
            })
                .catch((err) => {
                    console.log(err)
                })

        }

    })
    const fl = await flight.find({ _id: req.body.FlightID });
    d = fl[0].DepartBool;
    if (d) {
        ob = { DepartSeats: req.body.seats }
    }
    else {
        ob = { ReturnSeats: req.body.seats };
    }
    chosenFlights.updateOne({ _id: req.body.chosenFlightID }, ob).exec(function (err, data) {
        console.log("seats placed in chosen flights")
    })
})
//6185af9d250c46b0fd2322ed
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
app.post("/editProfile", async (req, res) => {
    found1 = false;
    found = false;
    msg = "";
    if (req.body.firstName != undefined && typeof req.body.firstName != "string") {
        res.status(403).send("passport has to be a string")
        return;
    }
    if (req.body.lastName != undefined && typeof req.body.lastName != "string") {
        res.status(403).send("passport has to be a string")
        return;
    }
    if (req.body.passport != undefined) {
        if (typeof req.body.passport != "string") {
            res.status(403).send("passport has to be a string")
            return;
        }
        else {
            const query = await existing.find({ passport: req.body.passport })
            if (query.length == 0)
                var found = false
            else {
                c = query1[0].passport;
                if (c == req.body._id) {
                    found = false;
                }
                found = true
            }

        }
    }
    else if (req.body.email != undefined) {
        if (typeof req.body.email != "string") {
            res.status(403).send("email has to be a string")
            return;
        }
        else {
            const query1 = await existing.find({ email: req.body.email })
            if (query1.length == 0)
                var found1 = false
            else {
                c = query1[0]._id
                if (c == req.body._id) {
                    found1 = false;
                }
                else {
                    found1 = true
                }
            }
        }
    }
    if (found1) {
        res.status(403).send("This email is already registered")
        //msg = msg.concat("This email is already taken")
    } else if (found) {
        res.status(403).send("This passport number already exists in our database")
        // msg = "This passport number already exists in our database, ";
    }
    else {
        existing.updateOne({ _id: req.body._id }, req.body).exec(function (err, leads) {
            res.status(201).send(leads);
        })
    }

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
        res.send(p[0]);

    })
        .catch(error => console.log("error", error))
})
