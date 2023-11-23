import React from "react";
import FlightSearchBox from "./FlightSearchBox";
import FlightSearchProvider, { FlightErrorProvider, FlightSeatProvider } from "../../context/FlightSeatContext";
import './styles/FlightSearch.css'


const FlightSearch = () =>{

    return (<>
        <FlightSearchProvider>
        <FlightErrorProvider>
        <FlightSeatProvider>
            <div id="flight-search">
                <h1>Search flights</h1>
                <h2>Enjoy hassle free bookings with Cleartrip</h2>
                <div>
                    <FlightSearchBox />
                </div>

            </div>
        </FlightSeatProvider>
        </FlightErrorProvider>
        </FlightSearchProvider>
    </>)
}



export default FlightSearch;