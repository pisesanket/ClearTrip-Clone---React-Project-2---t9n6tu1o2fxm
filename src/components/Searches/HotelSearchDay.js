import React, { useState } from "react";



const HotelSearchDay = () =>{
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };
  

    return (<>
    <div id="hotel-search-day">
        <label id="hotel-day-label" htmlFor="hotel-day-options">Day</label>
        <select id="hotel-day-options" name="cars"   value={selectedOption} onChange={handleChange}>
            <option className="hotel-day-option" value="Mon">Monday</option>
            <option className="hotel-day-option" value="Tue">Tuesday</option>
            <option className="hotel-day-option" value="Wed">Wednesday</option>
            <option className="hotel-day-option" value="Thu">Thursday</option>
            <option className="hotel-day-option" value="Fri">Friday</option>
            <option className="hotel-day-option" value="Sat">Saturday</option>
            <option className="hotel-day-option" value="Sun">Sunday</option>
        </select>
    </div>
    </>)
}


export default HotelSearchDay;