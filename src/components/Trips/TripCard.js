import React, { useEffect, useState } from "react";


const TripCard = ({props}) =>{
    const [date,setDate] = useState(null);
    useEffect(()=>{
        const date = new Date(props.start_date);
        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
        setDate(formattedDate);
    },[])

    return (<>
        <div id="trip-card">
            <div id="trip-card-left">
                <div id="trip-booking-type">Booking type: {props?.booking_type=='hotel'?<span>Hotel</span>:props?.booking_type=='bus'?<span>Bus</span>:<span>Flight </span>}</div>
                <div id="trip-name">{props?.user?.name} was travelling</div>
                {props?.booking_type=='hotel'?<div id="trip-hotel">{props?.hotel?.name}</div>:null}
                <div id="trip-date">{date}</div>
                <div id="trip-status">Booking status <span>{props?.status}</span></div>
            </div>
            <div id="trip-card-right">
                <div id="trip-id">Trip ID: <span>{props?._id}</span></div>
            </div>
        </div>
    </>)
}

export default TripCard;