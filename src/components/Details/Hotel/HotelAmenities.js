import React from "react";

const HotelAmenities = ({ hotelData }) => {
  return (
    <>
      <div id="hotel-detail-amenities">
        <div id="hotel-amenities-title">
          <h1>Amenities</h1>
        </div>
        <div id="hotel-amenities-list">
        {hotelData?.amenities?.length>0 &&
          hotelData.amenities.map((entry) => {
            return <div key={entry} id="hotel-amenities-list-div">{entry}</div>;
          })}

        </div>

      </div>
    </>
  );
};

export default HotelAmenities;
