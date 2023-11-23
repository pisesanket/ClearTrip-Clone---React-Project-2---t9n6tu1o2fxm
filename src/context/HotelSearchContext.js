import React, { createContext, useContext, useState } from "react"


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
    function setLocationClassName(name){
            setLocationClass(name);
    }
    function setDayClassName(name){
        setDayClass(name);
    }
    const contexObj = {
        locationClass,
        dayClassName,
        setLocationClassName,
        setDayClassName
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
    function setDay(day){
        const newSearch = {...searchHotel,'day':day};
        setSearchHotel(newSearch);
    }

    const contextValue = {
        searchHotel,
        setLocation,
        setDay
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
