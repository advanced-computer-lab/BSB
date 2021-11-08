import React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Table from 'react-bootstrap/Table';
import SearchResults from './SearchResults';
import SearchBody from './SearchBody';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function Search(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [clicked, setClicked] = useState(false);
  const [viewOutputs, setViewOutputs] = useState(false);
  useEffect(() => {
    if(clicked)
    {
      setViewOutputs(true);
    }
  });


  {
   
      return (




        <>
          <Button variant="outline-primary" onClick={handleShow}> Search Flights </Button>

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            
            <Modal.Body> 
              {viewOutputs}
            <SearchBody viewOutputs={viewOutputs}></SearchBody>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={(event) => setViewOutputs(clicked) }>
                Search <Modal>

                </Modal>
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    
  
  }

//   function changeComponent()
     
// {
  
//   if(!viewOutputs)
//   { 
//     return(

//     <div border="solid">




//               <form >
//                 Flight Number:

//                 <br />

//                 <input type="text" id="from" name="from" onChange={event => setFlightNum(event.target.value)} />
//                 <br />



//                 <br />
//                 From:
//                 <br />

//                 <input type="text" id="from" name="from" onChange={event => setFrom(event.target.value)} />
//                 <br />
//                 To:
//                 <br />
//                 <input type="text" id="to" name="to" onChange={event => setTo(event.target.value)} />
//                 <br />
//                 Date:
//                 <br />
//                 <input type="date" id="date" name="date" onChange={event => setDate(event.target.value)} />
//                 <br />

//                 ArrivalTime:
//                 <br />
//                 <input type="text" id="cabin" name="cabin" onChange={event => setArr(event.target.value)} />

//                 <br />
//                 Departure Time:
//                 <br />
//                 <input type="text" id="seat" name="seat" onChange={event => setDep(event.target.value)} />
//                 <br />
//                 Departure Terminal:
//                 <br />
//                 <input type="number" id="cabin" name="cabin" onChange={event => setTdep(event.target.value)} />

//                 <br />
//                 Arrival Terminal:
//                 <br />
//                 <input type="number" id="cabin" name="cabin" onChange={event => setTarr(event.target.value)} />

//                 <br />
//                 Number of economy seats:
//                 <br />
//                 <input type="number" id="cabin" name="cabin" onChange={event => setEc(event.target.value)} />

//                 <br />
//                 Number of Buisness seats:
//                 <br />
//                 <input type="number" id="cabin" name="cabin" onChange={event => setBs(event.target.value)} />

//                 <br />
//                 Number of First seats:
//                 <br />
//                 <input type="number" id="cabin" name="cabin"
//                   onChange={event => setFirst(event.target.value)} />

//                 <br />

//                 <br />

//               </form>
//             </div>
//     );
//   }
//   return(

//     <div>
//         <SearchResults flightlist={searchflightlist} />
//       </div>
//   );
//   }
}




export default Search
