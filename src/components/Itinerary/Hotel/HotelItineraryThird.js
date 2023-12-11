import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useHotelDetailContext, useHotelItContext } from "../../../context/HotelItineraryContext";
import { useLoginModalContext } from "../../../context/LoginModalContext";
import { useAuthContext } from "../../../context/AuthContext";
import { useBookingContext } from "../../../context/BookingDetailContext";
import images from "../../../images";



const HotelItineraryThird = () =>{
    const {hotelItDetail,setAge,setEmail,setGender,setMobile,setName}  = useHotelDetailContext();
    const {hotelItContext,setHotelIt,unSetHotelIt} = useHotelItContext();
    const {isLoginModal,setLoginModal} = useLoginModalContext();
    const {isLoggedIn,setIsLoggedIn} = useAuthContext();
    const {bookingValues,setType,setId,setStartDate,setEndDate,setPrice} = useBookingContext();

    const [itName,setItName] = useState('');
    const [itAge,setItAge] = useState('');
    const [itGender,setItGender] = useState('');
    const [error,setError] = useState({})
    const param = useParams();

    useEffect(()=>{
        setId(param.hotelId);
    },[])
    function onNameChange(e){
        setType('hotel');
        setItName(e.target.value)
        setName(e.target.value)
    }
    function onAgeChange(e){
        setItAge(e.target.value)
        setAge(e.target.value)
    }function onGenderChange(e){
        setItGender(e.target.value)
        setGender(e.target.value)
    }
    function handleNextClick(){
        if(!itName){
            setError({...error,'input':'name'});
        }else if(!itAge){
            setError({...error,'input':'age'});
        }else if(!itGender){
            setError({...error,'input':'gender'})
        }else if(!localStorage.getItem('token')){
            setError({});
            setLoginModal(true);
        }else{

            setError({});
        }
    }
    function prevClick(){
        setHotelIt('second')
    }
    return (<>
        <div id="hotel-itinerary-third" className="itinerary-div">
            <div id="hotel-itinerary-title" className="itinerary-title" ><span id="hotel-third-number" className="itinerary-number">3</span><span>Add contact details</span></div>
            {hotelItContext.third&&
             <div id="hotel-itinerary-third-form" >
             <div>Name</div>
             <input type="text" value={itName} placeholder="Enter Name" className={error.input=='name'?'error-input':null} onChange={onNameChange} />
             <div>Age</div>
             <input type="number" value={itAge} placeholder="Enter Age" className={error.input=='age'?'error-input':null} onChange={onAgeChange} />
             <label htmlFor="itinerary-gender">Gender</label>
             <select name="itinerary-gender" value={itGender} className={error.input=='gender'?'error-input':null} onChange={onGenderChange} id="itinerary-gender">
                <option value="">Select a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
             </select>
             <div>{error.input=='name'?<div style={{color:'red',fontSize:'15px'}}><img src={images.warning} width={'15px'} alt="" /> Enter name</div>:error.input=='age'?<div style={{color:'red',fontSize:'15px'}}><img src={images.warning} width={'15px'} alt="" /> Enter age</div>:error.input=='gender'?<div style={{color:'red',fontSize:'15px'}}><img src={images.warning} width={'15px'} alt="" /> Enter gender</div>:null}</div>
             <div className="itinerary-btn-div">
                <div className="itinerary-btn" onClick={prevClick}>Prev</div>
                {(itName&&itAge&&itGender&&isLoggedIn)? <Link to='/payment'><div className="itinerary-btn">Continue to Payment</div></Link>:
                <div className="itinerary-btn" onClick={handleNextClick}>Continue to Payment</div>}
             </div>
            </div>
            }
           
        </div>
    </>)
}


export default HotelItineraryThird;