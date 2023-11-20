import React, { useState } from "react";
import FlightSearchDrop from "../../Portals/FlightSearchDrop";
import  ReactDOM  from "react-dom";
import { airportData } from "../../utils/AirportData";
import FlightSearchDDrop from "../../Portals/FlightSearchDDrop";
import images from "../../images";

const FlightInput = () =>{
    
    const [isSourceDropdownOpen,setSourceDropdown] = useState(false);
    const [isDestDropdownOpen,setDestDropdown] = useState(false);
    const [flightSource,setSource] = useState('');
    const [flightDest,setDest] = useState('');
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

      const handleDInputChange = (e) => {
        setDest(e.target.value)
        const filteredAirports = airportData.filter((airport) =>
            airport.airportName.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.city.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.iata.toLowerCase().startsWith(e.target.value.toLowerCase())
        
        );

        setStation(filteredAirports);
        setDestDropdown(filteredAirports.length>0);
      };
    
      const handleDSelectStation = (stat) => {
        setDest(`${stat.iata} ${stat.city}`);
        setTimeout(()=>{
          setDestDropdown(false);
        },1000)
      };
    
      const closeDDropdown = () => {
        setTimeout(()=>{
          setDestDropdown(false);

        },1000)
      };

    return (<>
        <div id="flight-input">
            <div id="flight-input-first">
              <img src={images.takeoff} width={'30px'} height={'30px'} alt="" />
              <input type="text" value={flightSource} placeholder="Where from?" onChange={handleInputChange} onBlur={closeDropdown} />  
              <div id="flight-source-dropdown-root"></div>
               
            </div>
            <div id="flight-input-second">
              <img src={images.landing} width={'30px'} height={'30px'} alt="" />
              <input type="text" value={flightDest} placeholder="Where to?" onChange={handleDInputChange} onBlur={closeDDropdown} />
              <div id="flight-dest-dropdown-root"></div>
            </div>
        </div>
        {isSourceDropdownOpen && (
          ReactDOM.createPortal(
            <FlightSearchDrop
              station={station}
              onSelect={handleSelectStation}
            />,
            document.getElementById("flight-source-dropdown-root")
          )
        )}
         {isDestDropdownOpen && (
          ReactDOM.createPortal(
            <FlightSearchDDrop
              station={station}
              onSelect={handleDSelectStation}
            />,
            document.getElementById("flight-dest-dropdown-root")
          )
        )}
    </>)
}

export default FlightInput;