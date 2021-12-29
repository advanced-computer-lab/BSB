import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import wifi from './images/wifi.jpg'
import { useNavigate } from 'react-router-dom';

function Wifi() {
  const navigate = useNavigate();
  return (<div
    id='intro-example'
    className='p-5 text-center bg-image'
    style={{
      marginTop: -290,

      background: `url(${wifi})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 500, width: window.screen.width
    }}
  >
    <div>
      <Typography style={{ fontSize: 30, fontFamily: 'Verdana', marginTop: 180, color: 'white', marginLeft: 100, fontWeight: 'bold' }}

        align="left"
        gutterBottom
      >




        Super Wi-Fi onboard
      </Typography>
      <Typography style={{ fontSize: 20, fontFamily: 'Verdana', fontWeight: "bold", marginTop: 250, marginLeft: 100, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <Link style={{ color: '#5c0931' }} href="#" onClick={() => navigate("/Search")}>Home</Link> > Super Wifi

      </Typography>
      <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />

      <Typography style={{ fontSize: 20, fontFamily: 'Verdana', fontWeight: "bold", marginTop: 20, marginLeft: 150, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        Stay connected at 35,000 ft.
      </Typography>
      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: 0, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        Experience unlimited connectivity to reach friends, family, and colleagues on your smartphone, tablet or laptop throughout your journey        </Typography>

      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: 0, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        Save up to 20%* when you purchase your Super Wi-Fi code during boarding.  </Typography>
      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: 0, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        *Terms and conditions apply. This offer is available on Boeing 777 and Airbus A350 aircraft. </Typography>

      <br />
      <Typography style={{ fontSize: 18, fontFamily: 'Verdana', fontWeight: "bold", marginTop: 0, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        Conditions of purchase:         </Typography>
      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: 0, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      ><br />
        <AiOutlineArrowRight />The amount paid for Super Wi-Fi access is non-refundable. </Typography>
      <br />
      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: -20, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <AiOutlineArrowRight />Super Wi-Fi service is currently available on Boeing 777 and Airbus A350 aircraft. </Typography>
      <br />
      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: -20, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <AiOutlineArrowRight />The Super Wi-Fi access code can only be used on one device at a time.
      </Typography>

      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: 10, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <AiOutlineArrowRight />If you want to use it on a second device, you will have to log out from the first one and log into the new device using the same code. </Typography>

      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: 10, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <AiOutlineArrowRight />To access the Super Wi-Fi service on board,
        open the in-flight Wi-Fi portal on your browser and enter your Super Wi-Fi access code.  </Typography><br />

      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: -20, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <AiOutlineArrowRight />The Super Wi-Fi access code is valid for one year from the date of purchase and can only be used once. </Typography><br />
      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: -20, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <AiOutlineArrowRight />Super Wi-Fi service is progressively being rolled out on all BSB Airways aircraft.
      </Typography>
      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: 0, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <AiOutlineArrowRight />Please check whether the Super Wi-Fi service is available on your upcoming flight.
      </Typography><br />
      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: -20, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <AiOutlineArrowRight />Service interruption may occur while flying due to regulatory restrictions over some countries. </Typography>
      <br />

      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: -20, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        <AiOutlineArrowRight />In case of operational changes to scheduled aircraft, you can still use your voucheron other BSB Airways
      </Typography>
      <Typography style={{ fontSize: 15, fontFamily: 'Verdana', marginTop: 0, marginLeft: 170, color: ' #5c0931' }}

        align="left"
        gutterBottom
      >
        flights that are enabled with Super Wi-Fi within the access code validity period.
      </Typography>
      <br />


      <br />
      <br />
    </div> </div>
  )
}

export default Wifi;