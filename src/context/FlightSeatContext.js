

import React, { createContext, useState, useContext } from 'react';

const FlightSeatContext = createContext();



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
