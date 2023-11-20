import React from "react";



const FlightSearchDrop = ({station,onSelect}) =>{
   
    if(station){

    return (<>
        <div className="dropdown" >
        <div>
            {station.map((entry) => (
            <div className="dropdown-list-item" key={entry.iata} style={{cursor:'pointer'}} onClick={()=>{onSelect(entry)}} >
                <div className="dropdown-list-item-iata">{`${entry.iata}`}</div><div className="dropdown-list-item-city">{`${entry.city}`}</div>
            </div>
            ))}
        </div>
    </div>
    </>)
    }else{
        return null
    }
}

export default FlightSearchDrop;