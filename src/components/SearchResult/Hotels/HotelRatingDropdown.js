import React from "react";
import { useHotelFilterContext } from "../../../context/HotelSearchContext";



const HotelRatingDropdown = () =>{
    const { cheapest,setCheapest,rating,handleRatingClick,handleRatingUnclick} = useHotelFilterContext();
    function handleRatinClick(e){
        
        const { value, checked } = e.target;
        
        if (rating[value]) {
            handleRatingUnclick(value);
        } else{
            handleRatingClick(value);
        }
    }

    return (<>
        <div id="hotel-rating-drop-down">
            <div>
                <input value='four' type="checkbox" onChange={handleRatinClick} checked={rating.four} id="hotel-checkbox-4" />
                <label htmlFor="hotel-checkbox-4">4 and Above</label>
            </div>
            <div>
                <input value='three' type="checkbox" onChange={handleRatinClick} checked={rating.three} id="hotel-checkbox-3" />
                <label htmlFor="hotel-checkbox-3">3 and Above</label>
            </div>
            <div>
                <input value='two' type="checkbox" onChange={handleRatinClick} checked={rating.two} id="hotel-checkbox-2" />
                <label htmlFor="hotel-checkbox-2">2 and Above</label>
            </div>
            <div>
                <input value='one' type="checkbox" onChange={handleRatinClick} checked={rating.one}  id="hotel-checkbox-1" />
                <label htmlFor="hotel-checkbox-1">1 and Above</label>
            </div>

        </div>
    </>)

}


export default HotelRatingDropdown;