import React, { useEffect, useState } from "react";
import images from "../../../images";


const HotelImageBig = (props)=>{
    
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
    useEffect(()=>{
        setImageList(props?.imageData?props?.imageData:[])
    },[])
    return (<>
        <div id="hotel-detail-images-div">
            <div id="hotel-detail-images" className="image-container">
                <div id="hotel-detail-images-prev" className="image prev" ><img onClick={handlePrevClick} src={images.prev} width={'25px'} alt="" /></div>
                <div id='hotel-detail-images-middle' className="middle"><img  src={imageList[count]} alt="" /></div>
                <div id="hotel-detail-images-next" className="image next"><img onClick={handleNextClick} src={images.next} width={'25px'} alt="" /></div>
            </div>
        </div>
    </>)
}


export default HotelImageBig;