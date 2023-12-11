import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import { useBusContext, useBusErrorContext } from '../../context/BusSearchContext';
import { useBookingContext } from '../../context/BookingDetailContext';


const BusSearchDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { searchBus,setDest,setSource,setInDay} = useBusContext();
  const  { sourceClass, dayClassName,setSourceClassName,setDayClassName,destClass,setDestClassName} = useBusErrorContext();
  const {bookingValues,setType,setId,setStartDate,setEndDate,setPrice} = useBookingContext();




 

  const handleDateChange = (date) => {
        if(date&&!isNaN(date.getTime())){

            setSelectedDate(date);
            setInDay(date.toISOString());
            setStartDate(date.toISOString());
            // setEndDate(date.toISOString());
            setDayClassName(null);
        }
        // setDayClassName(null)
  };
  
  return (
    <div id="bus-search-day" >
      <DatePicker
      
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()} 
        placeholderText="Select a date"
        dateFormat="MMM d, yyyy" 
        className={dayClassName}
      />
      
  
    </div>
  );
};

export default BusSearchDate;