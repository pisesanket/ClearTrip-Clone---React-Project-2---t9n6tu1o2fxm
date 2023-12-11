import React, { useState } from "react";

import  ReactDOM  from "react-dom";
import { airportData } from "../../utils/AirportData";
import FlightSearchDDrop from "../../Portals/FlightSearchDDrop";
import images from "../../images";
import BusSearchDrop from "../../Portals/BusSearchDrop";
import { useBusContext, useBusErrorContext } from "../../context/BusSearchContext";

const BusInput = () =>{

    const [isSourceDropdownOpen,setSourceDropdown] = useState(false);
    const [isDestDropdownOpen,setDestDropdown] = useState(false);
    const [flightSource,setBusSource] = useState('');
    const [flightDest,setBusDest] = useState('');
    const [station,setStation] = useState([]);
    const { searchBus,setDest,setSource,setDay} = useBusContext();
    const  { sourceClass, dayClassName,setSourceClassName,setDayClassName,destClass,setDestClassName} = useBusErrorContext();
    
    const handleInputChange = (e) => {
        
        setBusSource(e.target.value);
        setSource(e.target.value)
        setSourceClassName(null);
        const filteredAirports = airportData.filter((airport) =>
        airport.airportName.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.city.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.iata.toLowerCase().startsWith(e.target.value.toLowerCase())
        );
        setStation(filteredAirports);
        setSourceDropdown(filteredAirports.length>0);
        
      };
    
      const handleSelectStation = (stat) => {
          setBusSource(`${stat.city}`);
          setSource(stat.city)
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
        setBusDest(e.target.value)
        setDest(e.target.value);
        setDestClassName(null)
        const filteredAirports = airportData.filter((airport) =>
            airport.airportName.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.city.toLowerCase().startsWith(e.target.value.toLowerCase())||airport.iata.toLowerCase().startsWith(e.target.value.toLowerCase())
        
        );

        setStation(filteredAirports);
        setDestDropdown(filteredAirports.length>0);
      };
    
      const handleDSelectStation = (stat) => {
        setBusDest(`${stat.city}`);
        setDest(stat.city);
        setDestClassName(null);
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
        <div id="bus-input">
            <div id="bus-input-first" className={sourceClass}>
              <img src={images.bus} width={'30px'} height={'30px'} alt="" />
              <input type="text" value={flightSource} placeholder="Leaving from?" onChange={handleInputChange} onBlur={closeDropdown} />  
              <div id="bus-source-dropdown-root"></div>
               
            </div>
            <div id="bus-input-second" className={destClass}>
              <img src={images.location} width={'30px'} height={'30px'} alt="" />
              <input type="text" value={flightDest} placeholder="Going to?" onChange={handleDInputChange} onBlur={closeDDropdown} />
              <div id="bus-dest-dropdown-root"></div>
            </div>
        </div>
        {isSourceDropdownOpen && (
          ReactDOM.createPortal(
            <BusSearchDrop
              station={station}
              onSelect={handleSelectStation}
            />,
            document.getElementById("bus-source-dropdown-root")
          )
        )}
         {isDestDropdownOpen && (
          ReactDOM.createPortal(
            <BusSearchDrop
              station={station}
              onSelect={handleDSelectStation}
            />,
            document.getElementById("bus-dest-dropdown-root")
          )
        )}
    </>)
}


export default BusInput;