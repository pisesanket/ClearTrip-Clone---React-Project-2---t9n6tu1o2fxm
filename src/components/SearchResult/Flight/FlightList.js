import React, { useEffect, useState } from "react";
import { useFlightFilterContext } from "../../../context/FlightSeatContext";
import FlightCard from "./FlightCard";




const FlightList = ({data}) =>{
    const { cheapest,setCheapest,departure,handleDepartureClick,handleDepartureUnclick} = useFlightFilterContext();
    const [filterData,setFilterData] = useState(data);

    useEffect(()=>{
        if(!departure){
            setFilterData(data)
        }
        else if(departure.zero==false&&departure.six==false&&departure.twe==false&&departure.eig==false){
            setFilterData(data);
        }else{
            const selectedDepartures = Object.keys(departure).filter(key => departure[key]);
            
            const newData=data.filter(entry=>{

                return selectedDepartures.some(selected =>{
                    const comp = selected=='zero'?'00':selected=='six'?'06':selected=='twe'?'12':selected=='eig'?'18':''
                    if(Number(comp)==0&&Number(entry.departureTime.slice(0,2))<6){
                        return true;
                    }else if(Number(comp)==6&&Number(entry.departureTime.slice(0,2))<12&&Number(entry.departureTime.slice(0,2))>=6){
                        return true;
                    }else if(Number(comp)==12&&Number(entry.departureTime.slice(0,2))<18&&Number(entry.departureTime.slice(0,2))>=12){
                        return true;
                    }else if(Number(comp)==18&&Number(entry.departureTime.slice(0,2))<24&&Number(entry.departureTime.slice(0,2))>=18){
                        return true;
                    }
                } );
            })
           setCheapest(false); 
          setFilterData(()=>newData);      
        }
    },[departure,data])

    useEffect(()=>{
        if (cheapest) {
            const sortedData = [...filterData].sort((a, b) => a.ticketPrice - b.ticketPrice);
            setFilterData(()=>sortedData);
          }
          else{
            setFilterData(()=>data)
            handleDepartureClick('zero');
            handleDepartureUnclick('zero')
          }
    },[cheapest])


    return (<>
        <div id="flight-list-div">
            {filterData.length>0?filterData.map(entry=>{
                return <FlightCard key={entry._id} flightData={entry}  />
            }):<div className="zero-result">No flight found !</div>}
        </div>
    </>)
}



export default FlightList;