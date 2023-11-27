import React from "react";
import { FlightItineraryDetailsProvider, FlightItineraryProvider } from "../../../context/FlightItineraryContext";
import FlightItinerarySecond from "./FlightItinerarySecond";
import FlightItineraryThird from "./FlightItineraryThird";
import FlightItineraryFirst from "./FlightItineraryFirst";
import '../styles/flightItinerary.css'

const FlightItinerary = () =>{

    return (<>
        <FlightItineraryProvider>
        <FlightItineraryDetailsProvider>
            <div id="flight-itinerary">
                <FlightItineraryFirst />
                <FlightItinerarySecond />
                <FlightItineraryThird />
            </div>
        </FlightItineraryDetailsProvider>
        </FlightItineraryProvider>
    </>)
}


export default FlightItinerary;