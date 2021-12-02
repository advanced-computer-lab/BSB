import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useState } from 'react';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EditProfile() {
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
    return (
        <div>
            <div>
            <h1 style={{marginTop:-50}}>Edit your profile</h1>
            </div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
                style={{marginLeft:-1000, marginTop:-40}}
                
            >
                <div>
                    <TextField

                        id="outlined"
                        label="Email"
                        defaultValue=""
                        style={{ marginTop: 20 }} />
                    <br />
                    <br />
                    <TextField


                        id="outlined"
                        label="First Name"
                        defaultValue="" />
                    <br />
                    <br />
                    <TextField

                        id="outlined"
                        label="Last Name"
                        defaultValue="" />
                    <br />
                    <br />


                    <TextField

                        id="outlined"
                        label="Passport Number"
                        defaultValue="" />

                    <br />
                    <br />
                    <Stack spacing={2} sx={{ width: '20' }}>
                        <Button  variant="contained" style={{marginLeft:1000}} onClick={handleClickSB}>
                            Submit
                        </Button>
                        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSB}>
                            <Alert onClose={handleCloseSB} severity="success" sx={{ width: '100%' }}>
                                Changes submitted successfully!
                            </Alert>
                        </Snackbar>

                    </Stack>

                </div>
            </Box>

        </div>
    )
}

export default EditProfile
