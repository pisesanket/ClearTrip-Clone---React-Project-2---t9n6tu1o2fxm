import React from "react";
import FlightSearchBox from "./FlightSearchBox";
import FlightSearchProvider, { FlightErrorProvider, FlightSeatProvider } from "../../context/FlightSeatContext";
import './styles/FlightSearch.css'
import AdvertisementSlider from "../Advertisement/Advertisement";


const FlightSearch = () =>{

    return (<>
        <FlightSearchProvider>
        <FlightErrorProvider>
        
            <div id="flight-search">
                <h1>Search flights</h1>
                <h2>Enjoy hassle free bookings with Cleartrip</h2>
                <div>
                    <FlightSearchBox />
                </div>

            </div>
            <AdvertisementSlider />
        
        </FlightErrorProvider>
        </FlightSearchProvider>
    </>)
}



export default FlightSearch;