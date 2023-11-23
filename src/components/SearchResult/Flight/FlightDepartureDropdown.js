import React from "react";
import { useFlightFilterContext } from "../../../context/FlightSeatContext";



const FlightDepartureDropdown = () =>{
    const { cheapest,setCheapest,departure,handleDepartureClick,handleDepartureUnclick} = useFlightFilterContext();
    function handleDeparturClick(e){
        
        const { value, checked } = e.target;

        if (departure[value]) {
            handleDepartureUnclick(value);
        } else{
            handleDepartureClick(value);
        }
    }

    return (<>
        <div id="bus-departure-drop-down">
            <div>
                <input value='zero' type="checkbox" onChange={handleDeparturClick} checked={departure.zero} id="bus-checkbox-12am" />
                <label htmlFor="bus-checkbox-12am">12AM - 6AM</label>
            </div>
            <div>
                <input value='six' type="checkbox" onChange={handleDeparturClick} checked={departure.six} id="bus-checkbox-6am" />
                <label htmlFor="bus-checkbox-6am">6AM - 12PM</label>
            </div>
            <div>
                <input value='twe' type="checkbox" onChange={handleDeparturClick} checked={departure.twe} id="bus-checkbox-12pm" />
                <label htmlFor="bus-checkbox-12pm">12PM - 6PM</label>
            </div>
            <div>
                <input value='eig' type="checkbox" onChange={handleDeparturClick} checked={departure.eig}  id="bus-checkbox-6pm" />
                <label htmlFor="bus-checkbox-6pm">6PM - 12AM</label>
            </div>

        </div>
    </>)

}


export default FlightDepartureDropdown;