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
    </header>
  );
}