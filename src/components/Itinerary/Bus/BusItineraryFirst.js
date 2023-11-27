import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBusItContext } from "../../../context/BusItineraryContext";


const BusItineraryFirst = () =>{
    const param = useParams();
    const [busData,setBusDaa] = useState({});
    const {busItContext,setBusIt,unSetBusIt} = useBusItContext();
    
    function handleNextClick(){
        setBusIt('second')
    }
  




    async function callBusApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/bus/${param.busId}`,{
            headers:{
                "projectID":"9fc41adjs85k"
            }
        }).then(res=>res.json()).then(res=>{
            if(res.message=='success'){
                setBusDaa(res.data);
            }
        }).catch(err=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        callBusApi();
    },[]);

    if(!busData){
        return null;
    }
    return (<>
        <div id="bus-itinerary-first-div">
            <div id="bus-itinerary-first-title"><span id="bus-first-number">1</span><span>Review selected bus</span></div>
            {
                busItContext.first&& <div>
                <div id="bus-itinerary-first">
                <div id="bus-itinerary-header">
                    <div id="bus-itinerary-name">{busData.name}</div>
                    <div id="bus-itinerary-type">{busData.type}</div>
                </div>
                <div id="bus-itinerary-detail">
                    <div id="bus-itinerary-left">
                        <div id="bus-itinerary-time">
                            {busData.departureTime}
                        </div>
                        <div id="bus-itinerary-source">
                            {busData.source}
                        </div>
                    </div>
                    <div id="bus-itinerary-right">
                        <div id="bus-itinerary-time">
                            {busData.arrivalTime}
                        </div>
                        <div id="bus-itinerary-source">
                            {busData.destination}
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


export default BusItineraryFirst;