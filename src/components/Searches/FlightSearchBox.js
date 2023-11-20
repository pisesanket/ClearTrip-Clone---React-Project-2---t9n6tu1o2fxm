import React, { useState } from "react";
import { FlightSeatProvider, useSeatContext } from "../../context/FlightSeatContext";
import images from "../../images";
import FlightInput from "./FlightInput";
import FlightSearchBtn from "./FlightSearchBtn";
import FlightSearchDay from "./FlightSearchDay";


const FlightSearchBox = () =>{
    const { seatCount, incrementSeatCount, decrementSeatCount } = useSeatContext();
    const [wayType,setWayType] = useState(1);


    function handleWayClick(e){
        if(e.target.innerText=='One Way'){
            setWayType(1);
        }else if(e.target.innerText=='Round'){
            setWayType(2);
        }
    }

    return (<>
        
        <div id="flight-search-box">
            <div id="flight-one-round">
                <div id="flight-oneWay" className={wayType==1?'way-type-active':''} onClick={handleWayClick}>One Way</div>
                <div id="flight-Round" className={wayType==2?'way-type-active':''}  onClick={handleWayClick}>Round</div>
            </div>
            <div id="flight-search-seat">
                <img onClick={decrementSeatCount} width={'24px'} height={'24px'} src={images.minus} alt="" />
                <div>{seatCount} {seatCount==1?'Seat':'Seats'}</div>
                <img onClick={incrementSeatCount} width={'24px'} height={'24px'} src={images.plus} alt="" />
            </div>
            <div>
            <FlightInput />
                

                <div id="flight-search-bottom">
                    <FlightSearchDay />
                    <FlightSearchBtn />
                </div>
        
            </div>
        </div>
    </>)
}


export default FlightSearchBox;