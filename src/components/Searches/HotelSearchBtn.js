import React from "react";
import { Link } from "react-router-dom";
import { useHotelContext, useHotelErrorContext } from "../../context/HotelSearchContext";


const HotelSearchBtn = () =>{
    const { searchHotel,setLocation,setDay} = useHotelContext();
    const  {locationClass,dayClassName,setLocationClassName,setDayClassName} = useHotelErrorContext();
    function handleSearchClick(){
        if(!searchHotel.location){
            setLocationClassName('error-border');
        }else if(!searchHotel.day){
            setDayClassName('error-border');
        }
    }
    
    return (<>
        <div id="hotel-search-btn">
        {searchHotel.location && searchHotel.day ? (
          <Link to={`/hotels/search?location=${searchHotel.location}&day=${searchHotel.day}`} >
            Search Hotels
          </Link>
        ) : (
            <span style={{color:'#ffffff'}} onClick={handleSearchClick}>Search Hotels</span>)}
            </div>
        
    </>)
}

export default HotelSearchBtn;