import React from "react";
import { useLocation } from "react-router-dom";



const FlightCardDetails = ({flightData}) =>{
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const source = params.get('source');
    const dest = params.get('dest');
    const day = params.get('day');
    return (<>
        <div id="flight-card-detail">
            
            <div id="flight-card-name">
            {flightData.flightID.slice(0,5)}
            </div>
            <div id="flight-card-source">
                <div id="flight-card-source-upper">
                    <div>{source}</div>
                    <div className="flight-card-detail-time">{flightData.departureTime}</div>
                </div>
                <div id="flight-card-source-lower">{day}</div>
            </div>
            <div id="flight-card-detail-time">{flightData.duration}h</div>
            <div id="flight-card-dest">
                <div id="flight-card-dest-upper">
                    <div>{dest}</div>
                    <div className="flight-card-detail-time">{flightData.arrivalTime}</div>
                </div>
                <div id="flight-card-dest-lower">{day}</div>
            </div>
        </div>
    </>)
}



export default FlightCardDetails;