import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date.toISOString());
  };

  return (
    <div>
      <h2>Select your check-in date:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()} 
        placeholderText="Select a date"
        dateFormat="eee, MMM , yyyy" 
        
      />
      
    </div>
  );
};

export default BookingCalendar;