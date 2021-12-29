import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AirportHotel from './AirportHotel';
import AppBarr from './AppBarr';
import LoginPage from './LoginPage';
import BaggageAllowance from './BaggageAllowance';
import UpgradeJourmey from './UpgradeJourmey';
import SpecialServices from './SpecialServices';
import Transacc from './Transacc';
import Lounges from './Lounges';
import TravelInsurance from './TravelInsurance';
import FlexibleTravelOptions from './FlexibleTravelOptions';
import SafeTr from './SafeTr'
import PrivilegeClub from './PrivilegeClub';
import FamilyProgramme from './FamilyProgramme';
import StudentPrograms from './StudentPrograms';
import Earn from './Earn';
import Buypoints from './Buypoints';
import Buygifts from './Buygifts';
import Dining from './Dining'
import Wifi from './Wifi'
import Help from './Help'
import LandingPage from './LandingPage'
import CreateAccount from './CreateAccount';
import Admin from './Admin';
import Searchu from './Searchu'
import SearchResults from './SearchResults';
import Footer from './Footer';
import Meet from './Meet';
import TravelReq from './TravelReq'
import SearchRes from './SearchRes'
import Seats from './Seats'
import ReservedFlights from './ReservedFlights'
import ReturnSeats from './ReturnSeats'
import Search from './Search';
import Summary from './Summary';
import EditSeats from './EditSeats'
import SearchEdit from './SearchEdit'
import ChangeFlight from './ChangeFlight'
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import NewSeats from './NewSeats';
import NewSummary from './NewSummary';
import WhereWeTravel from './WhereWeTravel';
import Porto from './Porto';
import Geneva from './Geneva';
import NewYork from './NewYork';
function HomePage() {

    return (
        <div className='page-container'>
        <div className='content-wrap'> 

        </div>
   

        <div>
           
            <BrowserRouter>
                <AppBarr />
                <Routes>
                     <Route path='/' element={<Searchu />}> </Route>
                   
                    <Route path='/AirportHotel' element={<AirportHotel />}> </Route>
                    <Route path='/BaggageAllowance' element={<BaggageAllowance />}> </Route>
                    <Route path='/UpgradeJourmey' element={<UpgradeJourmey />}> </Route>
                    <Route path='/SpecialServices' element={<SpecialServices />}> </Route>
                    <Route path='/Transacc' element={<Transacc />}> </Route>
                    <Route path='/Lounges' element={<Lounges />}> </Route>
                    <Route path='/TravelInsurance' element={<TravelInsurance />}> </Route>
                    <Route path='/FlexibleTravelOptions' element={<FlexibleTravelOptions />}> </Route>
                    <Route path='/SignUp' element={<CreateAccount />}> </Route>
                    <Route path='/Login' element={<LoginPage />}> </Route>
                    <Route path='/PrivilegeClub' element={<PrivilegeClub />}> </Route>
                    <Route path='/SafeTravel' element={<SafeTr />}> </Route>
                    <Route path='/FamilyProgramme' element={<FamilyProgramme />}> </Route>
                    <Route path='/StudentPrograms' element={<StudentPrograms />}> </Route>
                    <Route path='/Earn' element={<Earn />}> </Route>
                    <Route path='/Buypoints' element={<Buypoints />}> </Route>
                    <Route path='/Buygifts' element={<Buygifts />}> </Route>
                    <Route path='/Dining' element={<Dining />}> </Route>
                    <Route path='/Wifi' element={<Wifi />}> </Route>
                    <Route path='/Help' element={<Help />}> </Route>
                    <Route path='/Admin' element={<Admin />}> </Route>
                    <Route path='/Search' element={<Searchu />}> </Route>
                    <Route path='/SearchResults' element={<SearchResults />}> </Route>
                    <Route path='/Meet' element={<Meet />}> </Route>
                    <Route path='/TravelRequirments' element={<TravelReq />}> </Route>
                    <Route path='/SearchRes' element={<SearchRes />}> </Route>
                    <Route path='/Seats' element={<Seats />}> </Route>
                    <Route path='/returnSeats' element={<ReturnSeats />}> </Route>
                    <Route path='/Summary' element={<Summary />}> </Route>
                    <Route path='/ReservedFlights' element={<ReservedFlights/>}> </Route>
                    <Route path='/EditSeats' element={<EditSeats/>}> </Route>
                    <Route path='/SearchEdit' element={<SearchEdit/>}> </Route>
                    <Route path='/ChangeFlight' element={<ChangeFlight/>}> </Route>
                    <Route path='/UserProfile' element={<UserProfile/>}> </Route>
                    <Route path='/ChangePassword' element={<ChangePassword/>}> </Route>
                    <Route path='/EditProfile' element={<EditProfile/>}> </Route>
                    <Route path='/NewSeats' element={<NewSeats/>}> </Route>
                    <Route path='/NewSummary' element={<NewSummary/>}> </Route>
                    <Route path='/WhereWeTravel' element={<WhereWeTravel/>}> </Route>
                    <Route path='/SignUp' element={<CreateAccount/>}> </Route>
                    <Route path='/Porto' element={<Porto/>}> </Route>
                    <Route path='/Geneva' element={<Geneva/>}> </Route>
                    <Route path='/NewYork' element={<NewYork/>}> </Route>
                </Routes>
                <Footer />
            </BrowserRouter>

        </div>
        </div>
    )
}

export default HomePage
