import React, { useState } from "react";
import images from "../../../images";



const HotelImagesSmall = (props) =>{

    const [imageList,setImageList] = useState(props?.imageData?props?.imageData:[])
    const [count,setCount] = useState(0);
    function handlePrevClick(){
        setCount(prevCount=>{
            if(prevCount==0){
                return imageList?.length-1;
            }else{
                return prevCount-1;
            }
        })
    }
    function handleNextClick(){
        setCount(prevCount=>{
            if(prevCount==imageList?.length-1){
                return 0;
            }else{
                return prevCount+1;
            }
        })
    }
   
    return (<>
    <div id="hotel-detail-images-small-div">
        <div id="hotel-detail-images-small" className="image-container">
            <div id="hotel-detail-images-prev-small" className="image prev" ><img onClick={handlePrevClick} src={images.prev} width={'25px'} alt="" /></div>
            <div id='hotel-detail-images-middle-small' className="middle"><img  src={imageList[count]} alt="" /></div>
            <div id="hotel-detail-images-next-small" className="image next"><img onClick={handleNextClick} src={images.next} width={'25px'} alt="" /></div>
        </div>
    </div>
    </>)
}

export default HotelImagesSmall;