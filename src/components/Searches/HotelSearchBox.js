import React from "react";

import HotelSearchBtn from "./HotelSearchBtn";
import HotelSearchDay from "./HotelSearchDay";
import HotelInput from "./HotelInput";



const HotelSearchBox = () =>{

    return (<>
            <div id="hotel-search-box">

                <HotelInput />
                

                <div id="hotel-search-bottom">
                    <HotelSearchDay />
                    <HotelSearchBtn />
                </div>
        
            </div>
        
    </>)
}


export default HotelSearchBox;