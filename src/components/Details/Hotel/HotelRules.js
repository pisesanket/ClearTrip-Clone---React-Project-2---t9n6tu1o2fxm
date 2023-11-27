import React from "react";
import images from "../../../images";


const HotelRules = ({hotelData}) =>{

    return (<>
        <div id="hotel-rule">
            <div id="hotel-rule-title">
                <h1>Property rules</h1>
            </div>
            <div id="property-rule-list">
                <div id="property-rule-pets">Pets allowed {hotelData?.restrictions?.petsAllowed?<img width={'24px'} src={images.checkMark}></img>:<img width={'24px'} src={images.cross}></img>}</div>
                <div id="property-rule-id-title">Id proofs accepted</div>
                <div id="property-rule-id-list">
                    {hotelData?.houseRules?.idProofRelated?.idProofsAccepted.length>0&&hotelData?.houseRules?.idProofRelated?.idProofsAccepted.map(entry=>{
                        return <div key={entry} className="property-rule-id-item">{entry}</div>
                    })}
                </div>
                <div id="property-rule-extra-bed-title">Exta bed policy</div>
                <div id="property-rule-extra-bed-list">
                    <div id="property-rule-child-bed">Extra bed for children {hotelData?.childAndExtraBedPolicy?.extraBedProvidedForChild?<img width={'24px'} src={images.checkMark}></img>:<img width={'24px'} src={images.checkMark}></img>}</div>
                    <div id="property-rule-guest-bed">Extra bed for guest {hotelData?.childAndExtraBedPolicy?.extraBedForAdditionalGuest?<img width={'24px'} src={images.checkMark}></img>:<img width={'24px'} src={images.checkMark}></img>}</div>
                    <div id="property-rule-bed-charge">Extra bed charges ₹{hotelData?.childAndExtraBedPolicy?.extraBedCharge}</div>
                </div>
            </div>
        </div>
    </>)
}

export default HotelRules;