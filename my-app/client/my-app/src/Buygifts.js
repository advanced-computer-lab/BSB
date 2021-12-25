import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gifts from './images/gifts.jpg'
import { useNavigate } from 'react-router-dom';
function Buygifts() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <div
      id='intro-example'
      className='p-5 text-center bg-image'
      style={{
        marginTop: -200,

        background: `url(${gifts})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 500, width: window.screen.width
      }}
    >
      <div>
        <Typography style={{ fontSize: 30, fontFamily: 'Verdana', marginTop: 150, color: '#FFFFFF', marginLeft: 100, fontWeight: 'bold' }}

          align="left"
          gutterBottom
        >


         Buy gifts and miles



        </Typography>

        <Typography style={{ fontSize: 20, fontFamily: 'Verdana', fontWeight: "bold", marginTop: 280, marginLeft: 100, color: ' #5c0931' }}

          align="left"
          gutterBottom
        >
          <Link style={{ color: '#5c0931' }} href="#"  onClick={() => navigate("/Search")}>Home</Link> > Buy gifts or transfer miles
          <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' ,marginLeft:0}} />
        </Typography>


        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} allign="center">
            <TabList allign="center" onChange={handleChange} aria-label="lab API tabs example" style={{ marginLeft: 40 }}>
              <Tab style={{ fontSize: 20, marginTop: 20, color: ' #5c0931', fontFamily: 'Verdana', marginLeft: 50, fontWeight: 'bold' }} allign="center" label="Buy" value="1" />
              <Tab style={{ fontSize: 20, marginTop: 20, color: ' #5c0931', fontFamily: 'Verdana', marginLeft: 50, fontWeight: 'bold' }} allign="center" label="Gift" value="2" />
              <Tab style={{ fontSize: 20, marginTop: 20, color: ' #5c0931', fontFamily: 'Verdana', marginLeft: 50, fontWeight: 'bold' }} allign="center" label="Transfer" value="3" />
            </TabList>
          </Box>
          <TabPanel allign="center" value="1">
            <Typography style={{ fontFamily: 'Verdana', fontWeight: "bold", fontSize: 20, fontFamily: 'Verdana', marginTop: 10, color: ' #5c0931', marginLeft: 120 }}

              align="left"
              gutterBottom
            >

              Buy miles



            </Typography>


            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 160 }}
              align="left"
              gutterBottom>




              Buy more miles to get the flight reward you really want.



            </Typography>
            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: 160 }}
              align="left"
              gutterBottom>


              If you do not have enough miles for an award ticket,
              award upgrade on BSB Airways or extra baggage,


            </Typography>
            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: 160 }}
              align="left"
              gutterBottom>


              you can buy additional miles to top up your existing balance online.


            </Typography>
            <br />

            <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 20, fontWeight: 'bold' }}>


                    Buy or top-up your miles
                  </Typography>
                  <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: '  #5c0931', width: 200 }} />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: -170 }}>


                    ● You can purchase miles in blocks of 1,000.



                  </Typography>
                  <br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: -170 }}>




                    ● Buy up to 250,000 miles per calendar year.



                  </Typography>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: 0 }}>



                    This means the more you buy, the less you pay per mile.


                  </Typography><br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: -40 }}>






                    ● You must have earned a minimum of 1,000 miles
                    from your



                  </Typography>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: 15 }}>






                    date of enrolment before you can purchase additional miles.



                  </Typography>
                  <br />


                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: -185 }}>







                    ● The purchase of miles is non-refundable.



                  </Typography><br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: -85 }}>








                    ● The price for “Buy miles” transactions will be based on


                  </Typography>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: -90 }}>








                    the number of miles bought at any given transaction.

                  </Typography>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: -70 }}>







                    This means the more you buy, the less you pay per mile.


                  </Typography>


                </CardContent>

              </Box>
              <CardMedia
                style={{ marginLeft: 0 }}
                component="img"
                width="200"
                sx={{ width: 400 }}
                image="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/privilege-club/miscellaneous/rebrand/h1-man-women-computer.jpg"
                alt="Memberchips"
              />
            </Card>

            <br />








          </TabPanel>
          <TabPanel value="2">
            <Typography style={{ fontWeight: "bold", fontSize: 20, fontFamily: 'Verdana', marginTop: 10, color: ' #5c0931', marginLeft: 120 }}

              align="left"
              gutterBottom
            >

              Gift miles



            </Typography>

            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 160 }}
              align="left"
              gutterBottom>


              Help make your family or friends' travel dreams come true


            </Typography>
            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 160 }}
              align="left"
              gutterBottom>


              Purchase miles or simply share them with family and friends to help make their travel dreams come true!

            </Typography>
            <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 160 }}
              align="left"
              gutterBottom>


              We have enhanced our Gift and Transfer processes to ensure you have a more rewarding experience.

            </Typography>
            <br />

            <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>

                    Give the gift of adventure</Typography>
                  <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -200 }}>


                    ● Buy miles in blocks of 1,000 for another Privilege


                  </Typography>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -450 }}>


                    Club member.


                  </Typography>
                  <br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -170 }}>

                  ● Make a gift of up to 250,000 Qmiles per calendar year.


                  </Typography>
                  <br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -270 }}>
                    ● The purchase of miles is non-refundable.



                  </Typography>

                  <br />


                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: 10 }}>

                    ● Members must have a minimum of 1,000 miles in their account to gift miles.


                  </Typography><br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -160 }}>
                    ● The price for “Gift miles” transactions will be based on


                  </Typography>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -160 }}>
                    the number of miles bought at any given transaction.

                  </Typography>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -130 }}>
                    This means the more you buy, the less you pay per mile.


                  </Typography>


                </CardContent>

              </Box>
              <CardMedia
                style={{ marginLeft: 0 }}
                component="img"
                width="900"
                sx={{ width: 1000, height: 600 }}
                image="https://image.shutterstock.com/image-photo/top-view-photo-stylish-black-260nw-2044509962.jpg"
                alt="Memberchips"
              />
            </Card>

            <br />
<br/>
<br/>

          </TabPanel>
          <TabPanel value="3">

            <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }} >
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>

                    Share your miles with another Privilege Club member</Typography>
                  <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -7, fontSize: 15, marginLeft: -170 }}>


                    ● miles can be transferred in blocks of 1,000 miles.

                  </Typography>

                  <br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -130 }}>




                    ● You can transfer up to 250,000 miles per calendar year.

                  </Typography>
                  <br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -250 }}>






                    ● The transfer of miles is non-refundable.


                  </Typography>

                  <br />


                  <br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -20, fontSize: 15, marginLeft: -120 }}>








                    ● Transfer miles at any time by logging in to your account.

                  </Typography><br />
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -100 }}>








                    ● Transfer a block of 1,000 miles online starting from 15 USD
                  </Typography>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -130 }}>







                    and going as low as 13 USD depending on the number of miles

                  </Typography>
                  <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, marginLeft: -100 }}>







                    transferred in a transaction.
                  </Typography>


                </CardContent>

              </Box>
              <CardMedia
                style={{ marginLeft: 0 }}
                component="img"
                width="500"
                sx={{ width: 1000, height: 600 }}
                image="https://www.qatarairways.com/content/dam/images/renditions/horizontal-2/privilege-club/miscellaneous/gift/h2-gift-transfer.jpg"
                alt="Memberchips"
              />
              <br/>
              <br/>
            </Card>

            <br />










          </TabPanel>
        </TabContext>





      </div>

    </div>
  )
}
export default Buygifts;