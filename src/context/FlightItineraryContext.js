import React, { createContext, useContext, useState } from "react";


const FlightItineraryContext = createContext();
const FlightItineraryDetailsContext = createContext();

export const FlightItineraryDetailsProvider =({children}) =>{
    const [flightItDetail,setFlightDetails] = useState({});

    function setMobile(val){
        const newObj = {...flightItDetail,'mobile':val}
        setFlightDetails(newObj);
    }
    
    function setEmail(val){
        const newObj = {...flightItDetail,'email':val}
        setFlightDetails(newObj);
    }
    
    function setGender(val){
        const newObj = {...flightItDetail,'gender':val}
        setFlightDetails(newObj);
    }
    
    function setName(val){
        const newObj = {...flightItDetail,'name':val}
        setFlightDetails(newObj);
    }
    
    function setAge(val){
        const newObj = {...flightItDetail,'age':val}
        setFlightDetails(newObj);
    }
    const context = {flightItDetail,setAge,setEmail,setGender,setMobile,setName}

    return <FlightItineraryDetailsContext.Provider value={context}>
        {children}
    </FlightItineraryDetailsContext.Provider>
}

export const FlightItineraryProvider = ({children}) =>{

    const [flightItContext,setFlightItContext] = useState({'first':true,'second':false,'third':false});

    function setFlightIt(val){
        if(val=='first'){
            const newObj = {'first':true,'second':false,'third':false};
            setFlightItContext(newObj);
        }
        if(val=='second'){
            const newObj = {'first':false,'second':true,'third':false};
            setFlightItContext(newObj);
        }
        if(val=='third'){
            const newObj = {'first':false,'second':false,'third':true};
            setFlightItContext(newObj);
        }
        
    }
    function unSetFlightIt(val){
        const newObj = {...flightItContext,val:false};
        setFlightItContext(newObj);
    }

    const context = {flightItContext,setFlightIt,unSetFlightIt}

    return <FlightItineraryContext.Provider value={context}>
        {children}
    </FlightItineraryContext.Provider>
}


export const useFlightItContext = () =>{
    const context = useContext(FlightItineraryContext);
    return context;
}
export const useFlightDetailContext = () =>{
    const context = useContext(FlightItineraryDetailsContext)
    return context;
}