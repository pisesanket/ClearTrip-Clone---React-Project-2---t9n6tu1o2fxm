import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import { useHotelContext, useHotelErrorContext } from '../../context/HotelSearchContext';
import { useBookingContext } from '../../context/BookingDetailContext';

const HotelSearchDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOutDate,setSelectedOutDate] = useState(null);


  const { searchHotel,setLocation,setInDay,setOutDay} = useHotelContext();
  const  {locationClass,dayClassName,dayOutClassName,setLocationClassName,setDayInClassName,setDayCheckOutClassName} = useHotelErrorContext();
  const {bookingValues,setType,setId,setStartDate,setEndDate,setPrice} = useBookingContext();

  const handleDateChange = (date) => {
        if(date&&!isNaN(date.getTime())){

            setSelectedDate(date);
            setInDay(date.toISOString());
            setStartDate(date.toISOString());
            setDayInClassName(null);
        }
        // setDayClassName(null)
  };
  const handleOutDateChange=(date)=>{
        if(date&&!isNaN(date.getTime())){

            setSelectedOutDate(date);
            setOutDay(date.toISOString());
            setEndDate(date.toISOString());
            setDayCheckOutClassName(null);
        }
  }
  return (
    <div id="hotel-search-day" >
      <DatePicker
      
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()} 
        placeholderText="Check-in date"
        dateFormat="MMM d, yyyy" 
        className={dayClassName}
      />
       <DatePicker
       
        selected={selectedOutDate}
        onChange={handleOutDateChange}
        minDate={new Date()}
        placeholderText="Check-out date"
        dateFormat="MMM d, yyyy"
        className={dayOutClassName}
      />
  
    </div>
  );
};

export default HotelSearchDate;