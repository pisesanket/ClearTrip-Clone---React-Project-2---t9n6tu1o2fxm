import React, { useState } from "react";

import  ReactDOM  from "react-dom";
import { airportData } from "../../utils/AirportData";  
import images from "../../images";
import BusSearchDrop from "../../Portals/BusSearchDrop";
import { useHotelContext, useHotelErrorContext } from "../../context/HotelSearchContext";

const HotelInput = () =>{
    const { searchHotel,setLocation,setDay} = useHotelContext();
    const [isSourceDropdownOpen,setSourceDropdown] = useState(false);
    const [flightSource,setSource] = useState('');
    const [station,setStation] = useState([]);
    const  {locationClass,dayClassName,setLocationClassName,setDayClassName} = useHotelErrorContext();
    
    const handleInputChange = (e) => {
        
        setSource(e.target.value);
        setLocation(e.target.value)
        setLocationClassName(null)
        const filteredAirports = airportData.filter((airport) =>
        airport.airportName.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.city.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.iata.toLowerCase().startsWith(e.target.value.toLowerCase())
        );
        setStation(filteredAirports);
        setSourceDropdown(filteredAirports.length>0);
        
      };
    
      const handleSelectStation = (stat) => {
        setSource(`${stat.iata} ${stat.city}`);
        setLocationClassName(null);
        setLocation(stat.city);
        setTimeout(()=>{
          setSourceDropdown(false);
        },1000)
      };
    
      const closeDropdown = () => {
        setTimeout(()=>{
          setSourceDropdown(false);

        },1000)
      };

     

    return (<>
        <div id="hotel-input">
            <div id="hotel-input-first" className={locationClass}>
              <img src={images.location} width={'30px'} height={'30px'} alt="" />
              <input type="text" value={flightSource} placeholder="Enter City?" onChange={handleInputChange} onBlur={closeDropdown} />  
              <div id="hotel-source-dropdown-root"></div>
               
            </div>
          
        </div>
        {isSourceDropdownOpen && (
          ReactDOM.createPortal(
            <BusSearchDrop
              station={station}
              onSelect={handleSelectStation}
            />,
            document.getElementById("hotel-source-dropdown-root")
          )
        )}
         
    </>)
}


export default HotelInput;