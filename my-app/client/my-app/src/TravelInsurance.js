import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@mui/material/Button';
import CardActions from "@material-ui/core/CardActions";
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from "react";
import { useLocation, useNavigate } from 'react-router'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: ' #5c0931',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(country, claimsoffice, assistance) {
  return { country, claimsoffice, assistance };
}

const rows = [
  createData('Kuwait', "GIG Kuwait GIRI HO Building Ahmad Al Jaber Street, Sharq, Kuwait" +
    "E-mail: travel@gig.com.kw"
    + "Telephone: 1802080"
    + "Local operating hours: 7:30 AM to 3 PM, Sunday to Thursday", "Telephone : +1 817 826 7276" + "Email: medicalhou@aig.com"),
  createData('Lebanon', "Fajr Al Gulf Insurance Center GGF, Bloc C, 2nd Floor, Sin El Fil E-mail: msaad@gig.com.lb Local operating hours: Monday to Friday", " Telephone : +1 817 826 7276 Email: medicalhou@aig.com"),
  createData('Oman', 'Oman Insurance Company (Oman Branch) P.C. 114, Hai Al Mina P.O. Box 1201, Muscat, Sultanate of OmanTelephone number: +96824789232 E-mail: oicclaimsmct@tameen.ae', 'Telephone : +1 817 826 7276 Email: medicalhou@aig.com'),
  createData('Qatar', 'Qatar General Insurance & Reinsurance Co. Q.P.S.C P.O. Box: Al Areeq Street 880, Musherieb (Area 4), Building No. 23, P.O. Box 4500, Doha - State of Qatar E-mail: myClaim@qgirco.com Local operating hours: 07:30 to 14:30 (Sunday to Thursday)', 'Telephone : +1 817 826 7276 Email: medicalhou@aig.com'),

];

function createData1(country1, claimsoffice1, assistance1) {
  return { country1, claimsoffice1, assistance1 };
}

const rows1 = [
  createData1('Spain', "AIG Europe Limited Sucursal en España  Apartado Postal 28080 Madrid, Spain Telephone: 900-931615 Email: siniestrosespana@aig.com Operating Hours: 0900 to 1700 hours from Monday to Friday", "Telephone: +34 91 275 4683 Email: medicalba@aig.com"),
  createData1('France', "AIG Europe Limited Service Sinistre Assurance de Personnes  Tour CB21 16 Place de l’Iris 92040 Paris la Défense Cedex Telephone: +33 1 49 02 42 22 Email: declarations.pa@aig.com Local operating hours: 0900 to 1700 hours from Monday to Friday", "Telephone: +33 1 49 02 46 70  Email: fr.assistance@aig.com"),
  createData1('Italy', 'IG Europe Limited Rappresentanza Generale per l’Italia 2, Via della Chiusa, 20123 Milano - Italy Website: http://www.sinistriviaggi.itLocal operating hours: 0900 to 1700 hours from Monday to Friday', 'Telephone: +39 039 6554 6635'),

];




export default function TravelInsurance() {
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
        marginTop: -400,
        marginLeft: 0,
        background: 'url(https://i2-prod.mirror.co.uk/incoming/article13028216.ece/ALTERNATES/s1200/1_Family-with-suitcases-leaving-airport.jpg)', backgroundSize: "contain", backgroundRepeat: "repeat", height: 550, width: window.screen.width
      }}
    // `url(https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/miscellaneous/people/family/family-travel-father-son-airport-h.jpg)`
    >

      <div>
        <Typography style={{ fontSize: 40, fontWeight: "bold", marginTop: 250, color: '#5c0931', marginLeft: 70 }}

          align="left"
          gutterBottom
        >
          Travel Insurance
        </Typography>

        <Typography style={{ fontSize: 20, fontWeight: "bold", marginTop: 250, color: ' #5c0931' }}

          align="left"
          gutterBottom
        >
          <Link style={{ color: '#5c0931' }} href="#" onClick={() => navigate("/Search")}>Home</Link> > Travel Insurance

        </Typography>
        <hr style={{color:'#5c0931'}}/>
        <Card
          style={{
            width: 1300,
            height: 900,
            marginLeft: 70,
            marginTop: 70,
            opacity: 0.9,
            backgroundColor: "#EBECF0"
          }}
        ><CardContent>

            <Card
              style={{
                width: 1000,
                height: 180,
                backgroundColor: '#F7F7F7',
                marginLeft:120
              }}>
              <CardContent>
                <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', fontWeight: 'bold', marginTop: 10, fontSize: 15, marginLeft: 10 }}
                  align="left"
                  gutterBottom>
                  Protect your travel plans and get peace of mind with our travel insurance.

                </Typography>
                <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 10 }}
                  align="left"
                  gutterBottom>


                  You can purchase travel insurance for your trip while booking your ticket on BSB Airways.

                </Typography>

                <Typography component="div" style={{ fontFamily: 'Verdana', color: ' #5c0931', marginTop: 10, fontSize: 15, marginLeft: 10 }}
                  align="left"
                  gutterBottom>

                  Travel insurance is currently offered to residents of the following countries: Egypt, France, Germany, Italy, Kuwait, Lebanon, Norway, Oman, Qatar, Spain, Sweden, the United Arab Emirates and the United Kingdom.

                </Typography>
              </CardContent></Card>
            <br />
            <Card
              style={{
                width: 1000,
                height: 600,
                marginLeft:120,
                backgroundColor: '#F7F7F7'
              }}>
              <CardContent>
                <Box sx={{ width: 800, typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example" style={{ marginLeft: 100 }}>
                        <Tab style={{ fontSize: 15, color: 'white', background: '#5c0931', width: 530 }} label="contact information" value="1" />
                        <Tab style={{ fontSize: 15, color: 'white', background: '#5c0931', width: 530 }} label="Insurance terms and conditions" value="2" />

                      </TabList>
                    </Box>
                    <TabPanel value="1">

                      <Accordion style={{ width: 720, marginLeft: 70 }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931' }}

                            align="left"
                            gutterBottom
                          >The Middle East</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                          <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                              <TableHead>
                                <TableRow>
                                  <StyledTableCell style={{ fontSize: 15 }} >Country</StyledTableCell>
                                  <StyledTableCell style={{ fontSize: 15 }} align="center">Claims office*</StyledTableCell>
                                  <StyledTableCell style={{ fontSize: 15 }} align="center">24-hour emergency medical assistance</StyledTableCell>

                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rows.map((row) => (
                                  <StyledTableRow key={row.country}>
                                    {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
                                    <StyledTableCell style={{
                                      fontSize: 13
                                    }} align="right">{row.country}</StyledTableCell>
                                    <StyledTableCell align="right">{row.claimsoffice}</StyledTableCell>
                                    <StyledTableCell align="right">{row.assistance}</StyledTableCell>
                                  </StyledTableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>




                        </AccordionDetails>
                      </Accordion>
                      <Accordion style={{ width: 720, marginLeft: 70 }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography style={{ fontSize: 15, marginTop: 0, color: ' #5c0931' }}

                            align="left"
                            gutterBottom
                          >Europe</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <TableContainer component={Paper} style={{ width: 700 }}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                              <TableHead>
                                <TableRow>
                                  <StyledTableCell style={{ fontSize: 15 }} >Country</StyledTableCell>
                                  <StyledTableCell style={{ fontSize: 15 }} align="center">Claims office*</StyledTableCell>
                                  <StyledTableCell style={{ fontSize: 15 }} align="center">24-hour emergency medical assistance</StyledTableCell>

                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rows1.map((row) => (
                                  <StyledTableRow key={row.country}>
                                    {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
                                    <StyledTableCell style={{ fontSize: 13 }} align="left">{row.country1}</StyledTableCell>
                                    <StyledTableCell align="left">{row.claimsoffice1}</StyledTableCell>
                                    <StyledTableCell align="left">{row.assistance1}</StyledTableCell>
                                  </StyledTableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>


                        </AccordionDetails>
                      </Accordion>

                      <br />
                      <Typography style={{ fontSize: 20, marginTop: 20, color: ' #5c0931', fontWeight: 'bold', marginLeft: 15 }}

                        align="left"
                        gutterBottom

                      >
                        Data disclosure
                      </Typography>
                      <hr />
                      <Typography style={{ fontSize: 14, fontWeight: "bold", marginTop: 30, color: ' #5c0931' }}

                        align="left"
                        gutterBottom
                      >
                        By entering into this contract of Insurance, the Named Insured consents to the Insurer processing data relating to the Named Insured for providing insurance products and services, legal, administrative and management purposes and in particular to the processing of any sensitive personal data relating to the Named Insured.
                        <br />

                        The Named Insured consents to the Insurer making such information available to third parties including but not limited to any Group Company, those who provide products or services to the Insurer or any Group Company, and regulatory authorities, within and outside the Named Insured's country of domicile.
                        <br />
                        View the privacy policy for: Germany (German), Italy (Italian), Kuwait (Arabic, English), Norway (Norweigan), Qatar (Arabic, English), Spain (Spanish), Sweden (Swedish), and the United Kingdom (English).
                      </Typography>


                    </TabPanel>




                    <TabPanel value="2">

                      <Typography style={{ fontSize: 15, fontWeight: "bold", color: ' #5c0931', marginLeft: 50 }}

                        align="left"
                        gutterBottom
                      >
                        Insurance terms and conditions</Typography>
                      <hr />
                      <Typography style={{ fontSize: 14, fontWeight: "bold", marginTop: 30, color: ' #5c0931', marginLeft: 60 }}

                        align="left"
                        gutterBottom
                      >

                        Our travel insurance booking service acts as a third party to enable you to get travel insurance cover with convenience on our website.
                        <br />
                        This insurance does not cover destinations in Afghanistan, Iraq, Cuba, Iran, Syria, Sudan, North Korea and Crimea region.
                        <br />
                        All travellers must be residents of the country from which travel originates.

                        Please contact the travel insurance provider directly for special requests, such as additional cover etc.
                        <br />
                        For any modifications or cancellations, please read the Terms and Conditions provided in the insurance policy document, and contact the travel insurance provider directly. This also applies to modifications or cancellations caused by changes or disrupted flight itinerary (or similar unforeseen circumstances).

                        BSB Airways has no influence on the rates and on the Terms and Conditions offered by the travel insurance provider.

                      </Typography>


                    </TabPanel>
                  </TabContext>
                </Box>

              </CardContent></Card>
          </CardContent></Card>






        <br />
        <br />


















      </div>
    </div>
  )



}

