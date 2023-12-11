import React, { useState } from "react";
import { useHotelDetailContext, useHotelItContext } from "../../../context/HotelItineraryContext";
import images from "../../../images";



const HotelItinerarySecond = () =>{

    const {hotelItDetail,setAge,setEmail,setGender,setMobile,setName}  = useHotelDetailContext();
    const {hotelItContext,setHotelIt,unSetHotelIt} = useHotelItContext();
    const [itMob,setItMob] = useState('');
    const [itEmail,setItEmail] = useState('');
    const [error,setError] = useState({});
    
    function handleNextClick(){
        if(!itMob){
            setError({...error,'input':'mob'});
        }else if(!itEmail){
            setError({...error,'input':'email'});
        }else{
            setError({})
            setMobile(itMob);
            setEmail(itEmail);
            setHotelIt('third');
        }
    }
    function handlPrevClick(){
        setHotelIt('first');
    }
    // const [isSecondForm,setSecondForm]  = useState(false)


    return (<>
        <div id="hotel-itinerary-second">
            <div id="hotel-itinerary-second-title" ><span id="hotel-second-number">2</span><span>Add contact details</span></div>
            {hotelItContext.second&&
             <div id="hotel-itinerary-second-form">
             <div>Mobile number</div>
             <input type="text" value={itMob} placeholder="Enter Mobile Number" className={error.input=='mob'?'error-input':null} onChange={(e)=>setItMob(e.target.value)}/>
             <div>Email address</div>
             <input type="email" value={itEmail} placeholder="Enter Email Address" className={error.input=='email'?'error-input':null}  onChange={(e)=>setItEmail(e.target.value)} />
             <div>{error.input=='mob'?<div style={{color:'red',fontSize:'15px'}}><img src={images.warning} width={'15px'} alt="" /> Enter mobile</div>:error.input=='email'?<div style={{color:'red',fontSize:'15px'}}><img src={images.warning} width={'15px'} alt="" /> Enter email</div>:null}</div>
             <div className="itinerary-btn-div">
               <div className="itinerary-btn" onClick={handlPrevClick}>Prev</div>
               <div className="itinerary-btn" onClick={handleNextClick}>Next</div>
             </div>
            </div>
            }
           
        </div>
    </>)
}


export default HotelItinerarySecond;