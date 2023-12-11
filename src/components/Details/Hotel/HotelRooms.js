import React from "react";
import HotelRoomCard from "./HotelRoomCard";


const HotelRooms = ({hotelId,hotelRooms}) =>{


    return (<>
        <div id="hotel-room" className="hotel-room-container">
            <div id="hotel-room-list" className="hotel-room-list">
                {
                    hotelRooms.map(entry=>{
                        return (<HotelRoomCard key={entry.roomNumber} hotelId={hotelId} hotelRoomData = {entry} />)
                    })
                }
            </div>
        </div>
    </>)
}

export default HotelRooms;