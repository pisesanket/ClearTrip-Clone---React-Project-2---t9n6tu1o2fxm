import React from "react";

import HotelSearchBtn from "./HotelSearchBtn";
import HotelSearchDay from "./HotelSearchDay";
import HotelInput from "./HotelInput";
import { useHotelErrorContext } from "../../context/HotelSearchContext";
import HotelSearchDate from "./HotelSearchDate";



const HotelSearchBox = () =>{
    

    return (<>
            <div id="hotel-search-box">

                <HotelInput />
                

                <div id="hotel-search-bottom">
                    <HotelSearchDate />
                    {/* <HotelSearchDay /> */}
                    <HotelSearchBtn />
                </div>
                <div id="hotel-search-error" style={{color:'red'}}>
                    
                </div>
        
            </div>
        
    </>)
}


export default HotelSearchBox;