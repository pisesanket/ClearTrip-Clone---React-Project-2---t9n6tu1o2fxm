import React, { useEffect, useState } from "react";
import BusCardAmenities from "./BusCardAmenities";
import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useBookingContext } from "../../../context/BookingDetailContext";



const BusCard = (props) =>{
    const [isAmenities,setAmenities] = useState(false);
    const {bookingValues,setType,setId,setStartDate,setEndDate,setPrice} = useBookingContext();
    const navigate = useNavigate();
    function handleAmenClick(){
        setAmenities(!isAmenities);
    }
    function handleBookNowClick(){
        setPrice(props.busData.fare);
        navigate(`/bus/detail/itinerary/${props.busData._id}`);
    }
    
    return (<>
        <div id="bus-card">
            <div id="bus-card-head">
                <div id="bus-card-name">{props.busData.name}</div>
                <div id="bus-card-type">{props.busData.type}</div>
            </div>
            <div id="bus-card-middle">
                <div id="bus-card-time">
                    {`${props.busData.departureTime} -- ${props.busData.arrivalTime}`}
                </div>
                <div id="bus-card-price-book">
                    <div id="bus-card-price">₹{props.busData.fare} </div>
                <div id="bus-card-book" onClick={handleBookNowClick}>Book Now</div>
                </div>
            </div>
            <div id="bus-card-bottoms">
                <div id="bus-card-amenities" onClick={handleAmenClick}>Amenities</div>
            </div>
            {isAmenities&&<BusCardAmenities  amen={props.busData.amenities} />}
        </div>
    </>)
}


export default BusCard