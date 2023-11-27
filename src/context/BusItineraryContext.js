import React, { createContext, useContext, useState } from "react";


const BustItineraryContext = createContext();
const BusItineraryDetailsContext = createContext();

export const BusItineraryDetailsProvider =({children}) =>{
    const [busItDetail,setBusDetails] = useState({});

    function setMobile(val){
        const newObj = {...busItDetail,'mobile':val}
        setBusDetails(newObj);
    }
    
    function setEmail(val){
        const newObj = {...busItDetail,'email':val}
        setBusDetails(newObj);
    }
    
    function setGender(val){
        const newObj = {...busItDetail,'gender':val}
        setBusDetails(newObj);
    }
    
    function setName(val){
        const newObj = {...busItDetail,'name':val}
        setBusDetails(newObj);
    }
    
    function setAge(val){
        const newObj = {...busItDetail,'age':val}
        setBusDetails(newObj);
    }
    const context = {busItDetail,setAge,setEmail,setGender,setMobile,setName}

    return <BusItineraryDetailsContext.Provider value={context}>
        {children}
    </BusItineraryDetailsContext.Provider>
}

export const BustItineraryProvider = ({children}) =>{

    const [busItContext,setBusItContext] = useState({'first':true,'second':false,'third':false});

    function setBusIt(val){
        if(val=='first'){
            const newObj = {'first':true,'second':false,'third':false};
            setBusItContext(newObj);
        }
        if(val=='second'){
            const newObj = {'first':false,'second':true,'third':false};
            setBusItContext(newObj);
        }
        if(val=='third'){
            const newObj = {'first':false,'second':false,'third':true};
            setBusItContext(newObj);
        }
        
    }
    function unSetBusIt(val){
        const newObj = {...busItContext,val:false};
        setBusItContext(newObj);
    }

    const context = {busItContext,setBusIt,unSetBusIt}

    return <BustItineraryContext.Provider value={context}>
        {children}
    </BustItineraryContext.Provider>
}


export const useBusItContext = () =>{
    const context = useContext(BustItineraryContext);
    return context;
}
export const useBusDetailContext = () =>{
    const context = useContext(BusItineraryDetailsContext)
    return context;
}