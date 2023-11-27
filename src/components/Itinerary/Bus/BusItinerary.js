import React from "react";
import { BusItineraryDetailsProvider, BustItineraryProvider, useBusItContext } from "../../../context/BusItineraryContext";
import BusItinerarySecond from "./BusItinerarySecond";
import BusItineraryThird from "./BusItineraryThird";
import BusItineraryFirst from "./BusItineraryFirst";
import '../styles/busItinerary.css';

const BusItinerary = () =>{

    return (<>
        <BustItineraryProvider>
        <BusItineraryDetailsProvider>

            <div id="bus-itinerary">
                <BusItineraryFirst />
                <BusItinerarySecond />
                <BusItineraryThird />
            </div>

        </BusItineraryDetailsProvider>
        </BustItineraryProvider>

    </>)
}


export default BusItinerary;