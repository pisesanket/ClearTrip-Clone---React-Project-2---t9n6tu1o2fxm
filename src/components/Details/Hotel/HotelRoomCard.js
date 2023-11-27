import React from "react";
import { Link } from "react-router-dom";


const HotelRoomCard = ({hotelId,hotelRoomData}) =>{


    return (<>
        <div id="hotel-room-card" className="hotel-room-card">
            <div id="hotel-room-card-title"><h1>Room {'{'}{hotelRoomData?.roomType}{'}'}</h1></div>
            <div id="hotel-room-card-detail">
                <div id="room-bed">Bed : {hotelRoomData?.bedDetail}</div>
                <div id="room-area">{hotelRoomData?.roomSize} sqft</div>
                <div id="room-cancelation">{hotelRoomData?.cancellationPolicy}</div>
            </div>
            <div id="hotel-room-price">₹{hotelRoomData?.costDetails?.baseCost} <span>+ ₹{hotelRoomData?.costDetails?.taxesAndFees} tax/night</span></div>
            <Link to={`/hotel/detail/itinerary/${hotelId}`}><div id="hotel-room-book-btn">Book</div></Link>
        </div>
    </>)
}

export default HotelRoomCard;