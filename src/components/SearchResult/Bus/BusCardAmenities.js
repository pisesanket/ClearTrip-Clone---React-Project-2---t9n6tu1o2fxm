import React from "react";



const BusCardAmenities = (props) =>{
    
    return (<>
        <div id="bus-card-amenities-div">
            {props.amen.map(entry=>{
                return <div key={entry}>{entry}</div>
            })}
        </div>
    </>)
}



export default BusCardAmenities;