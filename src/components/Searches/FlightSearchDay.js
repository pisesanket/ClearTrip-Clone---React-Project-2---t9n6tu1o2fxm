import React, { useState } from "react";



const FlightSearchDay = () =>{
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };
  

    return (<>
    <div id="flight-search-day">
        <label id="flight-day-label" htmlFor="day-options">Day</label>
        <select id="flight-day-options" name="cars"   value={selectedOption} onChange={handleChange}>
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