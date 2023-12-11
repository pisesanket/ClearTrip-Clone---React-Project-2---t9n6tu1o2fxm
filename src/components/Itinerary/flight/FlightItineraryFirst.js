import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFlightItContext } from "../../../context/FlightItineraryContext";


const FlightItineraryFirst = () =>{
    const param = useParams();
    const [flightData,setFlightData] = useState({});
    const {flightItContext,setFlightIt,unSetFlightIt} = useFlightItContext();
    
    function handleNextClick(){
        setFlightIt('second')
    }
  




    async function callFlightApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight/${param.flightId}`,{
            headers:{
                "projectID":"9fc41adjs85k"
            }
        }).then(res=>res.json()).then(res=>{
            if(res.message=='success'){
        
                setFlightData(res.data);
            }
        }).catch(err=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        callFlightApi();
    },[]);

    if(flightData=={}){
        return null;
    }
    return (<>
        <div id="flight-itinerary-first-div">
            <div id="flight-itinerary-first-title"><span id="flight-first-number">1</span><span>Review selected flight</span></div>
            {
                flightItContext.first&& <div>
                <div id="flight-itinerary-first">
                <div id="flight-itinerary-header">
                    <div id="flight-itinerary-name">{flightData?.flightID?.slice(0,5)}</div>
                    {/* <div id="flight-itinerary-type">{busData.type}</div> */}
                </div>
                <div id="flight-itinerary-detail">
                    <div id="flight-itinerary-left">
                        <div id="flight-itinerary-time">
                            {flightData.departureTime}
                        </div>
                        <div id="flight-itinerary-source">
                            {flightData.source}
                        </div>
                    </div>
                    <div id="flight-itinerary-right">
                        <div id="flight-itinerary-time">
                            {flightData.arrivalTime}
                        </div>
                        <div id="flight-itinerary-source">
                            {flightData.destination}
                        </div>
                    </div>
                </div>
            </div>
            <div className="itinerary-btn-div">
           
                <div className="itinerary-btn" onClick={handleNextClick}>Next</div>
            </div>
            </div>
            }

        </div>
    </>)
}


export default FlightItineraryFirst;