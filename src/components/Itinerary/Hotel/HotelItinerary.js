import React from "react";
import HotelItineraryFirst from "./HotelItineraryFirst";
import HotelItinerarySecond from "./HotelItinerarySecond";
import HotelItineraryThird from "./HotelItineraryThird";
import { HotelItineraryDetailsProvider, HotelItineraryProvider } from "../../../context/HotelItineraryContext";
import '../styles/hotelItinerary.css'



const HotelItinerary = () =>{

    return (<>
        <HotelItineraryProvider>
        <HotelItineraryDetailsProvider>
            <div id="hotel-itinerary">
                <HotelItineraryFirst />
                <HotelItinerarySecond />
                <HotelItineraryThird />
            </div>
        </HotelItineraryDetailsProvider>
        </HotelItineraryProvider>
    </>)
}

export default HotelItinerary;