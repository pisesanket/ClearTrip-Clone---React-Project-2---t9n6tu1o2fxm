import React, { useState } from "react";
import FlightCardDetails from "./FlightCardDetails";
// import BusCardAmenities from "./BusCardAmenities";



const FlightCard = (props) =>{
    const [isDetail,setDetail] = useState(false);

    function handleDetailClick(){
        setDetail(!isDetail);
    }
    
    return (<>
        <div id="flight-card-div">
        <div id="flight-card" onClick={handleDetailClick}>
            <div id="flight-card-airline">
                <div>{props.flightData.flightID.slice(0,5)}</div>
                <div id="flight-detail-click" onClick={handleDetailClick}>
                    {isDetail?'Hide details':'Flight details'}
                </div>
            </div>
            <div id="flight-card-time">
                <div>{props.flightData.departureTime}</div>
                <div id="flight-card-duration-stop">
                    <div id="flight-card-duration">{props.flightData.duration}h</div>
                    <div id="flight-card-stop">{props.flightData.stops==0?'non-stop':`${props.flightData.stops} stop`}</div>
                </div>
                <div>{props.flightData.arrivalTime}</div>
            </div>
            <div id="flight-card-price-book">
                <div id="flight-card-price">
                    <div id="flight-card-price-base">₹{props.flightData.ticketPrice}</div>
                    <div id="flight-card-price-seats">{props.flightData.availableSeats} seats left</div>
                </div>
                <div id="flight-card-book">
                    Book
                </div>
            </div>
           
        </div>
            {isDetail&&<FlightCardDetails  flightData={props.flightData} />}

        </div>
    </>)
}


export default FlightCard;