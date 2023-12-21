import React from "react";
import HotelSearchBox from "./HotelSearchBox";
import './styles/HotelSearch.css'
import HotelSearchProvider, { HotelErrorProvider } from "../../context/HotelSearchContext";
import AdvertisementSlider from "../Advertisement/Advertisement";



const HotelSearch = () =>{

    return (<>
        <HotelSearchProvider>
        <HotelErrorProvider>
            <div id="hotel-search">
                    <h1>Search Hotels</h1>
                    <h2>Enjoy hassle free bookings with Cleartrip</h2>
                    <div>
                        <HotelSearchBox />
                    </div>

            </div>
            <AdvertisementSlider />
        </HotelErrorProvider>
        </HotelSearchProvider>
    </>)
}


export default HotelSearch;