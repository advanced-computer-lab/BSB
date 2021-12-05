import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import App from './App';
import { useState } from 'react';
import Layout from './Layout';
import { useEffect } from 'react';
import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EditProfile(props) {
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const handleClickSB = () => {
        setOpenSnackBar(true);
    };

    const handleCloseSB = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };
    const [editLastName, setLastName] = useState(props.editLastName);
    const [editFirstName, setFirstName] = useState(props.editFirstName);
    const [editEmail, setEmail] = useState(props.editEmail);
    const [editPassport, setEditPassport] = useState(props.editPassport);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {

            axios.post('http://localhost:8000/editProfile', {
                _id: "61abb8b7dda93117406ba763",
                firstName: editFirstName,
                lastName: editLastName,
                email: editEmail,
                passport: editPassport

            })
                .then(function (response) {
                    console.log("xxx");
                    console.log(response.data)
                })
            setClicked(false);
        }




    })


    return (
        <div>
            {props.logout ? <App /> : (props.back ? props.component :
                <div style={{ marginTop: -100 }}>
                    <Layout />

                    <div>
                        <h1 style={{ marginTop: -690, marginLeft: 80 }}>Edit your profile</h1>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        style={{ marginLeft: 120, marginTop: 30 }}
                    >
                        <TextField

                            required
                            id="outlined-error"
                            label="First Name"
                            style={{width:300}}
                            defaultValue={props.firstName}
                            onChange={event => setFirstName(event.target.value)}
                        />
                        <br />
                        <TextField

                            required
                            id="outlined-error"
                            label="Last Name"
                            style={{width:300}}
                            defaultValue={props.lastName}
                            onChange={event => setLastName(event.target.value)}

                        />
                        <br />
                        <TextField

                            required
                            id="outlined-error"
                            style={{width:300}}
                            label="Email"
                            defaultValue={props.email}
                            onChange={event => setEmail(event.target.value)}

                        />
                        <br />
                        <TextField

                            required
                            id="outlined-error"
                            label="Passport"
                            style={{width:300}}
                            defaultValue={props.passport}
                            onChange={event => setEditPassport(event.target.value)}

                        />

                        <br />
                    </Box>
                    );


                    <br />
                    <br />
                    <Stack spacing={2} sx={{ width: '20' }}>
                        <Button variant="contained" style={{ marginLeft: 700, width: 200, marginTop: 100 }} onClick={e => { handleClickSB(); setClicked(true) }} >
                            Submit
                        </Button>
                        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSB} anchorOrigin={ {vertical:'bottom' , horizontal:'center'}} >
                            <Alert onClose={handleCloseSB} severity="success" sx={{ width: '100%' }}>
                                Changes submitted successfully!
                            </Alert>
                        </Snackbar>

                    </Stack>

                </div>


            )}
        </div>
    )
}

export default EditProfile
