import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHotelItContext } from "../../../context/HotelItineraryContext";


const HotelItineraryFirst = () =>{
    const param = useParams();
    const [hotelData,setHotelData] = useState({});
    const {hotelItContext,setHotelIt,unSetHotelIt} = useHotelItContext();
    
    function handleNextClick(){
        setHotelIt('second')
    }
  
    async function callHotelApi(){
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${param.hotelId}`, {
                headers: {
                    "projectID": "9fc41adjs85k"
                }
            });

            const data = await response.json();

            if (data.message === 'success') {
                setHotelData(data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(()=>{
        callHotelApi();
    },[]);

    if(!hotelData || Object.keys(hotelData).length === 0){
        return null;
    }
    return (<>
        <div id="hotel-itinerary-first-div">
            <div id="hotel-itinerary-first-title"><span id="hotel-first-number">1</span><span>Review selected Hotel</span></div>
            {
                hotelItContext.first&& <div>
                <div id="hotel-itinerary-first">
                    <div id="hotel-itinerary-image">
                        <img src={hotelData?.images[0]?hotelData.images[0]:''}  alt="" />
                    </div>
                    <div id="hotel-itinerary-detail">
                        <div id="hotel-itinerary-name">{hotelData?.name}</div>
                        <div id="hotel-itinerary-location">{hotelData?.location}</div>
                        <div id="hotel-itinerary-rating">{hotelData?.rating}</div>
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


export default HotelItineraryFirst;