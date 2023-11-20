import React, { useState } from "react";

import  ReactDOM  from "react-dom";
import { airportData } from "../../utils/AirportData";
import images from "../../images";
import BusSearchDrop from "../../Portals/BusSearchDrop";

const HotelInput = () =>{

    const [isSourceDropdownOpen,setSourceDropdown] = useState(false);
    const [flightSource,setSource] = useState('');
    const [station,setStation] = useState([]);
    const handleInputChange = (e) => {
        
        setSource(e.target.value);

        const filteredAirports = airportData.filter((airport) =>
        airport.airportName.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.city.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.iata.toLowerCase().startsWith(e.target.value.toLowerCase())
        );
        setStation(filteredAirports);
        setSourceDropdown(filteredAirports.length>0);
        
      };
    
      const handleSelectStation = (stat) => {
        setSource(`${stat.iata} ${stat.city}`);
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
            <div id="hotel-input-first">
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