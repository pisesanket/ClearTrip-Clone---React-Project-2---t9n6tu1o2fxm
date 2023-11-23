import React, { useState } from "react";
import { useHotelContext, useHotelErrorContext } from "../../context/HotelSearchContext";



const HotelSearchDay = () =>{
    const [selectedOption, setSelectedOption] = useState('');
    const { searchHotel,setLocation,setDay} = useHotelContext();
    const  {locationClass,dayClassName,setLocationClassName,setDayClassName} = useHotelErrorContext();

    const handleChange = (e) => {
      setSelectedOption(e.target.value);
      setDay(e.target.value);
      setDayClassName(null);
    };
  

    return (<>
    <div id="hotel-search-day">
        <label id="hotel-day-label" htmlFor="hotel-day-options">Day</label>
        <select id="hotel-day-options" name="cars" className={dayClassName}   value={selectedOption} onChange={handleChange}>
            <option className="hotel-day-option" value="">Select Day</option>
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