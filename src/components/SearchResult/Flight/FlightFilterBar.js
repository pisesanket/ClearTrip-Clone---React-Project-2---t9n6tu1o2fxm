import React, { useState } from "react";
import  ReactDOM from "react-dom";
import { useFlightFilterContext } from "../../../context/FlightSeatContext";
import FlightDepartureDropdown from "./FlightDepartureDropdown";



const FlightFilterBar = () =>{
    const [isDeparturePortalOpen, setDeparturePortalOpen] = useState(false);
    const { cheapest,setCheapest,departure,handleDepartureClick,handleDepartureUnclick} = useFlightFilterContext();
    
    function handleCheapClick(e){
       setCheapest(!cheapest)
    }
    function handleDepClick(){
        setDeparturePortalOpen(!isDeparturePortalOpen);
    }
    return (<>
        <div id="bus-filter-bar">
            <div id="bus-filter-cheap-div">
                <input type="checkbox" onChange={handleCheapClick} checked={cheapest} id="bus-cheap-checkbox" name="busCheapCheckbox" />
                <label htmlFor="bus-cheap-checkbox" id="">₹Cheapest</label>

            </div>
            <div id="flight-departure-portal-root"></div>

            <div id="bus-filter-departure">
                <div onClick={handleDepClick}>Departure</div>
            </div>
        </div>
       
        {isDeparturePortalOpen && (
          ReactDOM.createPortal(
            <FlightDepartureDropdown
            />,
            document.getElementById("flight-departure-portal-root")
          )
        )}
    </>)
}


export default FlightFilterBar;