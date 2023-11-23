import React, { useState } from "react";
import { useFlightContext, useFlightErrorContext } from "../../context/FlightSeatContext";



const FlightSearchDay = () =>{
    const [selectedOption, setSelectedOption] = useState('');
    const { searchFlight,setDest,setSource,setDay} = useFlightContext();
    const  { sourceClass, dayClassName,setSourceClassName,setDayClassName,destClass,setDestClassName} = useFlightErrorContext();
    
    const handleChange = (e) => {
      setSelectedOption(e.target.value);
      setDay(e.target.value);
      setDayClassName(null);
    };
  

    return (<>
    <div id="flight-search-day">
        <label id="flight-day-label" htmlFor="day-options">Day</label>
        <select id="flight-day-options" name="cars" className={dayClassName}  value={selectedOption} onChange={handleChange}>
            <option className="flight-day-option" value="Mon">Select Day</option>
            <option className="flight-day-option" value="Mon">Monday</option>
            <option className="flight-day-option" value="Tue">Tuesday</option>
            <option className="flight-day-option" value="Wed">Wednesday</option>
            <option className="flight-day-option" value="Thu">Thursday</option>
            <option className="flight-day-option" value="Fri">Friday</option>
            <option className="flight-day-option" value="Sat">Saturday</option>
            <option className="flight-day-option" value="Sun">Sunday</option>
        </select>
    </div>
    </>)
}


export default FlightSearchDay;