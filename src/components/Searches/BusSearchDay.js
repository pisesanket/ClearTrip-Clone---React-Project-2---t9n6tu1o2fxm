import React, { useState } from "react";
import { useBusContext, useBusErrorContext } from "../../context/BusSearchContext";



const BusSearchDay = () =>{
    const [selectedOption, setSelectedOption] = useState('');
    const { searchBus,setDest,setSource,setDay} = useBusContext();
    const  { sourceClass, dayClassName,setSourceClassName,setDayClassName,destClass,setDestClassName} = useBusErrorContext();
  
    const handleChange = (e) => {
      setSelectedOption(e.target.value);
      setDay(e.target.value);
      setDayClassName(null);
    };
  

    return (<>
    <div id="bus-search-day">
        <label id="bus-day-label" htmlFor="bus-day-options">Day</label>
        <select id="bus-day-options" name="cars" className={dayClassName}   value={selectedOption} onChange={handleChange}>
            <option className="hotel-day-option" value="">Select Day</option>
            <option className="bus-day-option" value="Mon">Monday</option>
            <option className="bus-day-option" value="Tue">Tuesday</option>
            <option className="bus-day-option" value="Wed">Wednesday</option>
            <option className="bus-day-option" value="Thu">Thursday</option>
            <option className="bus-day-option" value="Fri">Friday</option>
            <option className="bus-day-option" value="Sat">Saturday</option>
            <option className="bus-day-option" value="Sun">Sunday</option>
        </select>
    </div>
    </>)
}


export default BusSearchDay;