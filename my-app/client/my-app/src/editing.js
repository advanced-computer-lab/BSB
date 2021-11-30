import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{
          background: `url(${flight})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: window.screen.height, width: window.screen.width
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Home Page</h1>
              <h5 className='mb-4'></h5>
              {adminClicked ? <Admin></Admin> : <div>
                <Button variant="outline-light" data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false" style={{
                  position: 'absolute',
                  right: 790,
                  top: 350,
                }}>User</Button>
                <Button variant="outline-primary" style={{
                  position: 'absolute',
                  right: 650,
                  top: 350,
                }} data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false" onClick={(event) => setAdminClicked(true)} >Admin</Button>
              </div>}
            </div>
          </div>
        </div>
      </div>


      <Card className={classes.root} sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        marginLeft: 200,
        marginTop: -53
      }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Barcelona,Spain
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Book your trip to your favorite destination now!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{ position: 'center', marginLeft: 120 }} >Book</Button>

        </CardActions>
      </Card>


      <Card className={classes.root} sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        marginLeft: 200,
        marginTop: -53
      }}>
        <CardMedia
          component="img"
          height="140"
          image="C:\Users\reema\OneDrive\Desktop\BSB\my-app\client\my-app\src\images\tripupdates.jpeg"
          alt="trips"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color='#005792'>
            Enter your email to get the recent updates
          </Typography>
          <TextField id="outlined-basic" label="Email" variant="outlined" />

        </CardContent>
        <CardActions>
          <Button size="small" variant="secondary" style={{ position: 'center', marginLeft: 120, }} >Submit</Button>


        </CardActions>



        <Stack spacing={2} sx={{ width: '100%' }}>
          <Button variant="outlined" onClick={handleClickAlert}>
            Submit
          </Button>
          <Snackbar alertopen={alertOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
              This is a success message!
            </Alert>
          </Snackbar>

          <Alert severity="success">This is a success message!</Alert>
        </Stack>



        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
         
        </Stack>














        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 , height:30}}>

<FormControl  sx={{ mt: 1, display: 'none' }}>
    
        

    
</FormControl>
<Box sx={{ position: 'relative', mt: 1, height: 200 }}>
<FormControlLabel value="down" control={<AccountCircleIcon />} label="Down"  />
    <StyledSpeedDial
        ariaLabel="SpeedDial playground example"
        style={{marginTop:-10}}

        icon={<AccountCircleIcon />}
        direction={direction}
    >
        {accountActions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
            />
        ))}
    </StyledSpeedDial>
</Box>
</Box>
      </Card>




      <MDBNavbar expand='lg' color="#DBE2EF" light bgColor='white' scrolling fixed="top" style={{height:60}}>
                    <MDBContainer fluid>

                        <MDBNavbarToggler
                            aria-controls='navbarExample01'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <MDBIcon fas icon='bars' />
                        </MDBNavbarToggler>
                        <div className='collapse navbar-collapse' id='navbarExample01'>
                            <MDBNavbarNav right className='mb-2 mb-lg-0'>
                                <MDBNavbarItem>
                                    <h2 style={{ position: 'relative', marginLeft: 30, color: "#112D4E" }}>BSB Airways</h2>


                                </MDBNavbarItem>
                                <MDBNavbarItem style={{ position: 'center', marginLeft: 300, bgColor: 'grey' }} active>
                                    <MDBNavbarLink aria-current='page' href='#'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem   >
                                    <MDBNavbarLink href='#'>Book</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem >
                                    <MDBNavbarLink href='#'>Contact Us</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>About Us</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBCol md="12" className="mb-3">
                                        <img src="C:\Users\reema\OneDrive\Desktop\BSB\my-app\client\my-app\src\images\BSBlogo.png" className="img-fluid z-depth-1" alt="" />
                                    </MDBCol>
                                </MDBNavbarItem>
                                <MDBNavbarItem style={{ marginLeft: 700 }}>


                                

                                </MDBNavbarItem>









                            </MDBNavbarNav>

                        </div>

                    </MDBContainer>
                </MDBNavbar>

                <br />
                    <FormControl sx={{ m: 1, minWidth: 261 }}>
                        <InputLabel id="demo-controlled-open-select-label">Departure Terminal</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={depTerminal}
                            label="Departure Terminal"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 261 }}>
                        <InputLabel id="demo-controlled-open-select-label">Arrival Terminal</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openArr}
                            onClose={handleCloseArr}
                            onOpen={handleOpenArr}
                            value={arrTerminal}
                            label="Arrival Terminal"
                            onChange={handleChangeArr}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>
                    <br />





                    <br />
                    <FormControl sx={{ m: 1, minWidth: 261 }}>
                        <InputLabel id="demo-controlled-open-select-label">No of Adults</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openAd}
                            onClose={handleCloseAd}
                            onOpen={handleOpenAd}
                            value={noOfAdults}
                            label="No of Adult seats"
                            onChange={handleChangeAd}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={3}>4</MenuItem>
                            <MenuItem value={3}>5</MenuItem>

                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 261 }}>
                        <InputLabel id="demo-controlled-open-select-label">No of Children</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openCh}
                            onClose={handleCloseCh}
                            onOpen={handleOpenCh}
                            value={noOfChildren}
                            label="No of Children seats"
                            onChange={handleChangeCh}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={3}>4</MenuItem>
                            <MenuItem value={3}>5</MenuItem>

                        </Select>
                    </FormControl>
                    <br />




                    <FormControl sx={{ m: 1, minWidth: 261, marginLeft: -34 }}>
                        <InputLabel id="demo-controlled-open-select-label">Cabin Type</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openCabin}
                            onClose={handleCloseCabin}
                            onOpen={handleOpenCabin}
                            value={cabinTypes}
                            label="Cabin Types"
                            onChange={handleChangeCabin}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>Economy</MenuItem>
                            <MenuItem value={2}>Business Class</MenuItem>
                            <MenuItem value={3}>First Class</MenuItem>

                        </Select>

                    </FormControl>



                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Departure Date"
                                        value={value}
                                        onChange={[(newValue) => {
                                            setValue(newValue)
                                        }, (event) => { setDepDate(event.target.value) }]
                                        }
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Return Date"
                                        value={arrValue}
                                        onChange={[(newValue) => {
                                            setValue(newValue)
                                        }, (event) => { setRetDate(event.target.value) }]
                                        }
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                <FormControl sx={{ m: 1, minWidth: 261 }}>
                                    <InputLabel id="demo-controlled-open-select-label">Departure Terminal</InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={depTerminal}
                                        label="Departure Terminal"
                                        onChange={[handleChange, (event) => { setTdep(event.target.value) }]}
                                    >
                                        <MenuItem value="">
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1, minWidth: 261 }}>
                                    <InputLabel id="demo-controlled-open-select-label">Arrival Terminal</InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openArr}
                                        onClose={handleCloseArr}
                                        onOpen={handleOpenArr}
                                        value={arrTerminal}
                                        label="Arrival Terminal"
                                        onChange={[handleChangeArr, (event) => { setTarr(event.target.value) }]}
                                    >
                                        <MenuItem value="">
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                    </Select>
                                </FormControl>
                                <br />





                                <br />
                                <FormControl sx={{ m: 1, minWidth: 261 }}>
                                    <InputLabel id="demo-controlled-open-select-label">No of Adults</InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openAd}
                                        onClose={handleCloseAd}
                                        onOpen={handleOpenAd}
                                        value={noOfAdults}
                                        label="No of Adult seats"
                                        onChange={[handleChangeAd, (event) => { setAdults(event.target.value) }]}
                                    >
                                        <MenuItem value="">
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={3}>4</MenuItem>
                                        <MenuItem value={3}>5</MenuItem>

                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1, minWidth: 261 }}>
                                    <InputLabel id="demo-controlled-open-select-label">No of Children</InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openCh}
                                        onClose={handleCloseCh}
                                        onOpen={handleOpenCh}
                                        value={noOfChildren}
                                        label="No of Children seats"
                                        onChange={[handleChangeCh, (event) => { setChildren(event.target.value) }]}
                                    >
                                        <MenuItem value="">
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={3}>4</MenuItem>
                                        <MenuItem value={3}>5</MenuItem>

                                    </Select>
                                </FormControl>
                                <br />




                                <FormControl sx={{ m: 1, minWidth: 261, marginLeft: -34 }}>
                                    <InputLabel id="demo-controlled-open-select-label">Cabin Type</InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openCabin}
                                        onClose={handleCloseCabin}
                                        onOpen={handleOpenCabin}
                                        value={cabinTypes}
                                        label="Cabin Types"
                                        onChange={[handleChangeCabin, (event) => { setCabin(event.target.value) }]}
                                    >
                                        <MenuItem value="">
                                        </MenuItem>
                                        <MenuItem value={1}>Economy</MenuItem>
                                        <MenuItem value={2}>Business Class</MenuItem>
                                        <MenuItem value={3}>First Class</MenuItem>

                                    </Select>

                                </FormControl>

    </header>
  );
}