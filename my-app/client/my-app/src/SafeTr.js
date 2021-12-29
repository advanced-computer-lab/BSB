import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import safetravel from './images/safetravel.jpg';
import { useLocation, useNavigate } from 'react-router'
function SafeTr() {
  const [value, setValue] = React.useState('1');
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div
      id='intro-example'
      className='p-5 text-center bg-image'
      style={{
        marginTop: -250,
        
        background: `url(${safetravel})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 700, width: window.screen.width
      }}
    >

      <div>
        <Typography style={{ fontSize: 35, fontWeight: "bold", marginTop: 250, color: ' white', marginLeft: 70 }}

          align="left"
          gutterBottom
        >

          Your safety is our priority


        </Typography>
        <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 210, color: ' #5c0931', marginLeft: 100 }}

          align="left"
          gutterBottom
        >
          <Link style={{ color: '#5c0931' }} href="#" onClick={()=> navigate("/Search")}>Home</Link> > Help

        </Typography>
        <hr style={{ fontSize: 5, fontWeight: "bold", marginLeft: 0, color: ' #5c0931' }} />


        <Typography style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: ' #5c0931', marginTop: 20, marginLeft: -350, fontSize: 25 }} >


          Travel safely with one of the most experienced airlines

        </Typography>
        <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 200 }}
          align="left"
          gutterBottom>


          As one of the largest and most experienced global airlines throughout the COVID-19 crisis, you can rely on us to take you on your next journey safely.

        </Typography>
        <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 200 }}
          align="left"
          gutterBottom>


          We continue to ensure that our safety and hygiene measures are of the highest standard,
        </Typography>
        <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 200 }}
          align="left"
          gutterBottom>


          with new procedures implemented throughout your journey, from check in to arrival at your destination.
        </Typography>
        <br />

        <Box sx={{ width: '100%', typography: 'body1', marginLeft:25 }} align="center">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab style={{ fontSize: 15, color: 'white', background: '#5c0931', width: 700 }} label="Check in & boarding" value="1" />
                <Tab style={{ fontSize: 15, color: 'white', background: '#5c0931', width: 700 }} label="On board" value="2" />
                <Tab style={{ fontSize: 15, color: 'white', background: '#5c0931', width: 700 }} label="At the airport" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: 270 }}
                align="left"
                gutterBottom>

                We understand that travelling at the moment may seem overwhelming.
              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 0, fontSize: 15, marginLeft: 170 }}
                align="left"
                gutterBottom>



                To ensure you are prepared for your journey, we have updated our pre-travel recommendations.        </Typography>

              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop:50, marginLeft: 60
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="http://blog.flydealfare.com/wp-content/uploads/2017/09/qatar-online-check-in.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Check in online
                    </Typography>
                    <Typography variant="body2" color="white">
                      Check in online to reduce interactions at the airport.
                      print your boarding pass at home.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: -350, marginLeft: 600
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://www.koreanair.com/content/dam/koreanair/ko/airport/baggage/overview/ap-luggage-img-03-m.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Checked baggage only
                    </Typography>
                    <Typography variant="body2" color="white">
                      Check the baggage requirements at your destination, as hand luggage may not be accepted.
                      To minimise contact at the airport, print your Q-Tag baggage tag at home.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: 90, marginLeft: 60
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/07/44986.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Face masks
                    </Typography>
                    <Typography variant="body2" color="white">
                      We now require all passengers* to wear a face mask at all times, throughout the entire journey.
                      To ensure you are comfortable, we recommend bringing your own from home. See exempted passengers below.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: -350, marginLeft: 600
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFB1Gi5LaxwIUXksniPgky-l84TQySPlMD1ek8RMIYXO6lQWjMtjFg4zyJV3oNV3Ln2Y&usqp=CAU"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Avoid travel if you are unwell
                    </Typography>
                    <Typography variant="body2" color="white">
                      If you have experienced symptoms of COVID-19 within the past 14 days, we require you not to travel.
                      We have plenty of options for you to rebook your flight.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: 100, marginLeft: 60
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://i2-prod.edinburghlive.co.uk/incoming/article21409951.ece/ALTERNATES/s1200b/0_JS159026520.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Arrive at least three hours before your flight
                    </Typography>
                    <Typography variant="body2" color="white">
                      There may be delays at the airport due to extra check in procedures.
                      Ensure you have plenty of time to check in safely and make your way to your gate.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>


              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: -350, marginLeft: 600
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://i.insider.com/5ede4983aee6a860b14cdaa4?width=700"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Physical distancing
                    </Typography>
                    <Typography variant="body2" color="white">
                      Please ensure you maintain a 1.5 metre distance from other passengers at all times,
                      especially during the check-in and boarding process.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <br />
              <br />
              <br />
              <Typography style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: ' #5c0931', marginTop: 20, marginLeft: -550, fontSize: 20 }} >


                The following passengers are not required to wear a face mask:


              </Typography>


              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>


                <AiOutlineArrowRight /> Passengers on all flights in possession of a hidden disabilities card, mask exemption card or medical certificate, due to a medical condition



              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>



                <AiOutlineArrowRight /> Children below six years of age (including infants) on all flights, except flights to and from the United States of America



              </Typography>
              <br />


              <Typography style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: ' #5c0931', marginTop: 20, marginLeft: -450, fontSize: 20 }} >




                Face masks on all flights to and from the United States of America (USA)


              </Typography>

              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>




                Children below two years of age (including infants), on all flights to and from the USA, are not required to wear a face mask.

              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>



                The refusal to wear a face mask by all other passengers,  except those who are medically exempt,
                is a violation of USA Federal
              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>



                Law and may result in denial of boarding,  removal from the aircraft and/or penalties under USA Federal Law.

              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>





                According to USA authorities,
                passengers may not wear face masks with exhalation valves, slits, and punctures.

              </Typography>




            </TabPanel>



            <TabPanel value="2">


              <Card sx={{ maxWidth: 400 }} style={{
                width: 1100,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: 50, marginLeft: 40
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://simpleflying.com/wp-content/uploads/2021/08/Qatar-Airways-e1628265047289-1000x424.jpeg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Cabin crew          </Typography>
                    <Typography variant="body2" color="white">
                      Our cabin crew are required to wear face masks for added protection when travelling with you.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: -350, marginLeft: 600
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://www.cleanlink.com/resources/editorial/2022/hand-sanitizer-26657.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Hand sanitiser          </Typography>
                    <Typography variant="body2" color="white">
                      We recommend that all passengers regularly wash their hands throughout their journey. Hand sanitiser bottles are available in the galley for you to use at any time throughout your flight.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: 90, marginLeft: 40
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://usercontent.one/wp/www.allthingsontimeperformance.com/wp-content/uploads/GettyImages-1254772956_resized-1440x680.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      On board cleaning
                    </Typography>
                    <Typography variant="body2" color="white">
                      All our aircraft are disinfected after every flight with cleaning products recommended by the International Air Transport Association (IATA)
                      and the World Health Organization (WHO).
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: -350, marginLeft: 600
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://cdn1.npcdn.net/images/1593859294549b0dd6a3010fb30155313623d7fcd6.jpg?md5id=cc88ced1e298d32dcad4c0aff35ab56f&new_width=1200&new_height=1200&w=-62170009200"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Protective kits          </Typography>
                    <Typography variant="body2" color="white">
                      Protective kits containing a face mask, gloves and hand sanitiser gel will be distributed to all passengers on board.

                      Your face mask must be worn throughout the flight until you disembark at your destination.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: 100, marginLeft: 40
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://cdn.businesstraveller.com/wp-content/uploads/2020/09/QHS2.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Ultraviolet cleaning technology          </Typography>
                    <Typography variant="body2" color="white">
                      We now use Honeywell's Ultraviolet (UV) Cabin System cleaning technology to treat aircraft seats, surfaces, and cabins.
                      In clinical tests, UV light has shown to be capable of inactivating various viruses and bacteria.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>


              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 350,
                backgroundColor: ' #5c0931', marginTop: -350, marginLeft: 600
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://afar-production.imgix.net/uploads/images/afar_post_headers/images/xX4QYcdrnP/original_shutterstock_1746316646.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Wear a face shield          </Typography>
                    <Typography variant="body2" color="white">
                      We currently require all passengers on all flights to and from India and the Philippines to wear a face shield.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <br />
              <Typography style={{ fontSize: 25,fontWeight:'bold',marginLeft:40, marginTop: 20, color: ' #5c0931' }}

                align="left"
                gutterBottom
              >

                On board experience
              </Typography>

              <Accordion style={{ width: 950,marginLeft:40 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931' , fontWeight:'bold'}}

                    align="left"
                    gutterBottom>Economy Class</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ color: ' #5c0931' }}>


                    From dining to amenities, we have modified our Economy Class experience to ensure your safety and comfort on board.

                  </Typography>
                  <br />
                  <Card sx={{ maxWidth: 600 }} style={{
                    marginLeft: 180, height: 300,
                    backgroundColor: ' #5c0931'
                  }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://thepointsguy.com/wp-content/uploads/2018/01/britishairways_216861035184878.jpg"

                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="white">
                          Dining experience
                        </Typography>
                        <Typography variant="body2" color="white">
                          Flights under 2 hours: snack
                        </Typography>
                        <Typography variant="body2" color="white">
                          Flights over 2 hours: main meal          </Typography>
                        <Typography variant="body2" color="white">
                          Flights over 5 hours: main meal and snack          </Typography>
                        <Typography variant="body2" color="white">
                          Flights over 12 hours: two main meals and snack          </Typography>
                        <Typography variant="body2" color="white">
                          Full drinks service will be available on all flights         </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <br />
                  <Card sx={{ maxWidth: 600 }} style={{
                    marginLeft: 180, height: 300,
                    backgroundColor: ' #5c0931'
                  }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="130"
                        image="https://pbs.twimg.com/media/C3r9ol3WYAEdcZf.jpg"

                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="white">
                          Comfort and amenities          </Typography>
                        <Typography variant="body2" color="white">
                          Flights over 5 hours: blankets and pillows          </Typography>
                        <Typography variant="body2" color="white">
                          Overnight* flights over 7 hours: blankets, pillows and amenity kits        </Typography>
                        <Typography variant="body2" color="white">
                          Flights over 12 hours: blankets, pillows and amenity kits          </Typography>
                        <Typography variant="body2" color="white">
                          Young traveller packs are available on all flights</Typography>

                      </CardContent>
                    </CardActionArea>
                  </Card>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ width: 950,marginLeft:40 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931' , fontWeight:'bold'}}

                    align="left"
                    gutterBottom>First Class and Buisness Class</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ color: ' #5c0931' }}>


                    From dining to amenities, we have modified our Economy Class experience to ensure your safety and comfort on board.

                  </Typography>
                  <br />
                  <Card sx={{ maxWidth: 600 }} style={{
                    marginLeft: 180, height: 300,
                    backgroundColor: ' #5c0931'
                  }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="130"
                        image="https://www.tripsavvy.com/thmb/MepfY0j8tW1CHJq-znkq7C_MB-E=/2121x1414/filters:fill(auto,1)/GettyImages-874788068-1b4d1fc5373440eaa8eea221bea7e532.jpg"

                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="white">
                          Dining experience
                        </Typography>
                        <Typography variant="body2" color="white">
                          Welcome drinks and refreshing wipes          </Typography>
                        <Typography variant="body2" color="white">
                          Single use menu cards         </Typography>
                        <Typography variant="body2" color="white">
                          Full selection of beverages and snacks       </Typography>
                        <Typography variant="body2" color="white">
                          Dine on demand, served on a tray        </Typography>
                        <Typography variant="body2" color="white">
                          On board social areas and lounges are temporarily closed         </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <br />
                  <Card sx={{ maxWidth: 600 }}style={{
                    marginLeft: 180, height: 400,
                    backgroundColor: ' #5c0931'
                  }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="130"
                        image="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fericrosen%2Ffiles%2F2017%2F11%2FSIA-square.jpg"

                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="white">
                          Comfort and amenities          </Typography>
                        <Typography variant="body2" color="white">
                          Pillows and young traveller packs available on all flights        </Typography>
                        <Typography variant="body2" color="white">
                          Dental and shaving kits available on all flights        </Typography>
                        <Typography variant="body2" color="white">
                          All flights over 2 hours: blankets available         </Typography>
                        <Typography variant="body2" color="white">
                          All flights over 4 hours: travel pouches or amenity kits available</Typography>
                        <Typography variant="body2" color="white">
                          Overnight flights over 7 hours: loungewear available</Typography>
                        <Typography variant="body2" color="white">
                          Flights above 12 hours / Qsuite flights above 7 hours: loungewear and turndown service available</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </AccordionDetails>
              </Accordion>

              <br />
              <Typography style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: ' #5c0931', marginTop: 20, marginLeft: -550, fontSize: 20 }} >


                The following passengers are not required to wear a face mask:


              </Typography>


              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>


                <AiOutlineArrowRight /> Passengers on all flights in possession of a hidden disabilities card, mask exemption card or medical certificate, due to a medical condition



              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>



                <AiOutlineArrowRight /> Children below six years of age (including infants) on all flights, except flights to and from the United States of America



              </Typography>
              <br />


              <Typography style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: ' #5c0931', marginTop: 20, marginLeft: -450, fontSize: 20 }} >




                Face masks on all flights to and from the United States of America (USA)


              </Typography>

              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>




                Children below two years of age (including infants), on all flights to and from the USA, are not required to wear a face mask.

              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>



                The refusal to wear a face mask by all other passengers,  except those who are medically exempt,
                is a violation of USA Federal
              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>



                Law and may result in denial of boarding,  removal from the aircraft and/or penalties under USA Federal Law.

              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>





                According to USA authorities,
                passengers may not wear face masks with exhalation valves, slits, and punctures.

              </Typography>





            </TabPanel>
            <TabPanel value="3">

              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 30 }}
                align="left"
                gutterBottom>
                Our home airport has invested in advanced technologies and additional measures to ensure your safety in transit.
              </Typography>


              <Card sx={{ maxWidth: 400 }} style={{
                width: 1100,
                height: 300,
                backgroundColor: ' #5c0931', marginTop: 50, marginLeft: 40
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="130"
                    image="https://image.cnbcfm.com/api/v1/image/106418284-1583085435885chinaflighttest.jpg?v=1583087179"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Thermal screening</Typography>
                    <Typography variant="body2" color="white">
                      All arrivals and departures passengers will be screened for COVID-19 symptoms.
                      Advanced thermal screening helmets are also used, equipped with infrared thermal imaging and artificial intelligence.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 300,
                backgroundColor: ' #5c0931', marginTop: -300, marginLeft: 600
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="130"
                    image="https://www.gannett-cdn.com/presto/2020/03/17/USAT/d1c05949-ddfc-4b4a-843f-9f82f7a264b0-clean-plane.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Regular sanitisation         </Typography>
                    <Typography variant="body2" color="white">
                      All handrails, baggage belts, trolleys and surfaces are disinfected and sanitised every 15 minutes, in addition to fully autonomous roaming mobile disinfectant robots.          </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 400 }} style={{
                width: 1000,
                height: 300,
                backgroundColor: ' #5c0931', marginTop: 90, marginLeft: 40
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="130"
                    image="https://i.insider.com/5ede47713ad861714678e0c3?width=1000&format=jpeg&auto=webp"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Physical distancing          </Typography>
                    <Typography variant="body2" color="white">
                      Physical distancing is required at all times. Hamad International Airport has installed signage, floor markings, and distanced seating to ensure you maintain a 1.5 metre distance from other passengers.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 450 }} style={{
                width: 400,
                height: 300,
                backgroundColor: ' #5c0931', marginTop: -300, marginLeft: 600
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="130"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuvEna1eAyQbjS4ERQYyxFVoq97GPQbI1kw&usqp=CAU"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Baggage disinfection         </Typography>
                    <Typography variant="body2" color="white">
                      All departure, arrival and transfer baggage will be disinfected at Hamad International Airport.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>





              <br />
              <Typography style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: ' #5c0931', marginTop: 20, marginLeft: -550, fontSize: 20 }} >


                The following passengers are not required to wear a face mask:


              </Typography>


              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>


                <AiOutlineArrowRight /> Passengers on all flights in possession of a hidden disabilities card, mask exemption card or medical certificate, due to a medical condition



              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>



                <AiOutlineArrowRight /> Children below six years of age (including infants) on all flights, except flights to and from the United States of America



              </Typography>
              <br />


              <Typography style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: ' #5c0931', marginTop: 20, marginLeft: -450, fontSize: 20 }} >




                Face masks on all flights to and from the United States of America (USA)


              </Typography>

              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>




                Children below two years of age (including infants), on all flights to and from the USA, are not required to wear a face mask.

              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>



                The refusal to wear a face mask by all other passengers,  except those who are medically exempt,
                is a violation of USA Federal
              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>



                Law and may result in denial of boarding,  removal from the aircraft and/or penalties under USA Federal Law.

              </Typography>
              <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 60 }}
                align="left"
                gutterBottom>





                According to USA authorities,
                passengers may not wear face masks with exhalation valves, slits, and punctures.

              </Typography>



            </TabPanel>
          </TabContext>
        </Box>
        <br/>
        <br/>











      </div>
    </div>
  )
}

export default SafeTr;