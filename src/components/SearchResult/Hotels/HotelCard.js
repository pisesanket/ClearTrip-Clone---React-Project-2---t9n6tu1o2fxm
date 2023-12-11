import React, { useState } from "react";
import images from "../../../images";
import { Link } from "react-router-dom";



const HotelCard = (props) =>{
    const [imageList ,setImageList] = useState(props.imageList);
    const [count,setCount] = useState(0);
    function handlePrevClick(){
        setCount(prevCount=>{
            if(prevCount==0){
                return imageList.length-1;
            }else{
                return prevCount-1;
            }
        })
    }
    function handleNextClick(){
        setCount(prevCount=>{
            if(prevCount==imageList.length-1){
                return 0;
            }else{
                return prevCount+1;
            }
        })
    }
    return (<>
      
            <div id="hotel-card">
                <div id="hotel-card-images" className="image-container">
                    <div id="hotel-card-images-prev" className="image prev" ><img onClick={handlePrevClick} src={images.prev} width={'25px'} alt="" /></div>
                    <Link to={`/hotel/details/${props.hotelData._id}`}><div id='hotel-card-images-middle' className="middle"><img  src={imageList[count]} alt="" /></div></Link>
                    <div id="hotel-card-images-next" className="image next"><img onClick={handleNextClick} src={images.next} width={'25px'} alt="" /></div>
                </div>

                <div id="hotel-card-content">
                    <Link to={`/hotel/details/${props.hotelData._id}`}>
                        <div id="hotel-card-name-rating">
                            <div id="hotel-card-name-rating-name">{props.name}</div>
                            <div>{props.rating}/5</div>
                        </div>
                        <div id="hotel-price-breakout">
                            <div id="hotel-base-price">₹{props.hotelData.rooms[0].costDetails.baseCost} <span>+ ₹{props.hotelData.rooms[0].costDetails.taxesAndFees} tax/night</span></div>
                            {props.hotelData.rooms[0].costDetails.discount>0?<div id="hotel-discount">{props.hotelData.rooms[0].costDetails.discount>0}% discount</div>:null}
                        </div>
                    </Link>
                </div>
            </div>
        
    </>)
}


export default HotelCard;