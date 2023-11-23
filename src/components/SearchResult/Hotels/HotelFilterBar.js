import React, { useState } from "react";
import  ReactDOM from "react-dom";
import { useHotelFilterContext } from "../../../context/HotelSearchContext";
import HotelRatingDropdown from "./HotelRatingDropdown";



const HotelFilterBar = () =>{
    const [isRatingOpen, setRatingPortalOpen] = useState(false);
    const { cheapest,setCheapest,departure,handleRatingClick,handleRatingUnclick} = useHotelFilterContext();
    
    function handleCheapClick(e){
       setCheapest(!cheapest)
    }
    function handleRatClick(){
        setRatingPortalOpen(!isRatingOpen);
    }
    return (<>
        <div id="hotel-filter-bar">
            <div id="hotel-filter-cheap-div">
                <input type="checkbox" onChange={handleCheapClick} checked={cheapest} id="hotel-cheap-checkbox" name="hotelCheapCheckbox" />
                <label htmlFor="hotel-cheap-checkbox" id="">₹Cheapest</label>

            </div>
            <div id="hotel-rating-portal-root"></div>

            <div id="hotel-filter-rating">
                <div onClick={handleRatClick}>Guest Rating</div>
            </div>
        </div>
       
        {isRatingOpen && (
          ReactDOM.createPortal(
            <HotelRatingDropdown
            />,
            document.getElementById("hotel-rating-portal-root")
          )
        )}
    </>)
}


export default HotelFilterBar;