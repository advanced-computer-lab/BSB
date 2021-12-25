import React from 'react'
import AppBarr from './AppBarr'
import flexibletravel from './images/flexibletravel.jpg'
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { Button } from 'react-bootstrap';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Grid } from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    //    // ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
}));
function FlexibleTravelOptions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <AppBarr />
            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url(${flexibletravel})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 570, width: window.screen.width,
                    marginTop: -120,

                }}


            >
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 150, marginLeft: -900, fontSize: 35 }} >Flexible travel options</h3>
                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 330, marginLeft: 50, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                    <Link style={{ color: '#5c0931' }} href="#">Home</Link> > Flexible travel options

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, marginLeft: 50, fontSize: 17 }} >
                    We understand you need to feel confident and safe when you travel during these times. That is why we will continue offering guaranteed flexibility for travel completed by 31 May 2022.*

                    In addition to providing the highest standards of safety you need as the Airline of the Year.
                    <br /> You can always rely on us if your plans change.
                    <br />
                    <Link style={{ color: '#5c0931', marginLeft: -1100 }} href="#" underline='true'>Terms and conditions apply</Link>

                </Typography>
                <br />
                <br />
                <br />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -30, marginLeft: -1100, fontSize: 25 }} >
                    Postpone tickets

                </Typography>

                <ModeOfTravelIcon style={{ fontSize: 120, fontWeight: "bold", marginLeft: -1100, color: ' #5c0931', width: 200, marginTop: 10 }} />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -90, marginLeft: 250, fontSize: 18 }} >
                    With our extended validity, your ticket will be valid for two years from the date of issue, so you can fly when you are ready.

                </Typography>
                <Button variant="outlined" style={{ color: '#5c0931', width: 200, marginLeft: 150, marginTop: 30, borderColor: '#5c0931' }}>
                    Manage your trips
                </Button>
                <br />
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931', marginTop: 50 }} />
                <br />
                <br />
                <br />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -30, marginLeft: -1080, fontSize: 25 }} >
                    Unlimited changes

                </Typography>

                <TravelExploreIcon style={{ fontSize: 120, fontWeight: "bold", marginLeft: -1100, color: ' #5c0931', width: 200, marginTop: 10 }} />

                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -90, marginLeft: 250, fontSize: 18 }} >
                    Change your travel date or destination within the same class of travel as often as you like, with no fees. (Fare difference applies.)

                </Typography>
                <Button variant="outlined" style={{ color: '#5c0931', width: 200, marginLeft: 150, marginTop: 30, borderColor: '#5c0931' }}>
                    Manage your trips
                </Button>
                <br />
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931', marginTop: 50 }} />
                <br />
                <br />
                <br />
                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -30, marginLeft: -1080, fontSize: 25 }} >
                    Tickets refund

                </Typography>

                <AirplaneTicketIcon style={{ fontSize: 120, fontWeight: "bold", marginLeft: -1100, color: ' #5c0931', width: 200, marginTop: 10 }} />

                <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: -90, marginLeft: 250, fontSize: 18 }} >
                    Get the unused value of your ticket refunded through your original form of payment, with no penalties or refund fees.

                </Typography>
                <Button variant="outlined" style={{ color: '#5c0931', width: 200, marginLeft: 150, marginTop: 30, borderColor: '#5c0931' }}>
                    Request a refund
                </Button>
                <br />
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931', marginTop: 50 }} />
                <br />
                <br />
                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 800 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold' }}>
                                5-Star COVID-19 Airline Safety Rating

                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 300, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 5 }}>
                                5-Star Airline, 5-Star Airport. Joining BSB Airways is the first global airline in the world to achieve the 5-Star COVID-19 Airline Safety Rating.

                            </Typography>

                            <Button variant="contained" style={{ color: 'white', width: 200, marginLeft: 10, marginTop: 30, backgroundColor: '#5c0931' }}>
                                Learn more
                            </Button>
                        </CardContent>

                    </Box>
                    <CardMedia
                        style={{ marginLeft: 0 }}
                        component="img"
                        sx={{ width: 400 }}
                        image="https://static.onecms.io/wp-content/uploads/sites/28/2020/08/25/airport-during-pandemic-COVIDFLYING0920.jpg"
                        alt="Memberchips"
                    />
                </Card>
                <br />
                <br />
                <br />
                <Card sx={{ display: 'flex' }} style={{ width: 1200, height: 300, marginLeft: 140, backgroundColor: '#e0dfdf', opacity: 0.85 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} style={{ width: 1200 }}>
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 20, fontWeight: 'bold', marginLeft: 370 }}>
                                Join and earn up to 3,000 bonus Qmiles

                            </Typography>
                            <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 670, color: ' #5c0931', width: 200 }} />
                            <Typography component="div" style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 30, fontSize: 15, marginLeft: 400 }}>
                                Join Privilege Club using enrolment code: JOINPC21 and earn 1,000 bonus Qmiles instantly. Members will also earn 2,000 bonus Qmiles on their first online booking, and 500 bonus Qmiles for each subsequent online booking.*

                            </Typography>

                            <Button variant="contained" style={{ color: 'white', width: 200, marginLeft: 400, marginTop: 30, backgroundColor: '#5c0931' }}>
                                Join now
                            </Button>
                        </CardContent>


                    </Box>
                    <CardMedia
                        style={{ marginLeft: -1200 }}
                        component="img"
                        sx={{ width: 400 }}
                        image="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/privilege-club/miscellaneous/campaigns/Mass%20acquisition%20campaign.jpg"
                        alt="Memberchips"
                    />
                </Card>
                <br />
                <br />

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ width: 1200, marginLeft: 145 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 0, fontSize: 15, fontWeight: 'bold' }}>
                            Terms and conditions
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 5, fontSize: 15 }}>
                            <ArrowForwardIcon style={{ color: '#5c0931' }} />

                            Valid for any BSB Airways’ tickets purchased either directly from BSB Airways or through travel agents.If you have booked your ticket through a travel agent, please contact your travel agent.
                            <br />
                            <br />
                            <ArrowForwardIcon style={{ color: '#5c0931', marginLeft: -200 }} />
                            BSB Airways is entitled to change its Extending Our Commitment Policy with immediate effect and without prior notice.

                            <br />
                            <br />
                            <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 5, fontSize: 15, fontWeight: 'bold', marginLeft: -950 }}>
                                Keep your ticket open
                                <br />
                                <br />
                                <Typography>
                                    <ArrowForwardIcon style={{ color: '#5c0931', marginLeft: 540 }} />

                                    Keep your fully unutilized ticket open for two years and apply the value towards future travel.
                                    <br />
                                    <br />
                                </Typography>
                                <br />
                                <br />

                            </Typography>
                            <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 5, fontSize: 15, fontWeight: 'bold', marginLeft: -1050 }}>
                                Changes
                                <br />
                                <br />
                                <Typography>
                                    <ArrowForwardIcon style={{ color: '#5c0931', marginLeft: 680 }} />

                                    Please make date and route changes prior to the scheduled departure time that you are booked on.
                                    <br />
                                    <br />
                                    <ArrowForwardIcon style={{ color: '#5c0931', marginLeft: 510 }} />
                                    All travel must be completed by 31 May 2022, rebooking fees will be waived

                                    <br />
                                    <br />
                                    <ArrowForwardIcon style={{ color: '#5c0931', marginLeft: 593 }} />
                                    Rebook into the same booking class (RBD) and ticketed fare basis as the original ticket
                                    <br />
                                    <br />
                                    <ArrowForwardIcon style={{ color: '#5c0931', marginLeft: 462 }} />
                                    Any difference in fare, taxes, fees, charges and surcharges will apply
                                </Typography>
                                <br />
                                <br />

                            </Typography>
                            <Typography style={{ fontFamily: 'Verdana', color: '#5c0931', marginTop: 5, fontSize: 15, fontWeight: 'bold', marginLeft: -800 }}>
                                Refund to the original form of payment
                                <br />
                                <br />
                                <Typography>
                                    <ArrowForwardIcon style={{ color: '#5c0931', marginLeft: 80 }} />
                                    Refund penalties and no-show fees will be waived

                                    <br />
                                    <br/>
                                    <ArrowForwardIcon style={{ color: '#5c0931', marginLeft: 397 }} />
                                    Refund amount will be credited using the original form of payment used to purchase the ticket.
                                    <br/>
                                    <br/>
                                </Typography>
                            </Typography>
                        </Typography>

                    </AccordionDetails>
                </Accordion>

                <br />
                <br />

            </div>
        </div>
    )
}

export default FlexibleTravelOptions
