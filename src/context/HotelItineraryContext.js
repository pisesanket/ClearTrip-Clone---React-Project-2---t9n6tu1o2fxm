import React, { createContext, useContext, useState } from "react";


const HotelItineraryContext = createContext();
const HotelItineraryDetailsContext = createContext();

export const HotelItineraryDetailsProvider =({children}) =>{
    const [hotelItDetail,setHotelDetails] = useState({});

    function setMobile(val){
        const newObj = {...hotelItDetail,'mobile':val}
        setHotelDetails(newObj);
    }
    
    function setEmail(val){
        const newObj = {...hotelItDetail,'email':val}
        setHotelDetails(newObj);
    }
    
    function setGender(val){
        const newObj = {...hotelItDetail,'gender':val}
        setHotelDetails(newObj);
    }
    
    function setName(val){
        const newObj = {...hotelItDetail,'name':val}
        setHotelDetails(newObj);
    }
    
    function setAge(val){
        const newObj = {...hotelItDetail,'age':val}
        setHotelDetails(newObj);
    }
    const context = {hotelItDetail,setAge,setEmail,setGender,setMobile,setName}

    return <HotelItineraryDetailsContext.Provider value={context}>
        {children}
    </HotelItineraryDetailsContext.Provider>
}

export const HotelItineraryProvider = ({children}) =>{

    const [hotelItContext,setHotelItContext] = useState({'first':true,'second':false,'third':false});

    function setHotelIt(val){
        if(val=='first'){
            const newObj = {'first':true,'second':false,'third':false};
            setHotelItContext(newObj);
        }
        if(val=='second'){
            const newObj = {'first':false,'second':true,'third':false};
            setHotelItContext(newObj);
        }
        if(val=='third'){
            const newObj = {'first':false,'second':false,'third':true};
            setHotelItContext(newObj);
        }
        
    }
    function unSetHotelIt(val){
        const newObj = {...hotelItContext,val:false};
        setHotelItContext(newObj);
    }

    const context = {hotelItContext,setHotelIt,unSetHotelIt}

    return <HotelItineraryContext.Provider value={context}>
        {children}
    </HotelItineraryContext.Provider>
}


export const useHotelItContext = () =>{
    const context = useContext(HotelItineraryContext);
    return context;
}
export const useHotelDetailContext = () =>{
    const context = useContext(HotelItineraryDetailsContext)
    return context;
}