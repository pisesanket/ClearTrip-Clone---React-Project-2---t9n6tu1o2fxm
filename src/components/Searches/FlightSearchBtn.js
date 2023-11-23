import React from "react";
import { useFlightContext, useFlightErrorContext } from "../../context/FlightSeatContext";
import { Link } from "react-router-dom";


const FlightSearchBtn = () =>{
    const { searchFlight,setDest,setSource,setDay} = useFlightContext();
    const  { sourceClass, dayClassName,setSourceClassName,setDayClassName,destClass,setDestClassName} = useFlightErrorContext();
    function handleSearchClick(){
        if(!searchFlight.source){
            setSourceClassName('error-border');
        }else if(!searchFlight.dest){
            setDestClassName('error-border');
        }
        else if(!searchFlight.day){
            setDayClassName('error-border');
        }
    }

    return (<>
       
        <div id="flight-search-btn">
        {searchFlight.source&&searchFlight.dest && searchFlight.day ? (
          <Link to={`/flight/search?source=${searchFlight.source}&dest=${searchFlight.dest}&day=${searchFlight.day}`} >
            Search Flights
          </Link>
        ) : (
            <span style={{color:'#ffffff'}} onClick={handleSearchClick}>Search Flights</span>)}
        </div>
    </>)
}

export default FlightSearchBtn;