import React from "react";
import { Link } from "react-router-dom";
import { useHotelContext, useHotelErrorContext } from "../../context/HotelSearchContext";


const HotelSearchBtn = () =>{
    const { searchHotel,setLocation,setDay} = useHotelContext();
    const  { locationClass,dayClassName,dayOutClassName,setLocationClassName,setDayInClassName,setDayCheckOutClassName} = useHotelErrorContext();
    function handleSearchClick(){
        
        if(!searchHotel.location){
            setLocationClassName('error-border');
        }else if(!searchHotel.dayIn){
            setDayInClassName('error-border');
        }else if(!searchHotel.dayOut){
            setDayCheckOutClassName('error-border');
        }else{
            setDayCheckOutClassName(null);    
            setLocationClassName(null);
            setDayInClassName(null)
        }
    }
    
    
    return (<>
        <div id="hotel-search-btn">
            {/* {console.log(searchHotel)} */}
        {searchHotel.location && searchHotel.dayOut && searchHotel.dayIn &&searchHotel.day ? (
          <Link to={`/hotels/search?location=${searchHotel.location}&day=${searchHotel.day}`} >
            Search Hotels
          </Link>
        ) : (
            <span style={{color:'#ffffff'}} onClick={handleSearchClick}>Search Hotels</span>)}
            </div>
        
    </>)
}

export default HotelSearchBtn;