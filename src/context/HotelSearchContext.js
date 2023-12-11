import React, { createContext, useContext, useEffect, useState } from "react"


const HotelSearchContext = createContext();
const HotelErrorContext = createContext();
const HotelFilterContext = createContext();

const HotelFilterProvider = ({children})=>{
    const [cheapest,setCheapest] = useState(false);
    const [rating,setRating] = useState({'four':false,'three':false,'two':false,'one':false});
    
    function handleRatingClick(rate){
        // console.log(rate);
        setRating(prevRate => ({ ...prevRate, [rate]: true }));        // console.log(time)
        
    }
    function handleRatingUnclick(rate){
        // console.log(rate)
        setRating(prevRate => ({ ...prevRate, [rate]: false }));
    }
    const contextObj = {
        cheapest,setCheapest,rating,handleRatingClick,handleRatingUnclick
    }
    return(<HotelFilterContext.Provider value={contextObj}>
        {children}
    </HotelFilterContext.Provider>)
}
const HotelErrorProvider = ({children}) =>{
    const [locationClass,setLocationClass] = useState(null);
    const [dayClassName,setDayClass] = useState(null);
    const [dayOutClassName,setDayOutClassName] = useState(null);
    function setLocationClassName(name){
            setLocationClass(name);
    }
    function setDayCheckOutClassName(name){
        setDayOutClassName(name);
    }
    function setDayInClassName(name){
        setDayClass(name)
    }
    const contexObj = {
        locationClass,
        dayClassName,
        dayOutClassName,
        setLocationClassName,
        setDayInClassName,
        setDayCheckOutClassName
    }
    return (<HotelErrorContext.Provider value={contexObj}>
        {children}
    </HotelErrorContext.Provider>)
}


const HotelSearchProvider = ({children})=>{
    const [searchHotel,setSearchHotel] = useState({});
    
    
    function setLocation(loc){
        const newSearch = {...searchHotel,'location':loc};
        setSearchHotel(newSearch)
    }

    function setInDay(dayIn){
        const shortDayName = new Date(dayIn).toLocaleDateString('en-US', { weekday: 'short' });
        let newSearch = {...searchHotel,'dayIn':dayIn,'day':shortDayName};
        setSearchHotel(newSearch);
    }

    function setOutDay(dayOut){
        const newSearch = {...searchHotel,'dayOut':dayOut};
        setSearchHotel(newSearch);
    
    }

   
    const contextValue = {
        searchHotel,
        setLocation,
        setInDay,
        setOutDay
    }

    return (
        <HotelSearchContext.Provider value={contextValue}>
            {children}
        </HotelSearchContext.Provider>
    )
}

export const useHotelErrorContext = () =>{
    const context = useContext(HotelErrorContext);
    return context;
}

export const useHotelContext = () =>{
    const context = useContext(HotelSearchContext);
    return context;
}
export const useHotelFilterContext = () =>{
    const context = useContext(HotelFilterContext);
    return context;
}
export {HotelFilterProvider};
export {HotelErrorProvider} ;
export default HotelSearchProvider;
