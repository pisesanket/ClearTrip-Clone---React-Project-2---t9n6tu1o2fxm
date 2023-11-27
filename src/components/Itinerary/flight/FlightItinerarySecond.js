import React, { useState } from "react";
import { useFlightDetailContext, useFlightItContext } from "../../../context/FlightItineraryContext";



const FlightItinerarySecond = () =>{

    const {flightItDetail,setAge,setEmail,setGender,setMobile,setName}  = useFlightDetailContext();
    const {flightItContext,setFlightIt,unSetFlightIt} = useFlightItContext();
    const [itMob,setItMob] = useState('');
    const [itEmail,setItEmail] = useState('');
    const [error,setError] = useState({});
    
    function handleNextClick(){
        if(!itMob){
            setError({...error,'input':'mob'});
        }else if(!itEmail){
            setError({...error,'input':'email'});
        }else{
            setError({})
            setMobile(itMob);
            setEmail(itEmail);
            setFlightIt('third');
        }
    }
    function handlPrevClick(){
        setFlightIt('first');
    }


    return (<>
        <div id="flight-itinerary-second">
            <div id="flight-itinerary-second-title" ><span id="flight-second-number">2</span><span>Add contact details</span></div>
            {flightItContext.second&&
             <div id="flight-itinerary-second-form">
             <div>Mobile number</div>
             <input type="text" value={itMob} placeholder="Enter Mobile Number" className={error.input=='mob'?'error-input':null} onChange={(e)=>setItMob(e.target.value)}/>
             <div>Email address</div>
             <input type="email" value={itEmail} placeholder="Enter Email Address" className={error.input=='email'?'error-input':null}  onChange={(e)=>setItEmail(e.target.value)} />
             <div className="itinerary-btn-div">
               <div className="itinerary-btn" onClick={handlPrevClick}>Prev</div>
               <div className="itinerary-btn" onClick={handleNextClick}>Next</div>
             </div>
            </div>
            }
           
        </div>
    </>)
}


export default FlightItinerarySecond;