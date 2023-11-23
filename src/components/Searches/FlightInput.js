import React, { useState } from "react";
import FlightSearchDrop from "../../Portals/FlightSearchDrop";
import  ReactDOM  from "react-dom";
import { airportData } from "../../utils/AirportData";
import FlightSearchDDrop from "../../Portals/FlightSearchDDrop";
import images from "../../images";
import { useFlightContext, useFlightErrorContext } from "../../context/FlightSeatContext";

const FlightInput = () =>{
    
    const [isSourceDropdownOpen,setSourceDropdown] = useState(false);
    const [isDestDropdownOpen,setDestDropdown] = useState(false);
    const [flightSource,setFlightSource] = useState('');
    const [flightDest,setFlightDest] = useState('');
    const [station,setStation] = useState([]);
    const { searchFlight,setDest,setSource,setDay} = useFlightContext();
    const  { sourceClass, dayClassName,setSourceClassName,setDayClassName,destClass,setDestClassName} = useFlightErrorContext();
    
    const handleInputChange = (e) => {
        
        setFlightSource(e.target.value);
        setSource(e.target.value)
        setSourceClassName(null);
        const filteredAirports = airportData.filter((airport) =>
        airport.airportName.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.city.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.iata.toLowerCase().startsWith(e.target.value.toLowerCase())
        );
        setStation(filteredAirports);
        setSourceDropdown(filteredAirports.length>0);
        
      };
    
      const handleSelectStation = (stat) => {
        setFlightSource(`${stat.iata} ${stat.city}`);
        setSource(stat.iata)
        setSourceClassName(null);
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
        setFlightDest(e.target.value);
        setDestClassName(null)
        const filteredAirports = airportData.filter((airport) =>
            airport.airportName.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.city.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.iata.toLowerCase().startsWith(e.target.value.toLowerCase())
        
        );

        setStation(filteredAirports);
        setDestDropdown(filteredAirports.length>0);
      };
    
      const handleDSelectStation = (stat) => {
        setFlightDest(`${stat.iata} ${stat.city}`);
        setDest(stat.iata)
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
            <div id="flight-input-first" className={sourceClass}>
              <img src={images.takeoff} width={'30px'} height={'30px'} alt="" />
              <input type="text" value={flightSource} placeholder="Where from?" onChange={handleInputChange} onBlur={closeDropdown} />  
              <div id="flight-source-dropdown-root"></div>
               
            </div>
            <div id="flight-input-second" className={destClass}>
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