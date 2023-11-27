import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/HotelDetail.css'
import HotelHeader from "./HotelHeader";
import HotelAmenities from "./HotelAmenities";
import HotelRules from "./HotelRules";
import HotelImageBig from "./HotelImageBig";
import HotelImagesSmall from "./HotelImageSmall";
import HotelRooms from "./HotelRooms";


const HotelDetail = () => {
    const param = useParams();
    const [hotelDetail, setHotelDetail] = useState({});

    async function callHotelApi() {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${param.hotelId}`, {
                headers: {
                    "projectID": "9fc41adjs85k"
                }
            });

            const data = await response.json();

            if (data.message === 'success') {
                setHotelDetail(data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callHotelApi();
    }, [])

    
    if (!hotelDetail || Object.keys(hotelDetail).length === 0) {
        return null; // Don't render anything until data is fetched
    }

    return (
        <div id="hotel-detail-div">
            <div id="hotel-detail">
                {/* Render components only when hotelDetail is available */}
                <div id="hotel-detail-upper"><HotelHeader hotelData={hotelDetail} />
                    <HotelAmenities hotelData={hotelDetail} />
                    <HotelRules hotelData={hotelDetail} />
                    <HotelImagesSmall imageData={hotelDetail?.images} />
                </div>
                <HotelImageBig imageData={hotelDetail?.images} />
            </div>
                <HotelRooms hotelId={hotelDetail?._id} hotelRooms={hotelDetail?.rooms} />
            
        </div>
    );
}

export default HotelDetail;