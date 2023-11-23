import React, { useState } from "react";
import { useBusFilterContext } from "../../../context/BusSearchContext";
import BusDepartureDropdown from "./BusDepartueDropdown";
import  ReactDOM from "react-dom";



const BusFilterBar = () =>{
    const [isDeparturePortalOpen, setDeparturePortalOpen] = useState(false);
    const { cheapest,setCheapest,departure,handleDepartureClick,handleDepartureUnclick} = useBusFilterContext();
    
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
            <div id="bus-departure-portal-root"></div>

            <div id="bus-filter-departure">
                <div onClick={handleDepClick}>Departure</div>
            </div>
        </div>
       
        {isDeparturePortalOpen && (
          ReactDOM.createPortal(
            <BusDepartureDropdown
            />,
            document.getElementById("bus-departure-portal-root")
          )
        )}
    </>)
}


export default BusFilterBar;