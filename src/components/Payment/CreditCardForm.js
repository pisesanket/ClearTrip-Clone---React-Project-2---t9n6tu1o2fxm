import React, { useState } from 'react';
import './style/CreditCardForm.css';

const CreditCardForm = (props) => {


  return (
    <div className="credit-card-form">
      <label>Card Number</label>
      <input
        type="text"
        name="number"
        value={props.cardNumber}
        onChange={props.handleInputChange}
        placeholder="**** **** **** ****"
        className={props.errors.number ? 'error-input' : ''}
      />
      {props.errors.number && <div className="error-message">{props.errors.number}</div>}

      <label>Card Holder Name</label>
      <input
        type="text"
        name="name"
        value={props.name}
        onChange={props.handleInputChange}
        placeholder="John Doe"
        className={props.errors.name ? 'error-input' : ''}
      />
      {props.errors.name && <div className="error-message">{props.errors.name}</div>}

      <label>Expiry Date</label>
      <input
        type="text"
        name="expiry"
        value={props.expiry}
        onChange={props.handleInputChange}
        placeholder="MM/YY"
        className={props.errors.expiry ? 'error-input' : ''}
      />
      {props.errors.expiry && <div className="error-message">{props.errors.expiry}</div>}

      <label>CVV</label>
      <input
        type="text"
        name="cvc"
        value={props.cvc}
        onChange={props.handleInputChange}
        placeholder="***"
        className={props.errors.cvc ? 'error-input' : ''}
      />
      {props.errors.cvc && <div className="error-message">{props.errors.cvc}</div>}
    </div>
  );
};

export default CreditCardForm;
