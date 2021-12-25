import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import StripeCheckout from "react-stripe-checkout"
import Typography from '@mui/material/Typography';
export default function NewSummary() {
    const location = useLocation();
    const {flight, cab,adult, child,reservation, price,dep,tprice, total} = location.state;
    const [pay, setPay]=useState(false);
    const [diff, setDiff]= useState(0);
    function pr(u){
        if(cab=="Economy"){
            return u.EcoPrice;
        }
        else if(cab=="Business"){
            return u.BusPrice;
        }
       else{
            return u.FPrice;
        }
  }
  function tot(u){
    var prc =  pr(u);
    return prc * adult + prc* child * 0.5
}
    function check(t){
        if(t==tprice){
            setPay(false);
           return "No difference in total price";
        }
        else if (t<tprice){//check if new total also <old total
            //refund tprice-t
            setPay(false);
            return "Amount to be refunded: "+ tprice-t+ "$";
        }
        else{
            setPay(true);
           return "Price difference to be paid: "+t-tprice+ "$";
        }
    }

    const [product, setProduct]= useState(reservation);
      const payment = token=>{
          const body={
              token, product
          }
          const headers={
              "Content-Type":"application/json"
          }
          return fetch(`http://localhost:8000/payment`,{
              method:"POST",
              headers,
              body:JSON.stringify(body)
          }).then(response=>{
              console.log("Response", response)
              const{status}=response;
              console.log("Status", status);
  
          }).catch(error=>console.log(error))
      }
    return (
        <div>
            {/* summary bit */}
                {/* show price difference */}
                <Typography style={{ color: '#5c0931', fontweight: 'bold' }}>
                   {check(tot(flight))}
                </Typography>
                {pay? <><StripeCheckout
            stripeKey="pk_test_51K9xnYIbRPMFvA35ITziFtr9RWYlynAuPJvHhEN0K5cvXSD3xXilXy0ZboHC69mi3bGzh387NCkeGXakoE6kYdPG00lwSZDvyD"
            // {process.env.REACT_APP_KEY}
            token={payment}
            name="Book ticket"
            amount={(tot(flight)-tprice)*100}
        >
        <button>
           Pay Difference {(tot(flight)-tprice)}$
        </button>

        </StripeCheckout></>:
                    <div>
                        </div>}

            <button>
                Confirm
            </button>


        </div>
    )
}
