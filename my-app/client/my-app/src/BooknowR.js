import React from 'react'
import {useState,useEffect} from 'react';
import { Redirect } from 'react-router-dom';
//import Returnlist from './ReturnList'; 
import Snackbar from '@mui/material/Snackbar';
import Modal from 'react-modal';

function BooknowR() {
    const[clicked,setClicked]=useState(false);

   useEffect(() => {
        if (clicked){
       
            axios.post("http://localhost:8000/AddReturnFlight").then(res => {
              console.log("xxxx");}
   , )}
  })

    return (
        <div>
           <button onClick={(event) =>{setClicked(true)}}>
           </button> 
           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your flight is booked successfully!
        </Alert>
      </Snackbar>
        </div>
    )
}

export default BooknowR;