import React from "react";
import HotelSearchBox from "./HotelSearchBox";
import './styles/HotelSearch.css'



const HotelSearch = () =>{

    return (<>
        <div id="hotel-search">
                <h1>Search Hotels</h1>
                <h2>Enjoy hassle free bookings with Cleartrip</h2>
                <div>
                    <HotelSearchBox />
                </div>

        </div>
    </>)
}


export default HotelSearch;