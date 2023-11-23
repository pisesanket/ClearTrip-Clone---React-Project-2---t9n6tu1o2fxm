import React, { useEffect, useState } from "react";
import BusCard from "./BusCard";
import { useBusFilterContext } from "../../../context/BusSearchContext";




const BusesList = ({data}) =>{
    const { cheapest,setCheapest,departure,handleDepartureClick,handleDepartureUnclick} = useBusFilterContext();
    const [filterData,setFilterData] = useState(data);
    // const [originalData, setOriginalData] = useState(data);

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
            const sortedData = [...filterData].sort((a, b) => a.fare - b.fare);
            setFilterData(()=>sortedData);
          }
          else{
            setFilterData(()=>data)
            handleDepartureClick('zero');
            handleDepartureUnclick('zero')
          }
    },[cheapest])


    return (<>
        <div id="buses-list-div">
            {filterData.map(entry=>{
                return <BusCard key={entry._id} busData={entry}  />
            })}
        </div>
    </>)
}



export default BusesList;