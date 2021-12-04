import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import flight from "./images/flight.png"
import {FaPlaneDeparture} from "react-icons/fa"
import {FaPlaneArrival} from "react-icons/fa"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { ImArrowRight2 } from "react-icons/im";
import{GiCommercialAirplane} from'react-icons/gi';
// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
  
function Flightitinerary(){
  const [info,setInfo]=useState([{}]);
    const [flight1, setFlight1] = useState({flightnu:"",flightDate:"",from:"",to:"",arr:"",dep:"",passA:"",ChildA:"",price:"",dur:"",terd:"",tera:"",cabin:"",seat:[],total:{}});
    const [flight2, setFlight2] = useState({flightnu:"",flightDate:"",from:"",to:"",arr:"",dep:"",passA:"",ChildA:"",price:"",dur:"",terd:"",tera:"",cabin:"",seat:[]});
    useEffect(() => {
       
      axios.post('http://localhost:8000/ReservedFlightSummary',
        {_id:"61aa1afb3b59fcb8e4a6557a"}) .then(res=> {setInfo(res.data);
          
          setFlight1({flightnu:res.data[0].DepartId.FlightNu,flightDate:res.data[0].DepartId.FlightDate,from:res.data[0].DepartId.From,to:res.data[0].DepartId.To,arr:res.data[0].DepartId.ArrivalTime,dep:res.data[0].DepartId.DepartureTime,passA:res.data[0].DepartId.DepartPassengersAdult,ChildA:res.data[0].DepartId.DepartPassengersChild,price:res.data[0].DepartPrice,dur:res.data[0].DepartId.TripDuration,terd:res.data[0].DepartId.TerminalDeparture,terda:res.data[0].DepartId.TerminalArrival,cabin:res.data[0].DepartCabin,seat:res.data[0].DepartSeats,total:res.data[0].Total})
          setFlight2({flightnu:res.data[0].ReturnId.FlightNu,flightDate:res.data[0].ReturnId.FlightDate,from:res.data[0].ReturnId.From,to:res.data[0].ReturnId.To,arr:res.data[0].ReturnId.ArrivalTime,dep:res.data[0].ReturnId.DepartureTime,passA:res.data[0].DepartId.ReturnPassengersAdult,ChildA:res.data[0].DepartId.ReturnPassengersChild,price:res.data[0].ReturnPrice,dur:res.data[0].ReturnId.TripDuration,terd:res.data[0].ReturnId.TerminalDeparture,tera:res.data[0].ReturnId.TerminalArrival,cabin:res.data[0].DepartCabin,seat:res.data[0].ReturnSeats})
  
          console.log(flight1.from);
        })
      
    }
  
   
  )
    return(
        <div>
             <div style={{}}>
         <div
                    id='intro-example'
                    className='p-5 text-center bg-image'
                    style={{
                        background: `url(${flight})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: window.screen.height, width: window.screen.width
                    }}

                >
        <Card style={{
          width: 1000,
          height:1000,
          backgroundColor: "white"
        }}>
          <CardContent>   
       
          <Typography
            style={{ fontSize: 30, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
           FLIGHT ITINERARY
          </Typography>
        
    
     
          <Typography
            style={{ fontSize: 20, fontWeight: "bold" }}
            color="textSecondary"
            align="left"
            gutterBottom
          >
            Trip to {flight1.to}
          </Typography>
      


          <hr/>
      <Typography
           align="left" 
          style={{ fontSize: 20,fontWeight: 'bold' }}
          variant="h4" component="h2">
           BOOKING NUMBER : 99625
          </Typography>

      <hr/>
      <Typography
      align="left" 
            style={{ fontSize: 27 }}
            color="textPrimary"
            gutterBottom
          >
           <FaPlaneDeparture/> departure flight
          </Typography>
          <Typography
          align="left" 
            style={{ fontSize: 27 }}
            color="textPrimary"
            gutterBottom
          >
           Departure: {flight1.flightDate}
          </Typography>


      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card
        style={{
          width: 600,
          height: 70,
          backgroundColor: "#EBECF0"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 30, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
          {flight1.from} < ImArrowRight2/> {flight1.to}
          </Typography>
        </CardContent>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card
        style={{
          width: 200,
          height: 108,
          backgroundColor: "#EBECF0"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textPrimary"
            align="center"
            gutterBottom
          >
          price : 
          </Typography>
          <Typography
            style={{ fontSize: 30, fontWeight: "bold" }}
            color="textPrimary"
            align="center"
            gutterBottom
          >
         {flight1.price} EGP
          </Typography>
        </CardContent>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card
        style={{
          width: 300,
          height: 400,
          backgroundColor: "#EBECF0"
        }}
      >
        <CardContent>
        <Typography
            style={{ fontSize: 30, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
          BSB Airways
          </Typography>
          
          <Typography
            style={{ fontSize: 25, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
          {flight1.flightnu}
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Duration:
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textSecondary"
            align="left"
            gutterBottom
          >
        {flight1.dur}
          </Typography>
         

          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Class:
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textSecondary"
            align="left"
            gutterBottom
          >
        {flight1.cabin}
          </Typography>

          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Seat:
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textSecondary"
            align="left"
            gutterBottom
          >
        {flight1.seat}
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Status:
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textSecondary"
            align="left"
            gutterBottom
          >
        confirmed
          </Typography>



        </CardContent>
      </Card>
        </Grid>
        <Grid item xs={8}>
        <Card
        style={{
          width: 350,
          height: 400,
          backgroundColor: "#EBECF0"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 16 ,fontWeight: "bold"}}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Arriving At:
          </Typography>
          <Typography
            style={{ fontSize: 25, fontWeight: "bold"}}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         {flight1.arr}
          </Typography>
         
          <Typography
            style={{ fontSize: 16 , fontWeight: "bold"}}
            color="textSecondary"
            align="left"
            gutterBottom
          >
         {flight1.tera} </Typography>
         <br/>
          <Typography
            style={{ fontSize: 16 ,fontWeight: "bold"}}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Departuring At:
          </Typography>
          <Typography
            style={{ fontSize: 25, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         {flight1.dep}
          </Typography>
        
          <Typography
            style={{ fontSize: 16 , fontWeight: "bold"}}
            color="textSecondary"
            align="left"
            gutterBottom
          >
         {flight1.terd} </Typography>
         

        </CardContent>
      </Card>
        </Grid>
      </Grid>
      </CardContent>
        <hr/>
        <div style={{marginLeft:15}}>
        <Typography
          align="left" 
            style={{ fontSize: 27 }}
            color="textPrimary"
            gutterBottom
          >
           <FaPlaneArrival/> return flight
          </Typography>
          <Typography
          align="left" 
            style={{ fontSize: 27 }}
            color="textPrimary"
            gutterBottom
          >
           Return: {flight2.flightDate}
          </Typography>
          <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card
        style={{
          width: 800,
          height: 70,
          backgroundColor: "#EBECF0"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 30, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
           {flight2.from} < ImArrowRight2/> {flight2.to}
          </Typography>
        </CardContent>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card
        style={{
          width: 400,
          height: 108,
          backgroundColor: "#EBECF0"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 20, fontWeight: "bold" }}
            color="textPrimary"
            align="center"
            gutterBottom
          >
          price :
          </Typography>
          <Typography
            style={{ fontSize: 40, fontWeight: "bold" }}
            color="textPrimary"
            align="center"
            gutterBottom
          >
         {flight2.price} EGP
          </Typography>
        </CardContent>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card
        style={{
          width: 300,
          height: 400,
          backgroundColor: "#EBECF0"
        }}
      >
        <CardContent>
        <Typography
            style={{ fontSize: 35, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
          BSB Airways
          </Typography>
          
          <Typography
            style={{ fontSize: 25, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
          {flight2.flightnu}
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Duration:
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textSecondary"
            align="left"
            gutterBottom
          >
        {flight2.dur}
          </Typography>
         

          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Class:
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textSecondary"
            align="left"
            gutterBottom
          >
        {flight2.cabin}
          </Typography>

          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Seat:
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textSecondary"
            align="left"
            gutterBottom
          >
        {flight2.seat}
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Status:
          </Typography>
          <Typography
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="textSecondary"
            align="left"
            gutterBottom
          >
        confirmed
          </Typography>



        </CardContent>
      </Card>
        </Grid>
        <Grid item xs={8}>
        <Card
        style={{
          width: 350,
          height: 400,
          backgroundColor: "#EBECF0"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 16 ,fontWeight: "bold"}}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Arriving At:
          </Typography>
          <Typography
            style={{ fontSize: 25, fontWeight: "bold"}}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         {flight2.arr}
          </Typography>
         
          <Typography
            style={{ fontSize: 16 , fontWeight: "bold"}}
            color="textSecondary"
            align="left"
            gutterBottom
          >
         {flight2.tera} </Typography>
         <br/>
          <Typography
            style={{ fontSize: 16 ,fontWeight: "bold"}}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         Departuring At:
          </Typography>
          <Typography
            style={{ fontSize: 25, fontWeight: "bold" }}
            color="textPrimary"
            align="left"
            gutterBottom
          >
         {flight2.dep}
          </Typography>
        
          <Typography
            style={{ fontSize: 16 , fontWeight: "bold"}}
            color="textSecondary"
            align="left"
            gutterBottom
          >
         {flight2.terd} </Typography>
         

        </CardContent>
      </Card>
        </Grid>
      </Grid>
      <Card
        style={{
        
          width: 330,
          height: 65,
          backgroundColor: "#EBECF0",
          opacity:0.7
        }}
      >
        <CardContent>
          <Typography
          align="left"
            style={{ fontSize: 20, fontWeight: "bold" }}
            color="textPrimary"
            gutterBottom
          >
            Total Price  : {flight1.total}
          </Typography>
        </CardContent>
      </Card>

      </div>
<hr/>

      </Card>
      
    
       

        </div></div> </div>
    )
}

export default Flightitinerary;