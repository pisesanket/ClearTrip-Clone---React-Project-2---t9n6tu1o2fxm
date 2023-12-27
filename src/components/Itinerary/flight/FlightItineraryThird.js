import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFlightDetailContext, useFlightItContext } from "../../../context/FlightItineraryContext";
import { useLoginModalContext } from "../../../context/LoginModalContext";
import { useAuthContext } from "../../../context/AuthContext";
import { useBookingContext } from "../../../context/BookingDetailContext";
import images from "../../../images";



const FlightItineraryThird = () =>{
    const {flightItDetail,setAge,setEmail,setGender,setMobile,setName}  = useFlightDetailContext();
    const {flightItContext,setFlightIt,unSetFlightIt} = useFlightItContext();
    const {isLoginModal,setLoginModal} = useLoginModalContext();
    const {isLoggedIn,setIsLoggedIn} = useAuthContext();
    const [itName,setItName] = useState('');
    const [itAge,setItAge] = useState('');
    const [itGender,setItGender] = useState('');
    const [error,setError] = useState({})
    const {bookingValues,setType,setId,setStartDate,setEndDate,setPrice} = useBookingContext();

    const param = useParams();

    useEffect(()=>{
        setId(param.flightId);
    },[])
    function onNameChange(e){
        setType('flight');
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
        }
        else{
            setError({});
        }
    }
    function prevClick(){
        setFlightIt('second')
    }
    return (<>
        <div id="flight-itinerary-third" className="itinerary-div">
            <div id="flight-itinerary-title" className="itinerary-title" ><span id="flight-third-number" className="itinerary-number">3</span><span>Add Traveller details</span></div>
            {flightItContext.third&&
             <div id="flight-itinerary-third-form" >
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


export default FlightItineraryThird;