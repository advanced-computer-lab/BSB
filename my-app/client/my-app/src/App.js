//imports

import React from 'react'
import Admin from './Admin';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import flight from "./images/flight.png"
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBNavbarLink,
    MDBContainer,
    MDBIcon,
    MDBCol, MDBNavbarBrand
} from 'mdb-react-ui-kit';

import User from './User';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import Mail from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CustomizedMenus from './images/CustomizedMenus';


export default function App() {
    const [userClicked, setUserClicked] = useState(false);
    const [adminClicked, setAdminClicked] = useState(false);
    const [logoutClicked, setLogoutClicked] = useState(false);

    //buttom nav bar
    const [bNavBar, setBNavBar] = useState('recents');

    const handleChangeBNavBar = (event, newValue) => {
        setBNavBar(newValue);
    };

    return (
        <div>
            <header>
                <MDBNavbar expand='lg' color="#DBE2EF" light bgColor='white' scrolling fixed="top">
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
                                <MDBNavbarItem style={{ position: 'center', marginLeft: 300, bgColor: 'grey' }} active>
                                    <MDBNavbarLink aria-current='page' href='#'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'><CustomizedMenus/></MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
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

                                <MDBNavbarItem>
                                    <Button variant="outline-primary" data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false" style={{ position: 'center', marginLeft: 750 }}>Search</Button>
                                {adminClicked || userClicked?   <Button variant="outline-danger" data-target="#myModal" onClick={(event) =>[setAdminClicked(false),setUserClicked(false)]} data-toggle="modal" data-backdrop="static" data-keyboard="false" style={{
                                        position: 'center',

                                    }}>Logout</Button>:null} 
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
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', marginTop:100 }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h5 className='mb-4'></h5>
                                {adminClicked ? <Admin></Admin> : (userClicked ? <User></User> : <div>
                                    <Button variant="outline-light" data-target="#myModal" data-toggle="modal" data-backdrop="static" onClick={(event) => setUserClicked(true)} data-keyboard="false" style={{
                                        position: 'absolute',
                                        right: 790,
                                        top: 350,
                                    }}>User</Button>
                                    <Button variant="outline-primary" style={{
                                        position: 'absolute',
                                        right: 650,
                                        top: 350,
                                    }} data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false" onClick={(event) => setAdminClicked(true)} >Admin</Button>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <BottomNavigation sx={{ width: window.screen.width, height: 100, marginLeft: 0, marginTop: -5 }} value={bNavBar} onChange={handleChangeBNavBar}>
                    <BottomNavigationAction
                        label="Send us an email"
                        value="Send us an email"
                        icon={<Mail />}
                    />

                    <BottomNavigationAction
                        label="Find us"
                        value="Find us"
                        icon={<LocationOnIcon />}
                    />

                    <BottomNavigationAction
                        label="Contact Us"
                        value="Contact Us"
                        icon={<PhoneInTalkIcon />} />
                    <BottomNavigationAction
                        label=" Language"
                        value=" Language"
                        icon={<LanguageIcon />}
                    />
                </BottomNavigation>


            </header>


        </div>
    )
}
