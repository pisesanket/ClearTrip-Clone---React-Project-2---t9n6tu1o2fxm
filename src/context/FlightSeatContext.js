

import React, { createContext, useState, useContext } from 'react';

const FlightSeatContext = createContext();

const FlightSearchContext = createContext();
const FlightErrorContext = createContext();
const FlightFilterContext = createContext();

const FlightFilterProvider = ({children})=>{
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
    return(<FlightFilterContext.Provider value={contextObj}>
        {children}
    </FlightFilterContext.Provider>)
}
const FlightErrorProvider = ({children}) =>{
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
    return (<FlightErrorContext.Provider value={contexObj}>
        {children}
    </FlightErrorContext.Provider>)
}


const FlightSearchProvider = ({children})=>{
    const [searchFlight,setSearchFlight] = useState({});

    function setSource(loc){
        const newSearch = {...searchFlight,'source':loc};
        setSearchFlight(newSearch)
    }
    function setDest(loc){
        const newSearch = {...searchFlight,'dest':loc};
        setSearchFlight(newSearch)
    }
    function setDay(day){
        const newSearch = {...searchFlight,'day':day};
        setSearchFlight(newSearch);
    }

    const contextValue = {
        searchFlight,
        setDest,
        setSource,
        setDay
    }

    return (
        <FlightSearchContext.Provider value={contextValue}>
            {children}
        </FlightSearchContext.Provider>
    )
}


export const FlightSeatProvider = ({ children }) => {
  const [seatCount, setSeatCount] = useState(1);

  const incrementSeatCount = () => {
    setSeatCount(prevCount => prevCount + 1);
  };

  const decrementSeatCount = () => {
    setSeatCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const contextValue = {
    seatCount,
    incrementSeatCount,
    decrementSeatCount,
  };

  return (
    <FlightSeatContext.Provider value={contextValue}>
      {children}
    </FlightSeatContext.Provider>
  );
};

export const useSeatContext = () => {
  const context = useContext(FlightSeatContext);
  return context;
};

export const useFlightErrorContext = () =>{
  const context = useContext(FlightErrorContext);
  return context;
}

export const useFlightContext = () =>{
  const context = useContext(FlightSearchContext);
  return context;
}

export const useFlightFilterContext = () =>{
  const context = useContext(FlightFilterContext);
  return context;
}
export {FlightFilterProvider};
export {FlightErrorProvider} ;
export default FlightSearchProvider;