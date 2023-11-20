import React from "react";
import FlightSearchBox from "./FlightSearchBox";
import { FlightSeatProvider } from "../../context/FlightSeatContext";
import './styles/FlightSearch.css'
import FlightSearchDay from "./FlightSearchDay";
import FlightSearchBtn from "./FlightSearchBtn";

const FlightSearch = () =>{

    return (<>
        <FlightSeatProvider>
            <div id="flight-search">
                <h1>Search flights</h1>
                <h2>Enjoy hassle free bookings with Cleartrip</h2>
                
                <div>
                    <FlightSearchBox />
                </div>
               

            </div>
        </FlightSeatProvider>
    </>)
}



export default FlightSearch;