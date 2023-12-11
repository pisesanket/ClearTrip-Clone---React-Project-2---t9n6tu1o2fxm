import React, { useState } from "react";
import { useBusDetailContext, useBusItContext } from "../../../context/BusItineraryContext";
import images from "../../../images";



const BusItinerarySecond = () =>{

    const {busItDetail,setAge,setEmail,setGender,setMobile,setName}  = useBusDetailContext();
    const {busItContext,setBusIt,unSetBusIt} = useBusItContext();
    // const [isThirdForm,setThirdForm]  = useState(false);
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
            setBusIt('third');
        }
    }
    function handlPrevClick(){
        setBusIt('first');
    }
    const [isSecondForm,setSecondForm]  = useState(false);


    return (<>
        <div id="bus-itinerary-second">
            <div id="bus-itinerary-second-title" ><span id="bus-second-number">2</span><span>Add contact details</span></div>
            {busItContext.second&&
             <div id="bus-itinerary-second-form">
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


export default BusItinerarySecond;