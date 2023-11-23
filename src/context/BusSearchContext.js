import React, { createContext, useContext, useState } from "react"


const BusSearchContext = createContext();
const BusErrorContext = createContext();
const BusFilterContext = createContext();

const BusFilterProvider = ({children})=>{
    const [cheapest,setCheapest] = useState(false);
    const [departure,setDeparture] = useState({'zero':false,'six':false,'twe':false,'eig':false});
    
    function handleDepartureClick(time){
        setDeparture(prevDeparture => ({ ...prevDeparture, [time]: true }));        // console.log(time)
        
    }
    function handleDepartureUnclick(time){
        setDeparture(prevDeparture => ({ ...prevDeparture, [time]: false }));
    }
    const contextObj = {
        cheapest,setCheapest,departure,handleDepartureClick,handleDepartureUnclick
    }
    return(<BusFilterContext.Provider value={contextObj}>
        {children}
    </BusFilterContext.Provider>)
}
const BusErrorProvider = ({children}) =>{
    const [sourceClass,setSourceClass] = useState(null);
    const [destClass,setDestClass] = useState(null);
    const [dayClassName,setDayClass] = useState(null);
    function setSourceClassName(name){
            setSourceClass(name);
    }
    function setDayClassName(name){
        setDayClass(name);
    }
    function setDestClassName(name){
        setDestClass(name);
    }
    const contexObj = {
        sourceClass,
        dayClassName,
        setSourceClassName,
        setDayClassName,
        destClass,
        setDestClassName
    }
    return (<BusErrorContext.Provider value={contexObj}>
        {children}
    </BusErrorContext.Provider>)
}


const BusSearchProvider = ({children})=>{
    const [searchBus,setSearchBus] = useState({});

    function setSource(loc){
        const newSearch = {...searchBus,'source':loc};
        setSearchBus(newSearch)
    }
    function setDest(loc){
        const newSearch = {...searchBus,'dest':loc};
        setSearchBus(newSearch)
    }
    function setDay(day){
        const newSearch = {...searchBus,'day':day};
        setSearchBus(newSearch);
    }

    const contextValue = {
        searchBus,
        setDest,
        setSource,
        setDay
    }

    return (
        <BusSearchContext.Provider value={contextValue}>
            {children}
        </BusSearchContext.Provider>
    )
}

export const useBusErrorContext = () =>{
    const context = useContext(BusErrorContext);
    return context;
}

export const useBusContext = () =>{
    const context = useContext(BusSearchContext);
    return context;
}

export const useBusFilterContext = () =>{
    const context = useContext(BusFilterContext);
    return context;
}
export {BusFilterProvider};
export {BusErrorProvider} ;
export default BusSearchProvider;
