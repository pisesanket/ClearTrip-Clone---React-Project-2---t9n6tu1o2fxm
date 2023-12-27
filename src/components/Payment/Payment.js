import React, { useState } from "react";
import './style/Payment.css'
import { Link, useNavigate } from "react-router-dom";
import { useBookingContext } from "../../context/BookingDetailContext";
import CreditCardForm from "./CreditCardForm";
import { useSeatContext } from "../../context/FlightSeatContext";

const Payment =() =>{
    const [isUpi,setUpi] = useState(true);
    const [isCard,setCard] = useState(false);
    const [upiValue,setUpiValue] = useState('');
    const [cardValue,setCardValue] = useState('');
    const [activeDiv,setActiveDiv] = useState('upi')
    const [error,setError] = useState({});
    const [bookingModal,setBookingModal] = useState(false);
    const [bookingMsg,setBookingMsg] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [name, setName] = useState('');
    const { seatCount, incrementSeatCount, decrementSeatCount } = useSeatContext();

    const [errors, setErrors] = useState({
      number: '',
      name: '',
      expiry: '',
      cvc: '',
    });
    const {bookingValues,setType,setId,setStartDate,setEndDate,setPrice} = useBookingContext();
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
  
     
  
      switch (name) {
        case 'number':
          setCardNumber(value);
          break;
        case 'expiry':
          setExpiry(value);
          break;
        case 'cvc':
          setCvc(value);
          break;
        case 'name':
          setName(value);
          break;
        default:
          break;
      }
  
      
      if (value.trim() === '') {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'Field is required',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '', 
        }));
      }
    };
    function handleCardChange(e){
        setCardValue(e.target.value);
    }
    function handleUPIChange(e){
        setUpiValue(e.target.value);
    }
    function handleUPIClick(){
        setCard(false)
        setUpi(true);
        setActiveDiv('upi');
    
    }
    function handleCardClick(){
        setUpi(false)
        setCard(true);
        setActiveDiv('card');
    }
    function handlePayNow(){
        if(isUpi&&!upiValue){
            setError({type:'upi'})
            
        }else if(isCard&&(!cardNumber||!name||!cvc||!expiry)){
            if (!cardNumber) {
                setErrors((prevErrors) => ({ ...prevErrors, cardNumber: 'Card Number is required' }));
              } else {
                setErrors((prevErrors) => ({ ...prevErrors, cardNumber: '' }));
              }
          
              if (!name) {
                setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
              } else {
                setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
              }
          
              if (!cvc) {
                setErrors((prevErrors) => ({ ...prevErrors, cvc: 'CVC is required' }));
              } else {
                setErrors((prevErrors) => ({ ...prevErrors, cvc: '' }));
              }
          
              if (!expiry) {
                setErrors((prevErrors) => ({ ...prevErrors, expiry: 'Expiry is required' }));
              } else {
                setErrors((prevErrors) => ({ ...prevErrors, expiry: '' }));
              }
            
            
        }else if((isUpi&&upiValue)||(isCard&&cardNumber&&name&&cvc&&expiry)){
            callBookingApi();
            setError({});
        }
    }
    function handleModalClose(){
        setBookingModal(false);
        navigate('/');
    }
    const callBookingApi = async () =>{
        const result =await fetch('https://academics.newtonschool.co/api/v1/bookingportals/booking',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                "Authorization":`Bearer ${localStorage.getItem('token')}`,
                "projectID":"9fc41adjs85k"
            },
            body:JSON.stringify(
                {
                    "bookingType" : `${bookingValues.type}`,
                    "bookingDetails" : {
                          [`${bookingValues.type}Id`]: `${bookingValues.id}`,
                          "startDate" :`${bookingValues.startDate}`, 
                          "endDate" : `${bookingValues.type=='bus'||bookingValues.type=='flight'?bookingValues.startDate:bookingValues.endDate}` 
                    }
                })
        });
        const response = await result.json();
        setBookingMsg(response.message);
        setBookingModal(true);
        
    }
    return (<>
    <div id="payment-div">

            <div id="payment-title">Pay to complete your booking</div>
            <div id="payment">
                <div id="payment-mode-big">
                    <div id="payment-mode-upi" className = {activeDiv=='upi'?'active-div':''} onClick={handleUPIClick}>UPI</div>
                    <div id="payment-mode-upi" className={activeDiv=='card'?'active-div':''} onClick={handleCardClick}>Debit/Credit card</div>
                </div>
                {/* <div id="payment-mode-small">
                    <div className="payment-mode-upi" onClick={handleUPIClick}>UPI</div>
                    <div className="payment-mode-bank" onClick={handleCardClick}>Debit/Credit card</div>
                </div> */}
                {isUpi&&
                    <div id="upi-box" className="payment-detail-box">
                        <label htmlFor="upi-id">Enter UPI ID</label>
                        <input type="text" className={error.type=='upi'?'error-input':''} value={upiValue} id="upi-id" placeholder="Enter UPI ID" onChange={handleUPIChange} />
                    </div>
                }{
                    isCard&&
                    <div id="card-box" className="payment-detail-box">
                        {/* <label htmlFor="upi-id">Enter Card number</label>
                        <input type="text" className={error.type=='card'?'error-input':''} value={cardValue} id="upi-id" placeholder="Enter Card number" onChange={handleCardChange} /> */}
                        <CreditCardForm errors={errors} handleInputChange={handleInputChange} cardNumber={cardNumber} expiry={expiry} cvc={cvc} name={name} />
                    </div>
                }
                
            </div>
            <div id="pay-now-box">
                <div id="pay-now-price">₹{bookingValues?.price*seatCount}</div>
                {/* {(isUpi&&upiValue)||(isCard&&cardValue)?<Link to={`/`} >
                    <div className="payment-btn">Pay now</div>
                </Link>: */}
                <div className="payment-btn" onClick={handlePayNow}>Pay now</div>
                
            </div>
            {bookingModal&&
                <div id="booking-modal">
                    <div id="booking-msg-modal">
                        <div id="booking-modal-msg">{bookingMsg}</div>
                        <div id="booking-modal-close" onClick={handleModalClose}>Close</div>
                    </div>
                </div>
                }
    </div>
    </>)

}


export default Payment;