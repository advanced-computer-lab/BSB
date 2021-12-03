import React from 'react'
import { ModalFooter } from 'react-bootstrap';
import './flightseatmap.css';
import Checkbox from '@mui/material/Checkbox';
import App from './App';
import EditProfile from './EditProfile';
import Layout from './Layout';
import { CssBaseline } from '@mui/material';
import { Container } from '@material-ui/core';
import { Box } from '@mui/system';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ChooseSeat(props) {
    return (<div>
        {props.logout ? <App /> : (props.edit ? <EditProfile logout={props.logout} /> :
            <div>
                <Layout />
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="sm">
                        <Box sx={{ bgcolor: '#DBE2EF', height: '70vh', marginTop: -100, opacity: [0.9, 0.8, 0.7] }}
                         >
                             <div >
                            <Checkbox id='A1'{...label} style={{marginRight:50 , marginTop:20, marginLeft:95}}/>
                            <Checkbox id='A2'{...label} disabled  style={{marginRight:50 , marginTop:20}}/>
                            <Checkbox id='A3'{...label} disabled checked  style={{marginRight:50 , marginTop:20}  } />
                            <Checkbox id='A4'{...label} style={{marginRight:50 , marginTop:20}}/>
                            </div>
                            <br/>
                            <div>
                            <Checkbox id='B1'{...label} style={{marginRight:50 , marginTop:20, marginLeft:50}}/>
                            <Checkbox id='B2'{...label} disabled  style={{marginRight:50 , marginTop:20}}/>
                            <Checkbox id='B3'{...label} disabled checked  style={{marginRight:50 , marginTop:20}  } />
                            <Checkbox id='B4'{...label} style={{marginRight:50 , marginTop:20}}/>
                            <Checkbox id='B5'{...label} style={{marginRight:50 , marginTop:20}}/>
                            <Checkbox id='B6'{...label} style={{marginRight:50 , marginTop:20}}/>

                            </div>



                        </Box>

                    </Container>
                </React.Fragment>







            </div>
        )}
    </div>

    )
}

export default ChooseSeat
