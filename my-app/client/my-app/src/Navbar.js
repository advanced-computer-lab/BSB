import React from 'react'

function Navbar(props) {


    return (
        <div>
            
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
                <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Button variant="outline-primary" data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false" style={{
                    position: 'center',
                    
                }}>Search</Button>
                 <Button variant="outline-primary" data-target="#myModal"   onClick={(event) => setLogoutClicked(true)}   data-toggle="modal" data-backdrop="static"   data-keyboard="false"  style={{
                    position: 'center',
                    
                }}>Logout</Button>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
        </div>
    )
}

export default Navbar
