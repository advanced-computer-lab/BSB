import React from 'react';
import wherewetravelbackground from './images/wherewetravelbackground.png';
import wherewetravel from './images/wherewetravel.png';
import { Typography } from '@mui/material';
import { Link } from '@material-ui/core';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import Searchu from './Searchu'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

function WhereWeTravel() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>

            <div

                id='intro-example'
                className='p-5 text-center bg-image'
                style={{
                    background: `url(${wherewetravelbackground})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 500, width: window.screen.width,
                    marginTop: 800, marginLeft: 400

                }}


            >
                <h3 style={{ fontFamily: 'Verdana', fontWeight: 'bold', color: '#5c0931', marginTop: 150, marginLeft: -1500, fontSize: 35 }} >Where we travel</h3>

                <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 325, marginLeft: -130, color: ' #5c0931' }}

                    align="left"
                    gutterBottom
                >
                   <Link style={{ color: '#5c0931' }} href="#" onClick={()=>navigate("/Search")}>Home</Link> > Where we travel

                </Typography>
                <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: -150, color: ' #5c0931' }} />
            </div>
            <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 150, marginLeft: 360, color: ' #5c0931' }}

                align="left"
                gutterBottom
            >
                As one of most widely used airlines by more than 80% of the travelers worldwide, we guarantee that you could get
                to your favorite get away <br /> with the minimum cost and trip duration.
                We could not wait to have you on board with us


            </Typography>
            <Box sx={{ width: 1000, typography: 'body1', marginLeft: 50, marginTop: 5 }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Europe" value="1" style={{ color: '#5c0931' }} />
                            <Tab label="Africa" value="2" style={{ color: '#5c0931' }} />
                            <Tab label="Asia" value="3" style={{ color: '#5c0931' }} />
                            <Tab label="North and South Americas" value="4" style={{ color: '#5c0931' }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Paper style={{ backgroundColor: '#e0dfdf', width: 600, height: 600, marginLeft: 200 }} elevation={3} >
                            <br />

                            <Card style={{ width: 250, height: 250, marginLeft: 30, marginTop: 10 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://ychef.files.bbci.co.uk/976x549/p051y4n8.jpg"
                                        alt="Spain"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Spain
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Josep Tarradellas Barcelona-El Prat Airport
                                            <br />
                                            Adolfo Suárez Madrid-Barajas Airport
                                            <br />
                                            Valencia Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 330, marginTop: -250 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://www.shemazing.net/wp-content/uploads/2018/07/paris_6_w600.jpg"
                                        alt="France"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            France
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Paris Charles de Gaulle
                                            <br />
                                            Nice Airport
                                            <br />
                                            Marseille Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 330, marginTop: 30 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://media.istockphoto.com/photos/zermatt-village-with-view-of-matterhorn-in-the-swiss-alps-picture-id486574518?k=20&m=486574518&s=612x612&w=0&h=3gIw814QVWhm1qxgVt72E_c89XfZ2Gw-h22x74L8RVQ="
                                        alt="Swiss"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Switzerland
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Geneva Airport
                                            <br />
                                            Zurich Airport
                                            <br />
                                            Bern Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 30, marginTop: -250 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://img.traveltriangle.com/attachments/pictures/890284/original/shutterstock_572031823_-_Copy.jpg?tr=w-1291,h-332"
                                        alt="Italy"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Italy
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Rome International Airport
                                            <br />
                                            Milan International Airport
                                            <br />
                                            Florence International Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </TabPanel>
                    <TabPanel value="2">
                        <Paper style={{ backgroundColor: '#e0dfdf', width: 600, height: 600, marginLeft: 200 }} elevation={3} >
                            <br />

                            <Card style={{ width: 250, height: 250, marginLeft: 30, marginTop: 10 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://www.hoteliermiddleeast.com/2021/06/Yt5P3Lyl-egypt-hme.jpg"
                                        alt="Egypt"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Egypt
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Cairo International Airport
                                            <br />
                                            Borg International Airport
                                            <br />
                                            Luxor International Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 330, marginTop: -250 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/9a/1e/d2.jpg"
                                        alt="Tunsi"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Tunis
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Tunis-Carthage International Airport
                                            <br />
                                            Enfidha-Hammamet Airport
                                            <br />
                                            Monastir Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 330, marginTop: 30 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://www.hudsonmckenzie.com/wp-content/uploads/2018/07/3.jpg"
                                        alt="Kenya"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Kenya
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Jomo Kenyatta International Airport
                                            <br />
                                            Mombasa Moi International Airport
                                            <br />
                                            Manda Airstrip Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 30, marginTop: -250 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://renewafrica.biz/wp-content/uploads/2021/05/pr-21-dec-2021_cape-town-south-africa_1800x1000.jpg"
                                        alt="South Afria"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            South Africa
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            OR Tambo International Airport
                                            <br />
                                            Cape Town International Airport
                                            <br />
                                            King Shaka International Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </TabPanel>
                    <TabPanel value="3">
                        <Paper style={{ backgroundColor: '#e0dfdf', width: 600, height: 600, marginLeft: 200 }} elevation={3} >
                            <br />

                            <Card style={{ width: 250, height: 250, marginLeft: 30, marginTop: 10 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyODMxMTcyNDQ1OTM5NTUz/topic-china-gettyimages-565786575.jpg"
                                        alt="China"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            China
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Beijing Capital International Airport
                                            <br />
                                            Shanghai Pudong International Airport
                                            <br />
                                            Guangzhou Baiyun International Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 330, marginTop: -250 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://lp-cms-production.imgix.net/2021-09/shutterstockRF_1220778577.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850"
                                        alt="Japan"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Japan
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Narita International Airport
                                            <br />
                                            Kansai International Airport
                                            <br />
                                            Fukuoka Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 330, marginTop: 30 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/10/30/1510/Grand-Hyatt-Singapore-P615-Esplanade.jpg/Grand-Hyatt-Singapore-P615-Esplanade.16x9.jpg"
                                        alt="Singapore"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Singapore
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Singapore Changi Airport
                                            <br />

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 30, marginTop: -250 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://img.static-af.com/images/meta/IDname/CITY-DXB-1?aspect_ratio=2:1&max_width=1920"
                                        alt="Dubai"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            United Arab Emirates
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Dubai International Airport
                                            <br />
                                            Abu Dhabi International Airport
                                            <br />
                                            Sharjah International Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Paper></TabPanel>
                    <TabPanel value="4">
                        <Paper style={{ backgroundColor: '#e0dfdf', width: 600, height: 600, marginLeft: 200 }} elevation={3} >
                            <br />

                            <Card style={{ width: 250, height: 250, marginLeft: 30, marginTop: 10 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-1835470884-87780.transform/lh-dcep-transform-width-1440/img.jpg"
                                        alt="USA"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            United States of America
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            O'Hare International Airport
                                            <br />
                                            Denver International Airport
                                            <br />
                                            Miami International Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 330, marginTop: -250 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://www.volunteeringsolutions.com/asset/uploads/img/page_header_image/brazil/rio_de_janeiro/1222/1222_brazil.jpg"
                                        alt="Brazil"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Brazil
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Sao Paulo Guarulhos International Airport

                                            <br />
                                            Rio De Janeiro Galeao Airport
                                            <br />
                                            Brasilia International Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 330, marginTop: 30 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://www.gannett-cdn.com/presto/2021/01/06/USAT/59712564-66c1-4b1c-8074-28ad1ca4e2b1-GettyImages-945734194.jpg?crop=2123,1194,x0,y105&width=2123&height=1194&format=pjpg&auto=webp"
                                        alt="Puerto Rico"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Puerto Rico
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Luis Munoz Marin International Airport
                                            <br />
                                            Rafael Hernandez Airport
                                            <br />
                                            Eugenio Maria De Hostos Airport

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card sx={{ maxWidth: 345 }} style={{ width: 250, height: 250, marginLeft: 30, marginTop: -250 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="https://www.cicnews.com/wp-content/uploads/2020/11/20201118canada.jpg"
                                        alt="Canada"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#5c0931', fontWeight: 'bold', fontSize: 20, fontFamily: 'Vernada', marginTop: -10 }}>
                                            Canada
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Vernada' }}>
                                            Lester B. Pearson International Airport
                                            <br />
                                            Vancouver International Airport
                                            <br />
                                            Calgary International Airport
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Paper></TabPanel>
                </TabContext>
            </Box>
            <br />
            <br />
            <br />

        </div>
    )
}

export default WhereWeTravel
