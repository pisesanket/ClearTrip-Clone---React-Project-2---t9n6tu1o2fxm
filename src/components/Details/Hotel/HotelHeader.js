import React from "react";
import images from "../../../images";



const HotelHeader = ({hotelData}) =>{

    
    return (<>
        <div id="hotel-header">
            <div id="hotel-name"><h1>{hotelData.name}</h1></div>
            <div id="hotel-location">{hotelData.location}</div>
            <div id="hotel-rating">{hotelData.rating}/5 <img width={'20px'} src={images.ratingStar}></img></div>
        </div>
    </>)
}


export default  HotelHeader;