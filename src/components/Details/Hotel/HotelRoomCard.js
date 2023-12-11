import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBookingContext } from "../../../context/BookingDetailContext";


const HotelRoomCard = ({hotelId,hotelRoomData}) =>{
    const {bookingValues,setType,setId,setStartDate,setEndDate,setPrice} = useBookingContext();
    const navigate = useNavigate();
    function handleBookClick(){
        setPrice(hotelRoomData?.costDetails?.baseCost+hotelRoomData?.costDetails?.taxesAndFees);
        navigate(`/hotel/detail/itinerary/${hotelId}`);
    }

    return (<>
        <div id="hotel-room-card" className="hotel-room-card">
            <div id="hotel-room-card-title"><h1>Room {'{'}{hotelRoomData?.roomType}{'}'}</h1></div>
            <div id="hotel-room-card-detail">
                <div id="room-bed">Bed : {hotelRoomData?.bedDetail}</div>
                <div id="room-area">{hotelRoomData?.roomSize} sqft</div>
                <div id="room-cancelation">{hotelRoomData?.cancellationPolicy}</div>
            </div>
            <div id="hotel-room-price">₹{hotelRoomData?.costDetails?.baseCost} <span>+ ₹{hotelRoomData?.costDetails?.taxesAndFees} tax/night</span></div>
            <div id="hotel-room-book-btn" onClick={handleBookClick}>Book</div>
        </div>
    </>)
}

export default HotelRoomCard;